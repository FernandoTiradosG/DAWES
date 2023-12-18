import express from 'express';
import winston from 'winston';
import morgan from 'morgan';

const server = express();
server.use(morgan('dev'))

/*const { 
    createLogger,
    transports: { Console }
    format: { combine, timestamp, colorize, printf,} 
} = winston;*/

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

server.get('/ping', (req, res) => {
    console.log('PONG');
    res.send('PONG');
})


server.listen(3000, () => {
    logger.log({level: 'info', message: `Server is ready`})
    logger.warn(`Server is ready`)
    logger.error(`Server is ready`)
})