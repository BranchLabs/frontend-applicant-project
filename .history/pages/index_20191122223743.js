import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

function Home() {
  return (
    <DataProvider>
      <Page title='Spreadsheet App'>
        <Table />
        <AppForm />
      </Page>
    </DataProvider>
  );
}

export default Home;
