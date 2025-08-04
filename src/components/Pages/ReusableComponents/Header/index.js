
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginDropDown, setIsLoginDropDown] = useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isCreateAccountPopupOpen, setIsCreateAccountPopupOpen] = useState(false);
  const [isEmailVerificationPopupOpen, setIsEmailVerificationPopupOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConfirmLogout, setIsConfirmLogout] = useState(false);
  const [islogin, setIslogin] = useState(false);

  const profileDropdownRef = useRef(null);
  const loginDropdownRef = useRef(null);
  const signInPopupRef = useRef(null);
  const createAccountPopupRef = useRef(null);
  const emailVerificationPopupRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleSaved = () => {
    navigate('/savedjobs');
    setIsMobileMenuOpen(false);
  };
  const handleAppliedJobs = () => {
    navigate('/appliedjobs');
    setIsMobileMenuOpen(false);
  };
  const handleResumeMaker = () => {
    navigate('/resumetemplates');
    setIsMobileMenuOpen(false);
  };
  const handleSubscribe = () => {
    navigate('/subscriptionplans');
    setIsMobileMenuOpen(false);
  };
  const handleChat = () => {
    navigate('/chat');
    setIsMobileMenuOpen(false);
  };
  const handleNotifications = () => {
    navigate('/notifications');
    setIsMobileMenuOpen(false);
  };
  const handleViewProfile = () => {
    navigate('/profilesetup');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  const handleLogin = () => {
    setIsSignInPopupOpen(true);
    setIsLoginDropDown(false);
    setIsMobileMenuOpen(false);
  };
  const handleCreateAccount = () => {
    setIsCreateAccountPopupOpen(true);
    setIsLoginDropDown(false);
    setIsMobileMenuOpen(false);
  };
  const handleEmailVerification = () => {
    setIsEmailVerificationPopupOpen(true);
    setIsLoginDropDown(false);
    setIsMobileMenuOpen(false);
  };
  const handleMyJobPosts = () => {
    navigate('/EmployerPostAJob');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  const handleSettings = () => {
    navigate('/settings');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  const handleDropdownNotifications = () => {
    navigate('/notifications');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token on logout
    navigate('/signin');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const cancelLogout = () => {
    setIsConfirmLogout(false);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const confirmLogout = () => {
    setIsConfirmLogout(true);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleSaveChanges = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('You must be logged in to save changes');
      return;
    }

    const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employees';
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          username,
          email,
          first_name: firstName,
          last_name: lastName,
          phone,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Profile updated successfully');
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      } else {
        setError(data.message || 'Failed to update profile');
      }
    } catch (err) {
      setError('Failed to connect to server. Try again later.');
    }
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleLoginDropdown = () => setIsLoginDropDown(!isLoginDropDown);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsLoginDropDown(false);
      }
      if (signInPopupRef.current && !signInPopupRef.current.contains(event.target)) {
        setIsSignInPopupOpen(false);
      }
      if (createAccountPopupRef.current && !createAccountPopupRef.current.contains(event.target)) {
        setIsCreateAccountPopupOpen(false);
      }
      if (emailVerificationPopupRef.current && !emailVerificationPopupRef.current.contains(event.target)) {
        setIsEmailVerificationPopupOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (localStorage.getItem('authToken') !== null) {
      console.log('true');
      setIslogin(true);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [role, setRole] = useState('Employer');
  const [verificationCode, setVerificationCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/auth/login';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', data.data.token);
        alert('Login successful');
        setIsSignInPopupOpen(false);
        navigate('/');
      } else {
        setError(data.message || 'Invalid username or password');
      }
    } catch (err) {
      setError('Failed to connect to server. Try again later.');
    }
  };

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!termsAgreed) {
      setError('You must agree to the Terms of Services');
      return;
    }
    const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employees';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
          first_name: firstName,
          last_name: lastName,
          phone,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Account creation successful. Please verify your email.');
        setIsCreateAccountPopupOpen(false);
        setIsEmailVerificationPopupOpen(true);
      } else {
        setError(data.message || 'Failed to create account');
      }
    } catch (err) {
      setError('Failed to connect to server. Try again later.');
    }
  };

  const handleEmailVerificationSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'http://ec2-3-88-111-53.compute-1.amazonaws.com:8080/verify-email';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Email verified successfully');
        setIsEmailVerificationPopupOpen(false);
        navigate('/');
      } else {
        setError(data.message || 'Invalid verification code');
      }
    } catch (err) {
      setError('Failed to connect to server. Try again later.');
    }
  };

  const handleResendCode = async () => {
    const apiUrl = 'http://ec2-3-88-111-53.compute-1.amazonaws.com:8080/resend-verification';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Verification code resent successfully');
      } else {
        setError(data.message || 'Failed to resend code');
      }
    } catch (err) {
      setError('Failed to connect to server. Try again later.');
    }
  };

  return (
    <header className="xyh-main-header" id="xyh-header">
      <div onClick={() => navigate('/')} className="xyh-logo-container">
        <img src="/imageswebsite/Group 160 (1).png" alt="Logo" className="xyh-logo-image" />
      </div>
      <button
        className="xyh-hamburger-menu"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <svg
            className="xyh-close-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            className="xyh-hamburger-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      <nav
        className={`xyh-navigation-bar ${isMobileMenuOpen ? 'xyh-mobile-open' : ''}`}
        ref={mobileMenuRef}
      >
        <button className="xyh-nav-item" onClick={handleSaved}>
          <img
            src="/imageswebsite/savedjobs.png"
            alt="Saved Jobs"
            className="xyh-nav-item-icon"
          />
          SAVED JOBS
        </button>
        <button className="xyh-nav-item" onClick={handleAppliedJobs}>
          <img
            src="/imageswebsite/icon image for man.png"
            alt="Applied Jobs"
            className="xyh-nav-item-icon"
          />
          APPLIED JOBS
        </button>
        <button className="xyh-nav-item" onClick={handleResumeMaker}>
          <img
            src="/imageswebsite/resumemackericon.png"
            alt="Resume Maker"
            className="xyh-nav-item-icon"
          />
          RESUME/CV MAKER
        </button>
        <button className="xyh-nav-item" onClick={handleSubscribe}>
          <img
            src="/imageswebsite/Subscription.png"
            alt="Subscription"
            className="xyh-nav-item-icon"
          />
          SUBSCRIPTION
        </button>
        <button className="xyh-nav-item xyh-icon-only-item" onClick={handleChat}>
          <img
            src="/imageswebsite/chaticonimage.png"
            alt="Chat"
            className="xyh-nav-item-icon"
          />
          <img className="dots" src="/imageswebsite/Ellipse 714 (1).png" alt="dot" />
        </button>
        <button className="xyh-nav-item xyh-icon-only-item" onClick={handleNotifications}>
          <img
            src="/imageswebsite/bellicon.png"
            alt="Notifications"
            className="xyh-nav-item-icon"
          />
        </button>
        <div className="xyh-mobile-user-profile">
          <button
            onClick={toggleLoginDropdown}
            className="xyh-user-name"
            aria-haspopup="true"
            aria-expanded={isLoginDropDown}
          >
            Login
          </button>
          {isLoginDropDown && (
            <div className="xyh-dropdown-menu xyh-login-dropdown" ref={loginDropdownRef}>
              <button className="xyh-dropdown-item" onClick={handleLogin}>
                <svg
                  className="xyh-dropdown-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24  Precision 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Login
              </button>
              <button className="xyh-dropdown-item" onClick={handleCreateAccount}>
                <svg
                  className="xyh-dropdown-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                  <line x1="12" y1="11" x2="12" y2="11" />
                  <path d="M12 7v-4m0 0H9m3 0h3" />
                </svg>
                Create Account
              </button>
              <button className="xyh-dropdown-item" onClick={handleEmailVerification}>
                <svg
                  className="xyh-dropdown-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                  <path d="M9 18l-6-6" />
                  <path d="M6 15l3 3" />
                </svg>
                Email Verification
              </button>
            </div>
          )}
          <div className="xyh-avatar-container" onClick={toggleDropdown} ref={profileDropdownRef}>
            <img
              src="/imageswebsite/Group 160 (1).png"
              alt="Profile"
              className="xyh-user-avatar"
            />
            {isDropdownOpen && (
              <div className="xyh-dropdown-menu">
                <button className="xyh-dropdown-item" onClick={handleViewProfile}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#033E8A"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  View Profile
                </button>
                <button className="xyh-dropdown-item" onClick={handleMyJobPosts}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#033E8A"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  My Job Posts
                </button>
                <button className="xyh-dropdown-item" onClick={handleSettings}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#033E8A"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l-.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v-.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  Settings
                </button>
                <button className="xyh-dropdown-item" onClick={handleDropdownNotifications}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#033E8A"
                    strokeWidth="2"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  Notifications
                </button>
                <button className="xyh-dropdown-item" onClick={handleSaveChanges}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#033E8A"
                    strokeWidth="2"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Save Changes
                </button>
                <button className="xyh-dropdown-item" onClick={handleLogout}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#033E8A"
                    strokeWidth="2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="xyh-user-profile xyh-desktop-user-profile">
        {!islogin && (
          <div>
            <a
              href="/signin"
              className="xyh-user-name"
              aria-haspopup="true"
              onClick={toggleLoginDropdown}
            >
              Login
            </a>
            <a
              onClick={toggleLoginDropdown}
              className="xyh-user-name"
              aria-haspopup="true"
              href="/signup"
            >
              &nbsp;&nbsp;| &nbsp;Sign Up
            </a>
          </div>
        )}
        {islogin && (
          <div className="xyh-avatar-container" onClick={toggleDropdown} ref={profileDropdownRef}>
            <div className='d-flex align-items-center gap-3'>
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>{localStorage.getItem("firstName")}</span>
              <img
                src="/imageswebsite/Group 160 (1).png"
                alt="Profile"
                className="xyh-user-avatar"
              />
            </div>
            {isDropdownOpen && (
              <div className="xyh-dropdown-menu">
                <button className="xyh-dropdown-item" onClick={handleViewProfile}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  View Profile
                </button>
                <button className="xyh-dropdown-item" onClick={handleMyJobPosts}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  My Job Posts
                </button>
                <button className="xyh-dropdown-item" onClick={handleSettings}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l-.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v-.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  Settings
                </button>
                <button className="xyh-dropdown-item" onClick={handleDropdownNotifications}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  Notifications
                </button>
                <button className="xyh-dropdown-item" onClick={handleSaveChanges}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Save Changes
                </button>
                <button className="xyh-dropdown-item" onClick={confirmLogout}>
                  <svg
                    className="xyh-dropdown-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {isConfirmLogout && (
        <div className="xyh-sign-in-popup-overlay">
          <div className="xyh-sign-in-popup" ref={signInPopupRef}>
            <div className="xyh-login-inner-right-container">
              <h2 className="xyh-login-sign-in-title">Confirm Logout</h2>
              <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '2rem' }}>Are you sure you want to logout?</p>
              <div className="xyh-login-social-buttons">
                <button className="xyh-login-social-button xyh-login-confirm-button" onClick={handleLogout}>
                  Confirm
                </button>
                <button className="xyh-login-social-button xyh-login-cancel-button" onClick={cancelLogout}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSignInPopupOpen && (
        <div className="xyh-sign-in-popup-overlay">
          <div className="xyh-sign-in-popup" ref={signInPopupRef}>
            <div className="xyh-login-inner-right-container">
              <div className="xyh-login-logo">Logo</div>
              <h2 className="xyh-login-sign-in-title">Sign In</h2>
              <p className="xyh-login-create-account-link">
                Don't have an account?{' '}
                <a
                  href="#create-account"
                  onClick={() => {
                    setIsSignInPopupOpen(false);
                    setIsCreateAccountPopupOpen(true);
                  }}
                >
                  Create Account
                </a>
              </p>
              {error && <p className="xyh-login-error-message">{error}</p>}
              <form className="xyh-login-form xyh-form-animated" onSubmit={handleSignIn}>
                <input
                  type="text"
                  placeholder="Username"
                  className="xyh-login-input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  aria-label="Username"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="xyh-login-input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                />
                <div className="xyh-login-remember-forgot">
                  <label className="xyh-label-data">
                    <input
                      type="checkbox"
                      className="xyh-login-checkbox"
                      aria-label="Remember me"
                    />
                    Remember Me
                  </label>
                  <a
                    href="/forgetpassword"
                    className="xyh-login-forgot-link"
                    onClick={() => setIsSignInPopupOpen(false)}
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="xyh-login-sign-in-button">
                  Sign In <span>→</span>
                </button>
              </form>
              <div className="xyh-login-or-separator">or</div>
              <div className="xyh-login-social-buttons">
                <button className="xyh-login-social-button xyh-login-facebook-button">
                  <img
                    src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
                    alt="Facebook Logo"
                    className="xyh-facebook-logo-google-logo"
                  />
                  Sign in with Facebook
                </button>
                <button className="xyh-login-social-button xyh-login-google-button">
                  <img
                    src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
                    alt="Google Logo"
                    className="xyh-facebook-logo-google-logo"
                  />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCreateAccountPopupOpen && (
        <div className="xyh-sign-in-popup-overlay">
          <div className="xyh-sign-in-popup" ref={createAccountPopupRef}>
            <div className="xyh-login-inner-right-container">
              <h2 className="xyh-login-sign-in-title">Step 1</h2>
              <h2 className="xyh-login-sign-in-title">Create account.</h2>
              <div className="xyh-create-account-link-container">
                <p className="xyh-login-create-account-link">
                  Already have an account?{' '}
                  <a
                    href="#signin"
                    onClick={() => {
                      setIsCreateAccountPopupOpen(false);
                      setIsSignInPopupOpen(true);
                    }}
                  >
                    Log In
                  </a>
                </p>
                <select
                  className="xyh-login-input-field xyh-create-account-type-select-one"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  aria-label="Role"
                >
                  <option value="Employer">Employer</option>
                  <option value="Employee">Employee</option>
                </select>
              </div>
              {error && <p className="xyh-login-error-message">{error}</p>}
              <form className="xyh-login-form xyh-form-animated" onSubmit={handleCreateAccountSubmit}>
                <div className="xyh-create-form-row">
                  <input
                    type="text"
                    placeholder="Username"
                    className="xyh-login-input-field"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    aria-label="Username"
                  />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="xyh-login-input-field"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    aria-label="First Name"
                  />
                </div>
                <div className="xyh-create-form-row">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="xyh-login-input-field"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    aria-label="Last Name"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="xyh-login-input-field"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    aria-label="Phone"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="xyh-login-input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="xyh-login-input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-label="Password"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="xyh-login-input-field"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  aria-label="Confirm Password"
                />
                <div className="xyh-login-remember-forgot">
                  <label>
                    <input
                      type="checkbox"
                      className="xyh-login-checkbox"
                      checked={termsAgreed}
                      onChange={(e) => setTermsAgreed(e.target.checked)}
                      aria-label="Terms of Services"
                    />
                    I've read and agree with your{' '}
                    <span className="xyh-span-terms-color">Terms of Services</span>
                  </label>
                </div>
                <button type="submit" className="xyh-login-sign-in-button">
                  Next <span>→</span>
                </button>
              </form>
              <div className="xyh-login-or-separator">or</div>
              <div className="xyh-login-social-buttons">
                <button className="xyh-login-social-button xyh-login-facebook-button">
                  <img
                    src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
                    alt="Facebook Logo"
                    className="xyh-facebook-logo-google-logo"
                  />
                  Sign up with Facebook
                </button>
                <button className="xyh-login-social-button xyh-login-google-button">
                  <img
                    src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
                    alt="Google Logo"
                    className="xyh-facebook-logo-google-logo"
                  />
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isEmailVerificationPopupOpen && (
        <div className="xyh-sign-in-popup-overlay">
          <div className="xyh-sign-in-popup xyh-email-verification" ref={emailVerificationPopupRef}>
            <div className="xyh-verification-content-one">
              <h2 className="xyh-verification-title">Email Verification</h2>
              <p className="xyh-verification-description">
                We sent a verification to{' '}
                <span className="xyh-verfiemail-one">{email || 'your email'}</span> to verify your email
                address and activate your account.
              </p>
              {error && <p className="xyh-verification-error">{error}</p>}
              <form className="xyh-verification-form" onSubmit={handleEmailVerificationSubmit}>
                <input
                  type="text"
                  placeholder="Verification Code"
                  className="xyh-verification-input"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  aria-label="Verification Code"
                />
                <button type="submit" className="xyh-verify-button">
                  Verify My Account <span>→</span>
                </button>
              </form>
              <p className="xyh-resend-link" onClick={handleResendCode}>
                Didn't receive any code? <span className="xyh-verfiemail-one">Resend</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
