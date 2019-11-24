import React from 'react';
import { Button, InlineError } from '@shopify/polaris';
import { shallow, dive, mount } from '../../src/enzyme';
import { DataProvider } from '../../DataContext';
import { mountWithAppProvider } from './utils/enzyme';
import SubmitForm from '../../components/SubmitForm';

describe('Form unit tests', () => {
	it('renders', () => {
		shallow(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);
	});

	it('button is available', () => {
		const wrapper = mountWithAppProvider(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);
		expect(wrapper.find('button').length).toBe(1);
	});
});
