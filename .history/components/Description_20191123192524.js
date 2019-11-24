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
						"I choose React's useReducer and useContext to manage the global state. Any component within the _app.js can access the state (tableData, grid size, current cell) or call a dispatch method to update the state. ",
				},

				{
					term: 'Dependancies',
					description:
						"The app is styled with Shopify's design system, Polaris. Cell formulas are parsed by 'hot-formula-parser'. ",
				},
			]}
		/>
	);
}
