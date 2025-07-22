// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './signIn.css';


// // Define placeholder arrays outside the component to prevent re-creation on each render
// const EMAIL_PLACEHOLDERS = ['Email Address', 'Your Email', 'Enter Email'];
// const PASSWORD_PLACEHOLDERS = ['Password', 'Your Password', 'Enter Password'];



// const SignIn = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [emailPlaceholder, setEmailPlaceholder] = useState('Email Address');
//     const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');



//     // Function to cycle through placeholders with animation
//     const cyclePlaceholders = (placeholders, setPlaceholder) => {
//         let index = 0;
//         const interval = setInterval(() => {
//             setPlaceholder((prev) => {
//                 document.querySelectorAll('.login-input-field').forEach((input) => {
//                     input.classList.remove('fade-in');
//                     input.classList.add('fade-out');
//                 });

//                 setTimeout(() => {
//                     const nextPlaceholder = placeholders[index];
//                     index = (index + 1) % placeholders.length;
//                     setPlaceholder(nextPlaceholder);

//                     document.querySelectorAll('.login-input-field').forEach((input) => {
//                         input.classList.remove('fade-out');
//                         input.classList.add('fade-in');
//                     });
//                 }, 1000);

//                 return prev;
//             });
//         }, 3000);

//         return () => clearInterval(interval);
//     };

//     useEffect(() => {
//         const emailCleanup = cyclePlaceholders(EMAIL_PLACEHOLDERS, setEmailPlaceholder);
//         const passwordCleanup = cyclePlaceholders(PASSWORD_PLACEHOLDERS, setPasswordPlaceholder);

//         return () => {
//             emailCleanup();
//             passwordCleanup();
//         };
//     }, []);




//     // Handle form submission and API integration
//     const handleSignIn = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://107.22.99.147:8080/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email: email,
//                     password: password,
//                 }),
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || 'Login failed');
//             }

//             const data = await response.json();
//             // Assuming the API returns a token or user data upon successful login
//             console.log('Login successful:', data);

//             // Store token in localStorage if your API returns one
//             if (data.token) {
//                 localStorage.setItem('authToken', data.token);
//             }

//             // Navigate to dashboard or home page after successful login
//             navigate('/');

//         } catch (err) {
//             setError(err.message || 'Network error occurred');
//             console.error('Login error:', err);
//         }
//     };

//     return (
//         <div className="login-container">
//             <div  className="login-left-section">
//                 <h1 className="login-heading">
//                     To secure Your financial future, You must actively find a job and apply diligently
//                 </h1>
//                 <div className="login-stats">
//                     <div className="login-stat-item">
//                         <div className="blur-background">
//                             <img
//                                 src="https://i.ibb.co/1GhLTp3Y/account-setting-03.png"
//                                 alt="Verified Employers"
//                                 className="login-stat-icon"
//                             />
//                         </div>
//                         <div className="login-start-container">
//                             <span className="login-stat-number">5,734</span>
//                             <span className="login-stat-label">Verified Employers</span>
//                         </div>
//                     </div>
//                     <div className="login-stat-item">
//                         <div className="blur-background">
//                             <img
//                                 src="https://i.ibb.co/YFt0wVwj/user-search-01.png"
//                                 alt="Active Job Seekers"
//                                 className="login-stat-icon"
//                             />
//                         </div>
//                         <div className="login-start-container">
//                             <span className="login-stat-number">12,359</span>
//                             <span className="login-stat-label">Active Job Seekers</span>
//                         </div>
//                     </div>
//                     <div className="login-stat-item">
//                         <div className="blur-background">
//                             <img
//                                 src="https://i.ibb.co/Kj03Kp0R/user-add-01.png"
//                                 alt="New Candidates"
//                                 className="login-stat-icon"
//                             />
//                         </div>
//                         <div className="login-start-container">
//                             <span className="login-stat-number">1,812</span>
//                             <span className="login-stat-label">New Candidates</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="login-right-section">
//                 <div className="login-inner-right-container">
//                     <div className="login-logo">Logo</div>
//                     <h2 className="login-sign-in-title">Sign In</h2>
//                     <p className="login-create-account-link">
//                         Don't have an account? <a href="/createaccount">Create Account</a>
//                     </p>

