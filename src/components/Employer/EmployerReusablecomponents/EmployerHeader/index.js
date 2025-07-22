//  import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './EmployerHeader.css';

// const EmployerHeader = () => {
//   const navigate = useNavigate();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isLoginDropDown, setIsLoginDropDown] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activePopup, setActivePopup] = useState(null);
//   const [createAccountStep, setCreateAccountStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     companyName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     industry: '',
//     tagline: '',
//     teamSize: '',
//     location: '',
//     headquarters: '',
//     foundationYear: '',
//     logo: null,
//     shortDescription: '',
//     registrationCertificate: null,
//     taxReturns: null,
//     utilityBill: null,
//     governmentId: null,
//   });
//   const [error, setError] = useState(''); // Centralized error state
//   const [isLoading, setIsLoading] = useState(false); // Loading state for sign-in

//   const profileDropdownRef = useRef(null);
//   const loginDropdownRef = useRef(null);
//   const popupRef = useRef(null);
//   const navRef = useRef(null);

//   // Navigation handlers
//   const handleSaved = () => {
//     navigate('/EmployerApplicationPage');
//     setIsNavOpen(false);
//   };
//   const handleAppliedJobs = () => {
//     navigate('/employercandidates');
//     setIsNavOpen(false);
//   };
//   const handleResumeMaker = () => {
//     navigate('/messagespage');
//     setIsNavOpen(false);
//   };
//   const handleSubscribe = () => {
//     navigate('/EmployerSubcription');
//     setIsNavOpen(false);
//   };
//   const handleNotifications = () => {
//     navigate('/notifications');
//     setIsNavOpen(false);
//   };
//   const handleViewProfile = () => {
//     navigate('/EmployerProfileSetups');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };
//   const handleMyJobPosts = () => {
//     navigate('/EmployerPostAJob');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };
//   const handleSettings = () => {
//     navigate('/settings');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };
//   const handleDropdownNotifications = () => {
//     navigate('/notifications');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };

//   // Popup handlers
//   const openSignInPopup = () => {
//     setActivePopup('signIn');
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//     console.log('Sign In popup opened'); // Debug log
//   };

//   const openCreateAccountPopup = () => {
//     setActivePopup('createAccount');
//     setCreateAccountStep(1);
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//   };

//   const openCompanyProfilePopup = () => {
//     setActivePopup('companyProfile');
//     setCreateAccountStep(2);
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//   };

//   const openVerifyCompanyPopup = () => {
//     setActivePopup('verifyCompany');
//     setCreateAccountStep(3);
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//   };

//   const openLogoutPopup = () => {
//     setActivePopup('logout');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };

//   const closePopup = () => {
//     setActivePopup(null);
//     setCreateAccountStep(1);
//     setFormData({
//       fullName: '',
//       companyName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       industry: '',
//       tagline: '',
//       teamSize: '',
//       location: '',
//       headquarters: '',
//       foundationYear: '',
//       logo: null,
//       shortDescription: '',
//       registrationCertificate: null,
//       taxReturns: null,
//       utilityBill: null,
//       governmentId: null,
//     });
//     setError('');
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//     setIsLoginDropDown(false);
//   };

//   const toggleLoginDropdown = () => {
//     setIsLoginDropDown(!isLoginDropDown);
//     setIsDropdownOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   // Handle click outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//       if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
//         setIsLoginDropDown(false);
//       }
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         closePopup();
//       }
//       if (navRef.current && !navRef.current.contains(event.target) && isNavOpen) {
//         setIsNavOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isNavOpen]);

//   // Form handlers
//   const handleFormChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     const apiUrl = 'http://ec2-3-88-111-53.compute-1.amazonaws.com:8080/signin';

//     // Basic validation
//     if (!formData.email || !formData.password) {
//       setError('Please enter both email and password.');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: formData.email, password: formData.password }),
//       });

//       const data = await response.json();
//       console.log('API Response:', data); // Debug log

//       if (response.ok) {
//         alert('Login successful');
//         closePopup();
//         navigate('/employerhomepage');
//       } else {
//         setError(data.message || 'Invalid email or password');
//       }
//     } catch (err) {
//       setError('Failed to connect to server. Please try again later.');
//       console.error('Sign-in error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCreateAccountNext = (e) => {
//     e.preventDefault();
//     if (createAccountStep === 1) {
//       if (
//         !formData.fullName ||
//         !formData.companyName ||
//         !formData.email ||
//         !formData.password ||
//         !formData.confirmPassword
//       ) {
//         setError('Please fill in all fields.');
//         return;
//       }
//       if (formData.password !== formData.confirmPassword) {
//         setError('Passwords do not match.');
//         return;
//       }
//       setError('');
//       setCreateAccountStep(2);
//       setActivePopup('companyProfile');
//     } else if (createAccountStep === 2) {
//       if (!formData.industry || !formData.teamSize || !formData.location) {
//         setError('Please fill in all required fields.');
//         return;
//       }
//       setError('');
//       setCreateAccountStep(3);
//       setActivePopup('verifyCompany');
//     } else if (createAccountStep === 3) {
//       alert('Account creation submitted!');
//       closePopup();
//       navigate('/employerhomepage');
//     }
//   };

//   const handleLogoutConfirm = () => {
//     alert('Logged out successfully!');
//     closePopup();
//     navigate('/employerlogin');
//   };

