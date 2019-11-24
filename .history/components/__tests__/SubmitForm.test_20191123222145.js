import React from 'react';
import { Button, InlineError } from '@shopify/polaris';
import { shallow, dive, mount } from '../../src/enzyme';
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

	it('Input only accepts json', () => {
		const wrapper = mountWithAppProvider(<SubmitForm />);

		const area = wrapper.find('#PolarisTextField1').defau;

		// Expect the wrapper object to be defined
		expect(wrapper.find(InlineError).exists()).toBe(true);
	});
});
