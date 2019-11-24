import React from 'react';
import { shallow, dive, mount } from '../../src/enzyme';
import { DataProvider } from '../../src/DataContext';
import { mountWithAppProvider } from './utils/enzyme';
import TestUtils from 'react-dom/test-utils';
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

	it('updates the table partially', () => {
		const wrapper = mountWithAppProvider(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);

		const input = wrapper.querySelector('textarea');
		TestUtils.Simulate.change(input, { target: { value: 'Peter Parker' } });

		const form = wrapper.find('form');
		form.simulate('submit');

		console.log('form', form);

		expect(wrapper.find('.Polaris-Button--primary').first()).toBeDefined();
	});
});
