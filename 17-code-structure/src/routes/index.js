import express from 'express';
import userRouter from './users.js';
import { pingController, adminAccessController, fibonacci } from '../controllers/misc-controller.js';
import { validateAdminMiddleware } from '../middlewares/misc-middleware.js';

const router = express.Router();

router.get('/ping', pingController);
router.get('/fib', fibonacci);
router.get('/admin', validateAdminMiddleware, adminAccessController);
router.use('/user', userRouter);

export default router;
