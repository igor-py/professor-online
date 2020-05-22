import { Router } from 'express';

const routes = new Router();

routes.get('/test', (req, res) => {
  console.log('hello world');
  const body = { message: 'Hello World' };
  return res.json(body);
});

export default routes;
