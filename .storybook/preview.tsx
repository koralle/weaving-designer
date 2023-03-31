import 'tailwindcss/tailwind.css';

import { Preview } from '@storybook/react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { RecoilRoot } from 'recoil';

const preview: Preview = {
  decorators: [
    Story => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: 'en',
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
