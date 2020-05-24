import { Router } from 'express';
import UserController from './controllers/UserController';
import ChatController from './controllers/ChatController';
import SessionController from './controllers/SessionController';

import authMiddleware from './middlewares/auth';

const routes = new Router();

routes.get('/users/:id', authMiddleware, UserController.getById);
routes.get('/users', authMiddleware, UserController.getUsersByTags);
routes.post('/users', UserController.createUser);
routes.put('/users/:id/tags', authMiddleware, UserController.updateTags);

routes.get('/chat/', authMiddleware, ChatController.getChat);
routes.post('/chat', authMiddleware, ChatController.postMessage);

routes.post('/sessions', SessionController.SignIn);

export default routes;
