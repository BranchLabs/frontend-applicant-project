import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

function TableConsumer() {
  const { width, height } = useDataState();
  return <Table width={width} height={height} />;
}

function Home() {
  return (
    <DataProvider>
      <Page title='Spreadsheet App'>
        <TableConsumer />
        <AppForm />
      </Page>
      <style global jsx>{`
        .Polaris-Card {
          margin-bottom: 20px;
        }
      `}</style>
    </DataProvider>
  );
}

export default Home;
