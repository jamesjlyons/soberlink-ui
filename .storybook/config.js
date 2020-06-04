import { configure } from "@storybook/html";

import "../src/css/atrium-styles.css";

const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
