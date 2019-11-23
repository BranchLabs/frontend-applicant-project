import React from "react";
import App from "next/app";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Loading, Frame } from "@shopify/polaris";
import "@shopify/polaris/styles.css";
/*
 * Using _app component to wrap the entire
 * application with reusable components.
 */

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppProvider i18n={enTranslations}>
        <Frame>
          {false ? <Loading /> : null}
          <Component {...pageProps} />
        </Frame>

        <style jsx global>{`
          .read-only {
            background-color: #dadada;
            text-align: center;
            font-weight: bold;
            color: grey;
          }
        `}</style>
      </AppProvider>
    );
  }
}

export default MyApp;
