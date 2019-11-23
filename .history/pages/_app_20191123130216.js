import React from "react";
import App from "next/app";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Frame } from "@shopify/polaris";
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
          <Component {...pageProps} />
          <style global jsx>{`
            .Polaris-Card {
              margin-bottom: 20px;
            }
          `}</style>
        </Frame>
      </AppProvider>
    );
  }
}

export default MyApp;
