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

if (localStorage.html_code == undefined) {
  htmlCode.value = '';
} else {
  htmlCode.value = localStorage.html_code;
}

if (localStorage.css_code == undefined) {
  cssCode.value = '';
} else {
  cssCode.value = localStorage.css_code;
}

if (localStorage.js_code == undefined) {
  jsCode.value = '';
} else {
  jsCode.value = localStorage.js_code;
}


window.onload = () => {
  result.contentDocument.body.setHTML(`<style>${cssCode.value}</style>` + htmlCode.value);
  result.contentWindow.eval(jsCode.value);
};
