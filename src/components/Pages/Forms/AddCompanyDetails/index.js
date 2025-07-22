import React from 'react';
import { useNavigate } from 'react-router-dom';
import './addcompanydetails.css';

const  AddCompanyDeatils = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the next step of Create Account
  const handleSignIn = () => {
    navigate('/verifyaccount');
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
             
            <h2 className="signInTitle">Step 2</h2>
            <h2 className="createAccountTitle">Add Company Details</h2>
            <p className="createAccountSubtitle">Complete the fields below</p>
            <form className="loginForm">
              <div className="formRow">
                <input type="text" placeholder="Company Name" className="inputField" />
                <input type="text" placeholder="Website" className="inputField" />
              </div>
              <input type="email" placeholder="Email address" className="inputField" />
              <input type="password" placeholder="Password" className="inputField" />
              <input type="password" placeholder="Confirm Password" className="inputField" />
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

export default AddCompanyDeatils;