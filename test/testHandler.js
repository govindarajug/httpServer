const assert = require('assert');
const { handler } = require('../src/handler.js');

const mockResponse = (expected) => {
  return {
    send: (text, statusCode) => {
      const response = `HTTP/1.1 ${statusCode} OK\r\n\r\n${text}\r\n`;
      assert.equal(response, expected);
    }
  };
};

describe('handler', () => {
  it('Should respond with HELLO when uri is /', () => {
    const request = { uri: '/' };
    const expected = 'HTTP/1.1 200 OK\r\n\r\nHELLO\r\n';
    const mockedResponse = mockResponse(expected);
    handler(request, mockedResponse);
  });

  it('Should respond with UNKNOWN when uri is not /', () => {
    const request = { uri: '/something' };
    const expected = 'HTTP/1.1 404 OK\r\n\r\nUNKNOWN\r\n';
    const mockedResponse = mockResponse(expected);
    handler(request, mockedResponse);
  });
});
