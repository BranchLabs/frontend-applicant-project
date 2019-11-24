import { DescriptionList } from '@shopify/polaris';

export default function Description() {
	return (
		<DescriptionList
			items={[
				{
					term: 'App Description',
					description:
						'The app takes a json string and populates it into a table. The cells can be navigated with arrow keys and modified with a double-click or the enter key. Cells support standard excel formulas.',
				},
				{
					term: 'Development Choices',
					description:
						'The global state is managed by two React Context objects: global state, and a useReducer to manage state. A component like <Table> can easily access state variables like grid size which is set by the <Form>. This allows developers to easily add new features by extending the reducer and pulling in new data for components that need them.',
				},
				{
					term: 'Dependancies',
					description:
						"The app is styled with Shopify's design system and custom styled components. Cell formulas are parsed by npm package hot-formula-parser. ",
				},
			]}
		/>
	);
}
