 import React, { useState } from 'react';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerCandidatePage.css';

const EmployerCandidatePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('Experience');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const experienceOptions = ['Experience', '1-3 Years', '3-5 Years', '5+ Years'];

  const initialTopCandidates = [
    {
      name: 'Ramesh Patil',
      role: 'Electrician',
      experience: '10+ Years',
      availability: 'Immediate',
      skills: 'Welding, Electrical Wiring',
    },
    {
      name: 'Priya Sharma',
      role: 'Plumber',
      experience: '5-7 Years',
      availability: '1 Week Notice',
      skills: 'Pipe Fitting, Leak Repair',
    },
    {
      name: 'Amit Kumar',
      role: 'Driver',
      experience: '8+ Years',
      availability: 'Immediate',
      skills: 'Heavy Vehicle Driving, GPS Navigation',
    },
    {
      name: 'Sneha Verma',
      role: 'Carpenter',
      experience: '3-5 Years',
      availability: '2 Weeks Notice',
      skills: 'Furniture Making, Wood Polishing',
    },
  ];

  const initialAllCandidates = [
    {
      name: 'Ramesh Patil',
      role: 'Electrician',
      experience: '10+ Years',
      availability: 'Immediate',
      skills: 'Welding, Electrical Wiring',
    },
    {
      name: 'Priya Sharma',
      role: 'Plumber',
      experience: '5-7 Years',
      availability: '1 Week Notice',
      skills: 'Pipe Fitting, Leak Repair',
    },
    {
      name: 'Amit Kumar',
      role: 'Driver',
      experience: '8+ Years',
      availability: 'Immediate',
      skills: 'Heavy Vehicle Driving, GPS Navigation',
    },
    {
      name: 'Sneha Verma',
      role: 'Carpenter',
      experience: '3-5 Years',
      availability: '2 Weeks Notice',
      skills: 'Furniture Making, Wood Polishing',
    },
    {
      name: 'Vikram Singh',
      role: 'Mechanic',
      experience: '7+ Years',
      availability: 'Immediate',
      skills: 'Engine Repair, Diagnostics',
    },
    {
      name: 'Neha Gupta',
      role: 'Painter',
      experience: '4-6 Years',
      availability: '1 Week Notice',
      skills: 'Interior Painting, Wall Texturing',
    },
    {
      name: 'Rahul Desai',
      role: 'Electrician',
      experience: '6+ Years',
      availability: 'Immediate',
      skills: 'Circuit Installation, Maintenance',
    },
    {
      name: 'Anjali Nair',
      role: 'Welder',
      experience: '5+ Years',
      availability: '2 Weeks Notice',
      skills: 'Metal Fabrication, Arc Welding',
    },
    {
      name: 'Kiran Patel',
      role: 'Driver',
      experience: '10+ Years',
      availability: 'Immediate',
      skills: 'Long Haul Driving, Vehicle Maintenance',
    },
    {
      name: 'Sunita Rao',
      role: 'Plumber',
      experience: '3-5 Years',
      availability: '1 Week Notice',
      skills: 'Drain Cleaning, Fixture Installation',
    },
    {
      name: 'Manish Tiwari',
      role: 'Carpenter',
      experience: '8+ Years',
      availability: 'Immediate',
      skills: 'Custom Woodwork, Repair',
    },
    {
      name: 'Deepa Joshi',
      role: 'Painter',
      experience: '5+ Years',
      availability: '2 Weeks Notice',
      skills: 'Exterior Painting, Color Matching',
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleExperienceSelect = (option) => {
    setSelectedExperience(option);
    setIsDropdownOpen(false);

    if (option === 'Experience') {
      setSearchQuery('');
    } else if (option === '1-3 Years') {
      setSearchQuery('1-3');
    } else if (option === '3-5 Years') {
      setSearchQuery('3-5');
    } else if (option === '5+ Years') {
      setSearchQuery('5+');
    }
  };

  const filterCandidates = (candidates) => {
    return candidates.filter((candidate) => {
      const matchesSearch =
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (searchQuery === '1-3' && candidate.experience.includes('1-3')) ||
        (searchQuery === '3-5' && candidate.experience.includes('3-5')) ||
        (searchQuery === '5+' &&
          (candidate.experience.includes('5+') ||
            candidate.experience.includes('6+') ||
            candidate.experience.includes('7+') ||
            candidate.experience.includes('8+') ||
            candidate.experience.includes('10+')));

      return matchesSearch;
    });
  };

  const filteredTopCandidates = filterCandidates(initialTopCandidates);
  const filteredAllCandidates = filterCandidates(initialAllCandidates);

  return (
    <div className="homepage-wrapper">
      <EmployerHeader />
      <div className="main-content-one">
        <div className="search-section">
          <h1 className='seachcandidate'>Search for Candidates</h1>
          <p>Search and connect with pre-verified candidates.</p>
          <div className="search-bar">
            <div className="hero-search-area hero-search-area-one">
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
          </div>
        </div>

        <div className="top-candidates-section-one">
          <div className="top-candidates-section">
            <h2>Top Candidates for you</h2>
            <div className="candidates-grid">
              {filteredTopCandidates.length > 0 ? (
                filteredTopCandidates.map((candidate, index) => (
                  <div style={{ padding: "0px" }} key={index} className="candidate-card">
                    <div className="positiondiv">
                      <img
                        className="EmployermassageGroup"
                        src="/imageswebsite/EmployermassageGroup 47780.png"
                        alt="New Message"
                      />
                    </div>
                    <div className="candidate-column">
                      <div className="candidate-image-container">
                        <div style={{ background: "white" }} className="candidate-image-placeholder"></div>
                        <span className="verified-badge">
                          <img src="/imageswebsite/welcomeemployeetick.png" alt="Verified" />
                        </span>
                      </div>
                      <h3>{candidate.name}</h3>
                      <p style={{ color: "#000000" }} className="role">{candidate.role}</p>
                    </div>
                    <p><strong>Experience:</strong> {candidate.experience}</p>
                    <p><strong>Availability:</strong> {candidate.availability}</p>
                    <p><strong>Skills:</strong> {candidate.skills}</p>
                    <div className="candidate-actions">
                      <button className="view-profile-btn">
                        View Profile <img src="/imageswebsite/fi_arrow-right (1).png" alt="gcsf" />
                      </button>
                      <button className="chat-btn-one">
                        <img
                          className="chatimage"
                          src="/imageswebsite/EmployerGroup 47777senttextxchat.png"
                          alt="Chat"
                        />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No matching candidates found.</p>
              )}
            </div>
          </div>
        </div>

        <div className="top-candidates-section-one">
          <div className="all-candidates-section">
            <div className="section-header">
              <h2>All Available Candidates</h2>
              <div className="filters">
                <span>Filter by: Job Type</span>
                <span>Sort by: Relevance</span>
              </div>
            </div>
            <div className="candidates-grid">
              {filteredAllCandidates.length > 0 ? (
                filteredAllCandidates.map((candidate, index) => (
                  <div style={{ padding: "0px" }} key={index} className="candidate-card">
                     
                    <div className="candidate-column">
                      <div className="candidate-image-container">
                        <div style={{ background: "white" }} className="candidate-image-placeholder"></div>
                        <span className="verified-badge">
                          <img src="/imageswebsite/welcomeemployeetick.png" alt="Verified" />
                        </span>
                      </div>
                      <h3>{candidate.name}</h3>
                      <p style={{ color: "#000000" }} className="role">{candidate.role}</p>
                    </div>
                    <p><strong>Experience:</strong> {candidate.experience}</p>
                    <p><strong>Availability:</strong> {candidate.availability}</p>
                    <p><strong>Skills:</strong> {candidate.skills}</p>
                    <div className="candidate-actions">
                      <button className="view-profile-btn">
                        View Profile <img src="/imageswebsite/fi_arrow-right (1).png" alt="gcsf" />
                      </button>
                      <button className="chat-btn-one">
                        <img
                          className="chatimage"
                          src="/imageswebsite/EmployerGroup 47777senttextxchat.png"
                          alt="Chat"
                        />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No matching candidates found.</p>
              )}
            </div>
            <div className="pagination">
              <button>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerCandidatePage;