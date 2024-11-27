const express=require('express')
const http=require('http')
const {Server}=require('socket.io')

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:['http://localhost:5173'],
        methods:['GET', 'POST'],
    },
});

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; // {userId->socketId}


io.on('connection', (socket)=>{
    const userId = socket.handshake.query.userId
    console.log("......",userId)
    if(userId !== undefined){
        userSocketMap[userId] = socket.id;
    } 
    console.log("user connected",socket.id)
    io.emit('getOnlineUsers',Object.keys(userSocketMap));

    socket.on('disconnect', ()=>{
        delete userSocketMap[userId];
        io.emit('getOnlineUsers',Object.keys(userSocketMap));
    })

})


module.exports={app,io,server,getReceiverSocketId}
