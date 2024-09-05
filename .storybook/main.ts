import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {},
    },
  },

  docs: {},

  staticDirs: ['../public'],

  /**
   * エイリアスを追加
   * @see https://himynameistim.com/web-development
   */
  webpackFinal: async (config, { configType }) => {
    if (!config.resolve) {
      return config
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }
    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
