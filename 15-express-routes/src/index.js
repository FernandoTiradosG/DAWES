import express from 'express';
import router from './router.js';

const port = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(router);

server.use((req, res) => {
  res.status(404).json({
    code: 404,
    error: 'Not Found',
    message: 'Error: Path not found',
  });
});

server.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
