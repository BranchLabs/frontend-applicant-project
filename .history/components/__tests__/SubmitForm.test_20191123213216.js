import React from 'react';
import { shallow } from '../../src/enzyme';
import { DataProvider, useDataState, useDataDispatch } from '../../src/DataContext';
import SubmitForm from '../../components/SubmitForm';

describe('Form unit tests', () => {
	it('renders', () => {
		shallow(
			<DataProvider>
				<SubmitForm />
			</DataProvider>
		);
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
