import express from 'express';
import * as controllers from './controllers.js';
import { printDateMiddleware, restrictedAreaMiddleware } from './middlewares.js';

const server = express();
const router = express.Router();

router.get('/ping', printDateMiddleware, controllers.pingController);
router.get('/header', printDateMiddleware, controllers.headersController);
router.get('/query', printDateMiddleware, controllers.queryController);
router.get('/params', printDateMiddleware, controllers.paramsController);
router.get('/params/:name', printDateMiddleware, controllers.greetingsController);
router.get('/body', printDateMiddleware, controllers.bodyController);

const animalsRouter = express.Router();

animalsRouter.get('/dog', printDateMiddleware, controllers.dogController);
animalsRouter.get('/cat', printDateMiddleware, controllers.catController);
animalsRouter.get('/bird', printDateMiddleware, controllers.birdController);

router.use('/animals', animalsRouter);

server.use(router);

router.get('/user', restrictedAreaMiddleware, printDateMiddleware, controllers.getUser)
router.post('/user', printDateMiddleware, controllers.postUser)

router.route('/book')
  .get((req, res) => res.send('Get a random book'))
  .post((req, res) => res.send('Add a book'))
  .put((req, res) => res.send('Update the book'));

export default router;
