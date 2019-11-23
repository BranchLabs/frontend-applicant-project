import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

const TableRow = styled.tr`
  background: #fff;
`;

const TableData = styled.td`
  background: #fff;
  border: 1px solid black;
`;

const Cell = styled.span`    font-size: 12px;`

const 

function Row(props) {
  const { contents } = props;

  let columns = [];

  for (let column = 0; column < 3 + 1; column += 1) {
    columns.push(<TableData ></TableData>);
  }

  return <TableRow>{columns}</TableRow>;
}

export default Row;
