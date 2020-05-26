import { withDesign } from "storybook-addon-designs";
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Buttons",
  decorators: [withDesign, withKnobs],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/ANzyZWB7Xh5mylANfEVKfj/Web-Component-Library?node-id=5%3A117",
    },
  },
};

// import "../src/base.css";

// export const DefaultButton = () => `<button class="btn">Default Btn</button>`;
export const DefaultButton = () => {
  const types = {
    Default: null,
    Secondary: "btn-secondary",
    Ghost: "btn-ghost",
  };
  const type = select("Types", types, null);

  return `<button class="btn ${type}">Default Btn</button>`;
};

export const SecondaryButton = () =>
  `<button class="btn btn-secondary">Secondary Button</button>`;

export const GhostButton = () =>
  `<button class="btn btn-ghost">Ghost Button</button>`;

export const ButtonLoading = () => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add("btn", "btn-load");
  btn.innerText = `Loading`;
  // btn.innerHTML = `<div class="ld" style="width:1em;height:1em;background:currentColor;"></div> Loading`;
  function loadTimer() {
    btn.classList.add("loading");
    setTimeout(function () {
      btn.classList.remove("loading");
    }, 5000);
  }
  btn.addEventListener("click", () => loadTimer());
  return btn;
};

export const BlockButtons = () =>
  `<button class="btn btn-block">Primary Block Button</button>
  <button class="btn btn-secondary btn-block">Secondary Block Button</button>
  <button class="btn btn-ghost btn-block">Ghost Block Button</button>
  `;

export const BButtonLoading = () => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add("btn", "btn-block", "btn-load");
  btn.innerText = `Loading`;
  // btn.innerHTML = `<div class="ld" style="width:1em;height:1em;background:currentColor;"></div> Loading`;
  function loadTimer() {
    btn.classList.add("loading");
    setTimeout(function () {
      btn.classList.remove("loading");
    }, 5000);
  }
  btn.addEventListener("click", () => loadTimer());
  return btn;
};
