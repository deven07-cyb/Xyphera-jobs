import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeEmployerPage.css';

   

const    WelcomeEmployerPage = () => {
  const navigate = useNavigate();
 

  // Navigation for the new section buttons
  const handleCreateAccount = () => navigate('/createaccount');
  const handleLogin = () => navigate('/login');

   
  return (
    <div className="homepage-container">
      {/* Header */}
      <header className="header">
        <div className="header-logo">LOGO</div>
         
      </header>
        <div className="career-move-content">
          <div className="career-move-text">
            <div className="verified-companies">
              <span className="verified-icon"><img src="/imageswebsite/welcomeemployeetick.png" alt="datatick" /></span> Verified Companies
            </div>
            <h1 className="section-title">
               Makes Your <span className='spandatacolor'>Hires</span><br/><span className='spandatacolor'>Fast</span> With Access<br/> To Fresh CVs
            </h1>
            <p className="section-subtitle">
              Search our CV Database for the most cost-effective way to find candidates for your jobs.
            </p>
            <div className="career-move-buttons">
              <button className="cta-button create-account" onClick={handleCreateAccount}>
                Create Account
              </button>
              <button className="cta-button log-in" onClick={handleLogin}>
                Log In
              </button>
            </div>
            <button className="skip-link" onClick={() => navigate('/home')}>
              Skip For Now
            </button>
          </div>
          <div className="career-move-image">
            <div style={{backgroundImage:`url("imageswebsite/welcomeemployeerightimage.png")`}} className="employee-image"></div>
          </div>
        </div>
    </div>
  );
};

export default WelcomeEmployerPage;