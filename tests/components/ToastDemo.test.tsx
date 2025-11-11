// Unit test with jsdom
// import { render, screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
// import { Toaster } from 'react-hot-toast';
// import ToastDemo from '@/components/ToastDemo';

// // make sure the toast is displayed after user click the button
// describe('ToastDemo', () => {
// 	it('should render toast after click button', async () => {
// 		// arrange
// 		render(
// 			<>
// 				<ToastDemo />
// 				<Toaster />
// 			</>,
// 		);
// 		const button = screen.getByRole('button');
// 		userEvent.setup();

// 		// act
// 		await userEvent.click(button);
// 		const toast = await screen.findByText('Success');

// 		// assert
// 		expect(toast).toBeInTheDocument();
// 	});
// });

// Browser mode test
import { Toaster } from 'react-hot-toast';
import { userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';
import ToastDemo from '@/components/ToastDemo';

// make sure the toast is displayed after user click the button
describe('ToastDemo', () => {
	it('should render toast after click button', async () => {
		// arrange
		const { getByRole, getByText } = await render(
			<>
				<ToastDemo />
				<Toaster />
			</>,
		);
		const buttonLocator = getByRole('button');

		// act
		await userEvent.click(buttonLocator);
		vi.waitFor(async () => {
			const toastLocator = getByText('Success');
			await expect.element(toastLocator).toBeInTheDocument();
		});
	});
});
