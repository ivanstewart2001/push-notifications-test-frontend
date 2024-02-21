"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   console.log("HELOOOOOOOO");

  //   if ("serviceWorker" in navigator) {
  //     // window.addEventListener("load", () => {
  //     //   console.log("HIIIIIIIIII");

  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((registration) => {
  //         console.log("ServiceWorker registration successful:", registration);
  //       })
  //       .catch((error) => {
  //         console.error("ServiceWorker registration failed:", error);
  //       });
  //     // });
  //   } else {
  //     console.log("???");
  //   }
  // }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
