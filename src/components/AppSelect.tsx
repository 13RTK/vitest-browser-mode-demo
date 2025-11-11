import { Select } from '@radix-ui/themes';

function AppSelect() {
	return (
		<Select.Root defaultValue="apple">
			<Select.Trigger />
			<Select.Content>
				<Select.Group>
					<Select.Label>Fruits</Select.Label>
					<Select.Item value="orange">Orange</Select.Item>
					<Select.Item value="apple">Apple</Select.Item>
					<Select.Item value="grape" disabled>
						Grape
					</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	);
}

export default AppSelect;