//   return (
//     <header className="main-header">
//       <div className="header-container">
//         <div onClick={() => navigate('/employerhomepage')} className="logo-container">
//           <img src="/imageswebsite/Group 160 (1).png" alt="Logo" className="logo-image" />
//         </div>
//         <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//         <nav className={`navigation-bar ${isNavOpen ? 'open' : ''}`} ref={navRef}>
//           <button className="nav-item" onClick={handleSaved}>
//             <img src="/imageswebsite/resumemackericon.png" alt="Saved Jobs" className="nav-item-icon" />
//             Applications
//           </button>
//           <button className="nav-item" onClick={handleAppliedJobs}>
//             <img src="/imageswebsite/icon image for man.png" alt="Applied Jobs" className="nav-item-icon" />
//             Candidates
//           </button>
//           <button className="nav-item" onClick={handleResumeMaker}>
//             <img src="/imageswebsite/messagecandidates.png" alt="Resume Maker" className="nav-item-icon" />
//             Messages
//           </button>
//           <button className="nav-item" onClick={handleSubscribe}>
//             <img src="/imageswebsite/Subscription.png" alt="Subscription" className="nav-item-icon" />
//             Subscription
//           </button>
//         </nav>
//         <div className="user-profile">
//           <button className="nav-item icon-only-item" onClick={handleNotifications}>
//             <img src="/imageswebsite/bellicon.png" alt="Notifications" className="nav-item-icon" />
//           </button>
//           <button
//             onClick={toggleLoginDropdown}
//             className="user-name"
//             aria-haspopup="true"
//             aria-expanded={isLoginDropDown}
//           >
//             Sign In
//           </button>
//           {isLoginDropDown && (
//             <div className="dropdown-menu login-dropdown" ref={loginDropdownRef}>
//               <button className="dropdown-item" onClick={openSignInPopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
//                   <polyline points="10 17 15 12 10 7"></polyline>
//                   <line x1="15" y1="12" x2="3" y2="12"></line>
//                 </svg>
//                 Login
//               </button>
//               <button className="dropdown-item" onClick={openCreateAccountPopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="12" cy="7" r="4"></circle>
//                   <line x1="12" y1="11" x2="12" y2="11"></line>
//                   <path d="M12 7v-4m0 0H9m3 0h3"></path>
//                 </svg>
//                 Create Account
//               </button>
//               <button className="dropdown-item" onClick={openCompanyProfilePopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                   <path d="M9 18l-6-6"></path>
//                   <path d="M6 15l3 3"></path>
//                 </svg>
//                 Company Profile
//               </button>
//               <button className="dropdown-item" onClick={openVerifyCompanyPopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                   <path d="M9 18l-6-6"></path>
//                   <path d="M6 15l3 3"></path>
//                 </svg>
//                 Verify Your Company
//               </button>
//             </div>
//           )}
//           <div className="avatar-container" onClick={toggleDropdown} ref={profileDropdownRef}>
//             <img src="/imageswebsite/Group 160 (1).png" alt="Profile" className="user-avatar" />
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
//                 <button className="dropdown-item" onClick={handleViewProfile}>
//                   <img src="/imageswebsite/employerprofile.png" alt="Profile" className="dropdown-icon" />
//                   View Profile
//                 </button>
//                 <button className="dropdown-item" onClick={handleMyJobPosts}>
//                   <img src="/imageswebsite/job-search.png" alt="Job Posts" className="dropdown-icon" />
//                   My Job Posts
//                 </button>
//                 <button className="dropdown-item" onClick={handleSettings}>
//                   <img src="/imageswebsite/settings-01.png" alt="Settings" className="dropdown-icon" />
//                   Settings
//                 </button>
//                 <button className="dropdown-item" onClick={handleDropdownNotifications}>
//                   <img src="/imageswebsite/notification-02.png" alt="Notifications" className="dropdown-icon" />
//                   Notifications
//                 </button>
//                 <button className="dropdown-item" onClick={openLogoutPopup}>
//                   <img src="/imageswebsite/logout-02.png" alt="Logout" className="dropdown-icon" />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Sign In Popup */}
//       {activePopup === 'signIn' && (
//         <div className="popup-overlay">
//           <div className="popup-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <h2 className="popup-title">Sign In</h2>
//               <p className="popup-create-account">
//                 Don't have an account?{' '}
//                 <a href="CreateAccount" onClick={(e) => { e.preventDefault(); openCreateAccountPopup(); }}>
//                   Create Account
//                 </a>
//               </p>
//               {error && <p className="popup-error">{error}</p>}
//               <form className="popup-form" onSubmit={(e) => { e.preventDefault(); handleSignIn(e); }}>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   className="popup-input"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Email address"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="popup-input"
//                   value={formData.password}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Password"
//                 />
//                 <div className="popup-remember-forgot">
//                   <label className="label-container">
//                     <input
//                       type="checkbox"
//                       className="popup-checkbox"
//                       aria-label="Remember me"
//                     />
//                     <span className="checkbox-text">Remember Me</span>
//                   </label>
//                   <a
//                     href="/forgetpassword"
//                     className="popup-forgot-link"
//                     onClick={() => closePopup()}
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button type="submit" className="popup-signin-btn" disabled={isLoading}>
//                   {isLoading ? 'Signing In...' : 'Sign In → '}
//                 </button>
//               </form>
//               <div className="popup-or-separator">or</div>
//               <div className="popup-social-buttons">
//                 <button className="popup-social-btn popup-facebook-btn">
//                   <img
//                     src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
//                     alt="Facebook Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign in with Facebook
//                 </button>
//                 <button className="popup-social-btn popup-google-btn">
//                   <img
//                     src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
//                     alt="Google Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign in with Google
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create Account Popup - Step 1 */}
//       {activePopup === 'createAccount' && (
//         <div className="popup-overlay">
//           <div className="popup-container popup-create-account-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <div className="create-accountLinkContainer">
//                 <div>
//                   <h2 className="popup-title">Create Account</h2>
//                   <p className="popup-create-account">
//                     Already have an account?{' '}
//                     <a href="signin" onClick={(e) => { e.preventDefault(); openSignInPopup(); }}>
//                       Log In
//                     </a>
//                   </p>
//                 </div>
//                 <select
//                   name="role"
//                   className="popup-select popup-create-account-select"
//                   value={formData.role || ''}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Employer</option>
//                   <option value="employer">Employer</option>
//                 </select>
//               </div>
//               {error && <p className="popup-error">{error}</p>}
//               <form className="popup-form popup-create-account-form" onSubmit={handleCreateAccountNext}>
//                 <div className='fullName-one'>


//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="popup-input popup-create-account-input"
//                   value={formData.fullName}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Full Name"
//                 />
//                 <input
//                   type="text"
//                   name="companyName"
//                   placeholder="Company Name"
//                   className="popup-input popup-create-account-input"
//                   value={formData.companyName}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Company Name"
//                 /></div>

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   className="popup-input popup-create-account-input"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Email address"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="popup-input popup-create-account-input"
//                   value={formData.password}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Password"
//                 />
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   className="popup-input popup-create-account-input"
//                   value={formData.confirmPassword}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Confirm Password"
//                 />
//                 <div className="popup-terms">
//                   <label className="label-container">
//                     <input
//                       type="checkbox"
//                       className="popup-checkbox"
//                       required
//                       aria-label="I agree to the terms of services"
//                     />
//                     <span className="checkbox-text">I've read and agree with your</span>
//                     <a href="/TermsofServices" className="terms-link">Terms of Services</a>
//                   </label>
//                 </div>
//                 <button type="submit" className="popup-signin-btn">
//                   Next <span>→</span>
//                 </button>
//               </form>
//               <div className="popup-or-separator">or</div>
//               <div className="popup-social-buttons">
//                 <button className="popup-social-btn popup-facebook-btn">
//                   <img
//                     src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
//                     alt="Facebook Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign up with Facebook
//                 </button>
//                 <button className="popup-social-btn popup-google-btn">
//                   <img
//                     src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
//                     alt="Google Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign up with Google
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Company Profile Popup - Step 2 */}
//       {activePopup === 'companyProfile' && (
//         <div className="popup-overlay">
//           <div className="popup-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <div className="popup-step">Step 2</div>
//               <h2 className="popup-title">Company Profile</h2>
//               <p className="popup-subtitle">Complete Your Company Profile</p>
//               {error && <p className="popup-error">{error}</p>}
//               <form className="popup-form popup-form-grid" onSubmit={handleCreateAccountNext}>
//                 <select
//                   name="industry"
//                   className="popup-select"
//                   value={formData.industry}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Industry</option>
//                   <option value="tech">Tech</option>
//                   <option value="finance">Finance</option>
//                   <option value="healthcare">Healthcare</option>
//                 </select>
//                 <input
//                   type="text"
//                   name="tagline"
//                   placeholder="Tagline"
//                   className="popup-input"
//                   value={formData.tagline}
//                   onChange={handleFormChange}
//                 />
//                 <select
//                   name="teamSize"
//                   className="popup-select"
//                   value={formData.teamSize}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Team Size</option>
//                   <option value="1-10">1-10</option>
//                   <option value="11-50">11-50</option>
//                   <option value="51-200">51-200</option>
//                 </select>
//                 <select
//                   name="location"
//                   className="popup-select"
//                   value={formData.location}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Location</option>
//                   <option value="usa">USA</option>
//                   <option value="uk">UK</option>
//                   <option value="india">India</option>
//                 </select>
//                 <select
//                   name="headquarters"
//                   className="popup-select"
//                   value={formData.headquarters}
//                   onChange={handleFormChange}
//                 >
//                   <option value="">Headquarters</option>
//                   <option value="new-york">New York</option>
//                   <option value="london">London</option>
//                   <option value="mumbai">Mumbai</option>
//                 </select>
//                 <input
//                   type="text"
//                   name="foundationYear"
//                   placeholder="Foundation Year"
//                   className="popup-input"
//                   value={formData.foundationYear}
//                   onChange={handleFormChange}
//                 />
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="logo"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Logo"
//                   />
//                   <span className="file-placeholder">Logo</span>
//                 </div>
//                 <textarea
//                   name="shortDescription"
//                   placeholder="Short Description"
//                   className="popup-textarea"
//                   value={formData.shortDescription}
//                   onChange={handleFormChange}
//                 />
//                 <button type="submit" className="popup-signin-btn">
//                   Next <span>→</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Verify Your Company Popup - Step 3 */}
//       {activePopup === 'verifyCompany' && (
//         <div className="popup-overlay">
//           <div className="popup-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <div className="popup-step">Step 3</div>
//               <h2 className="popup-title">Verify Your Company</h2>
//               <p className="popup-subtitle">Complete The Verification</p>
//               {error && <p className="popup-error">{error}</p>}
//               <form className="popup-form" onSubmit={handleCreateAccountNext}>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="registrationCertificate"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Registration Certificate"
//                   />
//                   <span className="file-placeholder">Registration Certificate</span>
//                 </div>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="taxReturns"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Latest Tax Returns"
//                   />
//                   <span className="file-placeholder">Latest Tax Returns</span>
//                 </div>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="utilityBill"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Utility Bill or Lease Agreement"
//                   />
//                   <span className="file-placeholder">Utility Bill or Lease Agreement</span>
//                 </div>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="governmentId"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Government ID"
//                   />
//                   <span className="file-placeholder">Government ID</span>
//                 </div>
//                 <button type="submit" className="popup-signin-btn">
//                   Submit <span>→</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Logout Popup */}
//       {activePopup === 'logout' && (
//         <div className="popup-overlay">
//           <div className="popup-container popup-logout-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <h2 className="popup-title">Are you sure you want to logout?</h2>
//               <div className="popup-logout-buttons">
//                 <button className="popup-logout-btn" onClick={handleLogoutConfirm}>
//                   Log Out
//                 </button>
//                 <button className="popup-cancel-btn" onClick={closePopup}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default EmployerHeader;  


// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './EmployerHeader.css';

// const EmployerHeader = () => {
//   const navigate = useNavigate();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isLoginDropDown, setIsLoginDropDown] = useState(false);
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activePopup, setActivePopup] = useState(null);
//   const [createAccountStep, setCreateAccountStep] = useState(1);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     companyName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     industry: '',
//     tagline: '',
//     teamSize: '',
//     location: '',
//     headquarters: '',
//     foundationYear: '',
//     logo: null,
//     shortDescription: '',
//     registrationCertificate: null,
//     taxReturns: null,
//     utilityBill: null,
//     governmentId: null,
//     employerId: null, // To store ID from Step 1
//   });
//   const [errors, setErrors] = useState({}); // Added for sign-in and form validation
//   const [isLoading, setIsLoading] = useState(false);

//   const profileDropdownRef = useRef(null);
//   const loginDropdownRef = useRef(null);
//   const popupRef = useRef(null);
//   const navRef = useRef(null);

//   // Navigation handlers (unchanged)
//   const handleSaved = () => {
//     navigate('/EmployerApplicationPage');
//     setIsNavOpen(false);
//   };
//   const handleAppliedJobs = () => {
//     navigate('/employercandidates');
//     setIsNavOpen(false);
//   };
//   const handleResumeMaker = () => {
//     navigate('/messagespage');
//     setIsNavOpen(false);
//   };
//   const handleSubscribe = () => {
//     navigate('/EmployerSubcription');
//     setIsNavOpen(false);
//   };
//   const handleNotifications = () => {
//     navigate('/notifications');
//     setIsNavOpen(false);
//   };
//   const handleViewProfile = () => {
//     navigate('/EmployerProfileSetups');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };
//   const handleMyJobPosts = () => {
//     navigate('/EmployerPostAJob');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };
//   const handleSettings = () => {
//     navigate('/settings');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };
//   const handleDropdownNotifications = () => {
//     navigate('/notifications');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };

//   // Popup handlers (unchanged)
//   const openSignInPopup = () => {
//     setActivePopup('signIn');
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//     console.log('Sign In popup opened');
//   };

//   const openCreateAccountPopup = () => {
//     setActivePopup('createAccount');
//     setCreateAccountStep(1);
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//   };

//   const openCompanyProfilePopup = () => {
//     setActivePopup('companyProfile');
//     setCreateAccountStep(2);
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//   };

//   const openVerifyCompanyPopup = () => {
//     setActivePopup('verifyCompany');
//     setCreateAccountStep(3);
//     setIsLoginDropDown(false);
//     setIsNavOpen(false);
//   };

//   const openLogoutPopup = () => {
//     setActivePopup('logout');
//     setIsDropdownOpen(false);
//     setIsNavOpen(false);
//   };

//   const closePopup = () => {
//     setActivePopup(null);
//     setCreateAccountStep(1);
//     setFormData({
//       fullName: '',
//       companyName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       industry: '',
//       tagline: '',
//       teamSize: '',
//       location: '',
//       headquarters: '',
//       foundationYear: '',
//       logo: null,
//       shortDescription: '',
//       registrationCertificate: null,
//       taxReturns: null,
//       utilityBill: null,
//       governmentId: null,
//       employerId: null,
//     });
//     setErrors({});
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//     setIsLoginDropDown(false);
//   };

//   const toggleLoginDropdown = () => {
//     setIsLoginDropDown(!isLoginDropDown);
//     setIsDropdownOpen(false);
//   };

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   // Handle click outside (unchanged)
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//       if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
//         setIsLoginDropDown(false);
//       }
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         closePopup();
//       }
//       if (navRef.current && !navRef.current.contains(event.target) && isNavOpen) {
//         setIsNavOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isNavOpen]);

//   // Form handlers
//   const handleFormChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   // Validation function for sign-in
//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Sign-in handler
//   const handleSignIn = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsLoading(true);
//     setErrors({});

//     const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/auth/login';

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: formData.email, password: formData.password }), // Using email as username
//       });

//       const data = await response.json();
//       console.log('Server Response:', JSON.stringify(data, null, 2));

//       if (response.ok) {
//         // Store JWT and user data in localStorage
//         if (data.data && data.data.token) {
//           localStorage.setItem('authToken', data.data.token);
//         }
//         if (data.data && data.data.user) {
//           localStorage.setItem('userData', JSON.stringify({
//             username: data.data.user.username,
//             email: data.data.user.email,
//             role: data.data.user.role || 'employer',
//           }));
//         }
//         alert('Login successful');
//         closePopup();
//         navigate('/employerhomepage');
//       } else {
//         if (data.message === 'Invalid credentials') {
//           setErrors({ submit: 'Invalid username or password' });
//         } else if (data.message === 'Account not verified') {
//           setErrors({ submit: 'Please verify your email before logging in' });
//           navigate('/emailverification');
//         } else {
//           setErrors({ submit: data.message || 'Login failed' });
//         }
//       }
//     } catch (err) {
//       setErrors({ submit: 'Failed to connect to server. Please check your network or try again later.' });
//       console.error('Error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Create account handler with API integration
//   const handleCreateAccountNext = async (e) => {
//     e.preventDefault();

//     if (createAccountStep === 1) {
//       if (
//         !formData.fullName ||
//         !formData.companyName ||
//         !formData.email ||
//         !formData.password ||
//         !formData.confirmPassword
//       ) {
//         setError('Please fill in all fields.');
//         return;
//       }
//       if (formData.password !== formData.confirmPassword) {
//         setError('Passwords do not match.');
//         return;
//       }

//       const payload = {
//         full_name: formData.fullName,
//         company_name: formData.companyName,
//         email: formData.email,
//         password: formData.password,
//       };
//       console.log('Create Account Payload (Step 1):', payload);

//       setIsLoading(true);
//       try {
//         const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(payload),
//         });

//         const data = await response.json();
//         console.log('Server Response:', JSON.stringify(data, null, 2));

