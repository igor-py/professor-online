import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.get('/users/:id', UserController.getById);
routes.get('/users', UserController.getByTags);
routes.post('/users', UserController.createUser);
routes.put('/users/:id/tags', UserController.updateTags);

export default routes;
