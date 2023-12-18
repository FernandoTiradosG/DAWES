import {Router} from 'express';

import { getUsers, getUserId, createUser} from './controllers/users.js';

const router = Router();

router.ping('/ping', pingController)
router.get('', getUsers);
router.post('', createUser);
router.get('/:id', getUserId);

module.exports = router;