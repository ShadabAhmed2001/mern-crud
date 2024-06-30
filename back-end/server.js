const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

let app=express()


// ! Database related code
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
},{timestamps:true})
let user_model=mongoose.model("users",user_schema)
// ^^^^^^^^^^^^^^^^^^^^


// ! middlewares
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// ^^^^^^^^^^^^^^^^^^^^^


// ! routes and controllers
app.get("/users",async(req,res)=>{
let users=await user_model.find()
if(users.length!==0){
    res.status(200).json(users)
}

})

app.post("/adduser",async (req,res)=>{
    let {email}=req.body
    let check=await user_model.findOne({email}) 
    
    if(!check) //! check if the email already exists in the database
    {
        let a=await user_model.create(req.body)  //? create() method will return a object will all the details including the ID (_id) created by MongoDB.
        console.log(a);
        res.status(201).json({message:"user added successfully"})
    }
    else{
        res.json({message:"email already exists"})
    }
})
// ^^^^^^^^^^^^^^^^^^^^


app.listen(4000,()=>{console.log("server started");})
