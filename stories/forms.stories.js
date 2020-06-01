export default {
  title: "Forms",
};

// import "../src/base.css";

export const Text = () => `<label>First name</label><br />
      <input type="text" name="first_name" />`;

export const TextLarge = () => `<label>First name</label><br />
      <input type="text" name="first_name" class="large" />`;

export const TextBlock = () => `<label>First name</label><br />
      <input type="text" name="first_name" class="block" />`;
export const TextBlockLarge = () => `<label>First name</label><br />
      <input type="text" name="first_name" class="large block" />`;
