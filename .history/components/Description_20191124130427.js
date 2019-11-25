import { DescriptionList } from '@shopify/polaris';

export default function Description() {
	return (
		<DescriptionList
			items={[
				{
					term: 'App Description',
					description:
						'The app takes a json string and populates it into a table. Any string input that starts with an equals sign is considered to be an formula. The cells can be navigated with arrow keys and modified with a double-click or the enter key.',
				},
				{
					term: 'Development Choices',
					description:
						'The app uses two React Context objects to make the table state and a useReducer available to all nested components within the app. A component like <Table> can access state variables (like grid size) which is set by a <Form> components. This allows developers to easily extend the app by adding a new dispatch action.',
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
