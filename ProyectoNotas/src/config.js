import 'dotenv/config';

const app = {
  port: process.env.PORT || 3000,
}

const pswd = {
  pswd: process.env.S_WORD || '1234',
}

const config = {
  app,
  pswd,
}

export default config;