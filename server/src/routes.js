import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.get('/users/:id', UserController.getById);
routes.post('/users', UserController.store);
routes.put('/users/:id');

export default routes;
