import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useDataState, useDataDispatch } from "../src/DataContext";

const TableData = styled.td`
  background: #fff;
  border: 1px solid black;
  height: 17px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  cursor: cell;
  background-color: unset;
  -webkit-transition: background-color 0.5s ease;
  transition: background-color 0.5s ease;
  vertical-align: middle;
  text-align: right;
  border: 1px solid #ddd;

  min-width: 100px;
  max-width: 200px;

  ${props =>
    props.readOnly &&
    css`
      background-color: #f0f0f0;
      text-align: center;
      font-weight: bold;
      color: grey;
    `}

  ${props =>
    props.selected &&
    css`
      border: 1px double #2185d0;
      -webkit-transition: none;
      transition: none;
      box-shadow: inset 0 -100px 0 rgba(33, 133, 208, 0.15);
    `}
`;

const CellContent = styled.span`
  font-size: 16px;
  height: 100%;
  padding: 2px 5px 2px 0px;
  display: block;
  min-height: 25px;
  vertical-align: middle;
  line-height: 170%;
`;

const CellInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0px;
  text-align: right;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
`;

function Cell({ x, y, readOnly, content }) {
  // Attach the passed-in className to the DOM node
  const [selected, setSelected] = useState(false);
  const [editing, setEditing] = useState(false);
  const { coordinates } = useDataState();
  const { x: selectedx, y: selectedy } = coordinates;
  const tableDispatch = useDataDispatch();

  // Run effect when new coordinates are selected
  useEffect(() => {
    if (coordinates.x == x && coordinates.y == y) {
      setSelected(true);
    } else setSelected(false);

    return function cleanup() {
      setEditing(false);
    };
  }, [selectedx, selectedy]);

  if (readOnly) {
    return (
      <TableData readOnly>
        <CellContent>{content}</CellContent>
      </TableData>
    );
  }

  if (editing) {
    return (
      <TableData selected={selected}>
        <CellInput
          type='text'
          onBlur={() => {
            console.log("blur");
          }}
          onKeyPress={() => {
            console.log("blur");
          }}
          value={() => {
            console.log("blur");
          }}
          onChange={() => {
            console.log("blur");
          }}
          autoFocus
        />
      </TableData>
    );
  }
  return (
    <TableData selected={selected}>
      <CellContent
        onClick={e => tableDispatch({ type: "SET_SELECTION", coordinates: { x, y } })}
        onDoubleClick={e => {
          console.log("Double Clicked!");
          setEditing(true);
        }}
        onKeyPress={e => {
          console.log("Double clicked!");
        }}
        role='presentation'
      >
        {content}
      </CellContent>
    </TableData>
  );
}

export default Cell;