//         if (response.ok && data.id) {
//           setFormData((prev) => ({ ...prev, employerId: data.id }));
//           setError('');
//           setCreateAccountStep(2);
//           setActivePopup('companyProfile');
//         } else {
//           setError(data.message || 'Failed to create account');
//         }
//       } catch (err) {
//         setError('Failed to connect to server. Please try again later.');
//         console.error('Create account error:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     } else if (createAccountStep === 2) {
//       if (!formData.industry || !formData.teamSize || !formData.location) {
//         setError('Please fill in all required fields.');
//         return;
//       }

//       if (!formData.employerId) {
//         setError('Employer ID not found. Please start from Step 1.');
//         return;
//       }

//       const payload = {
//         industry: formData.industry,
//         tagline: formData.tagline,
//         team_size: formData.teamSize,
//         location: formData.location,
//         headquarters: formData.headquarters,
//         foundation_year: formData.foundationYear,
//         short_description: formData.shortDescription,
//       };
//       console.log('Company Profile Payload (Step 2):', payload);

//       setIsLoading(true);
//       try {
//         const response = await fetch(
//           `http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers/${formData.employerId}`,
//           {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/json',
//               // Add auth token if required: 'Authorization': `Bearer ${localStorage.getItem('authToken')}`
//             },
//             body: JSON.stringify(payload),
//           }
//         );

//         const data = await response.json();
//         console.log('Server Response:', JSON.stringify(data, null, 2));

//         if (response.ok) {
//           setError('');
//           setCreateAccountStep(3);
//           setActivePopup('verifyCompany');
//         } else {
//           setError(data.message || 'Failed to update company profile');
//         }
//       } catch (err) {
//         setError('Failed to connect to server. Please try again later.');
//         console.error('Company profile update error:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     } else if (createAccountStep === 3) {
//       if (!formData.employerId) {
//         setError('Employer ID not found. Please start from Step 1.');
//         return;
//       }

//       const formDataToSend = new FormData();
//       formDataToSend.append('logo', formData.logo);
//       formDataToSend.append('registrationCertificate', formData.registrationCertificate);
//       formDataToSend.append('taxReturns', formData.taxReturns);
//       formDataToSend.append('utilityBill', formData.utilityBill);
//       formDataToSend.append('governmentId', formData.governmentId);

//       setIsLoading(true);
//       try {
//         const response = await fetch(
//           `http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers/${formData.employerId}/verify`,
//           {
//             method: 'POST',
//             body: formDataToSend,
//           }
//         );

//         const data = await response.json();
//         console.log('Server Response:', JSON.stringify(data, null, 2));

//         if (response.ok) {
//           alert('Account creation submitted!');
//           closePopup();
//           navigate('/employerhomepage');
//         } else {
//           setError(data.message || 'Failed to verify company');
//         }
//       } catch (err) {
//         setError('Failed to connect to server. Please try again later.');
//         console.error('Verify company error:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleLogoutConfirm = () => {
//     alert('Logged out successfully!');
//     localStorage.removeItem('authToken');
//     closePopup();
//     navigate('/employerlogin');
//   };

