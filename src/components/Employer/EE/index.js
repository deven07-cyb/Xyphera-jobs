import React, { useState, useEffect } from 'react';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EE.css';

const EE = () => {
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState('posted');
  const [newJob, setNewJob] = useState({
    title: '',
    type: '',
    location: '',
    salary: '',
    application_deadline: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch all jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://ec2-3-82-125-211.compute-1.amazonaws.com:5000/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError('Failed to fetch jobs.');
    } finally {
      setLoading(false);
    }
  };

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Placeholder for Saved and Drafts tabs
    if (tab !== 'posted') {
      setJobs([]); // Clear jobs for demonstration; implement logic for saved/drafts
    } else {
      fetchJobs();
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  // Create a new job
  const handleCreateJob = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://ec2-3-82-125-211.compute-1.amazonaws.com:5000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newJob,
          salary: parseInt(newJob.salary), // Ensure salary is a number
        }),
      });
      if (response.ok) {
        setNewJob({ title: '', type: '', location: '', salary: '', application_deadline: '' });
        fetchJobs(); // Refresh job list
      } else {
        setError('Failed to create job.');
      }
    } catch (err) {
      setError('Error creating job.');
    }
  };

  // Update job status
  const handleUpdateStatus = async (jobId, status) => {
    try {
      const response = await fetch(
        `http://ec2-3-82-125-211.compute-1.amazonaws.com:5000/jobs/${jobId}/status`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status }),
        }
      );
      if (response.ok) {
        fetchJobs(); // Refresh job list
      } else {
        setError('Failed to update job status.');
      }
    } catch (err) {
      setError('Error updating job status.');
    }
  };

  // Delete a job
  const handleDeleteJob = async (jobId) => {
    try {
      const response = await fetch(
        `http://ec2-3-82-125-211.compute-1.amazonaws.com:5000/jobs/${jobId}`,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        fetchJobs(); // Refresh job list
      } else {
        setError('Failed to delete job.');
      }
    } catch (err) {
      setError('Error deleting job.');
    }
  };

  return (
    <div className="job-portal-wrapper">
      <EmployerHeader />
      <div className="job-management-container">
        <h2 className="job-management-title">Job Management</h2>
         
        {loading && <p className="loading-message">Loading...</p>}
        {error && <p className="error-message">{error}</p>}

        {/* Job Creation Form */}
        <div className="job-creation-form">
          <h3 className="form-title">Post a New Job</h3>
          <form onSubmit={handleCreateJob} className="create-job-form">
            <input
              type="text"
              name="title"
              value={newJob.title}
              onChange={handleInputChange}
              placeholder="Job Title"
              className="form-input"
              required
            />
            <input
              type="text"
              name="type"
              value={newJob.type}
              onChange={handleInputChange}
              placeholder="Job Type (e.g., Full-Time, Contract)"
              className="form-input"
              required
            />
            <input
              type="text"
              name="location"
              value={newJob.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="form-input"
              required
            />
            <input
              type="number"
              name="salary"
              value={newJob.salary}
              onChange={handleInputChange}
              placeholder="Salary (₹)"
              className="form-input"
              required
            />
            <input
              type="date"
              name="application_deadline"
              value={newJob.application_deadline}
              onChange={handleInputChange}
              className="form-input"
              required
            />
            <button type="submit" className="submit-job-btn">
              Post Job
            </button>
          </form>
        </div>

        {/* Tabs */}
        <div className="job-tabs-container">
          <button
            className={`job-tab ${activeTab === 'posted' ? 'job-tab-active' : ''}`}
            onClick={() => handleTabChange('posted')}
          >
            Posted
          </button>
          <button
            className={`job-tab ${activeTab === 'saved' ? 'job-tab-active' : ''}`}
            onClick={() => handleTabChange('saved')}
          >
            Saved
          </button>
          <button
            className={`job-tab ${activeTab === 'drafts' ? 'job-tab-active' : ''}`}
            onClick={() => handleTabChange('drafts')}
          >
            Drafts
          </button>
        </div>

        {/* Job Listings */}
        <div className="job-listings-container">
          <h3 className="job-listings-title">
            {activeTab === 'posted' ? 'Posted Jobs' : activeTab === 'saved' ? 'Saved Jobs' : 'Drafts'}
          </h3>
          <div className="jobs-display-grid">
            {jobs.length === 0 && !loading ? (
              <p className="no-jobs-message">No jobs available.</p>
            ) : (
              jobs.map((job, index) => (
                <div key={job.id || index} className="job-item-card">
                  <div
                    className="job-item-icon"
                    style={{
                      backgroundColor:
                        index % 3 === 0 ? '#e6f0fa' : index % 3 === 1 ? '#f0e6fa' : '#e6faeb',
                    }}
                  >
                    <img
                      src="/imageswebsite/Employerapplicationpageimage.png"
                      alt="job-icon"
                      className="job-item-image"
                    />
                  </div>
                  <div className="job-item-details">
                    <p className="job-info">
                      <strong className="info-label">Job Title:</strong> {job.title}
                    </p>
                    <p className="job-info">
                      <strong className="info-label">Job Type:</strong> {job.type}
                    </p>
                    <p className="job-info">
                      <strong className="info-label">Location:</strong> {job.location}
                    </p>
                    <p className="job-info">
                      <strong className="info-label">Salary:</strong> ₹{job.salary}
                    </p>
                    <p className="job-info">
                      <strong className="info-label">Application Deadline:</strong>{' '}
                      {job.application_deadline}
                    </p>
                    <p className="job-info">
                      <strong className="info-label">Number of Applicants:</strong>{' '}
                      {job.applicants || 0}
                    </p>
                    <p className="job-info">
                      <strong className="info-label">Job Posting Date:</strong> {job.postingDate || 'N/A'}
                    </p>
                    <p className="job-info">
                      <strong className="info-label">Status:</strong>{' '}
                      <span className={`status-${job.status?.toLowerCase() || 'active'}`}>
                        {job.status || 'Active'}
                      </span>
                    </p>
                    <div className="job-actions">
                      <button className="view-applicants-btn">
                        View Applicants <span className="action-arrow">→</span>
                      </button>
                      <button
                        className="toggle-status-btn"
                        onClick={() =>
                          handleUpdateStatus(job.id, job.status === 'Active' ? 'Inactive' : 'Active')
                        }
                      >
                        {job.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>
                      <button
                        className="delete-job-btn"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EE;