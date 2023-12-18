import express from 'express';
import winston from 'winston';
import morgan from 'morgan';

const server = express();
const userRouter = express.Router();

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'DD-MMM-YYYY HH:mm:ss'
                }),
                winston.format.colorize(),
                winston.format.printf((info) => `[${[info.timestamp]}] (${info.level}) ${info.message}`),
            )
        })
    ]

})

/*Middel */
function printDateMiddleware(req, res, next) {
    console.log(`${new Date().toISOString()} ${req.method}: ${req.path}`);
    next();
}

/*Controller*/
function pingController(req, res){
    console.log('PONG');
    res.send('PONG');
}

function getUser(req, res){
    res.send({ name: 'Fer'})
}

function postUser(req, res, next){
    try {
        res.send({ name: 'Fer'})
        throw new Error('fashó')
    } catch (error) {
        next(err);
    }
}

server.use('/[pu]', printDateMiddleware);
server.use(userRouter);

/*Route*/
server.get(`/ping`, printDateMiddleware, pingController)
userRouter.get('/user', printDateMiddleware, getUser)
userRouter.post('/user', printDateMiddleware, postUser)

server.use((err, req, res, _next) => {
    const { status = 500, message } = err;
    logger.error(status === 500 ? 'Server Error' : message);
    res.status(status).send(status === 500 ? 'Server Error' : message);
});

server.listen(3000, () => {
    logger.log({level: 'info', message: `Server is ready`})
    logger.warn(`Server is ready`)
    logger.error(`Server is ready`)
})