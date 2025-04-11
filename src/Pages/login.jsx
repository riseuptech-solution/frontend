import React from 'react';
import Layout from "../Components/Layout";
import "../css/login.css";

function Login() {
  return (
    <Layout>
      <div className='login-main'>
        <h4>Welcome Back</h4>
        <form>
          <div className='input'>
            <input 
              type='email' 
              placeholder='Email Address' 
              name='email'
              required
            />
          </div>

          <div className='input'>
            <input 
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