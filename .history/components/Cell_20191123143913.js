import React, { useState, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import styled, { css } from 'styled-components';
import { useDataState, useDataDispatch, updateCell } from '../src/DataContext';

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

    ${props =>
			props.error &&
			css`
				border: 1px double red;
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
	font-size: 16px;
	line-height: 18px;
	float: left;
	border: 0;
	display: block;
	margin: 0;
	height: 30px;
	width: 100%;
	height: 100%;
	border: 0px;
	text-align: right;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	padding-right: 5px !important;
`;

function Cell({ x, y, readOnly, content }) {
	// A cell could be selected, edited, or in an error state
	const [selected, setSelected] = useState(false);
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(content);
	// Get the data context object from index.js and get coordinates
	const { coordinates } = useDataState();
	const tableDispatch = useDataDispatch();

	function handleKeyDown(e) {
		if (e.keyCode > 36 && e.keyCode < 41) tableDispatch({ type: 'ARROW_KEY_PRESS', code: e.keyCode });
		if (e.keyCode == 13) {
			console.log('editing');
			tableDispatch({ type: 'SET_SELECTION', coordinates: [x, y] });
			//updateCell(tableDispatch, x, y, e.target.value);
			//setEditing(!editing);
		}
	}

	// Run effect when new selected coordinates are provided
	useEffect(() => {
		// If match, set as selected so cell becomes highlighted in blue
		setSelected(coordinates[0] == x && coordinates[1] == y);
		// Cleanup any editable status
		return function cleanup() {
			setEditing(false);
		};
	}, [coordinates]);

	// Prevent cell from reading from cache
	useEffect(() => {
		setValue(content);
	}, [content]);

	// Show grey cell with no handlers
	if (readOnly) {
		return (
			<TableData readOnly>
				<CellContent>{content}</CellContent>
			</TableData>
		);
	}

	// Show input field that saves to table onBlur
	if (editing) {
		return (
			<TableData tabIndex={0} selected={selected}>
				<CellInput
					type='text'
					value={value}
					onKeyDown={e => handleKeyDown(e)}
					onBlur={e => {
						updateCell(tableDispatch, x, y, e.target.value);
					}}
					onKeyPress={e => {
						console.log('key press?', e);
					}}
					tabIndex={0}
					onChange={e => setValue(e.target.value)}
					autoFocus
				/>
			</TableData>
		);
	}

	// Show regular span element else
	return (
		<TableData selected={selected}>
			<CellContent
				tabIndex={x}
				onKeyDown={e => handleKeyDown(e)}
				onClick={e => tableDispatch({ type: 'SET_SELECTION', coordinates: [x, y] })}
				onDoubleClick={e => {
					setEditing(true);
				}}
				role='presentation'
			>
				{content}
			</CellContent>
		</TableData>
	);
}

export default Cell;
