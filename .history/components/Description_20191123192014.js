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
						"I choose React's useReducer and useContext to manage the global state. The app is wrapped with one context object that provided the state (like table size) and a reducer to control cell content changes and keyboard navigation. ",
				},
				{
					term: 'Author',
					description: 'Written by Kiril Climson, keiraarts@gmail.com, applying to Branch Labs.',
				},
			]}
		/>
	);
}
