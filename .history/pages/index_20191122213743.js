import React from "react";
import ReactDOM from "react-dom";
import { CountProvider, useCountState, useCountDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

function CountDisplay() {
  const { count } = useCountState();
  return count;
}

function Counter() {
  const dispatch = useCountDispatch();
  return <button onClick={() => dispatch({ type: "increment" })}>Increment count</button>;
}

function App() {
  return (
    <DataProvider>
      <Table width={CountDisplay()} height={5} />
      <AppForm />

      <style global jsx>{`
        .Polaris-Card {
          margin-bottom: 20px;
        }
      `}</style>
    </DataProvider>
  );
}
export default App;

import React from "react";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";

import AppForm from "../components/SubmitForm";
import Table from "../components/Table";
import { Page } from "@shopify/polaris";

function GetDimensions(type) {
  const { width, height } = useDataState();
  if (type == "width") return width;
  else return height;
}

function Home() {
  return (
    <DataProvider>
      <Table width={GetDimensions("width")} height={GetDimensions("height")} />
      <AppForm />

      <style global jsx>{`
        .Polaris-Card {
          margin-bottom: 20px;
        }
      `}</style>
    </DataProvider>
  );
}

export default Home;
