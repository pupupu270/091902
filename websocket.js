
let websocket =require("ws");
let server = new websocket.Server();

server.on("connection",(socket)=>{
console.log("connection");
});

console.log("ok");
