// // import React, { useState } from 'react';
// // import './createaccount.css';

// // const CreateAccount = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     accountType: 'employers',
// //     username: '',
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [isLoading, setIsLoading] = useState(false);

// //   const validateForm = () => {
// //     const newErrors = {};

// //     if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Email is invalid';
// //     }
// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //     } else if (formData.password.length < 8) {
// //       newErrors.password = 'Password must be at least 8 characters';
// //     }
// //     if (formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match';
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: '' }));
// //     }
// //   };

// //   const getUserTypeNumber = () => {
// //     return formData.accountType === 'employers' ? 2 : 1;
// //   };

// //   const sendOTP = async (email) => {
// //     try {
// //       const response = await fetch('http://107.22.99.147:8080/send-otp', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email: email,
// //         }),
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.message || 'Failed to send OTP');
// //       }

// //       const data = await response.json();
// //       console.log('OTP sent successfully:', data);
// //       return true;
// //     } catch (err) {
// //       throw new Error(err.message || 'Failed to send verification code');
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!validateForm()) return;

// //     setIsLoading(true);
// //     try {
// //       // First, create the account
// //       const signupResponse = await fetch('http://107.22.99.147:8080/signup', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email: formData.email,
// //           password: formData.password,
// //           fullname: formData.fullName,
// //           user_type: getUserTypeNumber(),
// //         }),
// //       });

// //       const signupData = await signupResponse.json();

// //       if (!signupResponse.ok) {
// //         if (signupData.error && signupData.error.includes('duplicate key value')) {
// //           throw new Error('This email is already registered');
// //         }
// //         throw new Error(signupData.error || 'Signup failed');
// //       }

// //       // After successful signup, send OTP
// //       await sendOTP(formData.email);

// //       // Store user data in localStorage
// //       localStorage.setItem(
// //         'userData',
// //         JSON.stringify({
// //           username: formData.username,
// //           accountType: formData.accountType,
// //           email: formData.email,
// //         })
// //       );

// //       // Redirect to email verification page
// //       window.location.href = '/emailverification';
// //     } catch (error) {
// //       if (error.message.includes('Failed to fetch')) {
// //         setErrors({ submit: 'Unable to connect to the server. Please check your network or try again later.' });
// //       } else {
// //         setErrors({ submit: error.message });
// //       }
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="create-container">
// //       <div className="create-leftSection">
// //         <h1 className="create-heading">
// //           To secure Your financial future, You must actively find a job and apply diligently
// //         </h1>
// //         <div className="create-stats">
// //           <div className="create-statItem">
// //             <div className="blur-background">
// //               <img
// //                 src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
// //                 alt="Verified Employers"
// //                 className="create-statIcon"
// //               />
// //             </div>
// //             <div className="create-start-container">
// //               <span className="create-statNumber">5,734</span>
// //               <span className="create-statLabel">Verified Employers</span>
// //             </div>
// //           </div>
// //           <div className="create-statItem">
// //             <div className="blur-background">
// //               <img
// //                 src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
// //                 alt="Active Job Seekers"
// //                 className="create-statIcon"
// //               />
// //             </div>
// //             <div className="create-start-container">
// //               <span className="create-statNumber">12,359</span>
// //               <span className="create-statLabel">Active Job Seekers</span>
// //             </div>
// //           </div>
// //           <div className="create-statItem">
// //             <div className="blur-background">
// //               <img
// //                 src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
// //                 alt="New Candidates"
// //                 className="create-statIcon"
// //               />
// //             </div>
// //             <div className="create-start-container">
// //               <span className="create-statNumber">1,812</span>
// //               <span className="create-statLabel">New Candidates</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="create-rightSection">
// //         <div className="create-innerRightContainer">
// //           <div className="create-logo">Logo</div>
// //           <h2 className="create-signInTitle">Step 1</h2>
// //           <h2 className="create-createAccountTitle">Create account</h2>

// //           <div className="create-accountLinkContainer">
// //             <p className="create-createAccountLink">
// //               Already have an account? <a className="create-acreateacount" href="/signin">Log in</a>
// //             </p>
// //             <select
// //               name="accountType"
// //               className="create-accountTypeSelect"
// //               value={formData.accountType}
// //               onChange={handleInputChange}
// //             >
// //               <option value="employers">Employers</option>
// //               <option value="jobseekers">Employee</option>
// //             </select>
// //           </div>

