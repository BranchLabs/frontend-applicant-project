import { DescriptionList } from '@shopify/polaris';

export default function Description() {
	return (
		<DescriptionList
			items={[
				{
					term: 'App Description',
					description:
						'The app takes a json string and populates it into a spreadsheet table. The cells can be navigated with arrow keys and modified with a double-click or the enter key. Cells support standard excel formulas.',
				},
				{
					term: 'Development',
					description:
						"I choose React's useReducer and useContext to manage the global state. State can be shared between components to easily fetch the current cell or table size. Dispatch methods are shared across components to allow keyboard navigation, formula parsing, and cell updates.  ",
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
