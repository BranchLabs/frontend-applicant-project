import React from "react";
import styled, { css } from "styled-components";

const CellContent = styled.span`
  font-size: 16px;
`;

function Cell({ x, y, content }) {
  // Attach the passed-in className to the DOM node
  return <CellContent>{content}</CellContent>;
}

export default Cell;
