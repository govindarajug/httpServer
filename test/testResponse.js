const assert = require('assert');
const { Response } = require('../src/response');

const mockSocket = () => ({
  message: '',
  write: function (text) {
    this.message += text;
  }
});

describe('Response', () => {
  it('Should write response on the socket', () => {
    const expected = 'HTTP/1.1 200 OK\r\n\r\nhello\r\n';
    const mockedSocket = mockSocket();
    const response = new Response(mockedSocket);
    response.send('hello', 200);
    assert.strictEqual(mockedSocket.message, expected);
  });
});
