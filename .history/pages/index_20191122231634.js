import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page, FooterHelp } from "@shopify/polaris";

function Home() {
  return (
    <Page title='Spreadsheet App' singleColumn>
      <DataProvider>
        <Table />
        <AppForm />
      </DataProvider>
    </Page>
  );
}

export default Home;