//   return (
//     <header className="main-header">
//       <div className="header-container">
//         <div onClick={() => navigate('/employerhomepage')} className="logo-container">
//           <img src="/imageswebsite/Group 160 (1).png" alt="Logo" className="logo-image" />
//         </div>
//         <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//         <nav className={`navigation-bar ${isNavOpen ? 'open' : ''}`} ref={navRef}>
//           <button className="nav-item" onClick={handleSaved}>
//             <img src="/imageswebsite/resumemackericon.png" alt="Saved Jobs" className="nav-item-icon" />
//             Applications
//           </button>
//           <button className="nav-item" onClick={handleAppliedJobs}>
//             <img src="/imageswebsite/icon image for man.png" alt="Applied Jobs" className="nav-item-icon" />
//             Candidates
//           </button>
//           <button className="nav-item" onClick={handleResumeMaker}>
//             <img src="/imageswebsite/messagecandidates.png" alt="Resume Maker" className="nav-item-icon" />
//             Messages
//           </button>
//           <button className="nav-item" onClick={handleSubscribe}>
//             <img src="/imageswebsite/Subscription.png" alt="Subscription" className="nav-item-icon" />
//             Subscription
//           </button>
//         </nav>
//         <div className="user-profile">
//           <button className="nav-item icon-only-item" onClick={handleNotifications}>
//             <img src="/imageswebsite/bellicon.png" alt="Notifications" className="nav-item-icon" />
//           </button>
//           <button
//             onClick={toggleLoginDropdown}
//             className="user-name"
//             aria-haspopup="true"
//             aria-expanded={isLoginDropDown}
//           >
//             Sign In
//           </button>
//           {isLoginDropDown && (
//             <div className="dropdown-menu login-dropdown" ref={loginDropdownRef}>
//               <button className="dropdown-item" onClick={openSignInPopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
//                   <polyline points="10 17 15 12 10 7"></polyline>
//                   <line x1="15" y1="12" x2="3" y2="12"></line>
//                 </svg>
//                 Login
//               </button>
//               <button className="dropdown-item" onClick={openCreateAccountPopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="12" cy="7" r="4"></circle>
//                   <line x1="12" y1="11" x2="12" y2="11"></line>
//                   <path d="M12 7v-4m0 0H9m3 0h3"></path>
//                 </svg>
//                 Create Account
//               </button>
//               <button className="dropdown-item" onClick={openCompanyProfilePopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                   <path d="M9 18l-6-6"></path>
//                   <path d="M6 15l3 3"></path>
//                 </svg>
//                 Company Profile
//               </button>
//               <button className="dropdown-item" onClick={openVerifyCompanyPopup}>
//                 <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                   <path d="M9 18l-6-6"></path>
//                   <path d="M6 15l3 3"></path>
//                 </svg>
//                 Verify Your Company
//               </button>
//             </div>
//           )}
//           <div className="avatar-container" onClick={toggleDropdown} ref={profileDropdownRef}>
//             <img src="/imageswebsite/Group 160 (1).png" alt="Profile" className="user-avatar" />
//             {isDropdownOpen && (
//               <div className="dropdown-menu">
//                 <button className="dropdown-item" onClick={handleViewProfile}>
//                   <img src="/imageswebsite/employerprofile.png" alt="Profile" className="dropdown-icon" />
//                   View Profile
//                 </button>
//                 <button className="dropdown-item" onClick={handleMyJobPosts}>
//                   <img src="/imageswebsite/job-search.png" alt="Job Posts" className="dropdown-icon" />
//                   My Job Posts
//                 </button>
//                 <button className="dropdown-item" onClick={handleSettings}>
//                   <img src="/imageswebsite/settings-01.png" alt="Settings" className="dropdown-icon" />
//                   Settings
//                 </button>
//                 <button className="dropdown-item" onClick={handleDropdownNotifications}>
//                   <img src="/imageswebsite/notification-02.png" alt="Notifications" className="dropdown-icon" />
//                   Notifications
//                 </button>
//                 <button className="dropdown-item" onClick={openLogoutPopup}>
//                   <img src="/imageswebsite/logout-02.png" alt="Logout" className="dropdown-icon" />
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Sign In Popup */}
//       {activePopup === 'signIn' && (
//         <div className="popup-overlay">
//           <div className="popup-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <h2 className="popup-title">Sign In</h2>
//               <p className="popup-create-account">
//                 Don't have an account?{' '}
//                 <a href="CreateAccount" onClick={(e) => { e.preventDefault(); openCreateAccountPopup(); }}>
//                   Create Account
//                 </a>
//               </p>
//               {errors.submit && <p className="popup-error">{errors.submit}</p>}
//               <form className="popup-form" onSubmit={(e) => { e.preventDefault(); handleSignIn(e); }}>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   className="popup-input"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Email address"
//                 />
//                 {errors.email && <span className="popup-error">{errors.email}</span>}
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="popup-input"
//                   value={formData.password}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Password"
//                 />
//                 {errors.password && <span className="popup-error">{errors.password}</span>}
//                 <div className="popup-remember-forgot">
//                   <label className="label-container">
//                     <input
//                       type="checkbox"
//                       className="popup-checkbox"
//                       aria-label="Remember me"
//                     />
//                     <span className="checkbox-text">Remember Me</span>
//                   </label>
//                   <a
//                     href="/forgetpassword"
//                     className="popup-forgot-link"
//                     onClick={() => closePopup()}
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button type="submit" className="popup-signin-btn" disabled={isLoading}>
//                   {isLoading ? 'Signing In...' : 'Sign In → '}
//                 </button>
//               </form>
//               <div className="popup-or-separator">or</div>
//               <div className="popup-social-buttons">
//                 <button className="popup-social-btn popup-facebook-btn">
//                   <img
//                     src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
//                     alt="Facebook Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign in with Facebook
//                 </button>
//                 <button className="popup-social-btn popup-google-btn">
//                   <img
//                     src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
//                     alt="Google Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign in with Google
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Create Account Popup - Step 1 */}
//       {activePopup === 'createAccount' && (
//         <div className="popup-overlay">
//           <div className="popup-container popup-create-account-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <div className="create-accountLinkContainer">
//                 <div>
//                   <h2 className="popup-title">Create Account</h2>
//                   <p className="popup-create-account">
//                     Already have an account?{' '}
//                     <a href="signin" onClick={(e) => { e.preventDefault(); openSignInPopup(); }}>
//                       Log In
//                     </a>
//                   </p>
//                 </div>
//                 <select
//                   name="role"
//                   className="popup-select popup-create-account-select"
//                   value={formData.role || ''}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Employer</option>
//                   <option value="employer">Employer</option>
//                 </select>
//               </div>
//               {error && <p className="popup-error">{error}</p>}
//               <form className="popup-form popup-create-account-form" onSubmit={handleCreateAccountNext}>
//                 <div className='fullName-one'>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Full Name"
//                     className="popup-input popup-create-account-input"
//                     value={formData.fullName}
//                     onChange={handleFormChange}
//                     required
//                     aria-label="Full Name"
//                   />
//                   <input
//                     type="text"
//                     name="companyName"
//                     placeholder="Company Name"
//                     className="popup-input popup-create-account-input"
//                     value={formData.companyName}
//                     onChange={handleFormChange}
//                     required
//                     aria-label="Company Name"
//                   />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   className="popup-input popup-create-account-input"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Email address"
//                 />
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="popup-input popup-create-account-input"
//                   value={formData.password}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Password"
//                 />
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   className="popup-input popup-create-account-input"
//                   value={formData.confirmPassword}
//                   onChange={handleFormChange}
//                   required
//                   aria-label="Confirm Password"
//                 />
//                 <div className="popup-terms">
//                   <label className="label-container">
//                     <input
//                       type="checkbox"
//                       className="popup-checkbox"
//                       required
//                       aria-label="I agree to the terms of services"
//                     />
//                     <span className="checkbox-text">I've read and agree with your</span>
//                     <a href="/TermsofServices" className="terms-link">Terms of Services</a>
//                   </label>
//                 </div>
//                 <button type="submit" className="popup-signin-btn" disabled={isLoading}>
//                   {isLoading ? 'Processing...' : 'Next'} <span>→</span>
//                 </button>
//               </form>
//               <div className="popup-or-separator">or</div>
//               <div className="popup-social-buttons">
//                 <button className="popup-social-btn popup-facebook-btn">
//                   <img
//                     src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
//                     alt="Facebook Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign up with Facebook
//                 </button>
//                 <button className="popup-social-btn popup-google-btn">
//                   <img
//                     src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
//                     alt="Google Logo"
//                     className="popup-social-icon"
//                   />
//                   Sign up with Google
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Company Profile Popup - Step 2 */}
//       {activePopup === 'companyProfile' && (
//         <div className="popup-overlay">
//           <div className="popup-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <div className="popup-step">Step 2</div>
//               <h2 className="popup-title">Company Profile</h2>
//               <p className="popup-subtitle">Complete Your Company Profile</p>
//               {error && <p className="popup-error">{error}</p>}
//               <form className="popup-form popup-form-grid" onSubmit={handleCreateAccountNext}>
//                 <select
//                   name="industry"
//                   className="popup-select"
//                   value={formData.industry}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Industry</option>
//                   <option value="tech">Tech</option>
//                   <option value="finance">Finance</option>
//                   <option value="healthcare">Healthcare</option>
//                 </select>
//                 <input
//                   type="text"
//                   name="tagline"
//                   placeholder="Tagline"
//                   className="popup-input"
//                   value={formData.tagline}
//                   onChange={handleFormChange}
//                 />
//                 <select
//                   name="teamSize"
//                   className="popup-select"
//                   value={formData.teamSize}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Team Size</option>
//                   <option value="1-10">1-10</option>
//                   <option value="11-50">11-50</option>
//                   <option value="51-200">51-200</option>
//                 </select>
//                 <select
//                   name="location"
//                   className="popup-select"
//                   value={formData.location}
//                   onChange={handleFormChange}
//                   required
//                 >
//                   <option value="">Location</option>
//                   <option value="usa">USA</option>
//                   <option value="uk">UK</option>
//                   <option value="india">India</option>
//                 </select>
//                 <select
//                   name="headquarters"
//                   className="popup-select"
//                   value={formData.headquarters}
//                   onChange={handleFormChange}
//                 >
//                   <option value="">Headquarters</option>
//                   <option value="new-york">New York</option>
//                   <option value="london">London</option>
//                   <option value="mumbai">Mumbai</option>
//                 </select>
//                 <input
//                   type="text"
//                   name="foundationYear"
//                   placeholder="Foundation Year"
//                   className="popup-input"
//                   value={formData.foundationYear}
//                   onChange={handleFormChange}
//                 />
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="logo"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Logo"
//                   />
//                   <span className="file-placeholder">Logo</span>
//                 </div>
//                 <textarea
//                   name="shortDescription"
//                   placeholder="Short Description"
//                   className="popup-textarea"
//                   value={formData.shortDescription}
//                   onChange={handleFormChange}
//                 />
//                 <button type="submit" className="popup-signin-btn" disabled={isLoading}>
//                   {isLoading ? 'Processing...' : 'Next'} <span>→</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Verify Your Company Popup - Step 3 */}
//       {activePopup === 'verifyCompany' && (
//         <div className="popup-overlay">
//           <div className="popup-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <div className="popup-step">Step 3</div>
//               <h2 className="popup-title">Verify Your Company</h2>
//               <p className="popup-subtitle">Complete The Verification</p>
//               {error && <p className="popup-error">{error}</p>}
//               <form className="popup-form" onSubmit={handleCreateAccountNext}>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="registrationCertificate"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Registration Certificate"
//                   />
//                   <span className="file-placeholder">Registration Certificate</span>
//                 </div>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="taxReturns"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Latest Tax Returns"
//                   />
//                   <span className="file-placeholder">Latest Tax Returns</span>
//                 </div>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="utilityBill"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Utility Bill or Lease Agreement"
//                   />
//                   <span className="file-placeholder">Utility Bill or Lease Agreement</span>
//                 </div>
//                 <div className="popup-file-input">
//                   <input
//                     type="file"
//                     name="governmentId"
//                     className="popup-input-file"
//                     onChange={handleFormChange}
//                     aria-label="Upload Government ID"
//                   />
//                   <span className="file-placeholder">Government ID</span>
//                 </div>
//                 <button type="submit" className="popup-signin-btn" disabled={isLoading}>
//                   {isLoading ? 'Processing...' : 'Submit'} <span>→</span>
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Logout Popup */}
//       {activePopup === 'logout' && (
//         <div className="popup-overlay">
//           <div className="popup-container popup-logout-container" ref={popupRef}>
//             <button className="popup-close-btn" onClick={closePopup}>✕</button>
//             <div className="popup-content">
//               <h2 className="popup-title">Are you sure you want to logout?</h2>
//               <div className="popup-logout-buttons">
//                 <button className="popup-logout-btn" onClick={handleLogoutConfirm}>
//                   Log Out
//                 </button>
//                 <button className="popup-cancel-btn" onClick={closePopup}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default EmployerHeader;  







