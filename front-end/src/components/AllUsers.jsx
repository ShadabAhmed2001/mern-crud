import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllUsers = () => {
  let [users,setUsers]=useState([])

  

  async function getUsers()
  {
    let {data}=await axios.get("http://localhost:4000/users")
    setUsers(data)

  }

  useEffect(()=>{
    getUsers();
    },[])
  
    
  return (
    <section>
      {
        users.map(({_id,name,email,ph_number})=>{
          return(
            <div key={_id}>
              <div>
                <p><span>Name</span>: {name}</p>
                <p><span>Email</span>: {email}</p>
                <p><span>Ph_Number</span>: {ph_number}</p>
              </div>
              <div>
                <button>Edit</button>
                <button>Delete</button>
                <button></button>
              </div>
            </div>
          )
        })
      }
    </section>
      
  )
}

export default AllUsers