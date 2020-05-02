const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req,res)=>{
    res.sendFile( "C:/Users/Admin/Desktop/SWAP/socketIO/index.html");
})

// io.on('connection',(socket)=>{
//     console.log('socket connected ');
// })

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('chat message', (msg) => {
    console.log('CHAT MESSAGE message: ' + msg);
    io.emit('chat message', msg);;
  });

  socket.on('disconnect',()=>{
      console.log(' disconnected');  
  });
});

http.listen( 5000, () => {
    console.log(" server listening on port ",5000);
})