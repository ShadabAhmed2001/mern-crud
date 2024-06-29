const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

let app=express()

mongoose.connect("mongodb://localhost:27017/mern-crud").then(()=>{console.log("mongodb connected successfully")}).catch((err)=>{console.log(err);})
let user_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ph_number:{
        type:String,
        required:true
    }
})
let user_model=mongoose.model("users",user_schema)

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/adduser",async (req,res)=>{
    let a=await user_model.create(req.body)
    res.json({message:"user added successfully"}).status(201)
})


app.listen(4000,()=>{console.log("server started");})