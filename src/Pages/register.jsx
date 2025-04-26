import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Components/Layout";
import '../css/register.css'; // Import the CSS file

function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!name||!email||!password||!phone){
      alert("all fileds are required")
    }
    // fetch meth built in method browser support
    const response=await fetch("/api/user/create",
      {method:"POST",
      body:JSON.stringify({name,email,phone,password}),
      headers:{"Content-Type":"application/json"}
    })
     const data=await response.json()
    if(!response.ok){
     return alert(data.error)
    }
    
     navigate("/")
  
  }
  return (
    <Layout>
      <div className='register-main'>
        <h4>Create Account</h4>
        <form onSubmit={handleSubmit}>
          <div className='register-input'>
            <input 
            value={name}
            onChange={(e)=>setName(e.target.value)}
              type='text' 
              placeholder='Full Name' 
              name='name'
              required
            />
          </div>
          
          <div className='register-input'>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type='email' 
              placeholder='Email Address' 
              name='email'
              required
            />
          </div>

          <div className='register-input'>
            <input 
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
              type='text' 
              placeholder='Mobile Phone' 
              name='phone'
              required
            />
          </div>
          
          <div className='register-input'>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type='password' 
              placeholder='Create Password' 
              name='password'
              required
              minLength="4"
            />
            <p className="password-hint">Use at least 4 characters</p>
          </div>
          
          <button type="submit" className="register-button">
            Sign Up
          </button>
        </form>
        
        <p className="login-link">
          Already have an account? <a href="/">Log in</a>
        </p>
      </div>
    </Layout>
  );
}

export default Register;