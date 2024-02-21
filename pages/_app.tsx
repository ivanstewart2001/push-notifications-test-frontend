import { FC, useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { firebase } from "../firebase";

async function registerFirebaseServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.log("No support for service worker!");
  }

  if (!("Notification" in window)) {
    console.log("No support for notification API");
  }

  if (!("PushManager" in window)) {
    console.log("No support for Push API");
  }

  try {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
      {
        scope: "/",
      }
    );

    registration.installing?.addEventListener("statechange", (event) => {
      const sw = event.target as ServiceWorker;
      console.log("Service Worker state changed:", sw.state);
    });

    console.log(
      "Firebase ServiceWorker registration successful:",
      registration
    );
  } catch (error) {
    console.error("Firebase ServiceWorker registration failed:", error);
  }
}

const App: FC<AppProps> = ({ Component, ...rest }) => {
  useEffect(() => {
    console.log("_APP USE EFFECT FIRED");

    // Register Firebase service worker
    registerFirebaseServiceWorker();

    // Check if Firebase is available (for client-side only)
    if (typeof window !== "undefined" && firebase.messaging.isSupported()) {
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
