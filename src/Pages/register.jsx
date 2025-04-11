import React from 'react';
import Layout from "../Components/Layout";
import '../css/register.css'; // Import the CSS file

function Register() {
  return (
    <Layout>
      <div className='register-main'>
        <h4>Create Account</h4>
        <form>
          <div className='register-input'>
            <input 
              type='text' 
              placeholder='Full Name' 
              name='name'
              required
            />
          </div>
          
          <div className='register-input'>
            <input 
              type='email' 
              placeholder='Email Address' 
              name='email'
              required
            />
          </div>
          
          <div className='register-input'>
            <input 
              type='password' 
              placeholder='Create Password' 
              name='password'
              required
              minLength="8"
            />
            <p className="password-hint">Use at least 8 characters</p>
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