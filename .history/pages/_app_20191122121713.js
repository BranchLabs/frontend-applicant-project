import React from "react";
import App from "next/app";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Loading, Frame } from "@shopify/polaris";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppProvider i18n={enTranslations}>
        <Frame>
          {loading ? <Loading /> : ""}
          <Component {...pageProps} />
        </Frame>
      </AppProvider>
    );
  }
}

export default MyApp;
