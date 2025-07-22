import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();

  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [onlinePresence, setOnlinePresence] = useState('https://instagram.com/User_Name');

  // Navigation functions for sidebar and footer
  const handlePublicProfile = () => navigate('/profile');
  const handleAccountSettings = () => navigate('/accountsettings');
  const handleNotifications = () => navigate('/notifications');
  const handlePro = () => navigate('/pro');
  //const handleJobs = () => navigate('/jobs'); 
  const handleTerms = () => navigate('/terms');
  const handlePrivacy = () => navigate('/privacy');

  // Form handlers
  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert('Changes saved!');
    // Add logic to save profile changes (e.g., API call)
  };

  const handleCancel = () => {
    navigate('/jobs'); // Navigate back to JobsPage or another page
  };

  const handleSignOut = () => {
    alert('Signed out!');
    navigate('/signin'); // Navigate to home or login page after sign out
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deleted!');
      navigate('/signin'); // Navigate to home or login page after deletion
    }
  };

  const handleAddOtherPresence = () => {
    // Add logic to add another online presence field
    alert('Add another online presence link');
  };

  return (
    <div className="profile-page-container">
        <div className='head-contained-footer-con'>
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>SETTINGS</h2>
        <nav className="sidebar-nav">
          <button
            className="sidebar-nav-button active"
            onClick={handlePublicProfile}
          >
            Public profile
          </button>
          <button
            className="sidebar-nav-button"
            onClick={handleAccountSettings}
          >
            Account settings
          </button>
          <button
            className="sidebar-nav-button"
            onClick={handleNotifications}
          >
            Notifications
          </button>
          <button className="sidebar-nav-button" onClick={handlePro}>
            PRO
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="profile-content">
        <div className="profile-header">
          <h1>PROFILE</h1>
          <div className="profile-actions">
            <button className="cancel-button" onClick={handleCancel}>
              CANCEL
            </button>
            <button className="save-button" onClick={handleSaveChanges}>
              SAVE CHANGES
            </button>
          </div>
        </div>

        <form className="profile-form">
          <div className="profile-picture-section">
            <div className="profile-picture-placeholder">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="profile-picture-actions">
              <button type="button" className="change-picture-button">
                Change picture
              </button>
              <button type="button" className="delete-picture-button">
                Delete
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Change Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Change Location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Change Email id</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Change Email id"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Change Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Change Password"
            />
          </div>

          <div className="account-actions">
            <button
              type="button"
              className="delete-account-button"
              onClick={handleDeleteAccount}
            >
              DELETE ACCOUNT
            </button>
            <button
              type="button"
              className="sign-out-button"
              onClick={handleSignOut}
            >
              SIGN OUT
            </button>
          </div>

          <div className="online-presence-section">
            <h3>ONLINE PRESENCE</h3>
            <div className="form-group online-presence">
              <span className="instagram-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
              <input
                type="text"
                value={onlinePresence}
                onChange={(e) => setOnlinePresence(e.target.value)}
                placeholder="https://instagram.com/User_Name"
              />
            </div>
            <button
              type="button"
              className="add-other-button"
              onClick={handleAddOtherPresence}
            >
              + Add other
            </button>
          </div>
        </form>
      </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-bottom">
          <p className="footer-copyright" onClick={handlePrivacy}>
            Privacy Policy
          </p>
          <p className="footer-copyright">
            © Copyright 2024 JOBS. ALL RIGHTS RESERVED
          </p>
          <p className="footer-copyright" onClick={handleTerms}>
            Terms & Conditions
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;