const pageNotFoundHandler = (request, response) => {
  response.send('Error page not found', 404);
  return true;
};

module.exports = { pageNotFoundHandler };
