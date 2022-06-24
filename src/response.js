class Response {
  #socket;
  constructor(socket) {
    this.#socket = socket;
  }

  send(message, statusCode) {
    this.#write(`HTTP/1.1 ${statusCode} OK\r\n\r\n${message}\r\n`);
  }

  #write(data) {
    this.#socket.write(data);
  }
}

module.exports = { Response };
