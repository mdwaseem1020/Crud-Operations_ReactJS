
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
    let navigate=useNavigate()

    let [modify,setmodify]=useState({name:'',email:'',username:''})
    function change(e){
        setmodify({...modify,[e.target.name]:e.target.value})
    }
    let {id}=useParams()
    useEffect(()=>{
        
        axios.get('http://localhost:4040/user/'+id).then(x=>setmodify(x.data))
        .catch(error=>console.error('error',error))
    },[])
    function update(e){
        e.preventDefault()  
        axios.put('http://localhost:4040/user/'+id,modify).then(()=>navigate('/'))
    }
    
  return (
   <>
   <div className='maincontainer'>
    <h1 className='addtext1'>Update users Details</h1>
   <form action="">
        <table className='maintable'>
            <caption></caption>
           
                <tbody className='addtbody'>
                <tr><td><input className='input' onChange={change} value={modify.name}  name='name' type="text" placeholder='name'/></td></tr>
                <tr><td><input className='input' onChange={change} value={modify.username}  name='username' type="text" placeholder='name'/></td></tr>
                <tr><td><input className='input' onChange={change} value={modify.email}  name='email' type="text" placeholder='email'/></td></tr>
                <tr><td><button className='addusers'     onClick={update}>Update Details  </button></td></tr>
                </tbody>
                </table>    
            </form>
            </div>
   
   </>
  )
}
