import React from "react";
import { DataProvider } from "../src/DataContext";
import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

function Home() {
  return (
    <DataProvider>
      <Page title='Spreadsheet App' singleColumn>
        <Table />
        <AppForm />
      </Page>
    </DataProvider>
  );
}

export default Home;
