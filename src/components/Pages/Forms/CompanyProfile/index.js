import React from 'react';
import { useNavigate } from 'react-router-dom';
import './companyprofile.css';

const CompanyProfile = () => {
  const navigate = useNavigate();

  // Function to handle navigation after creating the account
  const handleCreateAccount = () => {
    navigate('/createaccount'); // Adjust the navigation path as needed
  };

  return (
    <div className="container">
      {/* Left Section - Same as VerifyAccount */}
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

      {/* Right Section - Updated for Company Profile */}
      <div className="rightSection">
        <div className="mainRightContainer">
          <div className="innerRightContainer">
            <h2 className="signInTitle">Step 4</h2>
            <h2 className="createAccountTitle">Company Profile</h2>
            <p className="createAccountSubtitle">Complete Your Company Profile</p>
            <form className="loginForm">
              <div className="formRow">
                <input type="text" placeholder="Category" className="inputField halfWidth" />
                <input type="text" placeholder="Tagline" className="inputField halfWidth" />
              </div>
              <div className="formRow">
                <input type="text" placeholder="Team Size" className="inputField halfWidth" />
                <input type="text" placeholder="Headquarters" className="inputField halfWidth" />
              </div>
              <div className="formRow">
                <input type="text" placeholder="Location" className="inputField halfWidth" />
                <input type="text" placeholder="Foundation Year" className="inputField halfWidth" />
              </div>
              <div className="inputWrapper">
                <input type="text" placeholder="Logo" className="inputField" />
                <button type="button" className="uploadButton1">+</button>
              </div>
              <textarea
                placeholder="Type Your Message"
                className="messageField"
                rows="4"
              ></textarea>
              <button className="signInButton" onClick={handleCreateAccount}>
                Create Account <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;