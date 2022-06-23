const assert = require('assert');
const {
  parseRequest,
  parseRequestLine,
  parseHeaders,
  parseHeader } = require('../src/parseRequest.js');

describe('parseRequest', () => {
  it('Should Parse the request line', () => {
    const request = 'GET / HTTP/1.1';
    const expected = {
      method: 'GET',
      uri: '/',
      httpVersion: 'HTTP/1.1',
      headers: {}
    };
    assert.deepStrictEqual(parseRequest(request), expected);
  });

  it('Should Parse the request line and headers', () => {
    const request = 'GET / HTTP/1.1\r\nHost: localhost:1234\r\n\r\n';
    const expected = {
      method: 'GET',
      uri: '/',
      httpVersion: 'HTTP/1.1',
      headers: {
        host: 'localhost:1234'
      }
    };
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

describe('parseHeaders', () => {
  it('Should parse header host', () => {
    const expected = { host: 'localhost:123' };
    assert.deepStrictEqual(parseHeaders(['Host: localhost:123']), expected);
  });
  it('Should parse headers of the request', () => {
    const request = ['Host: localhost:123', 'User-Agent: prem'];
    const expected = {
      host: 'localhost:123',
      'user-agent': 'prem'
    };
    assert.deepStrictEqual(parseHeaders(request), expected);
  });
});

describe('parseHeader', () => {
  it('Should parse a header of the request', () => {
    const expected = {
      header: 'host',
      value: 'localhost:123'
    };
    assert.deepStrictEqual(parseHeader('Host: localhost:123'), expected);
  });
});
