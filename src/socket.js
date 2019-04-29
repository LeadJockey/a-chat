

function a(socket){
  socket.on('event_name', (data) =>{
    console.log('Message from Client: ' + data);
  });
}