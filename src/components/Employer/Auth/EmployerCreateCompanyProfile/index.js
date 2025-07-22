import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployerVerifyCompanyProfile.css';

const EmployerCreateCompanyProfile = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/EmployerCreateAccount');
  };

  return (
    <div className="company-profile-wrapper">
      <div className="company-profile-left-panel">
        <h1 className="company-profile-main-title">Over 200 Companies Hiring<br/>Top Talent Now.</h1>
        <div className="company-profile-stats-container">
          <div className="company-profile-stat-block">
            <div className="company-profile-stat-icon-bg">
              <img
                src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
                alt="Verified Employers"
                className="company-profile-stat-icon-img"
              />
            </div>
            <div className="company-profile-stat-details">
              <span className="company-profile-stat-value">5,734</span>
              <span className="company-profile-stat-description">Verified Employers</span>
            </div>
          </div>
          <div className="company-profile-stat-block">
            <div className="company-profile-stat-icon-bg">
              <img
                src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
                alt="Active Job Seekers"
                className="company-profile-stat-icon-img"
              />
            </div>
            <div className="company-profile-stat-details">
              <span className="company-profile-stat-value">12,359</span>
              <span className="company-profile-stat-description">Active Job Seekers</span>
            </div>
          </div>
          <div className="company-profile-stat-block">
            <div className="company-profile-stat-icon-bg">
              <img
                src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
                alt="New Candidates"
                className="company-profile-stat-icon-img"
              />
            </div>
            <div className="company-profile-stat-details">
              <span className="company-profile-stat-value">1,812</span>
              <span className="company-profile-stat-description">New Candidates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="company-profile-right-panel">
        <div className="company-profile-form-container">
          <div className="company-profile-logo-placeholder">Logo</div>
          <h2 className="company-profile-step-label">Step 2</h2>
          <h2 className="company-profile-form-title">Company Profile</h2>
          <p className="company-profile-form-subtitle">Complete Your Company Profile</p>

          <form className="company-profile-form company-profile-form-animated">
            <div className="company-profile-form-row">
              <select className="company-profile-input company-profile-input-half" defaultValue="">
                <option value="" disabled>Industry</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
              </select>
              <input type="text" placeholder="Tagline" className="company-profile-input company-profile-input-half" />
            </div>
            <div className="company-profile-form-row">
              <select className="company-profile-input company-profile-input-half" defaultValue="">
                <option value="" disabled>Team Size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
              </select>
              <select className="company-profile-input company-profile-input-half" defaultValue="">
                <option value="" disabled>Headquarters</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="india">India</option>
              </select>
            </div>
            <div className="company-profile-form-row">
              <select className="company-profile-input company-profile-input-half" defaultValue="">
                <option value="" disabled>Location</option>
                <option value="newyork">New York</option>
                <option value="london">London</option>
                <option value="mumbai">Mumbai</option>
              </select>
              <select className="company-profile-input company-profile-input-half" defaultValue="">
                <option value="" disabled>Foundation Year</option>
                <option value="2020">2020</option>
                <option value="2015">2015</option>
                <option value="2010">2010</option>
              </select>
            </div>
            <div className="company-profile-input-group">
              <input type="text" placeholder="Logo" className="company-profile-input company-profile-input-logo" />
              <button type="button" className="company-profile-upload-btn">+</button>
            </div>
            <textarea
              placeholder="Short Description"
              className="company-profile-textarea"
              rows="4"
            ></textarea>
            <button className="company-profile-submit-btn" onClick={handleCreateAccount}>
              Create Account <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployerCreateCompanyProfile;