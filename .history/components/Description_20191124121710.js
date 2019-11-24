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
						"I chose React's useReducer and useContext to manage the global state. Any component within the _app.js can access the state (tableData, mouseState, grid size, current cell) or call a dispatch method to support keyboard navigation, cell updates, or formulas. ",
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
