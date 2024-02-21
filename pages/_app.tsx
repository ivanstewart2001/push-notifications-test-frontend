import { FC, useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { firebase } from "../firebase";

const App: FC<AppProps> = ({ Component, ...rest }) => {
  useEffect(() => {
    console.log("HELOOOOOOOO");

    if ("serviceWorker" in navigator) {
      // window.addEventListener("load", () => {
      //   console.log("HIIIIIIIIII");

      navigator.serviceWorker
        .register("/firebase-messaging-sw.js", { scope: "/" })
        .then((registration) => {
          console.log("ServiceWorker registration successful:", registration);
        })
        .catch((error) => {
          console.error("ServiceWorker registration failed:", error);
        });
      // });
    } else {
      console.log("???");
    }
  }, []);

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
      console.log("LINE 49!!!!!!!!!!!!");
      event.preventDefault(); // Prevent default behavior (opening a new tab)
      // Navigate to the specified URL
      const url = notificationOptions.data.url;
      if (url) {
        window.open(url, "_self"); // Open in the same tab
      }
    };
  });

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
