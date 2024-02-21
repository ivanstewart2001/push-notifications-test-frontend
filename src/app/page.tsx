"use client";

import React from "react";
import { database, firebase } from "../../firebase";

export default function Home() {
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

    console.log(registration);
    const messaging = firebase.messaging();

    messaging
      .getToken({
        serviceWorkerRegistration: registration,
        vapidKey:
          "BEkB6bDKO_oZPYvQTh6j_w023stz5lp-CyaOJ-n_u66JE-kce_1Z9GTVVPj14-rv9qiXHEqj7-k7E-1sq_r8w1U",
      })
      .then((currentToken) => {
        if (currentToken) {
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
