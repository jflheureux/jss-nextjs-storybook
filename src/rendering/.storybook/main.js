module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['graphql'],
        },
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
}