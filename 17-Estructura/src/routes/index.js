import {Router} from 'express';
import userRouter from 'users.js'

const router = Router();

router.use('/users', users);

module.exports = router;