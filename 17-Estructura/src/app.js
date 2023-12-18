import express from 'express';
import * as loaders from './loaders';
import config from './config.js'

const app = express();

loaders.init(app, config);

module.exports = app;