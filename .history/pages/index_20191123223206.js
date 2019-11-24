import React from 'react';
import { DataProvider } from '../src/DataContext';
import AppForm from '../components/SubmitForm';
import Table from '../components/Table';
import Descriptiom from '../components/Description';
import { Page, Banner } from '@shopify/polaris';

function Home() {
	return (
		<DataProvider>
			<Page title='Spreadsheet App' narrowWidth>
				<Banner>For a demo, select C3 and press 'Enter'</Banner>
				<Table />
				<AppForm />
				<Descriptiom />
			</Page>
		</DataProvider>
	);
}

export default Home;
