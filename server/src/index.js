const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");
const paths = require("./../config/paths");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use("/static", express.static(paths.public));
app.get("*", (req, res) => res.sendFile(paths.index));

io.sockets.on("connection", socket => {
  console.log("connected");

  io.emit("test", "hello client");
  socket.on("JOIN::ROOM", opts => {
    socket.join(opts.id);
    io.sockets.in(opts.id).emit("JOIN::ROOM", { msg: "joined", info: "" });
    console.log("socket", socket.client.conn.server);
    console.log("opts", opts);
  });
});

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
