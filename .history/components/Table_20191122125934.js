import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

const DataGrid = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
`;

function Table(props) {
  const { width, height } = props;
  return (
    <Card title={`Table ${width} by ${height}`}>
      <DataGrid>
        <tbody></tbody>
      </DataGrid>
    </Card>
  );
}

export default Table;