import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmployerHeader.css';

const EmployerHeader = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginDropDown, setIsLoginDropDown] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const [createAccountStep, setCreateAccountStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    termsAccepted: false,
    industry: '',
    tagline: '',
    teamSize: '',
    location: '',
    headquarters: '',
    foundationYear: '',
    logo: null,
    shortDescription: '',
    registrationCertificate: null,
    taxReturns: null,
    utilityBill: null,
    governmentId: null,
    employerId: null,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const profileDropdownRef = useRef(null);
  const loginDropdownRef = useRef(null);
  const popupRef = useRef(null);
  const navRef = useRef(null);

  // Navigation handlers
  const handleSaved = () => {
    navigate('/EmployerApplicationPage');
    setIsNavOpen(false);
  };
  const handleAppliedJobs = () => {
    navigate('/employercandidates');
    setIsNavOpen(false);
  };
  const handleResumeMaker = () => {
    navigate('/messagespage');
    setIsNavOpen(false);
  };
  const handleSubscribe = () => {
    navigate('/EmployerSubcription');
    setIsNavOpen(false);
  };
  const handleNotifications = () => {
    navigate('/notifications');
    setIsNavOpen(false);
  };
  const handleViewProfile = () => {
    navigate('/EmployerProfileSetups');
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };
  const handleMyJobPosts = () => {
    navigate('/EmployerPostAJob');
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };
  const handleSettings = () => {
    navigate('/settings');
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };
  const handleDropdownNotifications = () => {
    navigate('/notifications');
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };

  // Popup handlers
  const openSignInPopup = () => {
    setActivePopup('signIn');
    setIsLoginDropDown(false);
    setIsNavOpen(false);
  };

  const openCreateAccountPopup = () => {
    setActivePopup('createAccount');
    setCreateAccountStep(1);
    setIsLoginDropDown(false);
    setIsNavOpen(false);
  };

  const openCompanyProfilePopup = () => {
    setActivePopup('companyProfile');
    setCreateAccountStep(2);
    setIsLoginDropDown(false);
    setIsNavOpen(false);
  };

  const openVerifyCompanyPopup = () => {
    setActivePopup('verifyCompany');
    setCreateAccountStep(3);
    setIsLoginDropDown(false);
    setIsNavOpen(false);
  };

  const openLogoutPopup = () => {
    setActivePopup('logout');
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };

  const closePopup = () => {
    setActivePopup(null);
    setCreateAccountStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      termsAccepted: false,
      industry: '',
      tagline: '',
      teamSize: '',
      location: '',
      headquarters: '',
      foundationYear: '',
      logo: null,
      shortDescription: '',
      registrationCertificate: null,
      taxReturns: null,
      utilityBill: null,
      governmentId: null,
      employerId: null,
    });
    setErrors({});
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsLoginDropDown(false);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropDown(!isLoginDropDown);
    setIsDropdownOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsLoginDropDown(false);
      }
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
      if (navRef.current && !navRef.current.contains(event.target) && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  // Form handlers
  const handleFormChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validation function for sign-in
  const validateSignInForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Sign-in handler
  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!validateSignInForm()) return;

    setIsLoading(true);
    setErrors({});

    const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/auth/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.username, password: formData.password }),
      });

      const data = await response.json();
      console.log('Server Response:', JSON.stringify(data, null, 2));

      if (response.ok) {
        if (data.data && data.data.token) {
          localStorage.setItem('authToken', data.data.token);
        }
        if (data.data && data.data.user) {
          localStorage.setItem('userData', JSON.stringify({
            username: data.data.user.username,
            email: data.data.user.email,
            role: data.data.user.role || 'employer',
          }));
        }
        alert('Login successful');
        closePopup();
        navigate('/employerhomepage');
      } else {
        if (data.message === 'Invalid credentials') {
          setErrors({ submit: 'Invalid username or password' });
        } else if (data.message === 'Account not verified') {
          setErrors({ submit: 'Please verify your email before logging in' });
          navigate('/emailverification');
        } else {
          setErrors({ submit: data.message || 'Login failed' });
        }
      }
    } catch (err) {
      setErrors({ submit: 'Failed to connect to server. Please check your network or try again later.' });
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Create account handler
  const handleCreateAccountNext = async (e) => {
    e.preventDefault();

    if (createAccountStep === 1) {
      const newErrors = {};

      if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
      if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
      else if (formData.companyName.length < 2) newErrors.companyName = 'Company name must be at least 2 characters long';
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Confirm Password is required';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = 'Please accept the Terms of Service';
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      console.log('Create Account Payload (Step 1):', JSON.stringify(payload, null, 2));

      setIsLoading(true);
      try {
        const response = await axios.post(
          'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const { success, message, data } = response.data;
        console.log('Server Response:', JSON.stringify(response.data, null, 2));

        if (success && data.id) {
          setFormData((prev) => ({ ...prev, employerId: data.id }));
          localStorage.setItem(
            'userData',
            JSON.stringify({
              username: formData.username,
              email: formData.email,
              company_name: formData.companyName,
              first_name: formData.firstName,
              last_name: formData.lastName,
              accountType: 'employer',
            })
          );
          if (data.token) {
            localStorage.setItem('authToken', data.token);
          }
          setErrors({});
          setCreateAccountStep(2);
          setActivePopup('companyProfile');
        } else {
          if (message === 'Username already exists') {
            setErrors({ username: 'This username is already taken. Please choose another one.' });
          } else if (message === 'Email already exists') {
            setErrors({ email: 'This email is already registered. Please use another email.' });
          } else {
            setErrors({ submit: message || 'Failed to create account' });
          }
        }
      } catch (err) {
        setErrors({ submit: err.response?.data?.message || 'Failed to connect to server. Please try again later.' });
        console.error('Create account error:', err);
      } finally {
        setIsLoading(false);
      }
    } else if (createAccountStep === 2) {
      const newErrors = {};
      if (!formData.industry) newErrors.industry = 'Industry is required';
      if (!formData.teamSize) newErrors.teamSize = 'Team Size is required';
      if (!formData.location) newErrors.location = 'Location is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      if (!formData.employerId) {
        setErrors({ submit: 'Employer ID not found. Please start from Step 1.' });
        return;
      }

      const payload = {
        industry: formData.industry,
        tagline: formData.tagline,
        team_size: formData.teamSize,
        location: formData.location,
        headquarters: formData.headquarters,
        foundation_year: formData.foundationYear,
        short_description: formData.shortDescription,
      };
      console.log('Company Profile Payload (Step 2):', JSON.stringify(payload, null, 2));

      setIsLoading(true);
      try {
        const response = await fetch(
          `http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers/${formData.employerId}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        console.log('Server Response:', JSON.stringify(data, null, 2));

        if (response.ok) {
          setErrors({});
          setCreateAccountStep(3);
          setActivePopup('verifyCompany');
        } else {
          setErrors({ submit: data.message || 'Failed to update company profile' });
        }
      } catch (err) {
        setErrors({ submit: 'Failed to connect to server. Please try again later.' });
        console.error('Company profile update error:', err);
      } finally {
        setIsLoading(false);
      }
    } else if (createAccountStep === 3) {
      if (!formData.employerId) {
        setErrors({ submit: 'Employer ID not found. Please start from Step 1.' });
        return;
      }

      const formDataToSend = new FormData();
      if (formData.logo) formDataToSend.append('logo', formData.logo);
      if (formData.registrationCertificate) formDataToSend.append('registrationCertificate', formData.registrationCertificate);
      if (formData.taxReturns) formDataToSend.append('taxReturns', formData.taxReturns);
      if (formData.utilityBill) formDataToSend.append('utilityBill', formData.utilityBill);
      if (formData.governmentId) formDataToSend.append('governmentId', formData.governmentId);

      setIsLoading(true);
      try {
        const response = await fetch(
          `http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers/${formData.employerId}/verify`,
          {
            method: 'POST',
            body: formDataToSend,
          }
        );

        const data = await response.json();
        console.log('Server Response:', JSON.stringify(data, null, 2));

        if (response.ok) {
          alert('Account creation submitted!');
          closePopup();
          navigate('/employerhomepage');
        } else {
          setErrors({ submit: data.message || 'Failed to verify company' });
        }
      } catch (err) {
        setErrors({ submit: 'Failed to connect to server. Please try again later.' });
        console.error('Verify company error:', err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLogoutConfirm = () => {
    alert('Logged out successfully!');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    closePopup();
    navigate('/employerlogin');
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div onClick={() => navigate('/employerhomepage')} className="logo-container">
          <img src="/imageswebsite/Group 160 (1).png" alt="Logo" className="logo-image" />
        </div>
        <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`navigation-bar ${isNavOpen ? 'open' : ''}`} ref={navRef}>
          <button className="nav-item" onClick={handleSaved}>
            <img src="/imageswebsite/resumemackericon.png" alt="Saved Jobs" className="nav-item-icon" />
            Applications
          </button>
          <button className="nav-item" onClick={handleAppliedJobs}>
            <img src="/imageswebsite/icon image for man.png" alt="Applied Jobs" className="nav-item-icon" />
            Candidates
          </button>
          <button className="nav-item" onClick={handleResumeMaker}>
            <img src="/imageswebsite/messagecandidates.png" alt="Resume Maker" className="nav-item-icon" />
            Messages
          </button>
          <button className="nav-item" onClick={handleSubscribe}>
            <img src="/imageswebsite/Subscription.png" alt="Subscription" className="nav-item-icon" />
            Subscription
          </button>
        </nav>
        <div className="user-profile">
          <button className="nav-item icon-only-item" onClick={handleNotifications}>
            <img src="/imageswebsite/bellicon.png" alt="Notifications" className="nav-item-icon" />
          </button>
          <button
            onClick={toggleLoginDropdown}
            className="user-name"
            aria-haspopup="true"
            aria-expanded={isLoginDropDown}
          >
            Sign In
          </button>
          {isLoginDropDown && (
            <div className="dropdown-menu login-dropdown" ref={loginDropdownRef}>
              <button className="dropdown-item" onClick={openSignInPopup}>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                Login
              </button>
              <button className="dropdown-item" onClick={openCreateAccountPopup}>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <line x1="12" y1="11" x2="12" y2="11"></line>
                  <path d="M12 7v-4m0 0H9m3 0h3"></path>
                </svg>
                Create Account
              </button>
              <button className="dropdown-item" onClick={openCompanyProfilePopup}>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                  <path d="M9 18l-6-6"></path>
                  <path d="M6 15l3 3"></path>
                </svg>
                Company Profile
              </button>
              <button className="dropdown-item" onClick={openVerifyCompanyPopup}>
                <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                  <path d="M9 18l-6-6"></path>
                  <path d="M6 15l3 3"></path>
                </svg>
                Verify Your Company
              </button>
            </div>
          )}
          <div className="avatar-container" onClick={toggleDropdown} ref={profileDropdownRef}>
            <img src="/imageswebsite/Group 160 (1).png" alt="Profile" className="user-avatar" />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={handleViewProfile}>
                  <img src="/imageswebsite/employerprofile.png" alt="Profile" className="dropdown-icon" />
                  View Profile
                </button>
                <button className="dropdown-item" onClick={handleMyJobPosts}>
                  <img src="/imageswebsite/job-search.png" alt="Job Posts" className="dropdown-icon" />
                  My Job Posts
                </button>
                <button className="dropdown-item" onClick={handleSettings}>
                  <img src="/imageswebsite/settings-01.png" alt="Settings" className="dropdown-icon" />
                  Settings
                </button>
                <button className="dropdown-item" onClick={handleDropdownNotifications}>
                  <img src="/imageswebsite/notification-02.png" alt="Notifications" className="dropdown-icon" />
                  Notifications
                </button>
                <button className="dropdown-item" onClick={openLogoutPopup}>
                  <img src="/imageswebsite/logout-02.png" alt="Logout" className="dropdown-icon" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sign In Popup */}
      {activePopup === 'signIn' && (
        <div className="popup-overlay">
          <div className="popup-container" ref={popupRef}>
            <button className="popup-close-btn" onClick={closePopup}>✕</button>
            <div className="popup-content">
              <h2 className="popup-title">Sign In</h2>
              <p className="popup-create-account">
                Don't have an account?{' '}
                <a href="CreateAccount" onClick={(e) => { e.preventDefault(); openCreateAccountPopup(); }}>
                  Create Account
                </a>
              </p>
              {errors.submit && <p className="popup-error">{errors.submit}</p>}
              <form className="popup-form" onSubmit={handleSignIn}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="popup-input"
                  value={formData.username}
                  onChange={handleFormChange}
                  required
                  aria-label="Username"
                />
                {errors.username && <span className="popup-error">{errors.username}</span>}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="popup-input"
                  value={formData.password}
                  onChange={handleFormChange}
                  required
                  aria-label="Password"
                />
                {errors.password && <span className="popup-error">{errors.password}</span>}
                <div className="popup-remember-forgot">
                  <label className="label-container">
                    <input
                      type="checkbox"
                      className="popup-checkbox"
                      aria-label="Remember me"
                    />
                    <span className="checkbox-text">Remember Me</span>
                  </label>
                  <a
                    href="/forgetpassword"
                    className="popup-forgot-link"
                    onClick={() => closePopup()}
                  >
                    Forgot password?
                  </a>
                </div>
                <button type="submit" className="popup-signin-btn" disabled={isLoading}>
                  {isLoading ? 'Signing In...' : 'Sign In →'}
                </button>
              </form>
              <div className="popup-or-separator">or</div>
              <div className="popup-social-buttons">
                <button className="popup-social-btn popup-facebook-btn">
                  <img
                    src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
                    alt="Facebook Logo"
                    className="popup-social-icon"
                  />
                  Sign in with Facebook
                </button>
                <button className="popup-social-btn popup-google-btn">
                  <img
                    src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
                    alt="Google Logo"
                    className="popup-social-icon"
                  />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Account Popup - Step 1 */}
      {activePopup === 'createAccount' && (
        <div className="popup-overlay">
          <div className="popup-container popup-create-account-container" ref={popupRef}>
            <button className="popup-close-btn" onClick={closePopup}>✕</button>
            <div className="popup-content">
              <div className="create-accountLinkContainer">
                <div>
                  <h2 className="popup-title">Create Account</h2>
                  <p className="popup-create-account">
                    Already have an account?{' '}
                    <a href="signin" onClick={(e) => { e.preventDefault(); openSignInPopup(); }}>
                      Log In
                    </a>
                  </p>
                </div>
                <select
                  name="accountType"
                  className="popup-select popup-create-account-select"
                  value={formData.accountType || ''}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Employer</option>
                  <option value="employers">Employer</option>
                  <option value="jobseekers">Employee</option>
                </select>
              </div>
              {errors.submit && <p className="popup-error">{errors.submit}</p>}
              <form className="popup-form popup-create-account-form" onSubmit={handleCreateAccountNext}>
                <div className="fullName-one">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="popup-input popup-create-account-input"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      required
                      aria-label="First Name"
                    />
                    {errors.firstName && <span className="popup-error">{errors.firstName}</span>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="popup-input popup-create-account-input"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      required
                      aria-label="Last Name"
                    />
                    {errors.lastName && <span className="popup-error">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="fullName-one">
                  <div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="popup-input popup-create-account-input"
                      value={formData.username}
                      onChange={handleFormChange}
                      required
                      aria-label="Username"
                    />
                    {errors.username && <span className="popup-error">{errors.username}</span>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="popup-input popup-create-account-input"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      aria-label="Email"
                    />
                    {errors.email && <span className="popup-error">{errors.email}</span>}
                  </div>
                </div>
                 <div className="fullName-one"> 
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="popup-input popup-create-account-input"
                    value={formData.password}
                    onChange={handleFormChange}
                    required
                    aria-label="Password"
                  />
                  {errors.password && <span className="popup-error">{errors.password}</span>}
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="popup-input popup-create-account-input"
                    value={formData.confirmPassword}
                    onChange={handleFormChange}
                    required
                    aria-label="Confirm Password"
                  />
                  {errors.confirmPassword && <span className="popup-error">{errors.confirmPassword}</span>}
                </div> 
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="popup-input popup-create-account-input"
                    value={formData.companyName}
                    onChange={handleFormChange}
                    required
                    minLength={2}
                    aria-label="Company Name"
                  />
                  {errors.companyName && <span className="popup-error">{errors.companyName}</span>}
                </div>
                <div className="popup-terms">
                  <label className="label-container">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      className="popup-checkbox"
                      checked={formData.termsAccepted}
                      onChange={handleFormChange}
                      required
                      aria-label="I agree to the terms of services"
                    />
                    <span className="checkbox-text">I've read and agree with your</span>
                    <a href="/TermsofServices" className="terms-link">Terms of Services</a>
                  </label>
                  {errors.termsAccepted && <span className="popup-error">{errors.termsAccepted}</span>}
                </div>
                <button type="submit" className="popup-signin-btn" disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Next'} <span>→</span>
                </button>
              </form>
              <div className="popup-or-separator">or</div>
              <div className="popup-social-buttons">
                <button className="popup-social-btn popup-facebook-btn">
                  <img
                    src="https://i.ibb.co/rKM88Gp/Employers-Logo-2.png"
                    alt="Facebook Logo"
                    className="popup-social-icon"
                  />
                  Sign up with Facebook
                </button>
                <button className="popup-social-btn popup-google-btn">
                  <img
                    src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
                    alt="Google Logo"
                    className="popup-social-icon"
                  />
                  Sign up with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Company Profile Popup - Step 2 */}
      {activePopup === 'companyProfile' && (
        <div className="popup-overlay">
          <div className="popup-container" ref={popupRef}>
            <button className="popup-close-btn" onClick={closePopup}>✕</button>
            <div className="popup-content">
              <div className="popup-step">Step 2</div>
              <h2 className="popup-title">Company Profile</h2>
              <p className="popup-subtitle">Complete Your Company Profile</p>
              {errors.submit && <p className="popup-error">{errors.submit}</p>}
              <form className="popup-form popup-form-grid" onSubmit={handleCreateAccountNext}>
                <div>
                  <select
                    name="industry"
                    className="popup-select"
                    value={formData.industry}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Industry</option>
                    <option value="tech">Tech</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                  </select>
                  {errors.industry && <span className="popup-error">{errors.industry}</span>}
                </div>
                <input
                  type="text"
                  name="tagline"
                  placeholder="Tagline"
                  className="popup-input"
                  value={formData.tagline}
                  onChange={handleFormChange}
                />
                <div>
                  <select
                    name="teamSize"
                    className="popup-select"
                    value={formData.teamSize}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Team Size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                  </select>
                  {errors.teamSize && <span className="popup-error">{errors.teamSize}</span>}
                </div>
                <div>
                  <select
                    name="location"
                    className="popup-select"
                    value={formData.location}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Location</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="india">India</option>
                  </select>
                  {errors.location && <span className="popup-error">{errors.location}</span>}
                </div>
                <select
                  name="headquarters"
                  className="popup-select"
                  value={formData.headquarters}
                  onChange={handleFormChange}
                >
                  <option value="">Headquarters</option>
                  <option value="new-york">New York</option>
                  <option value="london">London</option>
                  <option value="mumbai">Mumbai</option>
                </select>
                <input
                  type="text"
                  name="foundationYear"
                  placeholder="Foundation Year"
                  className="popup-input"
                  value={formData.foundationYear}
                  onChange={handleFormChange}
                />
                <div className="popup-file-input">
                  <input
                    type="file"
                    name="logo"
                    className="popup-input-file"
                    onChange={handleFormChange}
                    aria-label="Upload Logo"
                  />
                  <span className="file-placeholder">Logo</span>
                </div>
                <textarea
                  name="shortDescription"
                  placeholder="Short Description"
                  className="popup-textarea"
                  value={formData.shortDescription}
                  onChange={handleFormChange}
                />
                <button type="submit" className="popup-signin-btn" disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Next'} <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Verify Your Company Popup - Step 3 */}
      {activePopup === 'verifyCompany' && (
        <div className="popup-overlay">
          <div className="popup-container" ref={popupRef}>
            <button className="popup-close-btn" onClick={closePopup}>✕</button>
            <div className="popup-content">
              <div className="popup-step">Step 3</div>
              <h2 className="popup-title">Verify Your Company</h2>
              <p className="popup-subtitle">Complete The Verification</p>
              {errors.submit && <p className="popup-error">{errors.submit}</p>}
              <form className="popup-form" onSubmit={handleCreateAccountNext}>
                <div className="popup-file-input">
                  <input
                    type="file"
                    name="registrationCertificate"
                    className="popup-input-file"
                    onChange={handleFormChange}
                    aria-label="Upload Registration Certificate"
                  />
                  <span className="file-placeholder">Registration Certificate</span>
                </div>
                <div className="popup-file-input">
                  <input
                    type="file"
                    name="taxReturns"
                    className="popup-input-file"
                    onChange={handleFormChange}
                    aria-label="Upload Latest Tax Returns"
                  />
                  <span className="file-placeholder">Latest Tax Returns</span>
                </div>
                <div className="popup-file-input">
                  <input
                    type="file"
                    name="utilityBill"
                    className="popup-input-file"
                    onChange={handleFormChange}
                    aria-label="Upload Utility Bill or Lease Agreement"
                  />
                  <span className="file-placeholder">Utility Bill or Lease Agreement</span>
                </div>
                <div className="popup-file-input">
                  <input
                    type="file"
                    name="governmentId"
                    className="popup-input-file"
                    onChange={handleFormChange}
                    aria-label="Upload Government ID"
                  />
                  <span className="file-placeholder">Government ID</span>
                </div>
                <button type="submit" className="popup-signin-btn" disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Submit'} <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Logout Popup */}
      {activePopup === 'logout' && (
        <div className="popup-overlay">
          <div className="popup-container popup-logout-container" ref={popupRef}>
            <button className="popup-close-btn" onClick={closePopup}>✕</button>
            <div className="popup-content">
              <h2 className="popup-title">Are you sure you want to logout?</h2>
              <div className="popup-logout-buttons">
                <button className="popup-logout-btn" onClick={handleLogoutConfirm}>
                  Log Out
                </button>
                <button className="popup-cancel-btn" onClick={closePopup}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default EmployerHeader;