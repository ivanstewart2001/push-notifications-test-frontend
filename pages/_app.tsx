import { FC, useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { firebase } from "../firebase";

function registerFirebaseServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js", { scope: "/" })
      .then((registration) => {
        console.log(
          "Firebase ServiceWorker registration successful:",
          registration
        );
      })
      .catch((error) => {
        console.error("Firebase ServiceWorker registration failed:", error);
      });
  } else {
    console.log("Service Worker not supported in this browser.");
  }
}

const App: FC<AppProps> = ({ Component, ...rest }) => {
  useEffect(() => {
    console.log("_APP USE EFFECT FIRED");

    // Check if Firebase is available (for client-side only)
    if (typeof window !== "undefined" && firebase.messaging.isSupported()) {
      // Register Firebase service worker
      registerFirebaseServiceWorker();

      // Check if a service worker is already registered and active
      navigator.serviceWorker.ready
        .then((registration) => {
          if (!registration.active) {
            // If no active service worker, register a new one
            registerFirebaseServiceWorker();
          }
        })
        .catch((error) => {
          // Error handling if service worker registration fails
          console.error("Error checking service worker registration:", error);
        });

      const messaging = firebase.messaging();

      messaging.onMessage((payload) => {
        console.log("Message received. ", payload);
        // Customize notification here
        const notificationTitle = "onMessage: " + payload.notification.title;
        const notificationOptions = {
          body: payload.notification.body,
          icon: payload.notification.icon,
          data: {
            url: payload.data.click_action,
          },
        };

        // Display the notification
        const notification = new Notification(
          notificationTitle,
          notificationOptions
        );

        notification.onclick = function (event) {
          console.log("Notification clicked");
          event.preventDefault(); // Prevent default behavior (opening a new tab)
          // Navigate to the specified URL
          const url = notificationOptions.data.url;
          if (url) {
            // Re-register service worker
            registerFirebaseServiceWorker();
            // Open in the same tab
            window.open(url, "_self");
          }
        };
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Push Notifications Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...rest} />
    </>
  );
};

export default App;