// //           <form className="create-loginForm" onSubmit={handleSubmit}>
// //             <div className="create-formRow">
// //               <div>
// //                 <input
// //                   type="text"
// //                   name="fullName"
// //                   placeholder="Full Name"
// //                   className="create-inputField"
// //                   value={formData.fullName}
// //                   onChange={handleInputChange}
// //                 />
// //                 {errors.fullName && <span className="error">{errors.fullName}</span>}
// //               </div>
// //               <div>
// //                 <input
// //                   type="text"
// //                   name="username"
// //                   placeholder="Username"
// //                   className="create-inputField"
// //                   value={formData.username}
// //                   onChange={handleInputChange}
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email address"
// //                 className="create-inputField"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //               />
// //               {errors.email && <span className="error">{errors.email}</span>}
// //             </div>

// //             <div>
// //               <input
// //                 type="password"
// //                 name="password"
// //                 placeholder="Password"
// //                 className="create-inputField"
// //                 value={formData.password}
// //                 onChange={handleInputChange}
// //               />
// //               {errors.password && <span className="error">{errors.password}</span>}
// //             </div>

// //             <div>
// //               <input
// //                 type="password"
// //                 name="confirmPassword"
// //                 placeholder="Confirm Password"
// //                 className="create-inputField"
// //                 value={formData.confirmPassword}
// //                 onChange={handleInputChange}
// //               />
// //               {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
// //             </div>

// //             <div className="create-termsCheckbox">
// //               <input type="checkbox" className="create-checkbox" required />
// //               <label className="readandagree">
// //                 I’ve read and agree with your <span className="sapntermscolor">Terms of Services</span>
// //               </label>
// //             </div>

// //             <button className="create-signInButton" type="submit" disabled={isLoading}>
// //               {isLoading ? 'Loading...' : 'Next'} <span>→</span>
// //             </button>

// //             {errors.submit && <span className="error submit-error">{errors.submit}</span>}
// //           </form>

// //           <div className="create-orSeparator">or</div>

// //           <div className="login-social-buttons">
// //             <button className="login-social-button login-facebook-button">
// //               <img
// //                 src="https://i.ibb.co/rKM88Gp1/Employers-Logo-2.png"
// //                 alt="Facebook Logo"
// //                 className="facebooklogogooglelogo"
// //               />
// //               Sign in with Facebook
// //             </button>
// //             <button className="login-social-button login-google-button">
// //               <img
// //                 src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
// //                 alt="Google Logo"
// //                 className="facebooklogogooglelogo"
// //               />
// //               Sign in with Google
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateAccount;



// import React, { useState } from 'react';
// import './createaccount.css';

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     accountType: 'employers',
//     username: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
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

//   const getUserTypeNumber = () => {
//     return formData.accountType === 'employers' ? 2 : 1;
//   };

//   const sendOTP = async (email) => {
//     try {
//       const response = await fetch('http://192.168.55.103:5000/api/auth/send-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to send OTP');
//       }

//       const data = await response.json();
//       console.log('OTP sent successfully:', data);
//       return true;
//     } catch (err) {
//       throw new Error(err.message || 'Failed to send verification code');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsLoading(true);
//     try {
//       // First, create the account
//       const signupResponse = await fetch('http://192.168.55.103:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//           fullname: formData.fullName,
//           user_type: getUserTypeNumber(),
//         }),
//       });

//       const signupData = await signupResponse.json();

//       if (!signupResponse.ok) {
//         throw new Error(signupData.error || 'Signup failed');
//       }

//       // After successful signup, send OTP
//       await sendOTP(formData.email);

//       // Store user data in localStorage
//       localStorage.setItem(
//         'userData',
//         JSON.stringify({
//           username: formData.username,
//           accountType: formData.accountType,
//           email: formData.email,
//         })
//       );

//       // Redirect to email verification page
//       window.location.href = '/emailverification';
//     } catch (error) {
//       if (error.message.includes('Failed to fetch')) {
//         setErrors({ submit: 'Unable to connect to the server. Please check your network or try again later.' });
//       } else {
//         setErrors({ submit: error.message });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="create-container">
//       <div className="create-leftSection">
//         <h1 className="create-heading">
//           To secure Your financial future, You must actively find a job and apply diligently
//         </h1>
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
//           <h2 className="create-createAccountTitle">Create account</h2>

//           <div className="create-accountLinkContainer">
//             <p className="create-createAccountLink">
//               Already have an account? <a className="create-acreateacount" href="/signin">Log in</a>
//             </p>
//             <select
//               name="accountType"
//               className="create-accountTypeSelect"
//               value={formData.accountType}
//               onChange={handleInputChange}
//             >
//               <option value="employers">Employers</option>
//               <option value="jobseekers">Employee</option>
//             </select>
//           </div>

