"use client";

import React from "react";
import { database, firebase } from "../firebase";

export default function Home() {
  const copyToClipboard = (text: string) => {
    let textarea;
    let result;

    try {
      textarea = document.createElement("textarea");
      textarea.setAttribute("readonly", "true");
      textarea.setAttribute("contenteditable", "true");
      textarea.style.position = "fixed"; // prevent scroll from jumping to the bottom when focus is set.
      textarea.value = text;

      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();

      const range = document.createRange();
      range.selectNodeContents(textarea);

      const sel = window.getSelection();
      sel!.removeAllRanges();
      sel!.addRange(range);

      textarea.setSelectionRange(0, textarea.value.length);
      result = document.execCommand("copy");
    } catch (err) {
      console.error(err);
      result = null;
    } finally {
      document.body.removeChild(textarea!);
    }

    // manual copy fallback using prompt
    if (!result) {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const copyHotkey = isMac ? "⌘C" : "CTRL+C";
      result = prompt(`Press ${copyHotkey}`, text); // eslint-disable-line no-alert
      if (!result) {
        return false;
      }
    }
    return true;
  };

  const checkPermission = () => {
    if (!("serviceWorker" in navigator)) {
      throw new Error("No support for service worker!");
    }

    if (!("Notification" in window)) {
      throw new Error("No support for notification API");
    }

    if (!("PushManager" in window)) {
      throw new Error("No support for Push API");
    }
  };

  const registerSW = async () => {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
      {
        scope: "/",
      }
    );

    const messaging = firebase.messaging();

    messaging
      .getToken({
        serviceWorkerRegistration: registration,
        vapidKey:
          "BEkB6bDKO_oZPYvQTh6j_w023stz5lp-CyaOJ-n_u66JE-kce_1Z9GTVVPj14-rv9qiXHEqj7-k7E-1sq_r8w1U",
      })
      .then((currentToken) => {
        if (currentToken) {
          copyToClipboard(currentToken);
          window.alert(currentToken);
        } else {
          // Show permission request.
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
      });

    messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      // Customize notification here
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon,
      };

      // Display the notification
      new Notification(notificationTitle, notificationOptions);
    });
  };

  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("Notification permission granted");
    } else if (permission === "denied") {
      throw new Error(
        "Notification permission denied. Please check your browser settings to enable notifications."
      );
    } else if (permission === "default") {
      throw new Error("Notification permission not yet decided");
    }
  };

  const main = async () => {
    checkPermission();
    await requestNotificationPermission();
    try {
      await registerSW();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Push Notifications Demo</h1>
      <div className="mb-4">
        <button
          onClick={main}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Enable Notifications
        </button>
      </div>
    </div>
  );
}
