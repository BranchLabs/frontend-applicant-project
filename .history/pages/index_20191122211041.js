import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

function DataDisplay() {
  const { count } = useDataState();
  return <div>{`The current count is ${count}`}</div>;
}

function Counter() {
  const dispatch = useDataDispatch();
  return <button onClick={() => dispatch({ type: "increment" })}>Increment count</button>;
}

function Home() => {
  return(<DataProvider>
    <Page title='Spreadsheet App'>
      <Table width={3} height={4} />
      <AppForm />
    </Page>
    <style global jsx>{`
      .Polaris-Card {
        margin-bottom: 20px;
      }
    `}</style>
  </DataProvider>)
}
const Home = () => (
  <DataProvider>
    <Page title='Spreadsheet App'>
      <Table width={3} height={4} />
      <AppForm />
    </Page>
    <style global jsx>{`
      .Polaris-Card {
        margin-bottom: 20px;
      }
    `}</style>
  </DataProvider>
);

export default Home;
