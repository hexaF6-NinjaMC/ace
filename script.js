const htmlCode = document.querySelector('.html-code textarea');
const cssCode = document.querySelector('.css-code textarea');
const jsCode = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

function run() {
  localStorage.setItem('html_code', htmlCode.value);
  localStorage.setItem('css_code', cssCode.value);
  localStorage.setItem('js_code', jsCode.value);
  result.contentDocument.body.setHTML(`<style>${localStorage.css_code}</style>` + localStorage.html_code);
  result.contentWindow.eval(localStorage.js_code);
}

htmlCode.onkeyup = () => run();
cssCode.onkeyup = () => run();
jsCode.onkeyup = () => run();

htmlCode.value = localStorage.html_code;
cssCode.value = localStorage.css_code;
jsCode.value = localStorage.js_code;
