import expressLoader from './express-loader.js';
import mongooseLoader from './mongoose-loader.js';

export function init(server, config){
    expressLoader(server);
    mongooseLoader(config.database);
}
