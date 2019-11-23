import React from "react";
import styled, { css } from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

const CellContent = styled.span`
  font-size: 16px;

  ${props =>
    props.read_only &&
    css`
      background-color: #dadada;
      text-align: center;
      font-weight: bold;
      color: grey;
    `}
`;

function Cell({ x, y, content, className }) {
  // Attach the passed-in className to the DOM node
  return <CellContent read_only>{content}</CellContent>;
}

export default Cell;
