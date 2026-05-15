const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  test('GET /health returns status 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });

  test('GET /health response body contains status: ok', async () => {
    const response = await request(app).get('/health');
    expect(response.body.status).toBe('ok');
  });

  test('GET / returns status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
