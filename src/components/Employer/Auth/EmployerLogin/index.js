// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './EmployerLogin.css';

// // // Define placeholder arrays outside the component to prevent re-creation on each render
// // const EMAIL_PLACEHOLDERS = ['Email Address', 'Your Email', 'Enter Email'];
// // const PASSWORD_PLACEHOLDERS = ['Password', 'Your Password', 'Enter Password'];

// // const  EmployerLogin = () => {
// //     const navigate = useNavigate();
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');
// //     const [emailPlaceholder, setEmailPlaceholder] = useState('Email address');
// //     const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');

// //     // Function to cycle through placeholders with animation
// //     const cyclePlaceholders = (placeholders, setPlaceholder) => {
// //         let index = 0;
// //         const interval = setInterval(() => {
// //             setPlaceholder((prev) => {
// //                 // Add a class to trigger the fade-out animation
// //                 document.querySelectorAll('.login-input-field').forEach((input) => {
// //                     input.classList.remove('fade-in');
// //                     input.classList.add('fade-out');
// //                 });

// //                 // After the fade-out animation completes, update the placeholder and fade in
// //                 setTimeout(() => {
// //                     const nextPlaceholder = placeholders[index];
// //                     index = (index + 1) % placeholders.length;  
// //                     setPlaceholder(nextPlaceholder);

// //                     // Add a class to trigger the fade-in animation
// //                     document.querySelectorAll('.login-input-field').forEach((input) => {
// //                         input.classList.remove('fade-out');
// //                         input.classList.add('fade-in');
// //                     });
// //                 }, 1000);  

// //                 return prev;  
// //             });
// //         }, 3000);  

// //         return () => clearInterval(interval);  
// //     };

// //     // Use useEffect to start the placeholder cycling when the component mounts
// //     useEffect(() => {
// //         const emailCleanup = cyclePlaceholders(EMAIL_PLACEHOLDERS, setEmailPlaceholder);
// //         const passwordCleanup = cyclePlaceholders(PASSWORD_PLACEHOLDERS, setPasswordPlaceholder);

// //         // Cleanup on unmount
// //         return () => {
// //             emailCleanup();  
// //             passwordCleanup();  
// //         };
// //     }, []);   

// //     const handleSignIn = async (e) => {
// //         e.preventDefault();

// //         const apiUrl = 'http://ec2-3-88-111-53.compute-1.amazonaws.com:8080/signin';

// //         try {
// //             const response = await fetch(apiUrl, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify({ email, password }),
// //             });

// //             const data = await response.json();

// //             if (response.ok) {
// //                 alert('Login successful');
// //                 navigate('/');
// //             } else {
// //                 setError(data.message || 'Invalid email or password');
// //             }
// //         } catch (err) {
// //             setError('Failed to connect to server. Try again later.');
// //         }
// //     };

// //     return (
// //         <div className="login-container">
// //             <div className="login-left-section">
// //                 <h1 className="login-heading login-heading-one">
// //                   Over 200 Companies Hiring<br/> Top Talent Now.
// //                 </h1>
// //                 <div className="login-stats">
// //                     <div className="login-stat-item">
// //                         <div className="blur-background">
// //                             <img
// //                                 src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
// //                                 alt="Verified Employers"
// //                                 className="login-stat-icon"
// //                             />
// //                         </div>
// //                         <div className="login-start-container">
// //                             <span className="login-stat-number">5,734</span>
// //                             <span className="login-stat-label">Verified Employers</span>
// //                         </div>
// //                     </div>
// //                     <div className="login-stat-item">
// //                         <div className="blur-background">
// //                             <img
// //                                 src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
// //                                 alt="Active Job Seekers"
// //                                 className="login-stat-icon"
// //                             />
// //                         </div>
// //                         <div className="login-start-container">
// //                             <span className="login-stat-number">12,359</span>
// //                             <span className="login-stat-label">Active Job Seekers</span>
// //                         </div>
// //                     </div>
// //                     <div className="login-stat-item">
// //                         <div className="blur-background">
// //                             <img
// //                                 src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
// //                                 alt="New Candidates"
// //                                 className="login-stat-icon"
// //                             />
// //                         </div>
// //                         <div className="login-start-container">
// //                             <span className="login-stat-number">1,812</span>
// //                             <span className="login-stat-label">New Candidates</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="login-right-section">
// //                 <div className="login-inner-right-container">
// //                     <div className="login-logo">Logo</div>
// //                     <h2 className="login-sign-in-title">Sign In</h2>
// //                     <p className="login-create-account-link">
// //                         Don't have an account? <a href="/createaccount">Create Account</a>
// //                     </p>

