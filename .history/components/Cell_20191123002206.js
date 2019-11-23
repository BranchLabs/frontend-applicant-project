import React from "react";
import styled, { css } from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

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
  padding: 5px 5px 5px 0px;
  min-width: 100px;

  ${props =>
    props.readOnly &&
    css`
      background-color: #f0f0f0;
      text-align: center;
      font-weight: bold;
      color: grey;
    `}
`;

const CellContent = styled.span`
  font-size: 16px;
  display: block;
`;

function Cell({ x, y, content }) {
  // Attach the passed-in className to the DOM node
  return (
    <TableData>
      <CellContent
        onClick={e => {
          console.log("Clicked!");
        }}
        onDoubleClick={e => {
          console.log("Clicked!");
        }}
        onKeyPress={e => {
          console.log("Clicked!");
        }}
        role='presentation'
      >
        {content}
      </CellContent>
    </TableData>
  );
}

export default Cell;
