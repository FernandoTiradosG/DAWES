import express from 'express';
import { saludar } from './app.js'

const server = express();

server.get('/', (req, res) => {
    const saludarWeb = saludar();
    res.send(saludarWeb);
})

server.listen(3000);
console.log('Server is running on port 3000')