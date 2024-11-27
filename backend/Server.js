const express=require('express')
const db=require('./Config/db')
require('dotenv').config();
const cors=require('cors');

const UserRoutes=require('./Routes/UserRoutes')
const MessageRoutes=require('./Routes/messageRoutes')
const {app,server}=require('./Socket/socket')

const PORT=process.env.PORT || 2000;

//db function calling
db();

//middlewares
app.use(express.json());
app.use(cors({
    origin:"*"
}));
app.use("/api/users",UserRoutes);
app.use("/api/message",MessageRoutes)

server.listen(PORT,()=>{
    console.log("Server running at port:",PORT);
})

