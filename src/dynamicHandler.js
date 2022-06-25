let count = 0;

const dynamicHandler = ({ uri }, response) => {
  count++;
  if (uri === '/dynamic') {
    response.setHeader('content-type', 'text/plain');
    response.send(`Number of times you visited :${count}`, 200);
    return true;
  }
  return false;
};

module.exports = { dynamicHandler };
