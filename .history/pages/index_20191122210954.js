import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

const Home = () => (

  const { count } = useDataState();
  return <div>{`The current count is ${count}`}</div>;
  
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
