import { useState, useCallback, useReducer } from 'react';
import { useDataDispatch, useDataState } from '../src/DataContext';
import Save from 'file-saver';
import { Stack, Card, Form, FormLayout, TextField, InlineError, Button, Toast } from '@shopify/polaris';

function hasJsonStructure(jsonString) {
	try {
		let o = JSON.parse(jsonString);
		if (o && typeof o === 'object') {
			return o;
		}
	} catch (e) {}

	return false;
}

function reducer(state, action) {
	switch (action.type) {
		case 'ERROR':
			return {
				...state,
				active: true,
				message: 'Not valid json',
				error: true,
				inlineError: 'The data was not valid JSON',
			};
		case 'ACCEPT':
			return { ...state, active: true, message: 'Data loaded', error: false, inlineError: false };
		case 'CLEANUP':
			return { ...state, active: false, error: false };
		default:
			throw new Error();
	}
}

function AppForm() {
	const { tableData } = useDataState();
	const tableDispatch = useDataDispatch();
	// JSON data input initialized in the data context
	const [data, setData] = useState(JSON.stringify(tableData));
	const handleDataChange = useCallback(value => setData(value), []);
	// Toast dispatcher
	// TODO: Reducer seems overkill, but easily extendible
	const [toast, dispatch] = useReducer(reducer, { active: false, error: false });

	const handleSubmit = useCallback(() => {
		// Prevent form from accepting non-json data types
		const dataStructure = hasJsonStructure(data);
		if (!dataStructure) dispatch({ type: 'ERROR' });
		else {
			dispatch({ type: 'ACCEPT' });
			tableDispatch({ type: 'LOAD_DATA', tableData: data });
		}
	}, [data]);

	const toastMarkup = toast.active ? (
		<Toast content={toast.message} onDismiss={() => dispatch({ type: 'CLEANUP' })} error={toast.error} />
	) : null;

	return (
		<Card title='Input' sectioned>
			{toastMarkup}
			<Form onSubmit={handleSubmit}>
				<FormLayout>
					<TextField
						multiline
						value={data}
						onChange={handleDataChange}
						label='Data key'
						helpText={<span>Per instructions, this form only supports json.</span>}
					/>
					{toast.error && toast.inlineError ? <InlineError message={toast.inlineError} fieldID='myFieldID' /> : null}

					<Stack distribution='leading' alignment='center'>
						<Button submit primary>
							Load JSON
						</Button>
						<Button
							plain
							onClick={() => {
								var blob = new Blob([tableData], { type: 'text/plain;charset=utf-8' });
								Save.saveAs(blob, 'spreadsheet.txt');
							}}
						>
							Save
						</Button>
					</Stack>
				</FormLayout>
			</Form>
		</Card>
	);
}

export default AppForm;
