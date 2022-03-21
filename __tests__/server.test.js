'use strict';

const { it, expect } = require('@jest/globals');
const supertest = require('supertest');
const app = require('../server/server.js');
const request = supertest(app);

describe('Testing HTTP GET Request', () => {
  it('Respond with a status of 200 for the get request to /hello', async () => {
    const response = await request.get('/hello');

    expect(response.status).toEqual(200);
  })
})
describe('Testing HTTP GET Request', () => {
  it('Respond with a status of 200 for the get request to home route /', async () => {
    const response = await request.get('/');

    expect(response.status).toEqual(200);
  })
})