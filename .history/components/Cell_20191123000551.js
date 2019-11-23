import React from "react";
import styled, { css } from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

const CellValue = styled.span`
  font-size: 16px;
`;

function Cell({ x, y, content }) {
  // Attach the passed-in className to the DOM node
  return (
    <CellValue onClick={e => this.clicked(e)} onDoubleClick={e => this.doubleClicked(e)} role='presentation'>
      {content}
    </CellValue>
  );
}

export default Cell;
