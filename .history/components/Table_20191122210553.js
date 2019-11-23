import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import Row from "./Row";
import { Page, Card } from "@shopify/polaris";

const DataGrid = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
`;

function Table(props) {
  const { width, height } = props;

  let rows = [];
  for (let y = 0; y < props.height + 1; y += 1) {
    // Create header element
    if (y == 0) {
      // Fill an array from values starting from 65, which convert to A, B, C, D etc.
      rows.push(<Row key={-1} readOnly={true} rowContent={new Array(width + 1).fill().map((value, index) => String.fromCharCode(index + 65))} />);
    }
    // Individually return groups of <tr> objects
    rows.push(<Row key={y} y={y} rowContent={[2, 3]} />);
  }

  return (
    <Card title={`Table ${width} by ${height}`} sectioned>
      <DataGrid>
        <tbody>{rows}</tbody>
      </DataGrid>
    </Card>
  );
}

export default Table;
