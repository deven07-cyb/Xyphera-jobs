import React, { useState, useEffect } from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './AppliedJobs.css';

const AppliedJobs = () => {
  // State for applied jobs
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://127.0.0.1:5000/api/v1/jobs/applications', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Applications:', data);

        // Transform: flatten and prepend base URL
        const transformed = data.jobs.map(app => ({
          id: app.id,
          application_date: app.application_date,
          status: app.status,
          notes: app.notes,
          jobTitle: app.job.title,
          company_name: app.job.company_name,
          location: app.job.location,
          companyLogo: `http://127.0.0.1:5000/${app.job.company_logo_path}`
        }));

        console.log(transformed, "ALL transformed");
        console.log(transformed[0].companyLogo, "First companyLogo");
        setAppliedJobs(transformed);

      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />
      <h1 style={{ marginTop: "50px" }}>
        Applied <span className="jobs">Jobs</span>
      </h1>
      {/* Applied Jobs Content */}
      <section className="aj-applied-jobs-content">
  <div className="aj-jobs-list">
    {appliedJobs.length === 0 ? (
      <div className="aj-no-jobs-message">No applied jobs found.</div>
    ) : (
      appliedJobs.map((job, index) => (
        <div key={index} className="aj-job-item">
          <img
            className="aj-company-logo"
            style={{ width: '169px', height: '121px' }}
            src={job.companyLogo}
            alt={`${job.company_name || 'Company'} logo`}
            onError={(e) => (e.target.src = '/imageswebsite/zomato.png')}
          />
          <div className="aj-job-info">
            <h3>{job.jobTitle}</h3>
            <h2>At</h2>
            <h2>{job.company_name || 'Unknown Company'}</h2>
            <h2>{job.location || 'Location not specified'}</h2>
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
