// Unit test with jsdom
// import { Theme } from '@radix-ui/themes';
// import { render } from '@testing-library/react';
// import AppSelect from '@/components/AppSelect';

// // just render the Select component from radix ui
// describe('AppSelect', () => {
//  it('should render AppSelect', () => {
//   render(
//    <Theme>
//     <AppSelect />
//    </Theme>,
//   );
//  });
// });

// Browser mode test
import { Theme } from '@radix-ui/themes';
import { render } from 'vitest-browser-react';
import AppSelect from '@/components/AppSelect';

// just render the Select component from radix ui
describe('AppSelect', () => {
	it('should render AppSelect', async () => {
		render(
			<Theme>
				<AppSelect />
			</Theme>,
		);
	});
});
