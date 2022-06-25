const textHandler = ({ uri }, response) => {
  if (uri === '/') {
    response.setHeader('content-type', 'text/plain');
    response.send('HELLO', 200);
    return true;
  }
  return false;
};

module.exports = { textHandler };
