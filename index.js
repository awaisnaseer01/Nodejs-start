const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("WELCOME TO EXPRESS AND NODE JS")
})

app.post('/createUser', (req,res)=>{
    console.log("REQUEST",req)
    res.send("User Created")
})

app.listen(8080, ()=>{
    console.log("listening to port 400")
})