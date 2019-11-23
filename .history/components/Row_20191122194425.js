import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

const TableRow = styled.tr`
  background: #fff;
`;

const TableData = styled.td`
  background: #fff;
  border: 1px solid black;
  height: 17px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  cursor: cell;
  background-color: unset;
  -webkit-transition: background-color 0.5s ease;
  transition: background-color 0.5s ease;
  vertical-align: middle;
  text-align: right;
  border: 1px solid #ddd;
  padding: 0;
`;

const Cell = styled.span`
  font-size: 12px;
`;

function Row(props) {
  const { y, contents } = props;

  let x = [];

  for (let x = 0; x < 3 + 1; x += 1) {
    columns.push(
      <TableData>
        <Cell>23423</Cell>
      </TableData>
    );
  }

  return <TableRow>{columns}</TableRow>;
}

export default Row;
