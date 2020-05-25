import { configure } from "@storybook/html";

import "../src/css/base.css";

const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
