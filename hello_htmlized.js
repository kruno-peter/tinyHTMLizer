// hello_htmlized.js - a simple HTMLized Web app:
// it shows the server response time and tests whether JavaScript is enabled
const http = require('http');
const tinyHTMLizer = require('./tinyHTMLizer.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const content = '<h1 id="p1">JS disabled</h1><p>The response time: ' + new Date() + '</p>';
  const title = 'Backend and Frontend Logic';
  const style = 'html { margin: 3\%; color: blue; }';    // watch out! backslash%
  const script = 'window.onload = () => document.getElementById("p1").innerHTML = "JS enabled";';
  const webPage = tinyHTMLizer.htmlize(content, title, style, script);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(webPage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
