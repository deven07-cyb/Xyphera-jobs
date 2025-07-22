 
// import React, { useState } from 'react';
// import './emailverification.css';

// const EmailVerification = ({ email = 'user@example.com' }) => {
//   const [verificationCode, setVerificationCode] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     setVerificationCode(e.target.value);
//     setError('');
//   };

//   const handleVerify = () => {
//     setIsSubmitting(true);
//     setError('');
//     if (!verificationCode) {
//       setError('Please enter a verification code');
//       setIsSubmitting(false);
//       return;
//     }
//     // Mock API call
//     setTimeout(() => {
//       if (verificationCode.length >= 4) { // Example validation
//         alert('Email verified successfully!');
//         setVerificationCode('');
//         // Navigate or close popup logic here
//       } else {
//         setError('Invalid verification code');
//       }
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   const handleResendCode = () => {
//     setIsSubmitting(true);
//     setError('');
//     // Mock API call
//     setTimeout(() => {
//       alert('Verification code resent successfully');
//       setIsSubmitting(false);
//     }, 1000);
//   };

//   return (
//     <div className="ev-verification-container min-h-screen flex items-center justify-center">
//       <div className="ev-verification-content bg-gradient-to-t from-blue-100 to-blue-200 rounded-lg p-6 sm:p-8 max-w-2xl w-full max-h-[600px] flex flex-col items-center justify-center ev-animate-slide-in">
//         <h1 className="ev-verification-title text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Email Verification</h1>
//         <p className="ev-verification-description text-sm sm:text-base text-gray-600 mb-8 text-center">
//           We sent a verification code to <span className="ev-email-highlight font-medium text-gray-900">{email}</span> to verify your email address and activate your account.
//         </p>
//         {error && <p className="ev-verification-error text-red-500 text-sm mb-4">{error}</p>}
//         <div className="ev-verification-form flex flex-col items-center gap-5 w-full">
//           <input
//             id="ev-verification-input"
//             type="text"
//             placeholder="Verification Code"
//             value={verificationCode}
//             onChange={handleInputChange}
//             className="ev-verification-input w-full max-w-md px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
//             aria-label="Verification code"
//             required
//           />
//           <button
//             id="ev-verify-button"
//             type="button"
//             className="ev-verify-button w-full max-w-md px-4 py-3 bg-blue-800 text-white rounded-md text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
//             onClick={handleVerify}
//             disabled={isSubmitting}
//             aria-label="Verify account"
//           >
//             {isSubmitting ? 'Verifying...' : 'Verify My Account'}
//             <span>→</span>
//           </button>
//           <p className="ev-resend-text text-sm sm:text-base">
//             Didn't receive any code?{' '}
//             <span
//               className="ev-resend-link text-blue-800 hover:text-gray-900 cursor-pointer transition-colors"
//               onClick={handleResendCode}
//               aria-label="Resend verification code"
//             >
//               Resend
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailVerification;


import React, { useState, useEffect } from 'react';
import './emailverification.css';

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  // Load email from localStorage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email) {
      setEmail(userData.email);
    } else {
      setError('No email found. Please sign up again.');
    }
  }, []);

  const handleInputChange = (e) => {
    setVerificationCode(e.target.value);
    setError('');
  };

  const handleVerify = async () => {
    setIsSubmitting(true);
    setError('');

    if (!verificationCode) {
      setError('Please enter a verification code');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://192.168.55.103:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          otp: verificationCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to verify OTP');
      }

      if (data.verified) {
        alert('Email verified successfully!');
        setVerificationCode('');
        // Navigate to next page (e.g., dashboard or login)
        window.location.href = '/'; // Adjust based on your routing
      } else {
        setError('Invalid or expired verification code');
      }
    } catch (err) {
      console.error('Verify OTP error:', err.message);
      if (err.message.includes('Failed to fetch')) {
        setError('Unable to connect to the server. Please check your network or try again later.');
      } else {
        setError(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://192.168.55.103:5000/api/auth/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to resend OTP');
      }

      alert('Verification code resent successfully');
    } catch (err) {
      console.error('Resend OTP error:', err.message);
      if (err.message.includes('Failed to fetch')) {
        setError('Unable to connect to the server. Please check your network or try again later.');
      } else {
        setError(err.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ev-verification-container min-h-screen flex items-center justify-center">
      <div className="ev-verification-content bg-gradient-to-t from-blue-100 to-blue-200 rounded-lg p-6 sm:p-8 max-w-2xl w-full max-h-[600px] flex flex-col items-center justify-center ev-animate-slide-in">
        <h1 className="ev-verification-title text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">Email Verification</h1>
        <p className="ev-verification-description text-sm sm:text-base text-gray-600 mb-8 text-center">
          We sent a verification code to <span className="ev-email-highlight font-medium text-gray-900">{email || 'your email'}</span> to verify your email address and activate your account.
        </p>
        {error && <p className="ev-verification-error text-red-500 text-sm mb-4">{error}</p>}
        <div className="ev-verification-form flex flex-col items-center gap-5 w-full">
          <input
            id="ev-verification-input"
            type="text"
            placeholder="Verification Code"
            value={verificationCode}
            onChange={handleInputChange}
            className="ev-verification-input w-full max-w-md px-4 py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Verification code"
            required
          />
          <button
            id="ev-verify-button"
            type="button"
            className="ev-verify-button w-full max-w-md px-4 py-3 bg-blue-800 text-white rounded-md text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            onClick={handleVerify}
            disabled={isSubmitting || !email}
            aria-label="Verify account"
          >
            {isSubmitting ? 'Verifying...' : 'Verify My Account'}
            <span>→</span>
          </button>
          <p className="ev-resend-text text-sm sm:text-base">
            Didn't receive any code?{' '}
            <span
              className="ev-resend-link text-blue-800 hover:text-gray-900 cursor-pointer transition-colors"
              onClick={handleResendCode}
              aria-label="Resend verification code"
            >
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;