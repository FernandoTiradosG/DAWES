import app from './app.js';
import config from './config.js';

const { port } = config;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

import { getPosts } from './services/jph-service.js';
const posts = await getPosts();
console.log(posts);