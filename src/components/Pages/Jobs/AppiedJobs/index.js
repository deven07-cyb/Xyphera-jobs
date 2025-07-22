import React, { useState, useEffect } from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './AppliedJobs.css';

const AppliedJobs = () => {
  // State for applied jobs
  const [appliedJobs] = useState(() => {
    const applied = localStorage.getItem('appliedJobs');
    return applied ? JSON.parse(applied) : [];
  });

  // Update localStorage when appliedJobs changes
  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  return (
    <div>
      {/* Header */}
      <Header />
      <h1>
        Applied <span className="jobs">Jobs</span>
      </h1>
      {/* Applied Jobs Content */}
      <section className="aj-applied-jobs-content">
        <div className="aj-back-button-container">
          <button
            style={{ background: 'transparent', border: 'none' }}
            className="aj-back-button"
            onClick={() => window.history.back()}
            aria-label="Go back"
          >
            <img src="/imageswebsite/Back arrow.png" alt="Back" />
          </button>
        </div>
        <div className="aj-jobs-list">
          {appliedJobs.length === 0 ? (
            <div className="aj-no-jobs-message">No applied jobs found.</div>
          ) : (
            appliedJobs.map((job, index) => (
              <div key={index} className="aj-job-item">
                <img
                  style={{ width: '169px', height: '121px' }}
                  src={job.companyLogo}
                  alt={`${job.companyName} logo`}
                  className="aj-company-logo"
                  onError={(e) => (e.target.src = '/imageswebsite/zomato.png')}
                />
                <div className="aj-job-info">
                  <h3>{job.jobTitle}</h3>
                  <h2>At</h2>
                  <h2>{job.companyName}</h2>
                  <h2>{job.location}</h2>
                  <button
                    style={{ fontSize: '12px', backgroundColor: '#033E8A' }}
                    className="aj-status-badge"
                  >
                    APPLIED
                  </button>
                </div>
                <button 
                 
                  style={{ fontSize: '15px', backgroundColor: '#033E8A' }}
                  className="aj-view-status-button"
                >
                  View Status
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppliedJobs;