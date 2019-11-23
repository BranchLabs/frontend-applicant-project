import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page, FooterHelp } from "@shopify/polaris";

function Home() {
  return (<DataProvider></DataProvider>
    <Page title='Spreadsheet App' singleColumn>
      
        <Table />
        <AppForm />
      
      <FooterHelp>1234</FooterHelp>
    </Page></DataProvider>
  );
}

export default Home;
