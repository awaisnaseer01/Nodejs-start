const express = require('express');
const app = express();

const user = require('./Controllers/UserController')

var router = require("express").Router();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1/TEST_DATABASE')
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Connectivity Error", error);
    process.exit(1);
  });


app.use("/", router);

router.post('/createUser',(request,response) => {
  console.log("req", request.body)
  user.createUSER(request.body)
  response.send("SUCCESS")
});
app.get('/', (req,res)=>{
    res.send("WELCOME TO EXPRESS AND NODE JS")
})

app.listen(8080, ()=>{
  console.log("Listening to port 8080")
})


