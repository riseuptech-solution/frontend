import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from "../Components/Layout";
import "../css/login.css";
import {api} from "../utils/api"
import UseUserContext from '../hooks/useUserContext';
function Login() {
 const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(null)

  const navigate=useNavigate()

  const {user,userDispatch}=UseUserContext()
  const hanldeSubmit=async(e)=>{
    e.preventDefault()
    if(!email||!password){
      alert("all fileds are required")
    }

    try{

      const response=await api.post("/user/login",
        {
        body:({email,password}),
      })
      userDispatch({type:"LOGIN",payload:response.data.token})
      localStorage.setItem("token",response.data.token)
       navigate("/todo")
    }
    catch(error){
      setError(error.response.data.error)
    }
  }
  return (
    <Layout>
      
      <div className='login-main'>
        <h4>Login</h4>
         {error && <div className='error-message'>{error}</div>}
        <form onSubmit={hanldeSubmit}>
          <div className='input'>
            <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type='email' 
              placeholder='Email Address' 
              name='email'
              required
            />
          </div>

          <div className='input'>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type='password' 
              placeholder='Password' 
              name='password'
              required
            />
          </div>
          
          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" className="login-buttons">
            Sign In
          </button>
        </form>
        
        <p className="register-link">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </Layout>
  );
}

export default Login;