import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

const TableRow = styled.td`
  background: #fff;
`;

const Cell = styled.td`
  background: #fff;
  border: 1px solid black;
`;

function Row(props) {
  const { contents } = props;

  let columns = [];

  for (let column = 0; column < 6 + 1; column += 1) {
    columns.push(<Cell contents='' />);
  }

  return <ITableRow>{columns}</ITableRow>;
}

export default Row;
