import { createUser, getUserByName} from "../services/mongodb/user-db-services.js";
import { encryptPassword } from "../utils/encrypt.js";

export async function getUsersController(req, res, next) {
  try {
    const users = await getUserByName(req.query);
    return res.send(users);
  } catch (error) {
    next(error);
  }
}

export async function createUserController(req, res, next) {
  try {
    const body = req.body;
    body.password = await encryptPassword(body.password);
    const user = await createUser(req.body);
    return res.status(201).send(user);
  } catch (error) {
    next(error);
  }
}
