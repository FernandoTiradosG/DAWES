import bycrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config.js';

const users = [
  {
    id: 1,
    username: 'admin',
    password: '$2b$10$oxLcXdF8DOSlQSYi3Uz6HuMIg.lIdjnMspfsQYVhfZv1GV5Mfwyni', //"admin"
  },
  {
    id: 2,
    username: 'user',
    password: '$2b$10$J45m3TffG7QUJ7aKGlYOz.MgBaQP1pkR/zL4BHbjkLtpsMdKOomiy',// "patata123"
  }
];

function findUserByUsername(username) {
  return users.find(user => user.username === username);
}

const salt = 10;

function hashPassword(password) {
  return bycrypt.hashSync(password, salt);
}

export function createUser(req, res) {
  const { username, password } = req.body;

  const existingUser = findUserByUsername(username);

  if (existingUser) {
    return res.status(409).json({ error: 'El usuario ya existe' });
  }

  const hashedPassword = hashPassword(password);

  const newUser = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };

  users.push(newUser);

  res.status(201).json(newUser);
}

export function listUsers(req, res) {
  let users2 = [];

  if (req.filters) {
    users2 = users.filter(user => {
      for (const key in req.filters) {
        if (user[key] !== req.filters[key]) {
          return false;
        }
      }
      return true;
    });
  }

  if (req.sortedBy) {
    const { field, order } = req.sortedBy;
    users2 = users2.sort((a, b) => (a[field] > b[field] ? order : -order));
  }

  res.json(users2);
}

export function getUser(req, res) {
  const { id } = req.params;

  const user = users.find(user => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json(user);
}

export function deleteUser(req, res) {
  const { id } = req.params;

  const userIndex = users.findIndex(user => user.id === Number(id));

  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  users.splice(userIndex, 1);

  res.status(204).send();
}

export function editUser(req, res) {
  const { id } = req.params;
  const { username, password } = req.body;

  const user = users.find(user => user.id === Number(id));

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  if (username !== undefined) {
    user.username = username;
  }

  if (password !== undefined) {
    user.password = hashPassword(password);
  }

  res.json(user);
}

export function login(req, res) {
  const { username, password } = req.body;

  const user = findUserByUsername(username);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  try {
    const passwordMatches = bycrypt.compareSync(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }
    const PSWD = config.pswd;
    const token = jwt.sign({ id: user.id }, 'secret' , { expiresIn: '1h' });

    res.json({ token });
  } catch (error) { 
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
}