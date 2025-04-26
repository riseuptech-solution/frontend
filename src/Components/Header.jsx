import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseUserContext from '../hooks/useUserContext';
import { api } from '../utils/api';
import "../css/header.css"
const Header = () => {

  const {user,userDispatch}=UseUserContext()
  const navigate=useNavigate()
  const handleLogout=async()=>{
    try {
      const response=await api.post("/user/logout")
      userDispatch({type:"LOGOUT"})
      localStorage.removeItem("token")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <header className="header">
          <div className="logo">
            <img src="logo.png" alt="Logo" /> {/* Replace with your actual logo path */}
          </div>
          <div className="welcome-text">Welcome</div>
          {user.token===null?(<button className="login-button">Login</button>):<button onClick={handleLogout} className="login-button">Logout</button>}
        
          
          
    </header>
  );
};

export default Header;
