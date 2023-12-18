import express from 'express';

function pointPostController(req, res) {
    res.send(req.body);
}

const port = 3000;
const server = express();

server.get('/', (req, res) => {res.send('Hello World!!!')});
server.get('/ping', (req, res) => {res.send('Pong')});
server.get('/:name', (req, res) => {
    const { name } = req.params;
    res.status(200).send(`Hello ${name}`);
})

server.get('/number', (req, res) => {
    const  n  = req.query.n || 100;
    
    const number = parseInt(n);

    const sum = (number * (number + 1))/2;

    res.send(`El resultado es ${sum}`);
})

server.post('/ping', pointPostController);

server.use('/page', express.static('./public'));

server.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`)
});