import React, { useContext } from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch, DataStateContext } from "../src/DataContext";
import Row from "./Row";
import { Page, Card } from "@shopify/polaris";
import get from "lodash/get";

const DataGrid = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
`;

function Table() {
  let { width, height, tableData } = useContext(DataStateContext);
  let rows = [];
  for (let y = 0; y < height; y += 1) {
    // Create header element
    // Fill an array from values starting from 65, which convert to A, B, C, D etc.
    if (y == 0) rows.push(<Row key={-1} readOnly={true} rowContent={new Array(width).fill().map((value, index) => String.fromCharCode(index + 65))} />);
    // Individually return groups of <tr> objects
    rows.push(<Row key={y} y={y} rowContent={get(tableData, y, [])} />);
  }

  return (
    <Card title={`Table (${width} by ${height})`} sectioned>
      <DataGrid>
        <tbody>{rows}</tbody>
      </DataGrid>
    </Card>
  );
}

export default Table;
