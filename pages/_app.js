import App from "next/app";
import GlobalStyle from "../styles/global.js";
import Head from "next/head";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="" />
          <link rel="icon" href="/favicon.png" />
          <meta property="og:image" content="/screenshot.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    );
  }
}
