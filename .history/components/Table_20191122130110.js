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
    let rows = [];
    
  for (let y = 0; y < this.props.y + 1; y += 1) {
  
  return (
    <Card title={`Table ${width} by ${height}`}>
      <DataGrid>
        <tbody></tbody>
      </DataGrid>
    </Card>
  );
}

export default Table;
