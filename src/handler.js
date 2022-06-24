const handler = ({ uri }, response) => {
  if (uri === '/') {
    response.send('HELLO', 200);
    return;
  }
  response.send('UNKNOWN', 404);
};

module.exports = { handler };
