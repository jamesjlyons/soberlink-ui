export default {
  title: "Buttons",
};

// import "../src/base.css";

export const Button = () => `<button class="btn">Default Btn</button>`;

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
