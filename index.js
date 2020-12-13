// Load required modules
require('dotenv').config();
const isDevelopment = (process.env.NODE_ENV === 'development');
const fs = require("fs"); // http server core module

const express = require("express"); // web framework external module

// Set process name
process.title = "networked-aframe-server";

let options = {};
if (isDevelopment) {
  options = {
    key: fs.readFileSync('./localhost.key'),
    cert: fs.readFileSync('./localhost.crt')
  };
}

// Get port or default to 8080
const port = process.env.PORT || 443;

// Setup and configure Express http server.
const app = express();
app.use(express.static('public'));

// Serve the example and build the bundle in development.


// Start Express http server
const webServer =  require(isDevelopment ? 'https' : 'http').createServer(options, app);;
const io = require("socket.io")(webServer);

const rooms = {};

io.on("connection", socket => {
  console.log("user connected", socket.id);

  let curRoom = null;

  socket.on("joinRoom", data => {
    const { room } = data;

    if (!rooms[room]) {
      rooms[room] = {
        name: room,
        occupants: {},
      };
    }

    const joinedTime = Date.now();
    rooms[room].occupants[socket.id] = joinedTime;
    curRoom = room;

    console.log(`${socket.id} joined room ${room}`);
    socket.join(room);

    socket.emit("connectSuccess", { joinedTime });
    const occupants = rooms[room].occupants;
    io.in(curRoom).emit("occupantsChanged", { occupants });
  });

  socket.on("send", data => {
    io.to(data.to).emit("send", data);
  });

  socket.on("broadcast", data => {
    socket.to(curRoom).broadcast.emit("broadcast", data);
  });

  socket.on("disconnect", () => {
    console.log('disconnected: ', socket.id, curRoom);
    if (rooms[curRoom]) {
      console.log("user disconnected", socket.id);

      delete rooms[curRoom].occupants[socket.id];
      const occupants = rooms[curRoom].occupants;
      socket.to(curRoom).broadcast.emit("occupantsChanged", { occupants });



      if (Object.keys(occupants).length === 0 && occupants.constructor === Object) {
        console.log("everybody left room");
        delete rooms[curRoom];
      }
    }
  });
});

webServer.listen(port, () => {
  console.log("listening on https://localhost:" + port);
});
