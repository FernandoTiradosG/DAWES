import express from 'express';
import { login } from '../controllers/login-controller.js';
import miscRouter from './misc-router.js';
import animalRouter from './animal-router.js';

const router = express.Router();

router.use('/animals', animalRouter);

router.post('/login', login);

router.use(miscRouter);

export default router;
