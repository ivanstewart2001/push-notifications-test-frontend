import { FC, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { firebase } from "../firebase";

const registerFirebaseServiceWorker = async () => {
  if (!("serviceWorker" in navigator)) {
    console.log("No support for service worker!");
    return;
  }

  if (!("Notification" in window)) {
    console.log("No support for notification API");
    return;
  }

  if (!("PushManager" in window)) {
    console.log("No support for Push API");
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
      {
        scope: "/",
      }
    );

    console.log(
      "Firebase ServiceWorker registration successful:",
      registration
    );
  } catch (error) {
    console.error("Firebase ServiceWorker registration failed:", error);
  }
};

const App: FC<AppProps> = ({ Component, ...rest }) => {
  useEffect(() => {
    console.log("_APP USE EFFECT FIRED");

    // Register Firebase service worker only once
    if (typeof window !== "undefined") {
      registerFirebaseServiceWorker();

      // Check if Firebase is available (for client-side only)
      if (firebase.messaging.isSupported()) {
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
    }

    return () => {
      // Clean up if necessary
    };
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
