// using fetch display posts fro jsonplaceholder.com onto the dom (https://jsonplaceholder.typicode.com/posts)
// https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

function button1() {
	window.onclick = document.getElementById("paragraph1").innerHTML='json';

var json = fetch('http://bar.com/data.json', {
  mode: 'no-cors'
})
.then(function() {
  JSON.parse(json)
})
.catch(function(error) {
  console.log('Something went wrong: \n', error);
});

