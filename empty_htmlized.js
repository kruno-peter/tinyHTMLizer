// empty_htmlized.js - a simple Web server - returns an empty Web page
const http = require('http');
const tinyHTMLizer = require('./tinyHTMLizer');    // shorter: th

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');    // instead text/plain
  res.end(tinyHTMLizer.htmlize());    // htmlize! (without any args)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
