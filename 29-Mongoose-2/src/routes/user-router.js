import { Router } from "express";
import { getUsersController, createUserController, getUserMe } from "../controllers/users-controller.js";
import { checkToken } from "../middlewares/auth-middleware.js";

const router = Router();

router.get('/', checkToken, getUsersController);
router.get('/me',checkToken, getUserMe)
router.post('/', createUserController);

export default router;
