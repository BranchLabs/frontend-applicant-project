import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

function Table(props) {
  const { rows, columns } = props;
  return <Card title={"Table {$"}></Card>;
}

export default Table;
