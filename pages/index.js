import React from "react";
import { DataProvider } from "../src/DataContext";
import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page, DescriptionList } from "@shopify/polaris";

function Home() {
  return (
    <DataProvider>
      <Page title='Spreadsheet App' narrowWidth>
        <Table />
        <AppForm />
        <DescriptionList
          items={[
            {
              term: "Description",
              description: "The app takes a json string and populates it into a spreadsheet table. You can load in data or save the spreadsheet as a json txt file."
            },
            {
              term: "Systems",
              description: "The app creates a global context object that's managed by a reducer. It uses a design depenadancy from Shopify for styling and --- for CSV parsing."
            },
            {
              term: "Author",
              description: "Written by Kiril Climson, keiraarts@gmail.com, applying to Branch Labs."
            }
          ]}
        />
        <div></div>
      </Page>
    </DataProvider>
  );
}

export default Home;
