'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {
  const loingUsername = 'username' + Date.now();
  const loginPassword = 'Password';

  it('should GET /', async () => {
    await app.httpRequest()
      .get('/')
      .expect(200);
  });

  it('should GET /login', async () => {
    await app.httpRequest()
      .get('/login')
      .expect(200);
  });

  it('should POST /login', async () => {
    await app.httpRequest()
      .post('/login')
      .expect(403);
  });

  it('should POST /login ok', async () => {
    app.mockCsrf();
    const res = await app.httpRequest()
      .post('/login')
      .send({
        username: loingUsername,
        password: loingUsername
      });

    assert(res.statusCode === 302);
    assert(res.text.includes('Redirecting to <a href="/">/</a>.'));
  });

  it('should POST /login faile', async () => {
    app.mockCsrf();
    const res = await app.httpRequest()
      .post('/login')
      .send({
        username: loingUsername,
        password: loginPassword
      });

    assert(res.statusCode === 302);
    assert(res.text.includes('Redirecting to <a href="/login">/login</a>.'));
  });

  it('should GET /logout', async () => {
    const res = await app.httpRequest()
      .get('/logout')
      .expect(302);

    assert(res.text.includes('Redirecting to <a href="/">/</a>.'));
  });
}); 
