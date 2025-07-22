import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landingpage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    // State for dropdowns
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Select Location');
    const [selectedCategory, setSelectedCategory] = useState('Select Category');

    // Dropdown options
    const locationOptions = ['New York', 'London', 'Sydney', 'Tokyo'];
    const categoryOptions = ['Technology', 'Health Care', 'Education', 'Finance'];

    // Toggle dropdowns
    const toggleLocationDropdown = () => setIsLocationDropdownOpen(!isLocationDropdownOpen);
    const toggleCategoryDropdown = () => setIsCategoryDropdownOpen(!isCategoryDropdownOpen);

    // Handle selections
    const handleLocationSelect = (option) => {
        setSelectedLocation(option);
        setIsLocationDropdownOpen(false);
    };

    const handleCategorySelect = (option) => {
        setSelectedCategory(option);
        setIsCategoryDropdownOpen(false);
    };

    // Navigation functions
    const handleHome = () => navigate('/');
    const handleSaved = () => navigate('/saved');
    const handleApps = () => navigate('/apps');
    const handleResumeMaker = () => navigate('/resume-maker');
    const handleSubscribe = () => navigate('/subscribe');
    const handleLogin = () => navigate('/login');

    // Footer navigation
    const handlePostJobFooter = () => navigate('/post-job');
    const handleCandidates = () => navigate('/candidates');
    const handleApplications = () => navigate('/applications');
    const handleAbout = () => navigate('/about');
    const handleMessages = () => navigate('/messages');
    const handleCareers = () => navigate('/careers');
    const handleBlogs = () => navigate('/blogs');
    const handleFaq = () => navigate('/faq');
    const handleContact = () => navigate('/contact');
    const handleTerms = () => navigate('/terms');
    const handlePrivacy = () => navigate('/privacy');

    // Social media handlers
    const handleFacebook = () => window.open('https://www.facebook.com', '_blank');
    const handleTwitter = () => window.open('https://www.twitter.com', '_blank');
    const handleYoutube = () => window.open('https://www.youtube.com', '_blank');
    const handleLinkedin = () => window.open('https://www.linkedin.com', '_blank');
    const handleInstagram = () => window.open('https://www.instagram.com', '_blank');

    // Job categories data
    const jobCategories = [
        { name: 'Health Care', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/8vxx17c/Vector-6.png' },
        { name: 'Technology', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/2YjsFH6w/Vector-7.png' },
        { name: 'Education', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/1f83RBYF/Vector-8.png' },
        { name: 'Business & Finance', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/DPBpWjbP/Vector-9.png' },
        { name: 'Arts & Media', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/Y4FcGz7D/Vector-10.png' },
        { name: 'Construction & Engineering', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/4gdmdjwF/Vector-11.png' },
        { name: 'Public Service', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/qFpCp2nH/Vector-12.png' },
        { name: 'Hospitality', vacancies: '100+ Vacancies', icon: 'https://i.ibb.co/BHhfczgX/Vector-13.png' },
    ];

    return (
        <div className="lp-page-container">
            {/* Header Section */}
            <header className="lp-header">
                <div className="lp-logo">LOGO</div>
                <nav className="lp-nav">
                    <button className="lp-nav-btn" onClick={handleHome}>Home</button>
                    <button className="lp-nav-btn" onClick={handleSaved}>Saved Jobs</button>
                    <button className="lp-nav-btn" onClick={handleApps}>Applied Jobs</button>
                    <button className="lp-nav-btn" onClick={handleResumeMaker}>Resume/CV Maker</button>
                    <button className="lp-nav-btn" onClick={handleSubscribe}>Subscription</button>
                </nav>
                <div className="lp-profile">
                    <button className="lp-nav-btn" onClick={handleLogin}>Log In</button>
                    <img src="https://i.ibb.co/Gf92d0H5/Group-160.png" alt="Profile" />
                </div>
            </header>

            {/* Hero Section */}
            <section className="lp-hero">
                <h1 className="lp-hero-title">Find Your Dream Job Today!</h1>
                <p className="lp-hero-subtitle">Connecting Talent with Opportunity: Your Gateway to Career Success</p>
                <div className="lp-search-bar">
                    <input type="text" className="lp-search-input" placeholder="Job Title or Company" />
                    <div className="lp-dropdown-container">
                        <button className="lp-dropdown-btn" onClick={toggleLocationDropdown}>
                            {selectedLocation} <span className="lp-dropdown-arrow">▼</span>
                        </button>
                        {isLocationDropdownOpen && (
                            <ul className="lp-dropdown-options">
                                {locationOptions.map((option, index) => (
                                    <li key={index} className="lp-dropdown-option" onClick={() => handleLocationSelect(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="lp-dropdown-container">
                        <button className="lp-dropdown-btn" onClick={toggleCategoryDropdown}>
                            {selectedCategory} <span className="lp-dropdown-arrow">▼</span>
                        </button>
                        {isCategoryDropdownOpen && (
                            <ul className="lp-dropdown-options">
                                {categoryOptions.map((option, index) => (
                                    <li key={index} className="lp-dropdown-option" onClick={() => handleCategorySelect(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button className="lp-search-btn">
                        <span className="lp-search-icon">
                            <img className='serchiconsize' src="https://i.ibb.co/8LcZZZtN/search.png" alt="Search" />
                        </span> Search Job
                    </button>
                </div>
                <div className="lp-stats-container">
                    <div className="lp-stat-item">
                        <div className="lp-stat-icon">
                            <img src="https://i.ibb.co/Z1g4vk7F/briefcase-2-2.png" alt="Jobs" />
                        </div>
                        <div>
                            <span className="lp-stat-number">25,850</span>
                            <span className="lp-stat-label">Jobs</span>
                        </div>
                    </div>
                    <div className="lp-stat-item">
                        <div className="lp-stat-icon">
                            <img src="https://i.ibb.co/W40Cs8Lp/g2079.png" alt="Candidates" />
                        </div>
                        <div>
                            <span className="lp-stat-number">10,250</span>
                            <span className="lp-stat-label">Candidates</span>
                        </div>
                    </div>
                    <div className="lp-stat-item">
                        <div className="lp-stat-icon">
                            <img src="https://i.ibb.co/XZhbfJT4/Mask-group.png" alt="Companies" />
                        </div>
                        <div>
                            <span className="lp-stat-number">18,400</span>
                            <span className="lp-stat-label">Companies</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="lp-how-it-works">
                <h2 className="lp-section-title">How It Works</h2>
                <div className="lp-steps-container">
                    <div className="lp-step-item">
                        <div className="lp-step-number">1</div>
                        <p className="lp-step-title">Register Account</p>
                        <p className="lp-step-description">1st You need to make an account</p>
                    </div>
                    <span className="lp-step-arrow">→</span>
                    <div className="lp-step-item">
                        <div className="lp-step-number lp-step-number-light">2</div>
                        <p className="lp-step-title">Find Job</p>
                        <p className="lp-step-description">2nd Search for a job you are looking for</p>
                    </div>
                    <span className="lp-step-arrow">→</span>
                    <div className="lp-step-item">
                        <div className="lp-step-number">3</div>
                        <p className="lp-step-title">Apply for Job</p>
                        <p className="lp-step-description">3rd Apply for the job</p>
                    </div>
                    <span className="lp-step-arrow">→</span>
                    <div className="lp-step-item">
                        <div className="lp-step-number lp-step-number-light">4</div>
                        <p className="lp-step-title">Get Hired</p>
                        <p className="lp-step-description">4th Get Hired</p>
                    </div>
                </div>
            </section>

            {/* Job Categories Section */}
            <section className="lp-job-categories">
                <h2 className="lp-section-title">Job Categories</h2>
                <div className="lp-categories-grid">
                    {jobCategories.map((category, index) => (
                        <div className="lp-category-card" key={index}>
                            <img src={category.icon} alt={category.name} className="lp-category-icon" />
                            <p className="lp-category-name">{category.name}</p>
                            <p className="lp-category-vacancies">{category.vacancies}</p>
                        </div>
                    ))}
                </div>
                <button className="lp-see-more-btn">See More</button>
            </section>

            {/* Footer Section */}
            <footer className="lp-footer">
                <div className="lp-footer-content">
                    <div className="lp-footer-column">
                        <h4 className="lp-footer-column-title">Job Seekers</h4>
                        <button className="lp-footer-link" onClick={handlePostJobFooter}>Resume Examples</button>
                        <button className="lp-footer-link" onClick={handleCandidates}>Cover Letter Templates</button>
                        <button className="lp-footer-link" onClick={handleApplications}>Job Search</button>
                        <button className="lp-footer-link" onClick={handleResumeMaker}>Resume Templates</button>
                    </div>
                    <div className="lp-footer-column">
                        <h4 className="lp-footer-column-title">Career Resources</h4>
                        <button className="lp-footer-link" onClick={handleAbout}>Job Interview</button>
                        <button className="lp-footer-link" onClick={handleMessages}>Career</button>
                        <button className="lp-footer-link" onClick={handleCareers}>Cover Letter</button>
                        <button className="lp-footer-link" onClick={handleBlogs}>Blog</button>
                    </div>
                    <div className="lp-footer-column">
                        <h4 className="lp-footer-column-title">Support</h4>
                        <button className="lp-footer-link" onClick={handleFaq}>FAQ</button>
                        <button className="lp-footer-link" onClick={handleContact}>Contact Us</button>
                        <button className="lp-footer-link" onClick={handleTerms}>Terms of Service</button>
                        <button className="lp-footer-link" onClick={handlePrivacy}>Privacy Policy</button>
                        <button className="lp-footer-link" onClick={handlePrivacy}>Right of Withdrawal</button>
                    </div>
                    <div className="lp-footer-column">
                        <h4 className="lp-footer-column-title">Stay in Touch</h4>
                        <p className="lp-footer-description">
                            Stay in touch to get special offers, free giveaways and once in a lifetime deals
                        </p>
                        <div className="lp-newsletter-container">
                            <div className="lp-newsletter-input-wrapper">
                                <img
                                    src="https://i.ibb.co/QysWbB9/feather-mail-1.png"
                                    alt="Mail Icon"
                                    className="lp-newsletter-icon"
                                />
                                <input
                                    type="email"
                                    className="lp-newsletter-input"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button className="lp-newsletter-btn">
                                 <img
                                    src="https://i.ibb.co/v66dkFJG/Vector-14.png"
                                    alt="Send Icon"
                                    className="lp-newsletter-send-icon"
                                /> 
                                
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lp-footer-bottom">
                    <p className="lp-footer-copyright">© 2025 Company Name. All Rights Reserved</p>
                    <p className="lp-footer-copyright">Terms & conditions</p>
                    <p className="lp-footer-copyright">Privacy Policy</p>
                    <div className="lp-social-links">
                        <div>
                        <h4 className="lp-social-title">Follow Us</h4>
                        </div>
                        <div className='sosial-button-container'>
                        <button className="lp-social-btn" onClick={handleFacebook}>
                            <img src="https://i.ibb.co/kgkJBWFM/Div-footer-desktop-rounded-circle-feah-1.png" alt="Facebook" className="lp-social-icon" />
                        </button>
                        <button className="lp-social-btn" onClick={handleTwitter}>
                            <img src="https://i.ibb.co/k2xkSK87/Div-footer-desktop-rounded-circle-feah-2.png" alt="Twitter" className="lp-social-icon" />
                        </button>
                        <button className="lp-social-btn" onClick={handleYoutube}>
                            <img src="https://i.ibb.co/ZPJ9HFk/Div-footer-desktop-rounded-circle-feah-3.png" alt="YouTube" className="lp-social-icon" />
                        </button>
                        <button className="lp-social-btn" onClick={handleLinkedin}>
                            <img src="https://i.ibb.co/YH8nh1w/Div-footer-desktop-rounded-circle-feah-4.png" alt="LinkedIn" className="lp-social-icon" />
                        </button>
                        <button className="lp-social-btn" onClick={handleInstagram}>
                            <img src="https://i.ibb.co/398X27Jc/Div-footer-desktop-rounded-circle-feah-5.png" alt="Instagram" className="lp-social-icon" />
                        </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;