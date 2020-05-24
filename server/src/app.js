import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
