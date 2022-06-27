const { createServer } = require('net');
const { textHandler } = require('./src/handler.js');
const { serveFileContent } = require('./src/serveFileContent.js');
const { parseRequest } = require('./src/parseRequest.js');
const { Response } = require('./src/response.js');
const { pageNotFoundHandler } = require('./src/pageNotFound.js');
const { dynamicHandler } = require('./src/dynamicHandler.js');

const handle = (request, response, serveFrom) => {
  const handlers = [
    textHandler,
    dynamicHandler,
    serveFileContent,
    pageNotFoundHandler
  ];
  for (const handler of handlers) {
    if (handler(request, response, serveFrom)) {
      return true;
    }
  }
  return false;
};

const startServer = (port, handle, serveFrom = 'public') => {
  const server = createServer((socket) => {
    socket.on('data', (data) => {
      const request = parseRequest(data.toString());
      console.log(request.method, request.uri);
      const response = new Response(socket);
      handle(request, response, serveFrom);
    });
    socket.on('error', (err) => {
      console.log(err);
    });
  });

  server.listen(port);
};

startServer(8080, handle, process.argv[2]);
