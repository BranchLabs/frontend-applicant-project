import React from 'react';
import styled from 'styled-components';
import { useDataState } from '../src/DataContext';
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

function Table() {
	let rows = [];
	let { size, tableData } = useDataState();

	for (let y = 0; y < size.height; y += 1) {
		// Fill an array from values starting from 65, which convert to A, B, C, D etc.
		let header = new Array(size.width).fill().map((_, index) => String.fromCharCode(index + 65));
		if (y == 0) rows.push(<Row key={'heading'} readOnly={true} rowContent={header} />);
		// Individually return groups of <tr> objects
		rows.push(<Row key={y} y={y} rowContent={get(tableData, y, [])} />);
	}

	return (
		<Card title={`Table`} sectioned>
			<DataGrid>
				<TableBody>{rows}</TableBody>
			</DataGrid>
		</Card>
	);
}

export default Table;
