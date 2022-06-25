const fs = require('fs');

const serveErrorImage = (request, response) => {
  const body = fs.readFileSync('./public/error.jpeg');
  response.setHeader('content-type', 'image/jpeg');
  response.send(body, 200);
  return true;
};

const serveFileContent = (request, response, serveFrom) => {
  const { uri } = request;
  const fileName = serveFrom + uri;
  if (uri === '/error') {
    response.setHeader('location', '/none');
    response.send('', 302);
    return true;
  }
  if (!fs.existsSync(fileName)) {
    return serveErrorImage(request, response);
  }
  const body = fs.readFileSync(fileName);
  response.setHeader('content-type', 'text/plain');
  response.send(body, 200);
  return true;
};

module.exports = { serveFileContent };
