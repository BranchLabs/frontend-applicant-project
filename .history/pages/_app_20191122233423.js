import React from "react";
import App from "next/app";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, DescriptionList, Loading, Frame } from "@shopify/polaris";
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
        <Component {...pageProps} />

        <style global jsx>{`
          .Polaris-Card {
            margin-bottom: 20px;
          }
        `}</style>
        <DescriptionList
          items={[
            {
              term: "Logistics",
              description: "The management of products or other resources as they travel between a point of origin and a destination."
            },
            {
              term: "Sole proprietorship",
              description: "A business structure where a single individual both owns and runs the company."
            },
            {
              term: "Discount code",
              description: "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer."
            }
          ]}
        />
      </AppProvider>
    );
  }
}

export default MyApp;
