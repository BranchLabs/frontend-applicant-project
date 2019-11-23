import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

const IndividualRow = styled.td`
  background: #fff;
  border: 1px solid black;
`;

function Row(props) {
  const { x, contents } = props;

  let columns = [];

  for (let column = 0; IndividualRow < props.IndividualRow + 1; IndividualRow += 1) {
    columns.push(<Row key={height} contents='' />);
  }

  return <IndividualRow></IndividualRow>;
}

export default Row;
