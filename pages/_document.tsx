import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="manifest.json" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta charSet="utf-8"></meta>
      </Head>
      <body className="color-theme-blue mont-font loaded theme-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
