import app from './app.js';
import config from './config.js';
import { Server } from 'socket.io';

const { port } = config;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);	
});

const io = new Server(server);

io.on('connection', (socket) => {

  socket.emit('single', 'para uno');
  io.emit('all', 'Conectado')

  socket.on('echo', (data) =>{
    console.log('echo');
    io.emit('all', data);
  });

  console.log(`a user connected from ${socket.handshake.address}`);
  socket.on('disconnect', () => {
    console.log(`user disconnected from ${socket.handshake.address}`);	
  });
});

setInterval(() => {
  io.emit('date', new Date());
}, 1000);