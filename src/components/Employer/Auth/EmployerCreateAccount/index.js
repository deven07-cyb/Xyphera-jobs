// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './EmployerCreateAccount.css';

// const  EmployerCreateAccount = () => {
//   const navigate = useNavigate();

//   // Function to handle navigation to the next step of Create Account
//   const handleSignIn = () => {
//     navigate('/addcompanydetails');
//   };

//   return (
//     <div className="create-container">
//       <div className="create-leftSection">
//         <h1 className="create-heading">Over 200 Companies Hiring<br/> Top Talent Now.</h1>
//         <div className="create-stats">
//           <div className="create-statItem">
//             <div className="blur-background">
//               <img
//                 src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
//                 alt="Verified Employers"
//                 className="create-statIcon"
//               />
//             </div>
//             <div className="create-start-container">
//               <span className="create-statNumber">5,734</span>
//               <span className="create-statLabel">Verified Employers</span>
//             </div>
//           </div>
//           <div className="create-statItem">
//             <div className="blur-background">
//               <img
//                 src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
//                 alt="Active Job Seekers"
//                 className="create-statIcon"
//               />
//             </div>
//             <div className="create-start-container">
//               <span className="create-statNumber">12,359</span>
//               <span className="create-statLabel">Active Job Seekers</span>
//             </div>
//           </div>
//           <div className="create-statItem">
//             <div className="blur-background">
//               <img
//                 src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
//                 alt="New Candidates"
//                 className="create-statIcon"
//               />
//             </div>
//             <div className="create-start-container">
//               <span className="create-statNumber">1,812</span>
//               <span className="create-statLabel">New Candidates</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="create-rightSection">
//         <div className="create-innerRightContainer">
//           <div className="create-logo">Logo</div>
//           <h2 className="create-signInTitle">Step 1</h2>
//           <h2 className="create-createAccountTitle">Create account.</h2>
//           <div className="create-accountLinkContainer">
//             <p className="create-createAccountLink">
//               Already have account? <a className="create-acreateacount" href="/signin">Log in</a>
//             </p>
//             <select className="create-accountTypeSelect create-accountTypeSelect-one">
//               <option value="employers">Employer</option>
//               <option value="jobseekers">Employee</option>
//             </select>
//           </div>
//           <form className="create-loginForm">
//             <div className="create-formRow">
//               <input type="text" placeholder="Full Name" className="create-inputField" />
//               <input type="text" placeholder="Company Name" className="create-inputField" />
//             </div>
//             <input type="email" placeholder="Email address" className="create-inputField" />
//             <input type="password" placeholder="Password" className="create-inputField" />
//             <input type="password" placeholder="Confirm Password" className="create-inputField" />
//             <div className="create-termsCheckbox">
//               <input type="checkbox" className="create-checkbox" />
//               <label className='labledata'>
//                 I’ve read and agree with your
//                 <span className="sapntermscolor">Terms of Services</span>
//               </label>
//             </div>
//             <button className="create-signInButton" onClick={handleSignIn}>
//               Next <span>→</span>
//             </button>
//           </form>
//           <div className="create-orSeparator">or</div>
//           {/* <div className="create-socialButtons">
//             <button className="create-socialButton">
//               <img
//                 src="https://i.ibb.co/wrLdJK3k/Employers-Logo.png"
//                 alt="Facebook"
//                 className="create-socialIcon"
//               />{' '}
//               Sign up with Facebook
//             </button>
//             <button className="create-socialButton">
//               <img
//                 src="https://i.ibb.co/m55vdmYM/Employers-Logo-1.png"
//                 alt="Google"
//                 className="create-socialIcon"
//               />{' '}
//               Sign up with Google
//             </button>
//           </div> */}
//           <div className="login-social-buttons">
//                         <button className="login-social-button login-facebook-button">
//                             <img
//                                 src="https://i.ibb.co/rKM88Gp1/Employers-Logo-2.png"
//                                 alt="Facebook Logo"
//                                 className="facebooklogogooglelogo"
//                             />
//                             Sign in with Facebook
//                         </button>
//                         <button className="login-social-button login-google-button">
//                             <img
//                                 src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
//                                 alt="Google Logo"
//                                 className="facebooklogogooglelogo"
//                             />
//                             Sign in with Google
//                         </button>
//                     </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default  EmployerCreateAccount;  






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './EmployerCreateAccount.css';

// const EmployerCreateAccount = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     companyName: '',
//     email: '',
//     industry: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [workInProgress, setWorkInProgress] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
//     if (!formData.username.trim()) newErrors.username = 'Username is required';
//     if (!formData.companyName.trim()) newErrors.companyName = 'Company Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.industry.trim()) newErrors.industry = 'Industry is required';
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsLoading(true);
//     setWorkInProgress(true);
//     try {
//       // Prepare request payload
//       const requestBody = {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//         company_name: formData.companyName,
//         industry: formData.industry,
//         first_name: formData.firstName,
//         last_name: formData.lastName,
//       };
//       console.log('Request Payload:', JSON.stringify(requestBody, null, 2));