// //                     {error && <p className="login-error-message">{error}</p>}

// //                     <form className="login-form form-animated" onSubmit={handleSignIn}>
// //                         <input
// //                             type="email"
// //                             placeholder={emailPlaceholder}
                             
// //                             className="create-inputField"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                             required
// //                             aria-label="Email address"
// //                         />
// //                         <input
// //                             type="password"
// //                             placeholder={passwordPlaceholder}
// //                             className="create-inputField"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             required
// //                             aria-label="Password"
// //                         />
// //                         <div className="login-remember-forgot">
// //                             <label className='lablediv'>
// //                                 <input
// //                                     type="checkbox"
// //                                     className="login-checkbox"
// //                                     aria-label="Remember me"
// //                                 />
// //                                 Remember Me
// //                             </label>
// //                             <a href="/forgetpassword" className="login-forgot-link">
// //                                 Forgot password?
// //                             </a>
// //                         </div>
// //                         <button type="submit" className="login-sign-in-button">
// //                             Sign In <span>→</span>
// //                         </button>
// //                     </form>

// //                     <div className="login-or-separator">or</div>

// //                     <div className="login-social-buttons">
// //                         <button className="login-social-button login-facebook-button">
// //                             <img
// //                                 src="https://i.ibb.co/rKM88Gp1/Employers-Logo-2.png"
// //                                 alt="Facebook Logo"
// //                                 className="facebooklogogooglelogo"
// //                             />
// //                             Sign in with Facebook
// //                         </button>
// //                         <button className="login-social-button login-google-button">
// //                             <img
// //                                 src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png"
// //                                 alt="Google Logo"
// //                                 className="facebooklogogooglelogo"
// //                             />
// //                             Sign in with Google
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default  EmployerLogin; 



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployerLogin.css';

// Define placeholder arrays outside the component to prevent re-creation on each render
const USERNAME_PLACEHOLDERS = ['Username', 'Your Username', 'Enter Username'];
const PASSWORD_PLACEHOLDERS = ['Password', 'Your Password', 'Enter Password'];

const EmployerLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [usernamePlaceholder, setUsernamePlaceholder] = useState('Username');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');

  // Function to cycle through placeholders with animation
  const cyclePlaceholders = (placeholders, setPlaceholder) => {
    let index = 0;
    const interval = setInterval(() => {
      setPlaceholder((prev) => {
        document.querySelectorAll('.login-input-field').forEach((input) => {
          input.classList.remove('fade-in');
          input.classList.add('fade-out');
        });

        setTimeout(() => {
          const nextPlaceholder = placeholders[index];
          index = (index + 1) % placeholders.length;
          setPlaceholder(nextPlaceholder);
          document.querySelectorAll('.login-input-field').forEach((input) => {
            input.classList.remove('fade-out');
            input.classList.add('fade-in');
          });
        }, 1000);

        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  };

  // Use useEffect to start the placeholder cycling when the component mounts
  useEffect(() => {
    const usernameCleanup = cyclePlaceholders(USERNAME_PLACEHOLDERS, setUsernamePlaceholder);
    const passwordCleanup = cyclePlaceholders(PASSWORD_PLACEHOLDERS, setPasswordPlaceholder);

    return () => {
      usernameCleanup();
      passwordCleanup();
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/auth/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('Server Response:', JSON.stringify(data, null, 2));

      if (response.ok) {
        // Store JWT and user data in localStorage
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

  return (
    <div className="login-container">
      <div className="login-left-section">
        <h1 className="login-heading login-heading-one">
          Over 200 Companies Hiring<br /> Top Talent Now.
        </h1>
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

      <div className="login-right-section">
        <div className="login-inner-right-container">
          <div className="login-logo">Logo</div>
          <h2 className="login-sign-in-title">Employer Sign In</h2>
          <p className="login-create-account-link">
            Don't have an account? <a href="/employer/createaccount">Create Account</a>
          </p>

          {errors.submit && <p className="login-error-message">{errors.submit}</p>}

          <form className="login-form form-animated" onSubmit={handleSignIn}>
            <div>
              <input
                type="text"
                placeholder={usernamePlaceholder}
                className="create-inputField"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-label="Username"
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
              <input
                type="password"
                placeholder={passwordPlaceholder}
                className="create-inputField"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="login-remember-forgot">
              <label className="lablediv">
                <input
                  type="checkbox"
                  className="login-checkbox"
                  aria-label="Remember me"
                />
                Remember Me
              </label>
              <a href="/forgetpassword" className="login-forgot-link">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="login-sign-in-button" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Sign In'} <span>→</span>
            </button>
          </form>

          <div className="login-or-separator">or</div>

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

export default EmployerLogin;
