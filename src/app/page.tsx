"use client";

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
    const registration = await navigator.serviceWorker.register("sw.js");
    return registration;
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
    <div>
      <button onClick={main}>Enable Notifications</button>
    </div>
  );
}
