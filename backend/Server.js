const express=require('express');
const db=require('./Config/db')
require('dotenv').config();
const cors=require('cors');

const UserRoutes=require('./Routes/UserRoutes')


const app=express();

const PORT=process.env.PORT || 2000;


//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/users",UserRoutes);


//db function calling
db();

app.listen(PORT,()=>{
    console.log("Server running at port:",PORT);
})
