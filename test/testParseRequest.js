const assert = require('assert');
const { parseRequest, parseRequestLine } = require('../src/parseRequest.js');

describe('parseRequest', () => {
  it('Should Parse the request line', () => {
    const request = 'GET / HTTP/1.1';
    const expected = { method: 'GET', uri: '/', httpVersion: 'HTTP/1.1' };
    assert.deepStrictEqual(parseRequest(request), expected);
  });
});

describe('parseRequestLine', () => {
  it('Should Parse the request line', () => {
    const request = 'GET / HTTP/1.1';
    const expected = { method: 'GET', uri: '/', httpVersion: 'HTTP/1.1' };
    assert.deepStrictEqual(parseRequestLine(request), expected);
  });
});

