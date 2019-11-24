import React from 'react';
import { shallow } from '../../src/enzyme';

import SubmitForm from '../../components/SubmitForm';

describe('Form unit tests', () => {
	it('renders list-items', () => {
		const wrapper = shallow(<List />);

		// Expect the wrapper object to be defined
		expect(wrapper.find('.list-items')).toBeDefined();
		expect(wrapper.find('.item')).toHaveLength(items.length);
	});
});
