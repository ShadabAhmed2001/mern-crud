import React, { useState } from 'react'
import "./users.css"
import axios from 'axios'

const AddUser = () => {
    let [userInfo,setUserInfo]=useState({name:"",email:"",ph_number:""})

    function updateInfo({target:{name,value}}){
        setUserInfo({...userInfo,[name]:value})
    }
    
   async function register(e){
        e.preventDefault()
        let {data}=await axios.post("http://localhost:4000/adduser",userInfo)
        console.log(data); //? will store the message sent from backend
        setUserInfo({name:"",email:"",ph_number:""})
    }

  return (
    
        <form onSubmit={register}>
            <label htmlFor="">Enter User Details</label>
            <input type="text" placeholder='Enter Full Name' name='name' onChange={updateInfo}  value={userInfo.name}/>
            <input type='text' placeholder='Enter Email' name='email' onChange={updateInfo} value={userInfo.email}/>
            <input type="number" placeholder='Enter Ph_Number' name='ph_number' onChange={updateInfo} value={userInfo.ph_number}/>
            <div className="btns">
                <button type="submit" className='submit'>Register</button>
                <button className='reset' onChange={()=>{setUserInfo({name:"",email:"",ph_number:""})}}>Reset</button>
            </div>
        </form>

  )
}

export default AddUser