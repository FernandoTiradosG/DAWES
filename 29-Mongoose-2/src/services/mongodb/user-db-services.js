import { User } from '../../models/index.js';

export async function getUserByName(username, password) {
  const user = await User.findOne({ username });

  return user;
}

export async function getUser(filters) {
  const { name } = filters;

  const query = {
    username: name && new RegExp(name, 'i') //name ? new RegExp(name, 'i') : undefined,
  };

  const cleanedQuery = Object.fromEntries(
    Object.entries(query).filter(([_, a]) => a !== undefined)
  )

  const users = await User.find(cleanedQuery);
  return users;
}

export async function createUser(user) {
  const userDoc = new User(user);
  const createdUser = await userDoc.save();
  return createdUser;
}
