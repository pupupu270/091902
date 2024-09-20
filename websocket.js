
let websocket =require("ws");
let server = new websocket.Server({port:3000});

server.on("connection",(socket)=>{
console.log("connection");
});

console.log("ok");
