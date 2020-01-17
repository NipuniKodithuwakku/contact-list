var express= require('express');
var bodyparser= require('body-parser');
var cors= require('cors');
var mongoose= require('mongoose');
var routes=require('./route/contacts_route');

var app=express();

const port=3000;

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist')
mongoose.connection.on('connected',()=>{
    console.log("mongo db connection successfull");
});
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error:',err);
    }
})

app.use(cors());
app.use(bodyparser.json());
app.use('/',routes);

app.get('/',(req,res)=>{
    res.send("nipuni chandula");
})

app.listen(port,()=>console.log("server started at"+port))