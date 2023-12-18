import app from './app.js';
import config from './config.js'
import logger  from './utils/logger.js'

const port = config.app;

app.listend(port, err => {
    if (err) {
        logger.error(err);
        return;
    }
    logger.info(`App listening on port ${port}!`);
});

