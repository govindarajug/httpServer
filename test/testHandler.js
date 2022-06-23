const assert = require('assert');
const { handler, response } = require('../src/handler.js');

const mockResponse = (expected) => {
  return {
    write: (text) => {
      assert.equal(text, expected);
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

describe('response', () => {
  it('Should return response with given status code and text', () => {
    const expected = 'HTTP/1.1 200 OK\r\n\r\nHELLO\r\n';
    assert.strictEqual(response('HELLO', 200), expected);
  });
});
