import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
    let [data,setdata]=useState({name:'',email:'',username:''})

    let navigate=useNavigate()
    function name1(e){
        setdata({...data,[e.target.name]:e.target.value})
    }
    function update(e){
        e.preventDefault()
        axios.post('http://localhost:4040/user',data).then(()=>{
            navigate('/')
            
        })
        .catch(error=>console.error('error',error)
        )
    }

   
    
  return (
    <>
    <div className='maincontainer'>
        <h1 className='addtext1'>Add User Details</h1>
         <form action="">
        <table  className='maintable'>
            
           
                <tbody className='addtbody'>
                <tr><td><input className='input' onChange={name1} value={data.name} name='name' type="text" placeholder='name'/></td></tr>
                <tr><td><input className='input' onChange={name1} value={data.username} name='username' type="text" placeholder='username'/></td></tr>

                <tr><td><input className='input' onChange={name1} value={data.email} name='email' type="text" placeholder='email'/></td></tr>
                <tr><td><button className='addusers' onClick={update}>Add details </button></td></tr>
                </tbody>
                </table>    
            </form>
            </div>
       
    </>
  )
}