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
  for (let height = 0; height < props.height + 1; height += 1) {
    // Create header element
    if (height === 0) {
      rows.push(<Row key={height} y={false} rowContent={new Array(width).fill(65, 0, 150).map((value, index) => String.fromCharCode(index))} />);
    }
    // Iterate over every datapoint in column height
    // Individually return groups of <tr> objects
    rows.push(<Row key={height} y={height} rowContent={[]} />);
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
