const uuidv4 = require("uuid/v4");
const moment = require("moment-timezone");

const MOMENT_TZ = "Asia/Seoul";
const MOMENT_FORMAT = "YYYY.MM.DD/HH:mm:ss";

const JOIN_ROOM_CLIENT = "join_room_client";
const MSG_FROM_CLIENT = "msg_from_client";
const MSG_FROM_SERVER = "msg_from_server";

const createSocketData = (io, socket, data) => {
  console.log("data", data);

  const { roomId } = data;
  const clientIp = socket.request.connection.remoteAddress;
  const targetRoom = io.sockets.adapter.rooms[roomId];
  const connectedCount = targetRoom && targetRoom.length;
  const id = uuidv4();
  const datetime = moment()
    .tz(MOMENT_TZ)
    .format(MOMENT_FORMAT);
  return Object.assign({ id, datetime, clientIp, connectedCount }, data);
};

const bindSocket = io => {
  io.sockets.on("connection", socket => {
    
    console.log("sockets ready");
    socket.on(JOIN_ROOM_CLIENT, data => {
      const { roomId } = data;
      socket.join(roomId, () => {
        io.sockets
          .in(roomId)
          .emit(
            MSG_FROM_SERVER,
            createSocketData(io, socket, { roomId, msg: "connected" })
          );
      });
      socket.on("disconnect", () => {
        socket.broadcast
          .to(roomId)
          .emit(
            MSG_FROM_SERVER,
            createSocketData(io, socket, { roomId, msg: "left" })
          );
      });
    });
    
    socket.on(MSG_FROM_CLIENT, data => {
      const { roomId } = data;
      io.sockets
        .in(roomId)
        .emit(MSG_FROM_SERVER, createSocketData(io, socket, data));
    });
  });
};

module.exports = bindSocket;
