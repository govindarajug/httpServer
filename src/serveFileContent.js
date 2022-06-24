const fs = require('fs');

const serveFileContent = ({ uri }, response, serveFrom) => {
  const fileName = serveFrom + uri;
  if (!fs.existsSync(fileName)) {
    response.send('FILE NOT FOUND', 404);
    return;
  }
  const body = fs.readFileSync(fileName);
  response.send(body, 200);
};

module.exports = { serveFileContent };
