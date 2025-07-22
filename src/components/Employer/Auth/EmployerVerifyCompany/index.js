import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployerVerifyCompany.css';

const EmployerVerifyCompany = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the next step
  const handleNext = () => {
    navigate('/next-step'); // Adjust the navigation path as needed
  };

  return (
    <div className="login-container">
      {/* Left Section - Retained from previous design */}
      <div className="login-left-section">
        <h1 className="login-heading">Over 200 Companies Hiring<br />Top Talent Now.</h1>
        <div className="login-stats">
          <div className="login-stat-item">
            <div className="blur-background">
              <img
                src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
                alt="Verified Employers"
                className="login-stat-icon"
              />
            </div>
            <div className="login-start-container">
              <span className="login-stat-number">5,734</span>
              <span className="login-stat-label">Verified Employers</span>
            </div>
          </div>
          <div className="login-stat-item">
            <div className="blur-background">
              <img
                src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
                alt="Active Job Seekers"
                className="login-stat-icon"
              />
            </div>
            <div className="login-start-container">
              <span className="login-stat-number">12,359</span>
              <span className="login-stat-label">Active Job Seekers</span>
            </div>
          </div>
          <div className="login-stat-item">
            <div className="blur-background">
              <img
                src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
                alt="New Candidates"
                className="login-stat-icon"
              />
            </div>
            <div className="login-start-container">
              <span className="login-stat-number">1,812</span>
              <span className="login-stat-label">New Candidates</span>
            </div>
          </div>
        </div>
      </div>


      {/* Right Section - New design for Step 3 */}
      <div className="login-right-section">
        <div className="login-inner-right-container">
          <div className="login-logo">Logo</div>
          <h2 className="login-step-title">Step 3</h2>
          <h2 className="login-title">Verify Your Company</h2>
          <p style={{color:"#5E6670"}} className="login-subtitle">Complete Your Verification</p>

          <form className="login-form form-animated">
            <div className="login-input-wrapper">
              <input type="text" placeholder="Registration Certificate" className="login-input-field" />
              <button type="button" className="login-upload-button">+</button>
            </div>
            <div className="login-input-wrapper">
              <input type="text" placeholder="Latest Tax Returns" className="login-input-field" />
              <button type="button" className="login-upload-button">+</button>
            </div>
            <div className="login-input-wrapper">
              <input
                type="text"
                placeholder="Utility Bill or Lease Agreement"
                className="login-input-field"
              />
              <button type="button" className="login-upload-button">+</button>
            </div>
            <div className="login-input-wrapper">
              <input type="text" placeholder="Government ID" className="login-input-field" />
              <button type="button" className="login-upload-button">+</button>
            </div>
            <button className="login-sign-in-button" onClick={handleNext}>
              Next <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerVerifyCompany;