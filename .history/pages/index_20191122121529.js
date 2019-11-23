import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import AppForm from "../components/SubmitForm";
import { Page } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

const Home = () => (
  <Page title='Spreadsheet App'>
    <AppForm />
  </Page>
);

export default Home;
