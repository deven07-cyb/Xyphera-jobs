 import React from 'react';
 import { useNavigate } from 'react-router-dom';
import './Intro.css'; // Import the updated CSS file

const IntroScreen = () => {
  const Navigate = useNavigate()
  return (
    <div className="xy-intro-container" id="xy-intro">
      {/* Header with Logo */}
      <header className="xy-header" id="xy-header">
        <div className="xy-logo">LOGO</div>
      </header>

      {/* Main Content */}
      <div className="xy-content" id="xy-content">
        {/* Headline */}
        <h1 className="xy-headline">
          <span className="xy-diamond">◆</span> Find the{' '}
          <span className="xy-highlighted-text">
            <span className="xy-underlined">Ri</span>g<span className="xy-underlined">ht Job</span>
          </span>{' '}
          or{' '}
          <span className="xy-highlighted-text xy-underlined">Hire the Best</span>{' '}
          <span className="xy-diamond">◆</span>
          <br />{' '}
          <span className="xy-highlighted-text xy-underlined">Talent</span> – All in One Place
        </h1>

        {/* Subheading */}
        <p className="xy-subheading">
          Whether you’re looking for your next opportunity or the perfect candidate, we’ve got you
          covered. <span className="xy-choose-text">Choose your path to get started.</span>
        </p>

        {/* Buttons */}
        <div className="xy-button-group">
          <button onClick={()=> Navigate("/")} className="xy-btn xy-employer-btn">
            I'm an Employer <span className="xy-arrow">→</span>
          </button>
          <button onClick={()=> Navigate("/employerHomepage")} className="xy-btn xy-employer-btn">
            I'm a Job Seeker <span className="xy-arrow">→</span>
          </button>
        </div>

        {/* Images */}
        <div className="xy-image-container">
          <img
            src="/imageswebsite/Introwomenimage.png"
            alt="Job Seeker"
            className="xy-person-image xy-left-image"
          />
          <img
            src="/imageswebsite/intromenimage.png"
            alt="Employer"
            className="xy-person-image xy-right-image"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;