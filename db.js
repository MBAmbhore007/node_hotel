const mongoose=require('mongoose');
require("dotenv").config()
//Define URL
//const mongoUrl="mongodb://127.0.0.1:27017";
const mongoUrl= process.env.DB_URL; // this link will help us to connecting our server to Mongo DB server, which is present Globally, i.e we are deploying our DB server
//Use this URL to connect
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//create Object for Connection

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("It is Connected");
})

db.on('error',(err)=>{
    console.log('some error');
})

db.on('disconnected',()=>{
    console.log("MongoDB Disconnected");
})

module.exports=db;
