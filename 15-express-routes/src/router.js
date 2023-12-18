import express from 'express';
import * as controllers from './controllers.js';

const router = express.Router();

router.get('/ping', controllers.pingController);
router.get('/header', controllers.headersController);
router.get('/query', controllers.queryController);
router.get('/params', controllers.paramsController);
router.get('/params/:name', controllers.greetingsController);
router.get('/body', controllers.bodyController);

const animalsRouter = express.Router();

animalsRouter.get('/dog', controllers.dogController);
animalsRouter.get('/cat', controllers.catController);
animalsRouter.get('/bird', controllers.birdController);

router.use('/animals', animalsRouter);

router.route('/book')
  .get((req, res) => res.send('Get a random book'))
  .post((req, res) => res.send('Add a book'))
  .put((req, res) => res.send('Update the book'));

export default router;
