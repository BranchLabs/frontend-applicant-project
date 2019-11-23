import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import Row from "../components/Row";
import { Page, Card } from "@shopify/polaris";

const DataGrid = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
`;

function Table(props) {
  const { width, height } = props;

  let rows = [];

  for (let width = 0; width < props.width + 1; width += 1) {
    // Iterate over every datapoint in column height
    // Individually return groups of <tr> objects
    rows.push(<Row />);
  }

  return (
    <Card title={`Table ${width} by ${height}`}>
      <DataGrid>
        <tbody></tbody>
      </DataGrid>
    </Card>
  );
}

export default Table;
