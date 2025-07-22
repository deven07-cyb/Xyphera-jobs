 import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  // Footer navigation functions
  const handlePostJob = () => navigate('/postjob');
  const handleCandidates = () => navigate('/candidates');
  const handleApplications = () => navigate('/applications');
  const handlePricing = () => navigate('/pricing');
  const handleFaqs = () => navigate('/faqs');
  const handleAbout = () => navigate('/about');
  const handleMessages = () => navigate('/messages');
  const handleCareers = () => navigate('/careers');
  const handleHowItWorks = () => navigate('/howitworks');
  const handleBlogs = () => navigate('/blogs');
  const handleFaq = () => navigate('/faq');
  const handleContact = () => navigate('/contact');
  const handleTerms = () => navigate('/terms');
  const handlePrivacy = () => navigate('/privacy');

  // Social media button handlers
  const handleFacebook = () => window.open('https://www.facebook.com', '_blank');
  const handleTwitter = () => window.open('https://www.twitter.com', '_blank');
  const handleYoutube = () => window.open('https://www.youtube.com', '_blank');
  const handleLinkedin = () => window.open('https://www.linkedin.com', '_blank');
  const handleInstagram = () => window.open('https://www.instagram.com', '_blank');

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4 className="footer-column-title">HOME</h4>
          <button className="footer-nav-link" onClick={handlePostJob}>Browse Jobs</button>
          <button className="footer-nav-link" onClick={handleCandidates}>Job Categories</button>
          <button className="footer-nav-link" onClick={handleApplications}>Applications</button>
          <button className="footer-nav-link" onClick={handlePricing}>Featured Companies</button>
          <button className="footer-nav-link" onClick={handleFaqs}>FAQs</button>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">COMPANY</h4>
          <button className="footer-nav-link" onClick={handleAbout}>About Us</button>
          <button className="footer-nav-link" onClick={handleMessages}>Messages</button>
          <button className="footer-nav-link" onClick={handleCareers}>Careers</button>
          <button className="footer-nav-link" onClick={handleHowItWorks}>How It Works</button>
          <button className="footer-nav-link" onClick={handleBlogs}>Blogs</button>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">SUPPORT</h4>
          <button className="footer-nav-link" onClick={handleFaq}>FAQ</button>
          <button className="footer-nav-link" onClick={handleContact}>Contact Us</button>
          <button className="footer-nav-link" onClick={handleTerms}>Terms of Service</button>
          <button className="footer-nav-link" onClick={handlePrivacy}>Privacy Policy</button>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">STAY IN TOUCH</h4>
          <p className="footer-column-text">
            Stay in touch to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="footer-subscription-form">
            <div className="footer-email-input-container">
              <span className="footer-email-icon">
                <img  src="/imageswebsite/feather_mail (2).png" alt="Email Icon" />
              </span>
              <input type="email" placeholder="Enter your email" className="footer-email-input" />
              <button className="footer-subscribe-btn">
                <img src="/imageswebsite/sentfilesinput.png" alt="Send Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p style={{color:"white"}} className="footer-copyright">© Copyright 2025. All Rights Reserved</p>
        <div className="footer-social-links">
          <h4 className="footer-social-title">FOLLOW US</h4>
          <button className="footer-social-btn" onClick={handleFacebook}>
            <img src="/imageswebsite/facebook.png" alt="Facebook" className="footer-social-icon" />
          </button>
          <button className="footer-social-btn" onClick={handleTwitter}>
            <img src="https://i.ibb.co/k2xkSK87/Div-footer-desktop-rounded-circle-feah-2.png" alt="Twitter" className="footer-social-icon" />
          </button>
          <button className="footer-social-btn" onClick={handleYoutube}>
            <img src="https://i.ibb.co/ZPJ9HFk/Div-footer-desktop-rounded-circle-feah-3.png" alt="YouTube" className="footer-social-icon" />
          </button>
          <button className="footer-social-btn" onClick={handleLinkedin}>
            <img src="https://i.ibb.co/YH8nh1w/Div-footer-desktop-rounded-circle-feah-4.png" alt="LinkedIn" className="footer-social-icon" />
          </button>
          <button className="footer-social-btn" onClick={handleInstagram}>
            <img src="https://i.ibb.co/398X27Jc/Div-footer-desktop-rounded-circle-feah-5.png" alt="Instagram" className="footer-social-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;