module.exports = {
  stories: ["../stories/**/*.stories.js"],
  // stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-a11y/register",
    "@storybook-addon-designs/register",
  ],
};
