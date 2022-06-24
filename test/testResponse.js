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
    const expected = 'hello';
    const mockedSocket = mockSocket();
    const response = new Response(mockedSocket);
    response.write('hello');
    assert.strictEqual(mockedSocket.message, expected);
  });
});
