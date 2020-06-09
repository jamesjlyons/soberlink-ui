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
      <select />
            <option>This is a native select element</option>
            <option>Apples</option>
            <option>Bananas</option>
            <option>Grapes</option>
            <option>Oranges</option>
      </select>`;

export const SelectLarge = () => `<label>Select</label><br />
      <select class="large" />
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

export const Checkbox = () => `<label class="check-radio-container">First checkbox
<input type="checkbox" checked="checked"/>
<div class="checkmark"></div>
</label>`;
