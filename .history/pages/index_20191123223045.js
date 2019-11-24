import React from 'react';
import { DataProvider } from '../src/DataContext';
import AppForm from '../components/SubmitForm';
import Table from '../components/Table';
import Descriptiom from '../components/Description';
import { Page } from '@shopify/polaris';

function Home() {
	console.log('string', JSON.parse([[1], [2, 3], [4, 5, 6], [], [7, 8, 9, 0]]));
	return (
		<DataProvider>
			<Page title='Spreadsheet App' narrowWidth>
				<Table />
				<AppForm />
				<Descriptiom />
			</Page>
		</DataProvider>
	);
}

export default Home;
