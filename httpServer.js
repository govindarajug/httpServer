const { createServer } = require('net');
const { parseRequest } = require('./src/parseRequest');

const html = (text) => `<html><body>${text}</body></html>`;

const response = (data) => `HTTP/1.1 200 OK\r\n\r\n${data}\r\n`;

const server = createServer((socket) => {
  socket.setEncoding('utf-8');
  socket.on('data', (data) => {
    const request = parseRequest(data);
    let message = 'unknown';
    if (request.uri === '/') {
      message = 'HELLO';
    }
    socket.write(response(html(message)));
    socket.end();
  });
});

server.listen(8080);
