const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors");
const paths = require("./../config/paths");
const bindSocket = require('./socket');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 9000;

bindSocket(io);

app.use(cors());
app.use("/static", express.static(paths.public));
app.use("/api/v1/chat", (req, res) => res.sendFile(paths.data));
app.get("*", (req, res) => res.sendFile(paths.index));

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
