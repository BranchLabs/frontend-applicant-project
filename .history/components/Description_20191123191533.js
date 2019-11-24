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
					term: 'Systems',
					description:
						"The app creates a global context object that's managed by a reducer. It uses a design depenadancy from Shopify for styling and --- for CSV parsing.",
				},
				{
					term: 'Author',
					description: 'Written by Kiril Climson, keiraarts@gmail.com, applying to Branch Labs.',
				},
			]}
		/>
	);
}
