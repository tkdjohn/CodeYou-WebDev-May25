console.log("hello");
const response = await fetch ('http://google.com/');
const htmlContent = await response.text();
console.log(htmlContent);

