import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgetpassword.css';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://107.22.99.147:8080/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log('Server error response:', errorData);
        if (response.status === 500 && errorData.error === 'ResetLink Already Sent....If not received try again after 30 mins') {
          throw new Error('Reset link already sent. Please try again after 30 minutes or check your email.');
        }
        throw new Error(errorData.message || `Failed to send reset request (Status: ${response.status})`);
      }

      const data = await response.json();
      console.log('Forgot password response:', data);

      const { token } = data; // Adjust based on backend response structure
      navigate(`/resetpassword?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`);
      setSuccess('A password reset link has been generated. Redirecting to reset password page...');
    } catch (err) {
      setError(err.message || 'Network error occurred');
      setSuccess('');
      console.error('Forgot password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBackToSignIn = () => {
    navigate('/signin');
  };

  const handleCreateAccount = () => {
    navigate('/createaccount');
  };

  const handleFacebookLogin = () => {
    alert('Facebook login functionality to be implemented.');
  };

  const handleGoogleLogin = () => {
    alert('Google login functionality to be implemented.');
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-wrapper">
        <div className="centertext">
          <h2 className="forgot-password-heading">Forget Password</h2>
          <p className="forgot-password-info">
            Go back to <span className="forgot-password-link" onClick={handleGoBackToSignIn}>Sign In</span>
            <br />
            Don't have account? <span className="forgot-password-link" onClick={handleCreateAccount}>Create Account</span>
          </p>
        </div>

        <form className="forgot-password-form" onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Email address"
            className="forgot-password-email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
          <button className="forgot-password-submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Reset Password'} <span className="forgot-password-arrow">→</span>
          </button>
        </form>
        {error && <p className="forgot-password-error-msg" style={{ color: 'red' }}>{error}</p>}
        {success && <p className="forgot-password-success-msg" style={{ color: 'green' }}>{success}</p>}
        <div className="forgot-password-social-login">
          <span className="forgot-password-divider-text">or</span>
          <div className="forgot-password-social-btns">
            <button className="forgot-password-social-btn forgot-password-facebook-btn" onClick={handleFacebookLogin}>
              <img src="https://i.ibb.co/rKM88Gp1/Employers-Logo-2.png" alt="Facebook Logo" className="forgot-password-social-icon" />
              Sign up with Facebook
            </button>
            <button className="forgot-password-social-btn forgot-password-google-btn" onClick={handleGoogleLogin}>
              <img src="https://i.ibb.co/1hxd82L/Employers-Logo-3.png" alt="Google Logo" className="forgot-password-social-icon" />
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;