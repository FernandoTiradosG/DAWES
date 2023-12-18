import app from './app.js';
import logger from './utils/index.js'
import config from './config.js'
import { specs, swaggerUi } from '../swaggerConfig.js';

const { port } = config.app;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logger.info('Server started successfully');
});
