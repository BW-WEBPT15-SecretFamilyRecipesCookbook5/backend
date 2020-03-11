const server = require('../../server');
const db = require('../../../data/dbConfig');
const request = require('supertest');
let token;

beforeAll(async () => {
  await db.raw('truncate users cascade');
  const user = {
    username: 'katniss',
    password: 'everdean',
  }
  return request(server)
  .post('/api/auth/register')
  .send(user);
});

describe('register', () => {
  it('it registers a user', () => {
    const user = {
      username: 'kays',
      email: 'kellsy@example.com',
    };
    return request(server)
      .post('/api/auth/register')
      .send(user)
      .expect(201)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(201);
        expect(res.body.user).toHaveProperty('username');
        expect(res.body.user).toHaveProperty('password');
      });
  });
  it('it returns a 400 error if user details is incomplete', () => {
    const user = {
      username: 'GrangerDanger',
      password: 'crookshanks'
    };
    return request(server)
      .post('/api/auth/register')
      .send(user)
      .expect(400)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(400);
      });
  });
});

describe('login', () => {
  it('returns a 200 if login is successful', () => {
    const user = {
      username: 'GrangerDanger',
      password: 'crookshanks'
    };
    return request(server)
      .post('/api/auth/login')
      .send(user)
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        token = res.body.token;
        expect(res.status).toEqual(200);
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('token');
      });
  });

  it('returns a 400 if user details is invalid', () => {
    const user = {
      username: '',
      password: ''
    };
    return request(server)
      .post('/api/auth/login')
      .send(user)
      .expect(400)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.status).toEqual(400);
        expect(res.body).toHaveProperty('message');
        
      });
  });
});

 

describe('Recipes', () => {
  beforeAll(async () => {
    await db('recipes').truncate();
  });

  it('should get token', () => {
    return request(server)
      .post('/api/auth/login')
      .send({
        username: 'katniss',
        password: 'everdean'
      })
      .then(res => {
        token = res.body.token;
      });
  });

  describe('Get Recipes', () => {
    it('returns a 404 if there is no recipe', async () => {
      return request(server)
        .get('/api/recipes')
        .set('authorization', token)
        .expect(404)
        .then(res => {
          expect(res.status).toEqual(404);
        });
    });
  })
});
module.export = token