class Response {
  #socket;
  constructor(socket) {
    this.#socket = socket;
  }

  send(body, statusCode) {
    this.#write(`HTTP/1.1 ${statusCode} OK`);
    this.#write('\r\n\r\n');
    this.#write(body);
    this.#write('\r\n');
    this.#socket.end();
  }

  #write(data) {
    this.#socket.write(data);
  }
}

module.exports = { Response };
