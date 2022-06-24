const { createServer } = require('net');
const { handler } = require('./src/handler.js');
const { serveFileContent } = require('./src/serveFileContent.js');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');

const startServer = (port, handler, serveFrom = 'public') => {
  const server = createServer((socket) => {
    socket.setEncoding('utf-8');
    socket.on('data', (data) => {
      const request = parseRequest(data);
      const response = new Response(socket);
      handler(request, response, serveFrom);
      socket.end();
    });
  });

  server.listen(port);
};

startServer(8080, serveFileContent, process.argv[2]);
