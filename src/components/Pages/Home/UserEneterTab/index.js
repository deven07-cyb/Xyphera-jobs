import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserEneterTab.css';  

const UserEneterTab = () => {
  const navigate = useNavigate();  

  // Functions to handle navigation
  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleCreateAccount = () => {
    navigate('/createaccount');
  };

  return (
    <div className="container">
      <div className="loginBox">
        <div className='lodo-container'>
            <div className="logo"></div>
        </div>
        <h1 className="title">Welcome to Xyphera Systems</h1>
        <p className="subtitle">Log in or Sign up to Get Started</p>
        <button className="button" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="button" onClick={handleCreateAccount}>
          Create An Account
        </button>
      </div>
    </div>
  );
};

export default UserEneterTab;