/**
 * @jest-environment node
 */
const app = require('../src/app');
const {
  jokesResponse,
  randomJokesResponse,
  personalisedRandomJoke,
} = require('../testData/mockData');
const request = require('supertest');
const nock = require('nock');

describe('GET / - Homepage', () => {
  it('should respond with the homepage markup', done => {
    request(app)
      .get('/')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello, welcome to my jokes API!');
        done();
      });
  });
});

describe('GET /jokes', () => {
  it('should respond with a list of jokes', done => {
    const mockResponse = jokesResponse;

    nock('https://api.icndb.com')
      .get('/jokes')
      .reply(200, mockResponse);

    request(app)
      .get('/jokes')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.jokes).toEqual(mockResponse.value);
        done();
      });
  });
  it('should respond with an error message if something goes wrong', done => {
    nock('https://api.icndb.com')
      .get('/jokes')
      .replyWithError({
        statusCode: 500,
        message: 'huge error',
      });

    request(app)
      .get('/jokes')
      .then(res => {
        expect(res.statusCode).toEqual(500);
        expect(res.body.error).toEqual('huge error');
        done();
      });
  });
});

describe('GET /jokes/random', () => {
  it('should respond with a random joke', done => {
    const mockResponse = randomJokesResponse;

    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({
        exclude: '[explicit]',
      })
      .reply(200, mockResponse);

    request(app)
      .get('/jokes/random')
      .then(res => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.randomJoke).toEqual(mockResponse.value);
        done();
      });
  });
  it('should respond with an error message if something goes wrong', done => {
    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({
        exclude: '[explicit]',
      })
      .replyWithError({
        statusCode: 500,
        message: 'huge error',
      });

    request(app)
      .get('/jokes/random')
      .then(res => {
        expect(res.statusCode).toEqual(500);
        expect(res.body.error).toEqual('huge error');
        done();
      });
  });
});

describe('GET /jokes/random/personal', () => {
  it('should respond with a personalised joke message', async () => {
    const mockResponse = personalisedRandomJoke;

    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({
        exclude: '[explicit]',
        firstName: 'manchester',
        lastName: 'codes',
      })
      .reply(200, mockResponse);

    const res = await request(app).get('/jokes/personal/manchester/codes');
    expect(res.statusCode).toEqual(200);
    expect(res.body.personalJoke).toEqual(mockResponse.value);
  });

  it('should respond with an error message if something goes wrong', async () => {
    nock('https://api.icndb.com')
      .get('/jokes/random')
      .query({
        exclude: '[explicit]',
        firstName: 'manchester',
        lastName: 'codes',
      })
      .replyWithError({
        statusCode: 500,
        message: 'huge error',
      });

    const res = await request(app).get('/jokes/personal/manchester/codes');
    expect(res.statusCode).toEqual(500);
    expect(res.body.error).toEqual('huge error');
  });
});
