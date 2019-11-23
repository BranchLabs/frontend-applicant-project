import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

function Cell({ x, y }) {
  // Attach the passed-in className to the DOM node
  return <div className={this.props.className} />;
}

export default Cell;
