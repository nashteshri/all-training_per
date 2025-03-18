// const EventEmitter = require ("events");
// const myEmitter = new EventEmitter();
// myEmitter.on("order",(orderId,amount)=>{
//     console.log('Order received! order ID:${orderId},Amount: $${amount}');
// });
// myEmitter.emit("order",12345,250);



const http = require("http");
const EventEmitter = require("events");
const server = new EventEmitter();

server.on("request",(req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("hello,event_driven server!");
});

http.createServer((req,res)=>{
    server.emit("request", req,res);
}).listen(3000,()=>console.log("Server running on port 3000"));