//       // Send POST request to create employer
//       const signupResponse = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const signupData = await signupResponse.json();
//       console.log('Server Response:', JSON.stringify(signupData, null, 2));

//       if (!signupResponse.ok) {
//         if (signupData.message === 'Username already exists') {
//           setErrors({ username: 'This username is already taken. Please choose another one.' });
//         } else if (signupData.message === 'Email already exists') {
//           setErrors({ email: 'This email is already registered. Please use another email.' });
//         } else if (signupData.message && signupData.details) {
//           setErrors({ submit: `Validation failed: ${JSON.stringify(signupData.details)}` });
//         } else {
//           throw new Error(signupData.message || 'Signup failed');
//         }
//         return;
//       }

//       // Store user data and token (if returned)
//       localStorage.setItem(
//         'userData',
//         JSON.stringify({
//           username: formData.username,
//           email: formData.email,
//           company_name: formData.companyName,
//           industry: formData.industry,
//           first_name: formData.firstName,
//           last_name: formData.lastName,
//           accountType: 'employer',
//         })
//       );
//       if (signupData.token) {
//         localStorage.setItem('authToken', signupData.token);
//       }

//       // Redirect to email verification or company details page
//       navigate('/emailverification');
//     } catch (error) {
//       if (error.message.includes('Failed to fetch')) {
//         setErrors({ submit: 'Unable to connect to the server. Please check your network or try again later.' });
//       } else {
//         setErrors({ submit: error.message });
//       }
//       console.error('Error:', error);
//     } finally {
//       setIsLoading(false);
//       setWorkInProgress(false);
//     }
//   };

//   return (
//     <div className="create-container">
//       <div className="create-leftSection">
//         <h1 className="create-heading">Over 200 Companies Hiring<br/> Top Talent Now.</h1>
//         <div className="create-stats">
//           <div className="create-statItem">
//             <div className="blur-background">
//               <img
//                 src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
//                 alt="Verified Employers"
//                 className="create-statIcon"
//               />
//             </div>
//             <div className="create-start-container">
//               <span className="create-statNumber">5,734</span>
//               <span className="create-statLabel">Verified Employers</span>
//             </div>
//           </div>
//           <div className="create-statItem">
//             <div className="blur-background">
//               <img
//                 src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
//                 alt="Active Job Seekers"
//                 className="create-statIcon"
//               />
//             </div>
//             <div className="create-start-container">
//               <span className="create-statNumber">12,359</span>
//               <span className="create-statLabel">Active Job Seekers</span>
//             </div>
//           </div>
//           <div className="create-statItem">
//             <div className="blur-background">
//               <img
//                 src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
//                 alt="New Candidates"
//                 className="create-statIcon"
//               />
//             </div>
//             <div className="create-start-container">
//               <span className="create-statNumber">1,812</span>
//               <span className="create-statLabel">New Candidates</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="create-rightSection">
//         <div className="create-innerRightContainer">
//           <div className="create-logo">Logo</div>
//           <h2 className="create-signInTitle">Step 1</h2>
//           <h2 className="create-createAccountTitle">Create Employer Account</h2>
//           <div className="create-accountLinkContainer">
//             <p className="create-createAccountLink">
//               Already have an account? <a className="create-acreateacount" href="/employerlogin">Log in</a>
//             </p>
//           </div>
//           <form className="create-loginForm" onSubmit={handleSubmit}>
//             <div className="create-formRow">
//               <div>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   className="create-inputField"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                 />
//                 {errors.firstName && <span className="error">{errors.firstName}</span>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   className="create-inputField"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                 />
//                 {errors.lastName && <span className="error">{errors.lastName}</span>}
//               </div>
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 className="create-inputField"
//                 value={formData.username}
//                 onChange={handleInputChange}
//               />
//               {errors.username && <span className="error">{errors.username}</span>}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Company Name"
//                 className="create-inputField"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//               />
//               {errors.companyName && <span className="error">{errors.companyName}</span>}
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email address"
//                 className="create-inputField"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//               {errors.email && <span className="error">{errors.email}</span>}
//             </div>
//             <div>
//               <input
//                 type="text"
//                 name="industry"
//                 placeholder="Industry (e.g., IT, Finance)"
//                 className="create-inputField"
//                 value={formData.industry}
//                 onChange={handleInputChange}
//               />
//               {errors.industry && <span className="error">{errors.industry}</span>}
//             </div>
//             <div>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 className="create-inputField"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//               {errors.password && <span className="error">{errors.password}</span>}
//             </div>
//             <div>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 className="create-inputField"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//               />
//               {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//             </div>
//             <div className="create-termsCheckbox">
//               <input type="checkbox" className="create-checkbox" required />
//               <label className="readandagree">
//                 I’ve read and agree with your <span className="sapntermscolor">Terms of Services</span>
//               </label>
//             </div>
//             <button className="create-signInButton" type="submit" disabled={isLoading}>
//               {isLoading ? 'Loading...' : 'Next'} <span>→</span>
//             </button>
//             {workInProgress && <span className="work-in-progress">Work in progress...</span>}
//             {errors.submit && <span className="error submit-error">{errors.submit}</span>}
//           </form>
//           <div className="create-orSeparator">or</div>
//           <div className="login-social-buttons">
//             <button className="login-social-button login-facebook-button">
//               <img
//                 src="https://i.ibb.co/rKM88Gp1/Employers-Logo-2.png"
//                 alt="Facebook Logo"
//                 className="facebooklogogooglelogo"
//               />
//               Sign in with Facebook
//             </button>
//             <button className="login-social-button login-google-button">
//               <img
//                 src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
//                 alt="Google Logo"
//                 className="facebooklogogooglelogo"
//               />
//               Sign in with Google
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerCreateAccount;


 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EmployerCreateAccount.css';

const EmployerCreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    firstName: '',
    lastName: '',
    termsAccepted: false,
    //role:""
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Client-side validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.termsAccepted) {
      setError('Please accept the Terms of Service');
      return;
    }
    if (!formData.companyName || formData.companyName.length < 2) {
      setError('Company name must be at least 2 characters long');
      return;
    }
    if (!formData.username || !formData.email || !formData.password || !formData.firstName || !formData.lastName) {
      setError('All fields are required');
      return;
    }

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      company_name: formData.companyName,
      first_name: formData.firstName,
      last_name: formData.lastName,
      //role: formData.role,
    };
    console.log('Payload:', payload);

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
      const { success: apiSuccess, message, data } = response.data;
      if (apiSuccess) {
        setSuccess(message);
        console.log('Employer data:', data);
        setTimeout(() => navigate('/addcompanydetails'), 1000);
      } else {
        setError(message);
      }
    } catch (err) {
      console.error('Axios Error:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Failed to create account. Please try again later.');
    }
  };

  return (
    <div className="create-container">
      <div className="create-leftSection">
        <h1 className="create-heading">Over 200 Companies Hiring<br/> Top Talent Now.</h1>
        <div className="create-stats">
          <div className="create-statItem">
            <div className="blur-background">
              <img
                src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
                alt="Verified Employers"
                className="create-statIcon"
              />
            </div>
            <div className="create-start-container">
              <span className="create-statNumber">5,734</span>
              <span className="create-statLabel">Verified Employers</span>
            </div>
          </div>
          <div className="create-statItem">
            <div className="blur-background">
              <img
                src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
                alt="Active Job Seekers"
                className="create-statIcon"
              />
            </div>
            <div className="create-start-container">
              <span className="create-statNumber">12,359</span>
              <span className="create-statLabel">Active Job Seekers</span>
            </div>
          </div>
          <div className="create-statItem">
            <div className="blur-background">
              <img
                src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
                alt="New Candidates"
                className="create-statIcon"
              />
            </div>
            <div className="create-start-container">
              <span className="create-statNumber">1,812</span>
              <span className="create-statLabel">New Candidates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="create-rightSection">
        <div className="create-innerRightContainer">
          <div className="create-logo">Logo</div>
          <h2 className="create-signInTitle">Step 1</h2>
          <h2 className="create-createAccountTitle">Create account.</h2>
          <div className="create-accountLinkContainer">
            <p className="create-createAccountLink">
              Already have account? <a className="create-acreateacount" href="/employerlogin">Log in</a>
            </p>
            <select
              className="create-accountTypeSelect create-accountTypeSelect-one"
              value={formData.accountType}
              onChange={(e) => handleChange({ target: { name: 'accountType', value: e.target.value } })}
            >
              <option value="employers">Employer</option>
              <option value="jobseekers">Employee</option>
            </select>
          </div>
          <form className="create-loginForm" onSubmit={handleSubmit}>
            <div className="create-formRow">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="create-inputField"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="create-inputField"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="create-inputField"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="create-inputField"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="create-inputField"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="create-inputField"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="create-inputField"
              value={formData.companyName}
              onChange={handleChange}
              required
              minLength={2}
            />
            <div className="create-termsCheckbox">
              <input
                type="checkbox"
                name="termsAccepted"
                className="create-checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              <label className="labledata">
                I’ve read and agree with your
                <span className="sapntermscolor">Terms of Services</span>
              </label>
            </div>
            <button type="submit" className="create-signInButton">
              Next <span>→</span>
            </button>
            {error && <p className="create-error">{error}</p>}
            {success && <p className="create-success">{success}</p>}
          </form>
          <div className="create-orSeparator">or</div>
          <div className="login-social-buttons">
            <button className="login-social-button login-facebook-button">
              <img
                src="https://i.ibb.co/rKM88Gp1/Employers-Logo-2.png"
                alt="Facebook Logo"
                className="facebooklogogooglelogo"
              />
              Sign in with Facebook
            </button>
            <button className="login-social-button login-google-button">
              <img
                src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
                alt="Google Logo"
                className="facebooklogogooglelogo"
              />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerCreateAccount;