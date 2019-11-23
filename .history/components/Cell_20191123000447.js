import React from "react";
import styled, { css } from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

function Cell({ x, y, content }) {
  // Attach the passed-in className to the DOM node
  return (
    <span onClick={e => this.clicked(e)} onDoubleClick={e => this.doubleClicked(e)} style={css} role='presentation'>
      {content}
    </span>
  );
}

export default Cell;
