import type { StorybookConfig } from '@storybook/nextjs';
import { resolve } from 'path';

const storybookConfig: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: resolve(__dirname, '../next.config.js'),
    },
  },
  docs: {
    autodocs: 'tag',
  },
};

export default storybookConfig;
