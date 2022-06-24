const { createServer } = require('net');
const { handler } = require('./src/handler.js');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');

const server = createServer((socket) => {
  socket.setEncoding('utf-8');
  socket.on('data', (data) => {
    const request = parseRequest(data);
    const response = new Response(socket);
    handler(request, response);
    socket.end();
  });
});

server.listen(8080);
