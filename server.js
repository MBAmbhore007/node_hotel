const express = require('express')
const app = express()

const db=require('./db.js'); //help for connecting between Node.js and MongoDb

const person=require('./models/person.js'); //help for building schema
const menu=require('./models/menu.js'); // helped for building Menu Schema

const bodyParser=require('body-parser'); //help for ectracting data in specific format,so we can process it. All data gets stored at req.body
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello Brother')
})

app.get('/movies', function (req, res) {
    res.send('which movies you want to watach?')
  })

app.get('/movies/endgame',function(req,res){
  //console.log("we are in the endgame now!");
  res.send("we are in the endgame now");
})


const PersonRouter= require("./Routes/personRoutes.js");  /// Use this, for extracting router function from the routes file
app.use('/person',PersonRouter)  //as we have extracted, now we have written this function to use the personrouter function


const MenuRouter=require("./Routes/menurRoutes.js");
app.use('/menu',MenuRouter);

app.listen(3000,()=>{
    console.log('Server running on Port: 3000')
})