const express = require('express')
const app = express();
const mongoose= require('mongoose')
const cors = require('cors');
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello from server")
})

app.post('/login',async (req,res)=>{
    console.log(req.body);
    res.send("Login")
})


app.post('/register',async (req,res)=>{
    const {email,password,username,phoneno,dob} = req.body
    console.log(req.body);
    res.send("Login")
})

mongoose.connect("mongodb://localhost:27017/Dhuledarshan").then(()=>{
    app.listen(5000,()=>{
        console.log("Server Listening...")
    })
}).catch((error) =>console.log(error))

