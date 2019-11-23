import React from "react";
import styled from "styled-components";
import { useDataState } from "../src/DataContext";
import Cell from "./Cell";
import get from "lodash/get";

const TableRow = styled.tr`
  background: #fff;
`;

function Row({ y, rowContent, readOnly }) {
  let { width } = useDataState();
  let columns = [];

  for (let x = 0; x < width; x += 1) {
    if (x == 0) {
      columns.push(<Cell key={0} content={y} readOnly />);
    }
    columns.push(<Cell key={x} y={y} x={x} readOnly={readOnly} content={get(rowContent, x, "")} />);
  }

  return <TableRow>{columns}</TableRow>;
}

export default Row;
