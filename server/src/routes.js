import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.get('/users/:id', UserController.getById);
routes.get('/users', UserController.getUsersByTags);
routes.post('/users', UserController.createUser);
routes.put('/users/:id/tags', UserController.updateTags);

/* 
  - puxar mensagens entre dois usuarios
  - escrever mensagem nova entre dois users
*/

export default routes;
