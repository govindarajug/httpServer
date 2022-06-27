const parseRequestLine = (requestLine) => {
  const [method, paramString, httpVersion] = requestLine.split(' ');
  return { method, paramString, httpVersion };
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

const parseQueryArgs = (parameters) => {
  const args = {};
  parameters.split('&').forEach(arg => {
    const [parameter, value] = arg.split('=');
    args[parameter] = value;
  });
  return args;
};

const parseParamString = (paramString) => {
  let params = {};
  const [uri, parameters] = paramString.split('?');
  if (parameters) {
    params = { ...params, ...parseQueryArgs(parameters) };
  }
  params.uri = uri;
  return params;
};

const parseRequest = (chunk) => {
  const lines = chunk.split('\r\n');
  const { method, paramString, httpVersion } = parseRequestLine(lines[0]);
  const paramArgs = parseParamString(paramString);
  const headers = parseHeaders(lines.slice(1));
  return { method, ...paramArgs, httpVersion, headers };
};

module.exports = { parseRequest, parseRequestLine, parseHeaders, parseHeader };