//           <form className="create-loginForm" onSubmit={handleSubmit}>
//             <div className="create-formRow">
//               <div>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="create-inputField"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                 />
//                 {errors.fullName && <span className="error">{errors.fullName}</span>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   className="create-inputField"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                 />
//               </div>
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

// export default CreateAccount; 
 


// import React, { useState } from 'react';
// import './createaccount.css';

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     accountType: 'employers',
//     username: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [workInProgress, setWorkInProgress] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
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

//   const sendOTP = async (email) => {
//     try {
//       const response = await fetch('http://192.168.55.103:5000/api/auth/send-otp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to send OTP');
//       }

//       const data = await response.json();
//       console.log('OTP sent successfully:', data);
//       return true;
//     } catch (err) {
//       throw new Error(err.message || 'Failed to send verification code');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsLoading(true);
//     setWorkInProgress(true);
//     try {
//       // Log the request payload
//       const requestBody = {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//         confirm_password: formData.confirmPassword,
//       };
//       console.log('Request Payload:', requestBody);

//       // First, create the account
//       const signupResponse = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:3000/api/v1/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const signupData = await signupResponse.json();
//       console.log('Server Response:', signupData); // Log the response

//       if (!signupResponse.ok) {
//         if (signupData.message === 'Username already exists') {
//           setErrors({ username: 'This username is already taken. Please choose another one.' });
//         } else {
//           throw new Error(signupData.message || 'Signup failed');
//         }
//         return;
//       }

//       // After successful signup, send OTP
//       await sendOTP(formData.email);

//       // Store user data in localStorage
//       localStorage.setItem(
//         'userData',
//         JSON.stringify({
//           username: formData.username,
//           accountType: formData.accountType,
//           email: formData.email,
//         })
//       );

//       // Redirect to email verification page
//       window.location.href = '/emailverification';
//     } catch (error) {
//       if (error.message.includes('Failed to fetch')) {
//         setErrors({ submit: 'Unable to connect to the server. Please check your network or try again later.' });
//       } else {
//         setErrors({ submit: error.message });
//       }
//       console.error('Error:', error); // Log the error
//     } finally {
//       setIsLoading(false);
//       setWorkInProgress(false);
//     }
//   };

//   return (
//     <div className="create-container">
//       <div className="create-leftSection">
//         <h1 className="create-heading">
//           To secure Your financial future, You must actively find a job and apply diligently
//         </h1>
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
//           <h2 className="create-createAccountTitle">Create account</h2>

//           <div className="create-accountLinkContainer">
//             <p className="create-createAccountLink">
//               Already have an account? <a className="create-acreateacount" href="/signin">Log in</a>
//             </p>
//             <select
//               name="accountType"
//               className="create-accountTypeSelect"
//               value={formData.accountType}
//               onChange={handleInputChange}
//             >
//               <option value="employers">Employers</option>
//               <option value="jobseekers">Employee</option>
//             </select>
//           </div>

//           <form className="create-loginForm" onSubmit={handleSubmit}>
//             <div className="create-formRow">
//               <div>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="create-inputField"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                 />
//                 {errors.fullName && <span className="error">{errors.fullName}</span>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   className="create-inputField"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                 />
//                 {errors.username && <span className="error">{errors.username}</span>}
//               </div>
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

// export default CreateAccount; 



// import React, { useState } from 'react';
// import './createaccount.css';

// const CreateAccount = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     accountType: 'employers',
//     username: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [workInProgress, setWorkInProgress] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
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
//       // Log the request payload
//       const requestBody = {
//         username: formData.username,
//         email: formData.email,
//         password: formData.password,
//         confirm_password: formData.confirmPassword,
//       };
//       console.log('Request Payload:', requestBody);

//       // First, create the account
//       const signupResponse = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:3000/api/v1/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       const signupData = await signupResponse.json();
//       console.log('Server Response:', signupData); // Log the response

//       if (!signupResponse.ok) {
//         if (signupData.message === 'Username already exists') {
//           setErrors({ username: 'This username is already taken. Please choose another one.' });
//         } else {
//           throw new Error(signupData.message || 'Signup failed');
//         }
//         return;
//       }

//       // Removed OTP sending step
//       // Store user data in localStorage
//       localStorage.setItem(
//         'userData',
//         JSON.stringify({
//           username: formData.username,
//           accountType: formData.accountType,
//           email: formData.email,
//         })
//       );

