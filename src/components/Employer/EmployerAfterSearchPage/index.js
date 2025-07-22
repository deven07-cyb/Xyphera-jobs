// import React, { useState } from 'react';
// import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
// import Footer from '../../Pages/ReusableComponents/Footer';
// import './EmployerAfterSearchPage.css';

// const EmployerAfterSearchPage = () => {
//     const [searchQuery, setSearchQuery] = useState('Electrician');
//     const [experienceFilter, setExperienceFilter] = useState('');

//     const candidates = [
//         { name: 'Ramesh Patil', role: 'Electrician', experience: '10+ Years', availability: 'Immediate', skills: 'Welding, Electrical Wiring' },
//         { name: 'Amit Sharma', role: 'Electrician', experience: '5+ Years', availability: '1 Month', skills: 'Circuit Repair, Electrical Wiring' },
//         { name: 'Suresh Kumar', role: 'Electrician', experience: '3-5 Years', availability: 'Immediate', skills: 'Welding, Troubleshooting' },
//         { name: 'Vikram Singh', role: 'Electrician', experience: '1-3 Years', availability: '2 Weeks', skills: 'Electrical Wiring, Maintenance' },
//         { name: 'Rahul Verma', role: 'Electrician', experience: '10+ Years', availability: 'Immediate', skills: 'Welding, Electrical Wiring' },
//         { name: 'Kiran Desai', role: 'Electrician', experience: '5+ Years', availability: '1 Month', skills: 'Circuit Repair, Electrical Wiring' },
//         { name: 'Nikhil Joshi', role: 'Electrician', experience: '3-5 Years', availability: 'Immediate', skills: 'Welding, Troubleshooting' },
//         { name: 'Anil Patil', role: 'Electrician', experience: '1-3 Years', availability: '2 Weeks', skills: 'Electrical Wiring, Maintenance' },
//     ];

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleClearSearch = () => {
//         setSearchQuery('');
//     };

//     const handleExperienceChange = (e) => {
//         setExperienceFilter(e.target.value);
//     };

//     const filteredCandidates = candidates.filter((candidate) => {
//         const matchesSearch =
//             candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             candidate.skills.toLowerCase().includes(searchQuery.toLowerCase());

//         const matchesExperience =
//             experienceFilter === '' ||
//             (experienceFilter === '1-3' && candidate.experience.includes('1-3')) ||
//             (experienceFilter === '3-5' && candidate.experience.includes('3-5')) ||
//             (experienceFilter === '5+' &&
//                 (candidate.experience.includes('5+') || candidate.experience.includes('10+')));

//         return matchesSearch && matchesExperience;
//     });

//     return (
//         <div className="homepage-wrapper">
//             <EmployerHeader />

//             {/* Main Content */}
//             <div className="main-content-one">
//                 {/* Search Section */}
//                 <div className="search-section">
//                     <div className="search-bar-wrapper">
//                         {/* Back Button */}
//                         <div className="back-button-container">
//                             <button className="back-button">← Back</button>
//                         </div>
//                         <div className="search-input-container">
//                             <span className="search-icon-wrapper">
//                                 <img src="/search-01.png" alt="Search" className="search-icon-image" />
//                             </span>
//                             <input
//                                 type="text"
//                                 placeholder="Electrician"
//                                 className="search-input-field"
//                                 value={searchQuery}
//                                 onChange={handleSearchChange}
//                             />
//                             {searchQuery && (
//                                 <button className="search-clear-button" onClick={handleClearSearch}>
//                                     ×
//                                 </button>
//                             )}
//                         </div>
//                         <div className="filter-options-container">
//                             <select
//                                 className="experience-filter-dropdown"
//                                 value={experienceFilter}
//                                 onChange={handleExperienceChange}
//                             >
//                                 <option value="">Experience</option>
//                                 <option value="1-3">1-3 Years</option>
//                                 <option value="3-5">3-5 Years</option>
//                                 <option value="5+">5+ Years</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Matching Profiles Section */}    
//                 <div className="matching-profiles-section">
//                     <h2 className="matching-profiles-title">{filteredCandidates.length} Matching Profiles Found...</h2>
//                     <div className="candidates-grid">
//                         {filteredCandidates.length > 0 ? (
//                             filteredCandidates.map((candidate, index) => (
//                                 <div key={index} className="candidate-card">
//                                     <div className="candidate-image-container">
//                                         <div className="candidate-image-placeholder"></div>
//                                         <span className="verified-badge">
//                                             <img src="/imageswebsite/image 1.png" alt="Verified" />
//                                         </span>
//                                     </div>
//                                     <h3 className="candidate-name">{candidate.name}</h3>
//                                     <p className="candidate-role">{candidate.role}</p>
//                                     <p className="candidate-experience"><strong>Experience:</strong> {candidate.experience}</p>
//                                     <p className="candidate-availability"><strong>Availability:</strong> {candidate.availability}</p>
//                                     <p className="candidate-skills"><strong>Skills:</strong> {candidate.skills}</p>
//                                     <div className="candidate-actions">
//                                         <button className="view-profile-button">View Profile →</button>
//                                         <button className="chat-button">
//                                             <img
//                                                 src="/imageswebsite/EmployerGroup 47777senttextxchat.png"
//                                                 alt="Chat"
//                                                 className="chat-icon"
//                                             />
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p className="no-candidates-message">No matching candidates found.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default EmployerAfterSearchPage;    




 import React, { useState } from 'react';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerAfterSearchPage.css';

const EmployerAfterSearchPage  = () => {
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
        <div style={{marginTop:"100px"}} className="search-section">
          {/* <h1 className='seachcandidate'>Search for Candidates</h1>
          <p>Search and connect with pre-verified candidates.</p> */}

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
            <h2>8 matching Profiles found...</h2>
            <div className="candidates-grid">
              {filteredTopCandidates.length > 0 ? (
                filteredTopCandidates.map((candidate, index) => (
                  <div style={{ padding: "0px" }} key={index} className="candidate-card">
                    {/* <div className="positiondiv">
                      <img
                        className="EmployermassageGroup"
                        src="/imageswebsite/EmployermassageGroup 47780.png"
                        alt="New Message"
                      />
                    </div> */}
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

export default  EmployerAfterSearchPage;