//                     <form className="login-form form-animated" onSubmit={handleSignIn}>
//                         <input
//                             type="email"
//                             placeholder={emailPlaceholder}
//                             className="create-inputField"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             aria-label="Email address"
//                         />
//                         <input
//                             type="password"
//                             placeholder={passwordPlaceholder}
//                             className="create-inputField"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             aria-label="Password"
//                         />
//                         <div className="login-remember-forgot">
//                             <label className='spandata'>
//                                 <input
//                                     type="checkbox"
//                                     className="login-checkbox"
//                                     aria-label="Remember me"
//                                 />
//                                 Remember Me
//                             </label>
//                             <a href="/forgetpassword" className="login-forgot-link">
//                                 Forgot password?
//                             </a>
//                         </div>
//                         <button type="submit" className="login-sign-in-button">
//                             Sign In <span>→</span>
//                         </button>
//                     </form>

//                     {error && <p className="login-error" style={{ color: 'red' }}>{error}</p>}

//                     <div className="login-or-separator">or</div>

//                     <div className="login-social-buttons">
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
//                 </div>
//             </div>
//         </div>
//     );
// };




// export default SignIn;   



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './signIn.css';

// Define placeholder arrays outside the component to prevent re-creation on each render
const EMAIL_PLACEHOLDERS = ['Email Address', 'Your Email', 'Enter Email'];
const USERNAME_PLACEHOLDERS = ['Username', 'Your Username', 'Enter Username'];
const PASSWORD_PLACEHOLDERS = ['Password', 'Your Password', 'Enter Password'];

const SignIn = () => {
  const navigate = useNavigate();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginType, setLoginType] = useState('email'); // 'email' or 'username'
  const [emailPlaceholder, setEmailPlaceholder] = useState(EMAIL_PLACEHOLDERS[0]);
  const [usernamePlaceholder, setUsernamePlaceholder] = useState(USERNAME_PLACEHOLDERS[0]);
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(PASSWORD_PLACEHOLDERS[0]);

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

  useEffect(() => {
    const cleanup = loginType === 'email'
      ? cyclePlaceholders(EMAIL_PLACEHOLDERS, setEmailPlaceholder)
      : cyclePlaceholders(USERNAME_PLACEHOLDERS, setUsernamePlaceholder);
    const passwordCleanup = cyclePlaceholders(PASSWORD_PLACEHOLDERS, setPasswordPlaceholder);

    return () => {
      cleanup();
      passwordCleanup();
    };
  }, [loginType]);

  // Handle form submission and API integration
  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const payload = {
        [loginType]: emailOrUsername, // Dynamic key: 'email' or 'username'
        password: password,
      };

      const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Store token in localStorage if your API returns one
      if (data.data?.token) {
        localStorage.setItem('authToken', data.data.token);
      }

      // Navigate to dashboard or home page after successful login
      navigate('/');
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-section">
        <h1 className="login-heading">
          To secure Your financial future, You must actively find a job and apply diligently
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
          <h2 className="login-sign-in-title">Sign In</h2>
          <p className="login-create-account-link">
            Don't have an account? <a href="/createaccount">Create Account</a>
          </p>

          {/* Login Type Toggle */}
          <div className="login-type-toggle">
            <label>
              <input
                type="radio"
                name="loginType"
                value="email"
                checked={loginType === 'email'}
                onChange={() => setLoginType('email')}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="loginType"
                value="username"
                checked={loginType === 'username'}
                onChange={() => setLoginType('username')}
              />
              Username
            </label>
          </div>

          <form className="login-form form-animated" onSubmit={handleSignIn}>
            <input
              type={loginType === 'email' ? 'email' : 'text'}
              placeholder={loginType === 'email' ? emailPlaceholder : usernamePlaceholder}
              className="create-inputField"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required
              aria-label={loginType === 'email' ? 'Email address' : 'Username'}
            />
            <input
              type="password"
              placeholder={passwordPlaceholder}
              className="create-inputField"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
            <div className="login-remember-forgot">
              <label className="spandata">
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
            <button type="submit" className="login-sign-in-button">
              Sign In <span>→</span>
            </button>
          </form>

          {error && <p className="login-error" style={{ color: 'red' }}>{error}</p>}

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

export default SignIn;



