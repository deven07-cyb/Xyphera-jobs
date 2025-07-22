import React from 'react';
import Footer from '../ReusableComponents/Footer';
import './SubmitApplicationScreenTwo.css';

const SubmitApplicationScreenTwo = () => {
  return (
    <div className="submit-application-container-two">
      <div className="confirmation-section">
        <div className="checkmark-circle">
          {/* Using a Unicode checkmark as a placeholder for the icon */}
          <span className="checkmark">✔</span>
        </div>
        <h1>Your Application Has Been <br/>Submitted</h1>
        <p>You will get an email confirmation at your email address</p>
        <div className="button-group">
          <button className="done-button">Done</button>
          <button className="return-button">Return To Job Search</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitApplicationScreenTwo;