// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Docker!');
});

server.listen(80, () => {
  console.log('Server is running on http://localhost:8080');
});

