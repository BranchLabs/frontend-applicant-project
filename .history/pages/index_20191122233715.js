import React from "react";
import { DataProvider } from "../src/DataContext";
import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page, DescriptionList } from "@shopify/polaris";

function Home() {
  return (
    <DataProvider>
      <Page title='Spreadsheet App' singleColumn>
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
              description: "A business structure where a single individual both owns and runs the company."
            },
            {
              term: "Discount code",
              description: "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer."
            }
          ]}
        />
        <div></div>
      </Page>
    </DataProvider>
  );
}

export default Home;
