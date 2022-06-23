const parseRequestLine = (requestLine) => {
  const [method, uri, httpVersion] = requestLine.split(' ');
  return { method, uri, httpVersion };
};

const parseRequest = (chunk) => {
  const lines = chunk.split('\r\n');
  const { method, uri, httpVersion } = parseRequestLine(lines[0]);
  return { method, uri, httpVersion };
};

module.exports = { parseRequest, parseRequestLine };
