import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { CountProvider, useCountState, useCountDispatch } from "./count-context";

import AppForm from "../components/SubmitForm";
import { Page } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

const Home = () => (
  <DataProvider>
    <Page title='Spreadsheet App'>
      <AppForm />
    </Page>
  </DataProvider>
);

export default Home;
