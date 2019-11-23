import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

const IndividualRow = styled.tr`
  background: #fff;
`;

function Row(props) {
  const { width, height } = props;

  let rows = [];

  for (let height = 0; height < props.height + 1; height += 1) {
    // Iterate over every datapoint in column height
    // Individually return groups of <tr> objects
    rows.push(<Row key={height} contents='' />);
  }

  return <IndividualRow />;
}

export default Row;
