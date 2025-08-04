import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './createaccount.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState('employee');
  
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    let valid = true;

    // First Name validation
    if (!firstName.trim()) {
      setFirstNameError('First Name is required');
      valid = false;
    } else {
      setFirstNameError('');
    }

    // Last Name validation
    if (!lastName.trim()) {
      setLastNameError('Last Name is required');
      valid = false;
    } else {
      setLastNameError('');
    }

    // User Name validation
    if (!userName.trim()) {
      setUserNameError('User Name is required');
      valid = false;
    } else {
      setUserNameError('');
    }

    // Phone Number validation (only for employees)
    if (accountType === 'employee') {
      if (!phoneNumber.trim()) {
        setPhoneNumberError('Phone Number is required');
        valid = false;
      } else if (!(/^\d{10}$/.test(phoneNumber))) {
        setPhoneNumberError('Please enter a valid 10-digit phone number');
        valid = false;
      } else {
        setPhoneNumberError('');
      }
    }

    // Company Name validation (only for employers)
    if (accountType === 'employer') {
      if (!companyName.trim()) {
        setCompanyNameError('Company Name is required');
        valid = false;
      } else {
        setCompanyNameError('');
      }
    }

    // Email validation
    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/.test(password)) {
      setPasswordError(
        'Password must contain uppercase, lowercase, number, and special character'
      );
      valid = false;
    } else {
      setPasswordError('');
    }

    // Confirm Password validation
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirm Password is required');
      valid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    // Stop execution if validation fails
    if (!valid) return;

    if (accountType === 'employee') {
      const payload = {
        username: userName,
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        phone: phoneNumber,
      };
      console.log('Employee Payload:', payload);

      try {
        const response = await axios.post(
          'http://127.0.0.1:5000/api/v1/employees',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const { success: apiSuccess, message, data } = response.data;
        if (apiSuccess) {
          toast.success('Signup successful!');
          console.log('Employee data:', data);
          navigate('/signin');
        } else {
          toast.error(message || 'Registration failed');
        }
      } catch (err) {
        toast.error(err.response?.data?.message || err.message || 'An unexpected error occurred');
      }
    } else if (accountType === 'employer') {
      const payload = {
        username: userName,
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        company_name: companyName,
      };
      console.log('Employer Payload:', payload);

      try {
        const response = await axios.post(
          'http://127.0.0.1:5000/api/v1/employers',
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const { success: apiSuccess, message, data } = response.data;
        if (apiSuccess) {
          toast.success('Signup successful!');
          console.log('Employer data:', data);
          navigate('/signin');
        } else {
          toast.error(message || 'Registration failed');
        }
      } catch (err) {
        toast.error(err.response?.data?.message || err.message || 'An unexpected error occurred');
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-left-section">
        <div className="signin-left-content">
          <h1 className="signin-heading">
            To Secure Your Financial Future, You Must Actively Find A Job And Apply Diligently
          </h1>
          <div className="signin-stats">
            <div className="signin-stat-item d-grid">
              <div className="signin-stat-icon-wrapper">
                <img src='/imageswebsite/signin-01.svg'
                  alt="01"
                  className="login-stat-icon"
                />
              </div>
              <div className="signin-stat-text">
                <span className="signin-stat-number">5,734</span>
                <span className="signin-stat-label">Verified Companies</span>
              </div>
            </div>
            <div className="signin-stat-item d-grid">
              <div className="signin-stat-icon-wrapper">
                <img src='/imageswebsite/signin-02.svg'
                  alt="02"
                  className="login-stat-icon"
                />
              </div>
              <div className="signin-stat-text">
                <span className="signin-stat-number">12,734</span>
                <span className="signin-stat-label">Active Job Openings</span>
              </div>
            </div>
            <div className="signin-stat-item d-grid">
              <div className="signin-stat-icon-wrapper">
                <img src='/imageswebsite/signin-03.svg'
                  className="login-stat-icon"
                  alt="03"
                />
              </div>
              <div className="signin-stat-text">
                <span className="signin-stat-number">1,812</span>
                <span className="signin-stat-label">New Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="signin-right-section">
        <div className="signin-form-container">
          <div className="signin-logo">
            <div className="logo-circle"></div>
            <span>Logo</span>
          </div>
          <div className='d-flex justify-content-between'>
            <div>
              <h2 className="signin-title">Create account</h2>
              <p className="signin-create-account">
                Already have account? <a href="/signin">Log in</a>
              </p>
            </div>
            <div>
              <select
                id="accountType"
                name="accountType"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  fontSize: '16px',
                }}
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="employee">Employee</option>
                <option value="employer">Employer</option>
              </select>
            </div>
          </div>

          <form onSubmit={handleSignIn} className="signin-form">
            <div className="row g-2">
              <div className="col-12 col-md-6">
                <div className="signin-input-group">
                  <input
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFirstName(value);

                      if (!value.trim()) {
                        setFirstNameError('First Name is required');
                      } else {
                        setFirstNameError('');
                      }
                    }}
                  />
                  {firstNameError && (
                    <span className="input-error">{firstNameError}</span>
                  )}
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="signin-input-group">
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                      const value = e.target.value;
                      setLastName(value);

                      if (!value.trim()) {
                        setLastNameError('Last Name is required');
                      } else {
                        setLastNameError('');
                      }
                    }}
                  />
                  {lastNameError && (
                    <span className="input-error">{lastNameError}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row g-2">
              <div className="col-12 col-md-6">
                <div className="signin-input-group">
                  <input
                    id="username"
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => {
                      const value = e.target.value;
                      setUserName(value);

                      if (!value.trim()) {
                        setUserNameError('User Name is required');
                      } else {
                        setUserNameError('');
                      }
                    }}
                  />
                  {userNameError && (
                    <span className="input-error">{userNameError}</span>
                  )}
                </div>
              </div>

              {accountType === 'employee' ? (
                <div className="col-12 col-md-6">
                  <div className="signin-input-group">
                    <input
                      id="phonenumber"
                      type="text"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPhoneNumber(value);

                        if (!value.trim()) {
                          setPhoneNumberError('Phone Number is required');
                        } else if (!(/^\d{10}$/.test(value))) {
                          setPhoneNumberError('Please enter a valid 10-digit phone number');
                        } else {
                          setPhoneNumberError('');
                        }
                      }}
                    />
                    {phoneNumberError && (
                      <span className="input-error">{phoneNumberError}</span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="col-12 col-md-6">
                  <div className="signin-input-group">
                    <input
                      id="companyname"
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCompanyName(value);

                        if (!value.trim()) {
                          setCompanyNameError('Company Name is required');
                        } else {
                          setCompanyNameError('');
                        }
                      }}
                    />
                    {companyNameError && (
                      <span className="input-error">{companyNameError}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <div className="signin-input-group">
              <input
                id="email"
                type="text"
                placeholder='Enter Email'
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);

                  if (!value.trim()) {
                    setEmailError('Email is required');
                  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
                    setEmailError('Please enter a valid email address');
                  } else {
                    setEmailError('');
                  }
                }}
              />
              {emailError && <span className="input-error">{emailError}</span>}
            </div>

            <div className="signin-input-group">
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);

                    if (!value.trim()) {
                      setPasswordError('Password is required');
                    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/.test(value)) {
                      setPasswordError(
                        'Password must contain uppercase, lowercase, number, and special character'
                      );
                    } else {
                      setPasswordError('');
                    }
                  }}
                />
                {!showPassword ? (
                  <img
                    src="/imageswebsite/close-eye.svg"
                    alt="Hide password"
                    className="signin-password-icon"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <img
                    src="/imageswebsite/open-eye.svg"
                    alt="Show password"
                    className="signin-password-icon"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              {passwordError && <span className="input-error">{passwordError}</span>}
            </div>

            <div className="signin-input-group">
              <div className="password-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setConfirmPassword(value);

                    if (!value.trim()) {
                      setConfirmPasswordError('Confirm Password is required');
                    } else if (value !== password) {
                      setConfirmPasswordError('Passwords do not match');
                    } else {
                      setConfirmPasswordError('');
                    }
                  }}
                />
                {!showConfirmPassword ? (
                  <img
                    src="/imageswebsite/close-eye.svg"
                    alt="Hide confirm password"
                    className="signin-password-icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <img
                    src="/imageswebsite/open-eye.svg"
                    alt="Show confirm password"
                    className="signin-password-icon"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
              {confirmPasswordError && (
                <span className="input-error">{confirmPasswordError}</span>
              )}
            </div>

            <div className="signin-options">
              <label className="signin-remember-me">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a href="/forgetpassword" className="signin-forgot-password">
                Forget password
              </a>
            </div>

            <button type="submit" className="signin-button">
              <span>Sign Up</span>
              <span className='arrow-right'>→</span>
            </button>
          </form>

          <div className="signin-separator">
            <span className="line"></span>
            <span className="or-text">or</span>
            <span className="line"></span>
          </div>

          <div className="signin-social-login">
            <button type="button" className="signin-social-button facebook">
              <img src="https://i.ibb.co/rKM88Gp1/Employers-Logo-2.png" alt="Facebook" />
              <span>Sign in with Facebook</span>
            </button>
            <button type="button" className="signin-social-button google">
              <img src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png" alt="Google" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;