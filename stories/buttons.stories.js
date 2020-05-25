export default {
  title: "Buttons",
};

// import "../src/base.css";

export const Button = () => `<button class="btn">Default Btn</button>`;

export const SecondaryButton = () =>
  `<button class="btn btn-secondary">Secondary Button</button>`;

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
