import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('Job Type');
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
  const handleJobs = () => navigate('/jobs');

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

  const jobCategories = [
    { name: 'Freshers', personImage: '/imageswebsite/womenimageindeffcat.png' },
    { name: 'Delivery Boy', personImage: '/imageswebsite/deleveryboyiamgeindeffcat.png' },
    { name: 'Welders', personImage: '/imageswebsite/welderimageindeferentcat.png' },
  ];

  const steps = [
    { title: 'Register Account', subtext: 'You need to make an account', icon: '/imageswebsite/Frame (1).png' },
    { title: 'Find Job', subtext: 'Search for a job you are looking for', icon: '/imageswebsite/Review.png' },
    { title: 'Apply for the Job', subtext: 'Apply for the job', icon: '/imageswebsite/Layer_1_1_.png' },
    { title: 'Get Hired', subtext: 'Get Hired', icon: '/imageswebsite/imageofgethire.png' },
  ];

  return (
    <div className="homepage-wrapper">
      <Header />

      <section className="hero-banner">

        <h1 className="hero-main-title">
          Un<span className="spantextdecoration">lock Your Potential. Disco</span>ver<br /> Exciting Opportunities!   
        </h1>
        {/* <img src="/imageswebsite/sendmailboxicon.png" alt="textsendicon" className="iconimages" /> */}
        <p className="hero-description">Search jobs, apply, and get hired all in one place.</p>
        <div className="hero-search-area">
          <div className="search-combo-box">
            <div className="search-input-box">
              <span className="search-icon-wrapper">
                <img className="search-icon-image" src="https://i.ibb.co/DDkM5m0b/search-01.png" alt="Search" />
              </span>
              <input   
                type="text"
                className="search-input-field"
                placeholder="Search for jobs..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="job-type-dropdown">
              <button className="job-type-button" onClick={toggleDropdown}>
                {selectedExperience} <img className="downtap" src="/imageswebsite/seracharrowdown.png" alt="tick" />
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
            <span className="stat-label-text">Active Job Openings</span>
          </div>
          <div className="stat-block">
            <div className="stat-icon-box">
              <img className="stat-icon-image" src="/imageswebsite/homepageplus.png" alt="New Companies" />
            </div>
            <span className="stat-value">1,872</span>
            <span className="stat-label-text">New Companies</span>
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
            <p className="value-description">Land Your Dream Job with Us:</p>
            <ul className="value-list">
              <li className="value-item">Access to verified talent pool.</li>
              <li className="value-item">Smart filters to find the right candidates.</li>
              <li className="value-item">Fast & easy hiring process.</li>
            </ul>
            <button className="value-action-button" onClick={handlePostJob}>+ Find Your Job</button>
          </div>
          <div className="value-image-block">
            <div style={{ backgroundImage: `url("/imageswebsite/welderimage.png")` }} className="value-image-placeholder"></div>
          </div>
        </div>
      </section>






      <section className="category-showcase-section">
        <h2 className="category-title"><span className="category-highlight">Different </span>Categories</h2>
        <div className="category-header">
          <button className="category-view-all-top" onClick={handleJobs}>View ALL</button>
        </div>
        <div className="category-grid-layout">
          {jobCategories.map((category, index) => (
            <div className="category-card-container" key={index}>
              <div className="category-card-content">
                <div className="category-text-box">
                  <p className="category-name-text">
                    <span className="category-name-part1">Jobs For </span>
                    <span className="category-name-part2">{category.name}</span>
                  </p>
                  <div className="category-background-label">Jobs For<br /> {category.name}</div>
                  <button className="category-view-button">
                    View All <img src="/imageswebsite/arrohoizental.png" alt="arrow" />
                  </button>
                </div>
                <div className="category-image-area" style={{ backgroundImage: `url(${category.personImage})` }}></div>
              </div>
            </div>
          ))}
        </div>







        <button className="category-browse-button" onClick={handleJobs}>
          <img src="/imageswebsite/arrow-up-right-01.png" alt="browseall" className="browse-icon" /> Browse All Jobs
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
          <h2 className="action-heading">
            Find <span className="faq-title">Skilled Jobs</span> Faster!
          </h2>
          <p className="action-subtext">Apply Faster, Hire Faster – Start Now</p>
          <div className="action-button-group">
            <button className="action-button search-job" onClick={handleSearchJob}>Find A Job</button>
          </div>
        </div>
      </section>





      <Footer />
    </div>
  );
};

export default HomePage;

  