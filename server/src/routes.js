import { Router } from 'express';
import UserController from './controllers/UserController';
import ChatController from './controllers/ChatController';

const routes = new Router();

routes.get('/users/:id', UserController.getById);
routes.get('/users', UserController.getUsersByTags);
routes.post('/users', UserController.createUser);
routes.put('/users/:id/tags', UserController.updateTags);

routes.get('/chat/', ChatController.getChat);
routes.post('/chat', ChatController.postMessage);

export default routes;
