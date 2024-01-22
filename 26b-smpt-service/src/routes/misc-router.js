import { Router } from 'express';
import { pingController } from '../controllers/misc-controller.js';
import { mailController } from '../controllers/mail-controller.js';

const router = Router();

router.get('/ping', pingController);

router.post('/mail', mailController);

export default router;
