import { PolarisTestProvider } from '@shopify/polaris';
import { mount, dive } from 'enzyme';

export function mountWithAppProvider(node, context) {
	return mount(node, {
		wrappingComponent: PolarisTestProvider,
		wrappingComponentProps: context,
	});
}
