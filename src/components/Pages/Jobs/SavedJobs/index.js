import React from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
 
import './savejobs.css'

const  SavedJobs = () => {
  

  // Sample job data
  const jobs = Array(10).fill({
    company: 'Zomato',
    postedTime: '5 Days Ago',
    title: 'Delivery Boy',
    description:
      "We're the engine behind fast, reliable deliveries. Our company connects you with skilled professionals, ensuring your packages reach their destination safely and on time. We prioritize efficiency and customer satisfaction, making every delivery a smooth experience.",
    type: ['Part Time', 'Full Time'],
    salary: '25000 ₹ /Month',
  });

 

  return (
    <div>
      <Header />
      {/* Main Content */}
      <section className="jp-main-content">
               <h1>Saved Jobs</h1>
        {/* Job Listings */}
        <div className="jp-job-listings">
          <div className="jp-job-grid">
            {jobs.map((job, index) => (
              <div key={index} className="jp-job-card">
                <div className="jp-job-card-header">
                  <div className="jp-job-card-header-left">
                    <p className="jp-company-name">{job.company}</p>
                    <p className="jp-posted-time">{job.postedTime}</p>
                  </div>
                  <button className="jp-save-button">
                    <span>Save</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>
                <p className="jp-job-description">{job.description}</p>
                <h4 className="jp-job-title">{job.title}</h4>
                <div className="jp-job-type-container">
                  {job.type.map((type, idx) => (
                    <span key={idx} className="jp-job-type">
                      {type.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="jp-job-footer">
                  <p className="jp-job-salary">{job.salary}</p>
                  <button className="jp-apply-now-button">
                    Apply Now
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="jp-apply-arrow"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default  SavedJobs;