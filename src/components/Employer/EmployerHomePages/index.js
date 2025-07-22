import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';

import './EmployerHomePage.css'; 

const EmployerHomePages = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('Experience Level');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const experienceOptions = ['Full Time', 'Part Time', 'Freelance'];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleExperienceSelect = (option) => {
    setSelectedExperience(option);
    setIsDropdownOpen(false);
  };
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFaq = (index) => setExpandedFaq(expandedFaq === index ? null : index);
  const handlePostJob = () => navigate('/postjob');
  const handleSearchJob = () => navigate('/searchjob');
  const handleBrowseCandidates = () => navigate('/candidates');  

  const faqs = [
    {
      question: "How do I create an effective profile to attract recruiters?",
      answer: "To create an effective profile, ensure you include a professional photo, a detailed summary of your skills and experience, and relevant keywords. Highlight your achievements, use bullet points for clarity, and keep your profile updated."
    },
    {
      question: "How is the platform different from other job search platforms?",
      answer: "Our platform stands out by offering a user-friendly interface, advanced search filters, and a focus on connecting job seekers with verified employers. We also provide tools like resume builders and personalized job recommendations."
    },
    {
      question: "What are the best tips for filtering roles and refining search results?",
      answer: "Use specific keywords related to your desired role, location, and industry. Leverage filters like job type, experience level, and salary range to narrow down your search. Regularly update your preferences to get the most relevant results."
    },
    {
      question: "Is my personal information and resume kept secure on your website?",
      answer: "Yes, we prioritize your privacy. Your personal information and resume are encrypted and only shared with employers you choose to apply to. We also comply with strict data protection regulations to ensure your data is secure."
    }
  ];

  const steps = [
    {
      title: 'Post a Job',
      subtext: 'Describe your hiring needs.',
      icon: '/imageswebsite/Frame (1).png'
    },
    {
      title: 'Review Candidates',
      subtext: 'Shortlist skilled workers.',
      icon: '/imageswebsite/Review.png'
    },
    {
      title: 'Connect & Hire',
      subtext: 'Message or interview candidates.',
      icon: '/imageswebsite/Layer_1_1_.png'
    },
    {
      title: 'Manage Applications',
      subtext: 'Track and finalize hiring.',
      icon: '/imageswebsite/imageofgethire.png'
    },
  ];

  const workers = [
    {
      name: 'Rajesh Kumar',
      job: 'Electrician',
      experience: '7+ years',
      skills: 'Wiring, Circuit Troubleshooting',
      location: 'New Delhi',
      image: '/imageswebsite/Employercadidatesone.png',
    },
    {
      name: 'Suresh Patel',
      job: 'Plumber',
      experience: '5+ years',
      skills: 'Pipe Fitting, Sanitary Work, Leak Repairs',
      location: 'Ahmedabad',
      image: '/imageswebsite/Employercadidatestwo.png',
    },
    {
      name: 'Gurpreet Singh',
      job: 'Welder',
      experience: '6+ years',
      skills: 'Metal Cutting, Arc Welding, Pipe Welding',
      location: 'Mumbai, Delhi',
      image: '/imageswebsite/Employercadidatesthree.png',
    },
    {
      name: 'Abdul Rahman',
      job: 'Driver',
      experience: '10+ years',
      skills: 'Heavy Vehicle Operation, Route Planning',
      location: 'Mumbai',
      image: '/imageswebsite/Employercadidatesfour.png',
    },
  ];

  return (
    <div className="homepage-wrapper">
      <EmployerHeader />
      <section className="hero-banner">
        <h1 className="hero-main-title">Find <span className='spantextdecoration'>Reliable & Skilled Workers</span> for<br/>Your Business Faster!</h1>
          {/* <img src="/imageswebsite/sendmailboxicon.png" alt="textsendicon"   className="iconimage" /> */}
        <p className="hero-description">Post jobs, shortlist candidates, and manage hiring all in one place.</p>
        <div className="hero-search-area">
          <div className="search-combo-box">
            <div className="search-input-box">
              <span className="search-icon-wrapper">
                <img className="search-icon-image" src="https://i.ibb.co/DDkM5m0b/search-01.png" alt="Search" />
              </span>
              <input
                type="text"
                className="search-input-field"
                placeholder="Search for electricians, plumbers, drivers..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="job-type-dropdown">
              <button className="job-type-button" onClick={toggleDropdown}>
                <img style={{paddingRight:'20px'}} src="/imageswebsite/seracharrowdown.png"alt="down" />{selectedExperience}
              </button>
              {isDropdownOpen && (
                <ul className="job-type-options">
                  {experienceOptions.map((option, index) => (
                    <li
                      key={index}
                      className="job-type-option"
                      onClick={() => handleExperienceSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="hero-stats-panel">
          <div className="stat-block">
            <div className="stat-icon-box">
              <img className="stat-icon-image" src="/imageswebsite/homepagesettingman.png" alt="Verified Companies" />
            </div>
            <span className="stat-value">5,734</span>
            <span className="stat-label-text">Verified Companies</span>
          </div>
          <div className="stat-block">
            <div className="stat-icon-box">
              <img className="stat-icon-image" src="/imageswebsite/homepagesearch.png" alt="Active Job Openings" />
            </div>
            <span className="stat-value">12,359</span>
            <span className="stat-label-text">Active Job Seekers</span>
          </div>
          <div className="stat-block">
            <div className="stat-icon-box">
              <img className="stat-icon-image" src="/imageswebsite/homepageplus.png" alt="New Companies" />
            </div>
            <span className="stat-value">1,872</span>
            <span className="stat-label-text">New Candidates</span>
          </div>
        </div>
      </section>

      <section className="process-guide-section">
        <h2 className="process-title"><span className="process-highlight">How</span> It Works</h2>
        <p className="process-subtitle">Step-by-step guide for hiring process</p>
        <div className="process-steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="process-step">
                <div className="step-icon-container">
                  <img src={step.icon} alt={step.title} className="step-icon" />
                </div>
                <p className="step-heading">{step.title}</p>
                <p className="step-detail">{step.subtext}</p>
              </div>
              {index < steps.length - 1 && <span className="step-connector"></span>}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="value-proposition-section">
        <div className="value-content">
          <div className="value-text-block">
            <h2 className="value-title"><span className="value-highlight">Why</span> Choose Us?</h2>
            <p className="value-description">Finding skilled and reliable workers shouldn’t be a challenge. With our verified talent pool, smart filters, and fast hiring process, we make recruitment seamless for employers. Start hiring today!</p>
            <ul className="value-list">
              <li className="value-item">Access to verified talent pool.</li> 
              <li className="value-item">Smart filters to find the right candidates.</li>
              <li className="value-item">Fast & easy hiring process.</li>
            </ul>
            <button className="value-action-button" onClick={handlePostJob}>+ Post Your Job</button>
          </div>
          <div className="value-image-block">
            <div style={{ backgroundImage: `url("/imageswebsite/EmployerHomepageimage.png")` }} className="value-image-placeholder"></div>
          </div>
        </div>
      </section>

      <section className="top-workers-section">
        <h2 className="top-workers-title">
          Find <span className="top-workers-highlight">Top Skilled Workers</span> Instantly!
        </h2>
        <div className="workers-grid">
          {workers.map((worker, index) => (
            <div className="worker-card" key={index}>
              <div className="worker-image-container">
                <img src={worker.image} alt={worker.name} className="worker-image" />
              </div>
              <div className="worker-info">
                <div className="worker-header">
                  <h3 className="worker-name">{worker.name} - <span className='worrkersjob'>{worker.job}</span></h3>
                  <img src="/imageswebsite/employerstarimage.png" alt="Verified"   />
                </div>
                <p className="worker-experience"><strong>Experience:</strong> {worker.experience}</p>
                <p className="worker-skills"><strong>Skills:</strong> {worker.skills}</p>
                <p className="worker-location"><strong>Location Availability:</strong> {worker.location}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="browse-candidates-button" onClick={handleBrowseCandidates}>
          <span className="button-icon">↗</span> Browse All Candidates
        </button>
      </section>

      <section className="faq-support-section">
        <h2 className="faq-title"><span className="faq-highlight">Frequently</span> Asked Questions</h2>
        <div className="faq-list-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item-box ${expandedFaq === index ? 'expanded' : ''}`}>
              <div className="faq-header-block">
                <h3 className="faq-question-text">{faq.question}</h3>
                <button className={expandedFaq === index ? 'faq-close-button' : 'faq-toggle-button'} onClick={() => toggleFaq(index)}>
                  {expandedFaq === index ? '×' : '+'}
                </button>
              </div>
              <p className="faq-answer-text">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="action-prompt-section">
        <div className="action-box">
          <h2 className="action-heading">Find Skilled Jobs Faster!</h2>
          <p className="action-subtext">Apply, hire & start now!</p>
          <div className="action-button-group">
            <button className="action-button search-job" onClick={handleSearchJob}>Find A Job</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmployerHomePages;