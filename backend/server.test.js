const request = require('supertest');
const app = require('./server');

test('GET /products returns product list', async () => {
  const response = await request(app).get('/products');
  expect(response.status).toBe(200);
  expect(response.body).toEqual([{ id: 1, name: 'Sample Product', price: 10 }]);
});