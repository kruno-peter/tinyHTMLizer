// hello_htmlized.js - a simple HTMLized Web server
const http = require('http');
const tinyHTMLizer = require('./tinyHTMLizer.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const content = '<h1>Hi!</h1>The response time: <em>' + new Date() + '</em>';
  const title = 'Backend and Frontend Logic';
  const style = 'html { margin: 3\%; color: blue; }';    // backslash%
  const script = 'alert("A random number: " + Math.floor(Math.random() * 10));';
  const webPage = tinyHTMLizer.htmlize(content, title, style, script);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(webPage);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

