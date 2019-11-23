import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

const CellContent = styled.span`
  font-size: 12px;
`;

function Cell({ x, y, content, className }) {
  // Attach the passed-in className to the DOM node
  return <CellContent className={className}>{content}</CellContent>;
}

export default Cell;
