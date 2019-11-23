import React from "react";
import styled from "styled-components";
import { DataProvider, useDataState, useDataDispatch } from "../src/DataContext";
import { Page, Card } from "@shopify/polaris";

const DataGrid = styled.tr`
  background: #fff;
`;

function Table(props) {
  const { width, height } = props;

  let rows = [];

  for (let height = 0; height < props.height + 1; height += 1) {
    // Iterate over every datapoint in column height
    // Individually return groups of <tr> objects
    rows.push(<Row key={height} contents='' />);
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
