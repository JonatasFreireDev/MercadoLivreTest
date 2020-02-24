import express from 'express';

import cors from 'cors';

import routes from './routes';

class App {
   constructor() {
      this.server = express();
      this.routes();
   }

   routes() {
      this.server.use(cors());
      this.server.use(routes);
   }
}

export default new App().server;
