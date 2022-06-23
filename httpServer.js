const { createServer } = require('net');
const { handler } = require('./src/handler.js');
const { parseRequest } = require('./src/parseRequest.js');

const server = createServer((socket) => {
  socket.setEncoding('utf-8');
  socket.on('data', (data) => {
    const request = parseRequest(data);
    handler(request, socket);
    socket.end();
  });
});

server.listen(8080);
