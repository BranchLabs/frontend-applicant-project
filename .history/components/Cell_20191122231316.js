import React from "react";
import styled, { css } from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

const CellContent = styled.span`
  font-size: 16px;
  min-width: 100px;
`;

function Cell({ x, y, content }) {
  // Attach the passed-in className to the DOM node
  return <CellContent>{content}</CellContent>;
}

export default Cell;
