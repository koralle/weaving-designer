import 'tailwindcss/tailwind.css';
import * as nextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';

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

export { parameters };
