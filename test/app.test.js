// test/app.test.js
const request = require('supertest');
const app = require('../index.js'); // Import the app

describe('Test the root path', () => {
  it('should respond with "Hello World"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World');
  });
});

describe('Test the /about path', () => {
  it('should respond with "About Page"', async () => {
    const res = await request(app).get('/about');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('About Page');
  });
});
