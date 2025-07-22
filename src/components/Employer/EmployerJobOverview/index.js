 import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Footer from '../../Pages/ReusableComponents/Footer';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import './EmployerJobOverview.css';

const job = {
  title: 'Electrician (Full Time)',
  company: 'at Shree Electricals | Mumbai',
  salary: 'Rs 20,000 Per Month',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationcommodo magna consequat.',
  skills: [
    'Problem Solving',
    'Mathematical Skills',
    'Blueprint Reading',
    'Time Management',
    'Safety Measures',
    'Communication',
  ],
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ],
};

const topApplicants = [
  { name: 'Ramesh Patil', experience: '10+ Years Experience' },
  { name: 'Sameer Nair', experience: '6+ Years Experience' },
  { name: 'Kaustav Banerjee', experience: '4+ Years Experience' },
  { name: 'Vivek Borkar', experience: '6+ Years Experience' },
  { name: 'Nasir Ahmed', experience: '9+ Years Experience' },
];

const applicants = Array(12).fill({
  name: 'Ramesh Patil',
  experience: '10+ Years Experience',
  role: 'Electrician',
  skills: ['Welding', 'Electrical Wiring', 'Driving License'],
  availability: 'Immediate',
});

const EmployerJobOverview = () => (
  <div className="homepage-wrapper">
    <EmployerHeader />
    <div className="job-portal-bg">
      <div className="job-overview-header">
        <button className="back-btn-one">
          <FiArrowLeft style={{ marginRight: 6, verticalAlign: 'middle' }} />
          Back
        </button>
        <h1 className="job-overview-title">Job Overview</h1>
      </div>
      <div className="job-portal-main-container">
        <div className="job-portal-content">
          <div className="job-details-section">
            <div className="job-header-row">
              <div className="job-avatar" />
              <div>
                <div className="spanicondtadiv">
                  <h2 className="job-title">Electrician</h2>
                  <h2 className="job-title-one">(Full Time)</h2>
                </div>
                <div className="company">{job.company}</div>
                <div className="salary">{job.salary}</div>
              </div>
            </div>
            <div className="job-summary">{job.summary}</div>
            <div className="skills-section">
              <div className="skills-label">Skills</div>
              <div className="skills-list">
                {job.skills.map((skill, idx) => (
                  <span className="skill-pill" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="desc-section">
              <div className="desc-label">Description</div>
              <div className="desc-paragraphs">
                {job.description.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="top-applicants-sidebar-wrapper">
            <button className="edit-btn">
              <img src="/imageswebsite/pencil-edit-02.png" alt="edit" />
              Edit
            </button>
            <div className="top-applicants-sidebar">
              <div className="top-applicants-title">Top Applicants</div>
              <div className="top-applicants-list">
                {topApplicants.map((applicant, idx) => (
                  <div className="top-applicant-card" key={idx}>
                    <div className="applicant-avatar" />
                    <div className="top-applicant-info">
                      <div className="applicant-name">{applicant.name}</div>
                      <div className="applicant-exp">{applicant.experience}</div>
                    </div>
                    <div>
                      <img src="/imageswebsite/Employerprofiletickimage.png" alt="tick" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="applicants-section">
          <h2 className="applicants-section-title">List Of Applicants</h2>
          <div className="search-bar-row">
            <div className="search-bar-container">
              <img
                src="/imageswebsite/search-01.png"
                alt="search"
                className="search-icon"
              />
              <input style={{background:"none"}}
                type="text"
                className="search-input"
                placeholder="Search applications by job type, skills, location..."
              />
              <select className="search-select"> 
                <img src="/imageswebsite/arrowbuttondown.png" alt="imagrone"/>
                <option value="all">All</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
              </select>
            </div>
          </div>
          <div className="applicants-grid">
            {applicants.map((applicant, idx) => (
              <div className="applicant-card" key={idx}>
                <div className="applicant-card-avatars-image">
                  <div className="applicant-card-avatar-row">
                    <div className="applicant-card-avatar">
                      <img
                        className="imagedrop"
                        src="/imageswebsite/Employerprofiletickimage.png"
                        alt="tick"
                      />
                    </div>
                  </div>
                  <div className="applicant-card-name">{applicant.name}</div>
                  <div className="applicant-card-exp">{applicant.experience}</div>
                </div>
                <div className="applicant-card-info">
                  <div>
                    <span className="applicant-card-label">Job Role</span>
                    <span className="applicant-card-value">{applicant.role}</span>
                  </div>
                  <div>
                    <span className="applicant-card-label">Key Skills</span>
                    <span className="applicant-card-value">{applicant.skills.join(', ')}</span>
                  </div>
                  <div>
                    <span className="applicant-card-label">Availability</span>
                    <span className="applicant-card-value">{applicant.availability}</span>
                  </div>
                  <button className="tata">
                    View Profile
                    <img src="/imageswebsite/fi_arrow-right.png" alt="arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default EmployerJobOverview;