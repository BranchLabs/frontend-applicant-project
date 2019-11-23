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

function TableComponent() {
  let { width, height, tableData } = useDataState();

  for (let y = 0; y < height; y += 1) {
    // Fill an array from values starting from 65, which convert to A, B, C, D etc.
    let header = new Array(width).fill().map((value, index) => String.fromCharCode(index + 65));
    if (y == 0) rows.push(<Row key={"heading"} readOnly={true} rowContent={header} />);
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

function Table() {
  return (
    <DataProvider>
      <TableComponent />
    </DataProvider>
  );
}

export default Table;
