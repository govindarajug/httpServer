const html = (text) => `<html><body>${text}</body></html>`;

const homePageHandler = (request, response) => {
  response.setHeader('content-type', 'text/plain');
  response.send('HELLO', 200);
  return true;
};

const convertFootToInch = (foot) => {
  return foot * 12;
};

const convertorHandler = (request, response) => {
  const { h } = request;
  const message = `${h} foot in inches is ${convertFootToInch(h)}`;
  response.send(html(message), 200);
  return true;
};

const textHandler = (request, response) => {
  const { uri } = request;
  if (uri === '/home') {
    return homePageHandler(request, response);
  }
  if (uri === '/convert') {
    return convertorHandler(request, response);
  }
  if (uri === '/error') {
    response.setHeader('Location', '/home');
    response.send('', 302);
    return true;
  }
  return false;
};

module.exports = { textHandler };
