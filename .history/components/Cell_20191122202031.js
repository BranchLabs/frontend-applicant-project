import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";


function Cell(props) {
  const { y, rowContent } = props;
  console.log("rowContent", rowContent);
  render() {
    // Attach the passed-in className to the DOM node
    return <div className={this.props.className} />
  }
}

export default Row;