//       // Redirect to email verification page
//       window.location.href = '/emailverification';
//     } catch (error) {
//       if (error.message.includes('Failed to fetch')) {
//         setErrors({ submit: 'Unable to connect to the server. Please check your network or try again later.' });
//       } else {
//         setErrors({ submit: error.message });
//       }
//       console.error('Error:', error); // Log the error
//     } finally {
//       setIsLoading(false);
//       setWorkInProgress(false);
//     }
//   };

//   return (
//     <div className="create-container">
//       <div className="create-leftSection">
//         <h1 className="create-heading">
//           To secure Your financial future, You must actively find a job and apply diligently
//         </h1>
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
//           <h2 className="create-createAccountTitle">Create account</h2>

//           <div className="create-accountLinkContainer">
//             <p className="create-createAccountLink">
//               Already have an account? <a className="create-acreateacount" href="/signin">Log in</a>
//             </p>
//             <select
//               name="accountType"
//               className="create-accountTypeSelect"
//               value={formData.accountType}
//               onChange={handleInputChange}
//             >
//               <option value="employers">Employers</option>
//               <option value="jobseekers">Employee</option>
//             </select>
//           </div>

//           <form className="create-loginForm" onSubmit={handleSubmit}>
//             <div className="create-formRow">
//               <div>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="create-inputField"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                 />
//                 {errors.fullName && <span className="error">{errors.fullName}</span>}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   className="create-inputField"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                 />
//                 {errors.username && <span className="error">{errors.username}</span>}
//               </div>
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

// export default CreateAccount;  

 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './createaccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: 'employee', // Default to 'employee' (jobseekers)
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [workInProgress, setWorkInProgress] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setWorkInProgress(true);
    try {
      // Prepare request payload based on form data
      const requestBody = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
      };
      console.log('Request Payload:', JSON.stringify(requestBody, null, 2));

      // Determine endpoint based on accountType
      const endpoint =
        formData.accountType === 'employee'
          ? 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employees'
          : 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employers';

      // Send POST request to create account
      const signupResponse = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const signupData = await signupResponse.json();
      console.log('Server Response:', JSON.stringify(signupData, null, 2));

      if (!signupResponse.ok) {
        if (signupData.message === 'Username already exists') {
          setErrors({ username: 'This username is already taken. Please choose another one.' });
        } else if (signupData.message === 'Email already exists') {
          setErrors({ email: 'This email is already registered. Please use another email.' });
        } else if (signupData.message && signupData.details) {
          setErrors({ submit: `Validation failed: ${JSON.stringify(signupData.details)}` });
        } else {
          throw new Error(signupData.message || 'Signup failed');
        }
        return;
      }

      // Store user data and token (if returned)
      localStorage.setItem(
        'userData',
        JSON.stringify({
          username: formData.username,
          email: formData.email,
          accountType: formData.accountType,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
        })
      );
      if (signupData.token) {
        localStorage.setItem('authToken', signupData.token);
      }

      // Redirect to email verification page
      navigate('/emailverification');
    } catch (error) {
      if (error.message.includes('Failed to fetch')) {
        setErrors({ submit: 'Unable to connect to the server. Please check your network or try again later.' });
      } else {
        setErrors({ submit: error.message });
      }
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setWorkInProgress(false);
    }
  };

  return (
    <div className="create-container">
      <div className="create-leftSection">
        <h1 className="create-heading">
          To secure Your financial future, You must actively find a job and apply diligently
        </h1>
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
          <h2 className="create-createAccountTitle">Create Account</h2>

          <div className="create-accountLinkContainer">
            <p className="create-createAccountLink">
              Already have an account? <a className="create-acreateacount" href="/signin">Log in</a>
            </p>
            <select
              name="accountType"
              className="create-accountTypeSelect"
              value={formData.accountType}
              onChange={handleInputChange}
            >
              <option value="employee">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          <form className="create-loginForm" onSubmit={handleSubmit}>
            <div className="create-formRow">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="create-inputField"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="create-inputField"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="create-inputField"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="create-inputField"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (e.g., 9876543210)"
                className="create-inputField"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="create-inputField"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="create-inputField"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <div className="create-termsCheckbox">
              <input type="checkbox" className="create-checkbox" required />
              <label className="readandagree">
                I’ve read and agree with your <span className="sapntermscolor">Terms of Services</span>
              </label>
            </div>

            <button className="create-signInButton" type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Next'} <span>→</span>
            </button>

            {workInProgress && <span className="work-in-progress">Work in progress...</span>}
            {errors.submit && <span className="error submit-error">{errors.submit}</span>}
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

export default CreateAccount;