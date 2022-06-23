const response = (data, statusCode) =>
  `HTTP/1.1 ${statusCode} OK\r\n\r\n${data}\r\n`;

const handler = ({ uri }, socket) => {
  if (uri === '/') {
    socket.write(response('HELLO', 200));
    return;
  }
  socket.write(response('UNKNOWN', 404));
};

module.exports = { handler, response };
