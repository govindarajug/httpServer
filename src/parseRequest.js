const parseRequestLine = (requestLine) => {
  const [method, uri, httpVersion] = requestLine.split(' ');
  return { method, uri, httpVersion };
};

const parseHeader = (line) => {
  const indexOfSeparator = line.indexOf(':');
  const header = line.slice(0, indexOfSeparator).toLowerCase();
  const value = line.slice(indexOfSeparator + 1).trim();
  return { header, value };
};

const parseHeaders = (lines) => {
  const headers = {};
  let index = 0;
  while (index < lines.length && lines[index]) {
    const { header, value } = parseHeader(lines[index]);
    headers[header] = value;
    index++;
  }
  return headers;
};

const parseRequest = (chunk) => {
  const lines = chunk.split('\r\n');
  const { method, uri, httpVersion } = parseRequestLine(lines[0]);
  const headers = parseHeaders(lines.slice(1));
  return { method, uri, httpVersion, headers };
};

module.exports = { parseRequest, parseRequestLine, parseHeaders, parseHeader };
