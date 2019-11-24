import React from 'react';
import { shallow, dive, mount } from '../../src/enzyme';
import { DataProvider } from '../../src/DataContext';
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

	it('shows submit button', () => {
		const wrapper = mountWithAppProvider(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);
		expect(wrapper.find('.Polaris-Button--primary').first()).toBeDefined();
	});
});
