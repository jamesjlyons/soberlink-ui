import { configure } from "@storybook/html";

import { addDecorator } from "@storybook/html";
import { withHTML } from "@whitespace/storybook-addon-html/html";

addDecorator(withHTML);

import "../src/css/atrium-styles.css";

const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
