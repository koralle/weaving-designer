import 'tailwindcss/tailwind.css';

const parameters = {
  actions: { argTypeRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export { parameters };
