import React from 'react';
import AppForm from '../components/SubmitForm';
import Table from '../components/Table';
import Descriptiom from '../components/Description';
import { Page } from '@shopify/polaris';

function Home() {
	return (
		<Page
			title='Spreadsheet App'
			subtitle="For a demo, select C3 and press 'Enter' twice or load data."
		>
			<Table />
			<AppForm />
			<Descriptiom />
		</Page>
	);
}

export default Home;
