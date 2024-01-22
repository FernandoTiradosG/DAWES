import 'dotenv/config'

const config = {
  port: process.env.PORT || 3000,
}

export const jph = {
  url: process.env.JPH_URL,
}

export default config;