import 'dotenv/config';

const app = {
  port: process.env.PORT || 3000,
}

const pswd = {
  pswd: process.env.S_WORD || 'secret',
}

const config = {
  app,
  pswd,
}

export default config;