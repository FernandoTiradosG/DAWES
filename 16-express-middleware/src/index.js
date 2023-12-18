import express from 'express';
import router from './router.js';
import { logger } from './middlewares.js'
import morgan from 'morgan'

const port = 3000;
const server = express();

server.use(morgan('dev'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

server.use(router);

server.use((req, res) => {
  res.status(404).json({
    code: 404,
    error: 'Not Found',
    message: 'Error: Path not found',
  });
});

server.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Server Error');
});

server.listen(port, () => {
  logger.info(`Server ready at http://localhost:${port}`);
});
