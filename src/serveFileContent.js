const fs = require('fs');

const serveFileContent = ({ uri }, response, serveFrom) => {
  const fileName = serveFrom + uri;
  if (!fs.existsSync(fileName)) {
    return false;
  }
  const body = fs.readFileSync(fileName);
  response.setHeader('content-type', 'text/html');
  response.send(body, 200);
  return true;
};

module.exports = { serveFileContent };
