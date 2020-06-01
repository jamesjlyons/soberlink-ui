export default {
  title: "Alerts",
};

// import "../src/base.css";

export const AlertBase = () => `<div class="alert">
<div class="alert-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
<g clip-path="url(#clip0)">
  <path fill="#1C2224" d="M8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm3.467 11.48a.678.678 0 01-.942.042l-3.306-3.03A.666.666 0 017 8V4.333a.667.667 0 111.333 0v3.374l3.09 2.832a.666.666 0 01.044.942z"/>
</g>
<defs>
  <clipPath id="clip0">
    <path fill="#fff" d="M0 0h16v16H0z"/>
  </clipPath>
</defs>
</svg></div>
This is an alert bar
</div>`;

export const AlertError = () => `<div class="alert alert-error">
<div class="alert-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
<g clip-path="url(#clip0)">
  <path fill="#D1212D" d="M15.413 13.333L9.18 1.433a1.333 1.333 0 00-2.362 0l-6.232 11.9a1.334 1.334 0 001.182 1.952H14.23a1.333 1.333 0 001.182-1.952zm-8.08-7.718a.667.667 0 011.334 0v4a.667.667 0 11-1.334 0v-4zm.7 7.674h-.018A1.019 1.019 0 017 12.309a.984.984 0 01.965-1.02h.019a1.018 1.018 0 01.954 1.362.984.984 0 01-.905.638z"/>
</g>
<defs>
  <clipPath id="clip0">
    <path fill="#fff" d="M.435.719h15.13v14.566H.435z"/>
  </clipPath>
</defs>
</svg>
</div>
This is an alert bar
</div>`;

export const AlertSuccess = () => `<div class="alert alert-success">
<div class="alert-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
<g clip-path="url(#clip0)">
  <path fill="#007B2D" d="M8 0a8 8 0 108 8 8.01 8.01 0 00-8-8zm4.618 5.467l-4.563 6.192a.674.674 0 01-.954.126L3.843 9.179a.667.667 0 11.833-1.041l2.717 2.174 4.152-5.634a.665.665 0 011.129.031.669.669 0 01-.056.758z"/>
</g>
<defs>
  <clipPath id="clip0">
    <path fill="#fff" d="M0 0h16v16H0z"/>
  </clipPath>
</defs>
</svg>
</div>
This is an alert bar
</div>`;
