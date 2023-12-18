import winston from 'winston';

export function printDateMiddleware(req, res, next) {
    console.log(`${new Date().toISOString()} ${req.method}: ${req.path}`);
    next();
}

export const logger = winston.createLogger({
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
});

export function restrictedAreaMiddleware(req, res, next){
    const password = req.headers.password;

    if (password === 'patata') {
        next();
    }else {
        res.status(401).json({
            code: 401,
            error: 'Unauthorized',
            message: "Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabecera de la petición",
        });
    }
}