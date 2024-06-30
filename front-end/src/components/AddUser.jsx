import React, { useState } from 'react'
import "./users.css"
import axios from 'axios'

const AddUser = () => {
    let [userInfo,setUserInfo]=useState({name:"",email:"",ph_number:""})
    let [res,setRes]=useState("")

    function updateInfo({target:{name,value}}){
        setUserInfo({...userInfo,[name]:value})
    }
    
   async function register(e){
        e.preventDefault()
        let {data}=await axios.post("http://localhost:4000/adduser",userInfo)
        console.log(data); //? will store the message sent from backend
        setRes(data)
        setUserInfo({name:"",email:"",ph_number:""})
    }

  return (
    
        <form onSubmit={register}>
            <label htmlFor="">Enter User Details</label>
            <input type="text" placeholder='Enter Full Name' name='name' onChange={updateInfo}  value={userInfo.name}/>
            <input type='text' placeholder='Enter Email' name='email' onChange={updateInfo} value={userInfo.email}/>
            <input type="number" placeholder='Enter Ph_Number' name='ph_number' onChange={updateInfo} value={userInfo.ph_number}/>
            {res?<div>{res.message}</div>:null}
            <div className="btns">
                <button type="submit" className='submit'>Register</button>
            </div>
        </form>

  )
}

export default AddUser