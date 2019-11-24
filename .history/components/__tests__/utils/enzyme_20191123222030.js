import { PolarisTestProvider } from '@shopify/polaris';
import { DataProvider, useDataState, useDataDispatch } from '../../src/DataContext';
import { mount, dive } from 'enzyme';

export function mountWithAppProvider(node, context) {
	return mount(node, {
		wrappingComponent: [PolarisTestProvider, DataProvider],
		wrappingComponentProps: context,
	});
}
