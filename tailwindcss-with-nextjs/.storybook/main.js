module.exports = {
  stories: [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/component*/**/*.stories.mdx",
    "../src/component*/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  framework: "@storybook/react",
  features: {
    // storyStoreV7: true,
    postcss: false,
  },
  // refs: {
  //   'design-system': {
  //     title: 'Storybook Design System',
  //     url: 'https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com',
  //   },
  // },
}