
let websocket =require("ws");
let server = new websocket.Server({port:2000});

server.on("connection",(socket)=>{
console.log("connection");
});

console.log("ok");
