import 'tailwindcss/tailwind.css';
import * as nextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { Story } from '@storybook/blocks';
import { RecoilRoot } from 'recoil';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => {
    return <img {...props} />;
  },
});

const parameters = {
  actions: { argTypeRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const withRecoil = Story => (
  <RecoilRoot>
    <Story />
  </RecoilRoot>
);

export const decorators = [withRecoil];

export { parameters };
