import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerAccountSettingsPage.css';

const EmployerJobPostings = () => {
  const navigate = useNavigate();

  // State for job postings
  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: 'Electrician',
      location: 'Bangalore, India',
      type: 'Full Time',
      status: 'Active',
      applications: 12,
    },
    {
      id: 2,
      title: 'Plumber',
      location: 'Mumbai, India',
      type: 'Part Time',
      status: 'Draft',
      applications: 0,
    },
    {
      id: 3,
      title: 'Carpenter',
      location: 'Delhi, India',
      type: 'Full Time',
      status: 'Closed',
      applications: 8,
    },
  ]);

  // Navigation functions for sidebar
  const handleDashboard = () => navigate('/dashboard');
  const handleJobPostings = () => navigate('/jobpostings');
  const handleCandidates = () => navigate('/candidates');
  const handleMessages = () => navigate('/messages');
  const handleSettings = () => navigate('/settings');

  // Handlers for job actions
  const handleCreateNewJob = () => {
    navigate('/createjob'); // Navigate to a job creation page
  };

  const handleEditJob = (id) => {
    alert(`Editing job with ID: ${id}`);
    // Navigate to edit page or open a modal
  };

  const handleDeleteJob = (id) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setJobPostings(jobPostings.filter((job) => job.id !== id));
      alert('Job posting deleted!');
    }
  };

  return (
    <div className="job-postings-container">
      <EmployerHeader />

      <div className="main-content-wrapper">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="sidebar-title">Employer Dashboard</h2>
          <nav className="sidebar-nav">
            <button
              className="sidebar-nav-button"
              onClick={handleDashboard}
            >
              Dashboard
            </button>
            <button
              className="sidebar-nav-button active"
              onClick={handleJobPostings}
            >
              Job Postings
            </button>
            <button
              className="sidebar-nav-button"
              onClick={handleCandidates}
            >
              Candidates
            </button>
            <button
              className="sidebar-nav-button"
              onClick={handleMessages}
            >
              Messages
            </button>
            <button
              className="sidebar-nav-button"
              onClick={handleSettings}
            >
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="job-postings-content">
          <div className="job-postings-header">
            <h1 className="job-postings-title">Job Postings</h1>
            <button className="create-job-button" onClick={handleCreateNewJob}>
              Create New Job
            </button>
          </div>

          <div className="job-postings-list">
            {jobPostings.length > 0 ? (
              jobPostings.map((job) => (
                <div key={job.id} className="job-posting-card">
                  <div className="job-posting-info">
                    <h3 className="job-title">{job.title}</h3>
                    <p className="job-location">
                      <span className="location-icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                            fill="#6b7280"
                          />
                        </svg>
                      </span>
                      {job.location}
                    </p>
                    <p className="job-type"><strong>Type:</strong> {job.type}</p>
                    <p className="job-status"><strong>Status:</strong> {job.status}</p>
                    <p className="job-applications">
                      <strong>Applications:</strong> {job.applications}
                    </p>
                  </div>
                  <div className="job-posting-actions">
                    <button
                      className="edit-job-button"
                      onClick={() => handleEditJob(job.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-job-button"
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-jobs-message">No job postings found. Create a new job to get started!</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EmployerJobPostings;