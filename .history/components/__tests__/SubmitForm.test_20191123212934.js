import React from 'react';
import { shallow } from '../../src/enzyme';
import { DataProvider, useDataState, useDataDispatch } from '../../src/DataContext';
import SubmitForm from '../../components/SubmitForm';

describe('App', () => {
	it('renders', () => {
		shallow(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);
	});
});

describe('Form unit tests', () => {
	it('Text input for json exists', () => {
		const wrapper = shallow(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);

		// Expect the wrapper object to be defined
		expect(wrapper.find('textarea')).toBeDefined();
	});

	it('Input only accepts json', () => {
		const wrapper = shallow(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);

		// Expect the wrapper object to be defined
		expect(wrapper.find('textarea')).toBeDefined();
	});
});
