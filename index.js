const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening On : http://localhost:${PORT}`);
}

function handelHome(req,res){
    
    res.send('Hello From Home.')
}

function handelProfile(req,res){
   
    res.send('You are on my profile.');
}

app.get("/profile", handelProfile);
app.get("/", handelHome);
app.listen(PORT,handleListening);

