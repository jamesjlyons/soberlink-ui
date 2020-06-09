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

export const TextWithLink = () => `<div style="width: min-content">
                                    <div class="label-flex">
                                    <label>Password</label>
                                    <a href="#" class="label-link">Forgot Password?</a>
                                    </div>
                                    <input
                                    class="large"
                                    type="password"
                                    name="password"
                                    required=""
                                    />
                                    </div>`;

export const Select = () => `<label>Select</label><br />
      <select>
            <option>This is a native select element</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
      </select>`;

export const SelectLarge = () => `<label>Select</label><br />
      <select class="large">
            <option>This is a native select element</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
      </select>`;

export const SelectLargeBlock = () => `<label>Select</label><br />
      <select class="large block" />
            <option>This is a native select element</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
      </select>`;

export const Checkbox = () => `<label class="check-radio-container">Checked
<input type="checkbox" checked="checked"/>
<div class="checkmark"></div>
</label>`;

export const CodeInput = () => {
  return `<label>Code</label><br />
<div class="input-code">
<input
  class="code-box"
  id="codeBox1"
  type="number"
  maxlength="1"
  onkeyup="onKeyUpEvent(1, event)"
  onfocus="onFocusEvent(1)"
/>
<input
  class="code-box"
  id="codeBox2"
  type="number"
  maxlength="1"
  onkeyup="onKeyUpEvent(2, event)"
  onfocus="onFocusEvent(2)"
/>
<input
  class="code-box"
  id="codeBox3"
  type="number"
  maxlength="1"
  onkeyup="onKeyUpEvent(3, event)"
  onfocus="onFocusEvent(3)"
/>
<input
  class="code-box"
  id="codeBox4"
  type="number"
  maxlength="1"
  onkeyup="onKeyUpEvent(4, event)"
  onfocus="onFocusEvent(4)"
/>
</div>`;
};
