// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './resetpassword.css';

// // Constants
// const API_BASE_URL = 'http://107.22.99.147:8080';  
// const MIN_PASSWORD_LENGTH = 8;

// const ResetPassword = () => {
//   const navigate = useNavigate();
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [newPasswordVisible, setNewPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [email, setEmail] = useState('');
//   const [token, setToken] = useState('');

//   // Extract email and token from URL query parameters
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const emailParam = urlParams.get('email');
//     const tokenParam = urlParams.get('token');

//     console.log('Current URL:', window.location.href);
//     console.log('Extracted email:', emailParam);
//     console.log('Extracted token:', tokenParam);

//     if (emailParam && tokenParam) {
//       setEmail(emailParam);
//       setToken(tokenParam);
//     } else {
//       setError('Invalid reset password link: Email or token missing.');
//     }
//   }, []);

//   // Validate password strength
//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     // Reset previous messages
//     setError('');
//     setSuccess('');

//     // Client-side validation
//     if (newPassword !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     if (newPassword.length < MIN_PASSWORD_LENGTH) {
//       setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
//       return;
//     }

//     if (!validatePassword(newPassword)) {
//       setError('Password must include at least one uppercase letter, one lowercase letter, one number, and one special character');
//       return;
//     }

//     if (!email || !token) {
//       setError('Cannot reset password: Email or token missing');
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/reset-password?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             newpassword: newPassword,
//             confirmpassword: confirmPassword,
//           }),
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         console.log('Server error response:', errorData);
//         const errorMsg = errorData.error || `Failed to reset password (Status: ${response.status})`;
//         if (response.status === 401) {
//           throw new Error('Invalid or expired token. Please request a new reset link.');
//         }
//         if (response.status === 404) {
//           throw new Error('Reset password endpoint not found. Please contact support.');
//         }
//         throw new Error(errorMsg);
//       }

//       const responseData = await response.json();
//       console.log('Password reset successful:', responseData);
//       setSuccess('Password reset successfully!');
//       setTimeout(() => navigate('/signin'), 2000);
//     } catch (err) {
//       setError(err.message || 'An unexpected error occurred');
//       console.error('Reset password error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const toggleNewPasswordVisibility = () => {
//     setNewPasswordVisible(!newPasswordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   return (
//     <div className="reset-password-container">
//       <div className="reset-password-content">
//         <h2 className="reset-password-title">Reset Password</h2>
//         <p className="reset-password-description">
//           Enter a new password for your account. It must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.
//         </p>
//         <form className="reset-password-form" onSubmit={handleResetPassword}>
//           <div className="input-wrapper">
//             <input
//               type={newPasswordVisible ? 'text' : 'password'}
//               placeholder="New Password"
//               className="reset-password-input"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value.trim())}
//               required
//               disabled={isLoading}
//             />
//             <span className="toggle-password" onClick={toggleNewPasswordVisibility}>
//               {newPasswordVisible ? (
//                  ""
//               ) : (
//                 ""
//               )}
//             </span>
//           </div>
//           <div className="input-wrapper">
//             <input
//               type={confirmPasswordVisible ? 'text' : 'password'}
//               placeholder="Confirm Password"
//               className="reset-password-input"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value.trim())}
//               required
//               disabled={isLoading}
//             />
//             <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
//               {confirmPasswordVisible ? (
//                  ""
//               ) : (
//                  ""
//               )}
//             </span>
//           </div>
//           <button
//             className="reset-button"
//             type="submit"
//             disabled={isLoading || !email || !token}
//           >
//             {isLoading ? 'Resetting...' : 'Reset Password'} <span className="reset-password-arrow">→</span>
//           </button>
//         </form>
//         {error && (
//           <p className="reset-password-error" style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
//             {error}
//             {error.includes('Invalid or expired token') && (
//               <span>
                 
//                 <a href="/forgot-password" style={{ color: '#007bff', textDecoration: 'underline' }}>
//                   Request a new link
//                 </a>
//               </span>
//             )}
//           </p>
//         )}
//         {success && (
//           <p className="reset-password-success" style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
//             {success}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword; 

  


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './resetpassword.css';

const API_BASE_URL = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:3000';
const MIN_PASSWORD_LENGTH = 8;

const ResetPassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < MIN_PASSWORD_LENGTH) {
      setError(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
      return;
    }

    if (!validatePassword(newPassword)) {
      setError('Password must include at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    if (!oldPassword) {
      setError('Old password is required');
      return;
    }

    setIsLoading(true);
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('Authentication required. Please log in.');
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          current_password: oldPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log('Server error response:', errorData);
        const errorMsg = errorData.message || `Failed to change password (Status: ${response.status})`;
        if (response.status === 401) {
          throw new Error('Invalid or expired token. Please log in again.');
        }
        throw new Error(errorMsg);
      }

      const responseData = await response.json();
      console.log('Password changed successful:', responseData);
      setSuccess('Password changed successfully!');
      setTimeout(() => navigate('/signin'), 2000);
    } catch (err) {
      setError(err.message === 'Current password is incorrect' 
        ? 'The current password is incorrect. Please try again or reset your password.' 
        : err.message || 'An unexpected error occurred');
      console.log('Error message:', err.message);
      console.error('Change password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-content">
        <h2 className="reset-password-title">Change Password</h2>
        <p className="reset-password-description">
          Enter your old password and a new password. The new password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.
        </p>
        <form className="reset-password-form" onSubmit={handleResetPassword}>
          <div className="input-wrapper">
            <input
              type={oldPasswordVisible ? 'text' : 'password'}
              placeholder="Old Password"
              className="reset-password-input"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value.trim())}
              required
              disabled={isLoading}
            />
            <span className="toggle-password" onClick={toggleOldPasswordVisibility}>
              {oldPasswordVisible ? 'Hide' : 'Show'}
            </span>
          </div>
          <div className="input-wrapper">
            <input
              type={newPasswordVisible ? 'text' : 'password'}
              placeholder="New Password"
              className="reset-password-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value.trim())}
              required
              disabled={isLoading}
            />
            <span className="toggle-password" onClick={toggleNewPasswordVisibility}>
              {newPasswordVisible ? 'Hide' : 'Show'}
            </span>
          </div>
          <div className="input-wrapper">
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm New Password"
              className="reset-password-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value.trim())}
              required
              disabled={isLoading}
            />
            <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
              {confirmPasswordVisible ? 'Hide' : 'Show'}
            </span>
          </div>
          <button
            className="reset-button"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Changing...' : 'Change Password'} <span className="reset-password-arrow">→</span>
          </button>
        </form>
        <p>
          Forgot your password?{' '}
          <a href="/forgot-password" style={{ color: '#007bff', textDecoration: 'underline' }}>
            Reset it here
          </a>
        </p>
        {error && (
          <p className="reset-password-error" style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
            {error}
            {error.includes('Invalid or expired token') && (
              <span>
                {' '}
                <a href="/signin" style={{ color: '#007bff', textDecoration: 'underline' }}>
                  Log in again
                </a>
              </span>
            )}
          </p>
        )}
        {success && (
          <p className="reset-password-success" style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
            {success}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;