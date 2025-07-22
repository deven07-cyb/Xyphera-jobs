import React from 'react';
import { useNavigate } from 'react-router-dom';
import './verifiaccount.css';

const VerifyAccount = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the next step of Create Account
  const handleSignIn = () => {
    navigate('/companyprofile');
  };

  return (
    <div className="container">
      <div className="leftSection">
        <h1 className="heading">Over 200 Companies Hiring Top Talent Now.</h1>
        <div className="stats">
          <div className="statItem">
            <img src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png" alt="Verified Employers" className="statIcon" />
            <div className="start-container">
              <span className="statNumber">5,734</span>
              <span className="statLabel">Verified Employers</span>
            </div>
          </div>
          <div className="statItem">
            <img src="https://i.ibb.co/YFt0wVwj/user-search-01.png" alt="Active Job Seekers" className="statIcon" />
            <div className="start-container">
              <span className="statNumber">12,359</span>
              <span className="statLabel">Active Job Seekers</span>
            </div>
          </div>
          <div className="statItem">
            <img src="https://i.ibb.co/Kj03Kp0R/user-add-01.png" alt="New Candidates" className="statIcon" />
            <div className="start-container">
              <span className="statNumber">1,812</span>
              <span className="statLabel">New Candidates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rightSection">
        <div className="mainRightContainer">
          <div className="innerRightContainer">
            <h2 className="signInTitle">Step 3</h2>
            <h2 className="createAccountTitle">Verify Your Company</h2>
            <p className="createAccountSubtitle">Complete Your Verification</p>
            <form className="loginForm">
              <div className="inputWrapper">
                <input type="text" placeholder="Registration Certificate *" className="inputField" />
                <button type="button" className="uploadButton">+</button>
              </div>
              <div className="inputWrapper">
                <input type="text" placeholder="Latest Tax Returns *" className="inputField" />
                <button type="button" className="uploadButton">+</button>
              </div>
              <div className="inputWrapper">
                <input type="text" placeholder="Utility Bill or Lease Agreement *" className="inputField" />
                <button type="button" className="uploadButton">+</button>
              </div>
              <div className="inputWrapper">
                <input type="text" placeholder="Bank Statement or Cancelled Check *" className="inputField" />
                <button type="button" className="uploadButton">+</button>
              </div>
              <div className="inputWrapper">
                <input type="text" placeholder="Government ID *" className="inputField" />
                <button type="button" className="uploadButton">+</button>
              </div>
              <button className="signInButton" onClick={handleSignIn}>
                Next <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;