import React, { useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDataState, useDataDispatch } from '../src/DataContext';
import Row from './Row';
import { Card } from '@shopify/polaris';
import get from 'lodash/get';

const DataGrid = styled.table`
	border-collapse: collapse;
	table-layout: fixed;
	overflow-x: auto;
	width: 100%;
`;

const TableBody = styled.tbody`
	overflow-x: auto;
`;

function generateHeaderRow(size) {
	/*
	 * Fills an array from values starting from 65, which convert to A, B, C, D .. AA, BB, CC etc.
	 * Alphabet characters is represented by 32
	 * Starting char is 65 which displays "A"
	 */

	let headerRow = new Array(size[1] + 1).fill().map((_, index) => {
		let char = index % 32; // prevents showing non-alphabet characters
		let loop = Math.floor(index / 32) + 1; // Doubles up on values after first loop
		return String.fromCharCode(65 + char).repeat(loop);
	});

	return headerRow;
}

function Table() {
	let rows = [];
	let { size, tableData } = useDataState();
	const tableDispatch = useDataDispatch();
	const [mouseDown, setMouseDown] = useState(false);
	const memoizedHeader = useMemo(() => generateHeaderRow(size), [size]);

	for (let y = 0; y < size[1]; y += 1) {
		if (y === 0) rows.push(<Row key={'heading'} readOnly={true} rowContent={memoizedHeader} />);
		// Individually return groups of <tr> objects
		rows.push(<Row key={y} y={y} rowContent={get(tableData, y, [])} />);
	}

	useEffect(() => {
		console.log('mouse down', mouseDown);
		tableDispatch({ type: 'SET_MOUSE_DOWN' });
	});

	return (
		<Card title={`Table`} sectioned>
			<DataGrid>
				<TableBody
					onMouseDown={e => {
						setMouseDown(true);
					}}
					onMouseUp={e => {
						setMouseDown(false);
					}}
				>
					{rows}
				</TableBody>
			</DataGrid>
		</Card>
	);
}

export default Table;
