import http from 'http';

import { routes } from './server/routes.js';

const port = 4000;

const server = http.createServer((request, response) => {
  const route = routes[request.url.slice(1)] || routes.error;
  route(request, response);
});

server.listen(port, () => {
  console.log(`Server is ready in http://localhost:${port}`);
});
