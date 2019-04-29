const app = require('express')();
const server = require('http').createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => res.sendFile(__dirname + "/chat-client.html"));

io.sockets.on("connection", function(socket) {

  socket.on("join-room", ({ roomId }) => socket.join(roomId));

  socket.on("send-room-msg", ({ roomId, msg }) =>
    io.sockets.in(roomId).emit("send-room-msg", msg)
  );
  
});

server.listen(3000, () => console.log("server listening on port 3000"));
