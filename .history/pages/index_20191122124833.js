import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

function DataDisplay() {
  const { count } = useDataState();
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const dispatch = useDataDispatch();
  return <button onClick={() => dispatch({ type: "increment" })}>Increment count</button>;
}

const Home = () => (
  <DataProvider>
    <Page title='Spreadsheet App'>
      <AppForm />
    </Page>
  </DataProvider>
);

export default Home;
