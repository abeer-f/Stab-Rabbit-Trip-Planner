const request = require('supertest');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('should respond with 200 status and text/html content type', () => {
        return request(server)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);
      });
    });
  });
});
