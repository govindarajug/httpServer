const { createServer } = require('net');

const html = (text) => `<html><body>${text}</body></html>`;

const response = (data) => `HTTP/1.1 200 OK\r\n\r\n${data}\r\n`;

const server = createServer((socket) => {
  socket.setEncoding('utf-8');
  socket.on('data', (data) => {
    socket.write(response(html('HELLO')));
    socket.end();
  });
});

server.listen(8080);
