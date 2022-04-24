const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  refs: {
    '@chakra-ui/react': { disable: true },
  },
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': '@emotion/react',
          'emotion-theming': '@emotion/react',
          '@libs': path.resolve(__dirname, '..', 'src'),
        },
      },
    };
  },
};
