import React from "react";
import styled, { css } from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import Cell from "./Cell";
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
  padding: 1%;

  ${props =>
    props.readOnly &&
    css`
      background-color: #f0f0f0;
      text-align: center;
      font-weight: bold;
      color: grey;
    `}
`;

function Row({ y, rowContent, readOnly }) {
  let columns = [];

  for (let x = 0; x < 3 + 1; x += 1) {
    if (x == 0) {
      columns.push(
        <TableData key={-1} readOnly>
          <Cell content={y} />
        </TableData>
      );
    }
    columns.push(
      <TableData key={x} readOnly={readOnly}>
        <Cell y={y} x={x} content={get(rowContent, x, "-")} />
      </TableData>
    );
  }

  return <TableRow>{columns}</TableRow>;
}

export default Row;
