import { FC, useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";

const App: FC<AppProps> = ({ Component, ...rest }) => {
  useEffect(() => {
    console.log("HELOOOOOOOO");

    if ("serviceWorker" in navigator) {
      // window.addEventListener("load", () => {
      //   console.log("HIIIIIIIIII");

      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
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
