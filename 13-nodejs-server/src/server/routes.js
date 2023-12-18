import * as controllers from './controllers.js';

export const routes = {
  ping: controllers.pingController,
  json: controllers.jsonController,
  notFound: controllers.notFoundController,
  page: controllers.pageController,
  name: controllers.nameController,
  error: controllers.errorController,
};

export const defaultRoute = (request, response) => {
  response.statusCode = 302;
  response.setHeader('Location', '/notFound');
  return response.end('<h1>Redirected</h1>');
};
