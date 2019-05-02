const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const cors = require('cors');
const paths = require('./../config/paths');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 9000

app.use(cors());
app.use("/", express.static(paths.public));
app.use('*', (req,res) =>res.sendFile(paths.index));

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));
