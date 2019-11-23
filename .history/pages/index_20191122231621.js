import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

function Home() {
  return (
    <Page title='Spreadsheet App' single>
      <DataProvider>
        <Table />
        <AppForm />
      </DataProvider>
    </Page>
  );
}

export default Home;
