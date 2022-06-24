class Response {
  #socket;
  constructor(socket) {
    this.#socket = socket;
  }

  write(data) {
    this.#socket.write(data);
  }
}

module.exports = { Response };
