import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

const DataGrid = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
`;

function Table(props) {
  const { rows, columns } = props;
  return (
    <Card title={`Table ${rows} by ${columns}`}>
      <DataGrid>
        <tbody></tbody>
      </DataGrid>
    </Card>
  );
}

export default Table;
