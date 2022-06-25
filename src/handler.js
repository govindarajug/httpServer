const homePageHandler = (request, response) => {
  response.setHeader('content-type', 'text/plain');
  response.send('HELLO', 200);
  return true;
};

const textHandler = (request, response) => {
  const { uri } = request;
  if (uri === '/home') {
    return homePageHandler(request, response);
  }
  if (uri === '/') {
    response.setHeader('Location', '/home');
    response.send('', 302);
    return true;
  }
  return false;
};

module.exports = { textHandler };
