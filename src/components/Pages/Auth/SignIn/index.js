import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signIn.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    let valid = true;

    if (!username.trim()) {
      setUsernameError('Username is required');
      valid = false;
    } else {
      setUsernameError('');
    }

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

    if (!valid) return;

    try {
      const response = await fetch('http://127.0.0.1:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!'); // ✅ show success toast
        localStorage.setItem('authToken', data.data.token);
        localStorage.setItem('firstName', data.data.user.first_name);
        localStorage.setItem('lastName', data.data.user.last_name);
        localStorage.setItem('user_id', data.data.user.id);
        navigate('/');
      } else {
        toast.error(data.message || 'Invalid username or password'); // ✅ show error toast
      }
    } catch (err) {
      toast.error(err.message || 'An unexpected error occurred'); // ✅ show error toast
      console.error('Login error:', err);
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
          <h2 className="signin-title">Sign in</h2>
          <p className="signin-create-account">
            Don't have account? <a href="/signup">Create Account</a>
          </p>

          <form onSubmit={handleSignIn} className="signin-form">
            <div className="signin-input-group">
              <label htmlFor="email">Username</label>
              <input
                id="username"
                type="text"
                placeholder='Enter Username'
                value={username}
                onChange={(e) => {
                  const value = e.target.value;
                  setUsername(value);

                  if (!value.trim()) {
                    setUsernameError('Username is required');
                  } else {
                    setUsernameError('');
                  }
                }}

              />
              {usernameError && <span className="input-error">{usernameError}</span>}
            </div>
            <div className="signin-input-group">
              <label htmlFor="password">Password</label>
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
              <span>Sign In</span>
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

export default SignIn;
