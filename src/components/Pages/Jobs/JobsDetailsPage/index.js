//  import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Header from '../../ReusableComponents/Header';
// import Footer from '../../ReusableComponents/Footer';
// import './JobDetailsPage.css';

// const JobDetailsPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { job } = location.state || {};

//   // Handle back navigation
//   const handleBack = () => navigate(-1);

//   // Placeholder for save functionality
//   const handleSave = () => {
//     alert('Job saved!');
//   };

//   // Placeholder for apply functionality
//   const handleApply = () => {
//     alert('Application submitted!');
//   };

//   return (
//     <div className="job-details-page-container">
//       {/* Header */}
//       <Header />

//       {/* Job Details Content */}
//       <section className="job-details-content">
//         <button className="buttonforarrows" onClick={handleBack}>
//           <img style={{width:"30px",height:"30px"}} className='imagedfoi'  src="/imageswebsite/Back arrow.png" alt="Back Arrow" />
//         </button>

//         <div className="job-details-header">
//           <div className="company-logo-placeholder">
//             <img className="zomatoimagetwo" src="/imageswebsite/zomoto.png" alt="Zomato Logo" />
//             <h2 className="zomotoheading">Zomato</h2>
//           </div>
//           <div className="job-header-right">
//             <p className="experience-level">0-1 Year Experience</p>
//             <div className="action-buttons">
//               <button style={{background:"transparent",border:"2px solid #033E8A", color:"#033E8A"}} className="save-button" onClick={handleSave}>
//                 Save
//               </button>
//               <span className="share-icon">
//                 <img className="imagesitearrowriht" src="/imageswebsite/arrowright.png" alt="Share" />
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="job-description">
//           <h2 className="fullheading">Full job description</h2>
//           <ul>
//             <li>RELOCATION FACILITY AVAILABLE</li>
//             <li>Post: {job?.title || 'Delivery Boy'}</li>
//             <li>Qualification: 10th+</li>
//           </ul>
//         </div>

//         <div className="duties-section">
//           <p>
//             We are seeking a reliable and efficient Delivery Boy with at least one year of experience to join our team. The ideal candidate will be responsible for the timely and safe delivery of [products/packages/food] to our customers. You will play a crucial role in ensuring customer satisfaction through prompt and courteous service.
//           </p>
//           <h2 className='Responsibilities-one'>Responsibilities:</h2>
//           <h4>Delivery:</h4>
//           <ul>
//             <li>Accurately and efficiently deliver [products/packages/food] to designated locations within the specified timeframe.</li>
//             <li>Plan and follow the most efficient routes for timely deliveries.</li>
//             <li>Ensure all deliveries are completed with accuracy and attention to detail.</li>
//             <li>Handle packages and items with care to prevent damage.</li>
//           </ul>
//           <h4>Customer Service:</h4>
//           <ul>
//             <li>Provide excellent customer service by being polite, professional, and responsive to customer inquiries.</li>
//             <li>Obtain customer signatures and/or payments as required.</li>
//             <li>Address customer concerns or complaints in a professional manner.</li>
//           </ul>
//           <h4>Vehicle Maintenance (If applicable):</h4>
//           <ul>
//             <li>Maintain the cleanliness and basic upkeep of the delivery vehicle (motorcycle, scooter, car, etc.).</li>
//             <li>Report any vehicle maintenance issues to the supervisor.</li>
//             <li>Ensure vehicle has adequate fuel.</li>
//           </ul>
//           <h4>Documentation:</h4>
//           <ul>
//             <li>Maintain accurate delivery records and logs.</li>
//             <li>Use provided delivery applications or devices effectively.</li>
//             <li>Handle cash transactions and provide accurate change (if applicable).</li>
//           </ul>
//           <h4>Safety:</h4>
//           <ul>
//             <li>Adhere to all traffic laws and safety regulations.</li>
//             <li>Wear appropriate safety gear.</li>
//             <li>Report any accidents or incidents immediately.</li>
//           </ul>
//           <h4>Other Duties:</h4>
//           <ul>
//             <li>Assist with other tasks as assigned by the supervisor.</li>
//           </ul>
//         </div>

//         <div className="qualifications-section">
//           <h3>Qualifications:</h3>
//           <ul>
//             <li>Minimum of 1 year of experience as a Delivery Boy.</li>
//             <li>Valid driver’s license, motorcycle.</li>
//             <li>Familiarity with local streets and routes.</li>
//             <li>Ability to use GPS and navigation applications.</li>
//             <li>Good communication and interpersonal skills.</li>
//             <li>Ability to work independently and as part of a team.</li>
//             <li>Strong organizational and time-management skills.</li>
//             <li>Reliable and punctual.</li>
//             <li>Ability to lift and carry (weight) pounds.</li>
//             <li>Smartphone with data connection.</li>
//             <li>Ability to handle cash transactions.</li>
//           </ul>
//         </div>

//         <div className="preferred-qualifications">
//           <h3>Preferred Qualifications:</h3>
//           <ul>
//             <li>Experience with [specific delivery application or software].</li>
//             <li>Knowledge of [specific industry, e.g., food delivery, courier services].</li>
//           </ul>
//         </div>

//         <div className="benefits-section">
//           <h3>Benefits:</h3>
//           <ul>
//             <li>Competitive salary, health insurance, paid time off, etc.</li>
//           </ul>
//         </div>

//         <div className="apply-section">
//           <button className="apply-button" onClick={handleApply}>Apply Now</button>
//           <button className="buttonforarrows">
//             <img style={{width:"30px",height:"30px"}} src="/imageswebsite/Back arrow (1).png" alt="Next Arrow" />
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default JobDetailsPage;  

 




// // import React, { useEffect, useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import Header from '../../ReusableComponents/Header';
// // import Footer from '../../ReusableComponents/Footer';
// // import './JobDetailsPage.css';

// // const JobDetailsPage = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const { job } = location.state || {};
// //   const [apiJob, setApiJob] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchJobData = async () => {
// //       try {
// //         const response = await fetch(
// //           'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/jobs?page=1&per_page=20'
// //         );
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch job data');
// //         }
// //         const data = await response.json();
// //         const selectedJob = job ? data.jobs.find((j) => j.id === job.id) : data.jobs[0];
// //         if (!selectedJob) throw new Error('Job not found');
// //         setApiJob(selectedJob);
// //         setLoading(false);
// //       } catch (err) {
// //         setError(err.message);
// //         setLoading(false);
// //       }
// //     };

// //     fetchJobData();
// //   }, [job]);

// //   const handleBack = () => navigate(-1);

// //   const handleSave = () => {
// //     alert('Job saved!'); // Replace with actual save functionality
// //   };

// //   const handleApply = () => {
// //     alert('Application submitted!'); // Replace with actual apply functionality
// //   };

// //   if (loading) return <div className="loading">Loading...</div>;
// //   if (error) return <div className="error">Error: {error}</div>;
// //   if (!apiJob) return <div className="no-data">No job data available</div>;

// //   return (
// //     <div className="job-details-page-container">
// //       <Header />
// //       <section className="job-details-content">
// //         <button className="back-button" onClick={handleBack}>
// //           <img src="/imageswebsite/Back arrow.png" alt="Back Arrow" />
// //         </button>

// //         <div className="job-details-header">
// //           <div className="company-logo-placeholder">
// //             <img
// //               className="company-logo"
// //               src={apiJob.employer_logo_url || '/imageswebsite/default-logo.png'}
// //               alt={`${apiJob.employer_company_name} Logo`}
// //             />
// //             <h2>{apiJob.employer_company_name}</h2>
// //           </div>
// //           <div className="job-header-right">
// //             <p className="experience-level">
// //               {apiJob.experience_level.charAt(0).toUpperCase() + apiJob.experience_level.slice(1)} Experience
// //             </p>
// //             <div className="action-buttons">
// //               <button className="save-button" onClick={handleSave}>
// //                 Save
// //               </button>
// //               <span className="share-icon">
// //                 <img src="/imageswebsite/share.png" alt="Share" />
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="job-description">
// //           <h2>Full Job Description</h2>
// //           <ul>
// //             <li>RELOCATION FACILITY AVAILABLE</li>
// //             <li><strong>Post:</strong> {apiJob.title}</li>
// //             <li><strong>Qualification:</strong> 10th+</li>
// //             <li><strong>Location:</strong> {apiJob.location}</li>
// //             <li><strong>Employment Type:</strong> {apiJob.employment_type}</li>
// //             <li>
// //               <strong>Salary:</strong>{' '}
// //               {apiJob.show_salary ? `${apiJob.salary_currency} ${apiJob.salary_min} - ${apiJob.salary_max}` : 'Not disclosed'}
// //             </li>
// //             <li><strong>Posted:</strong> {new Date(apiJob.posted_at).toLocaleDateString()}</li>
// //             <li><strong>Category:</strong> {apiJob.category_name}</li>
// //             <li><strong>Remote:</strong> {apiJob.is_remote ? 'Remote' : apiJob.remote_type}</li>
// //           </ul>
// //         </div>

// //         <div className="duties-section">
// //           <h3>Responsibilities</h3>
// //           <h4>Delivery:</h4>
// //           <ul>
// //             <li>Accurately deliver products to designated locations within specified timeframes.</li>
// //             <li>Plan efficient routes for timely deliveries.</li>
// //             <li>Ensure deliveries are completed with accuracy and care.</li>
// //             <li>Handle packages to prevent damage.</li>
// //           </ul>
// //           {/* Add other responsibility sections as in your original code */}
// //         </div>

// //         <div className="qualifications-section">
// //           <h3>Qualifications</h3>
// //           <ul>
// //             <li>Minimum 1 year of experience as a {apiJob.title}.</li>
// //             <li>Valid driver’s license.</li>
// //             <li>Familiarity with local routes in {apiJob.location}.</li>
// //             <li>Ability to use GPS and navigation apps.</li>
// //             {/* Add other qualifications as needed */}
// //           </ul>
// //         </div>

// //         <div className="apply-section">
// //           <button className="apply-button" onClick={handleApply}>
// //             Apply Now 
// //           </button>
// //         </div>
// //       </section>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default JobDetailsPage; 

   


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './JobDetailsPage.css';

const JobDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { job } = location.state || {};

  // State for saved and applied jobs
  const [savedJobs, setSavedJobs] = useState(() => {
    const saved = localStorage.getItem('savedJobs');
    return saved ? JSON.parse(saved) : [];
  });

  const [appliedJobs, setAppliedJobs] = useState(() => {
    const applied = localStorage.getItem('appliedJobs');
    return applied ? JSON.parse(applied) : [];
  });

  // Update localStorage when savedJobs changes
  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
  }, [savedJobs]);

  // Update localStorage when appliedJobs changes
  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);

  // Handle back navigation
  const handleBack = () => navigate(-1);

  // Handle save job
  const handleSave = () => {
    if (!job || !job.id) {
      alert('Cannot save job: Invalid job data');
      return;
    }

    setSavedJobs((prev) => {
      let updatedSavedJobs;
      if (prev.includes(job.id)) {
        updatedSavedJobs = prev.filter((id) => id !== job.id); // Unsave job
        alert('Job unsaved!');
      } else {
        updatedSavedJobs = [...prev, job.id]; // Save job
        alert('Job saved!');
      }
      return updatedSavedJobs;
    });
  };

  // Handle apply job
  const handleApply = () => {
    if (!job || !job.id) {
      alert('Cannot apply for job: Invalid job data');
      return;
    }

    const appliedJob = {
      id: job.id,
      companyLogo: job.employer_logo_url || '/imageswebsite/zo.png',
      jobTitle: job.title || 'Untitled Job',
      companyName: job.company || 'Unknown Company',
      location: job.location || 'Unknown',
      appliedDate: new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' }), // e.g., "Jul 2025"
    };

    setAppliedJobs((prev) => {
      // Avoid duplicates
      if (prev.some((j) => j.id === job.id)) {
        alert('You have already applied for this job!');
        return prev;
      }
      const updatedAppliedJobs = [...prev, appliedJob];
      return updatedAppliedJobs;
    });
  };

  // Fallback job data if none provided
  const defaultJob = {
    id: 'default',
    title: 'Delivery Boy',
    company: 'Unknown Company',
    experienceLevel: 'Fresher',
    employer_logo_url: '/imageswebsite/zo.png',
    location: 'Unknown',
  };

  const displayJob = job || defaultJob;

  return (
    <div className="job-details-page-container">
      <Header />

      <section className="job-details-content">
        <button className="buttonforarrows" onClick={handleBack} aria-label="Go back">
          <img
            style={{ width: '30px', height: '30px' }}
            className="imagedfoi"
            src="/imageswebsite/Back arrow.png"
            alt="Back Arrow"
          />
        </button>

        <div className="job-details-header">
          <div className="company-logo-placeholder">
            <img
              className="zomatoimagetwo"
              src={displayJob.employer_logo_url}
              alt={`${displayJob.company} logo`}
              onError={(e) => (e.target.src = '/imageswebsite/zo.png')}
            />
            <h2 className="zomotoheading">{displayJob.company}</h2>
          </div>
          <div className="job-header-right">
            <p className="experience-level">{displayJob.experienceLevel}</p>
            <div className="action-buttons">
              <button
                style={{ background: 'transparent', border: '2px solid #033E8A', color: '#033E8A' }}
                className="save-button"
                onClick={handleSave}
                aria-label={savedJobs.includes(displayJob.id) ? 'Unsave job' : 'Save job'}
              >
                {savedJobs.includes(displayJob.id) ? 'Saved' : 'Save'}
              </button>
              <span className="share-icon" role="button" aria-label="Share job">
                <img
                  className="imagesitearrowriht"
                  src="/imageswebsite/arrowright.png"
                  alt="Share"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="job-description">
          <h2 className="fullheading">Full Job Description</h2>
          <ul>
            <li>RELOCATION FACILITY AVAILABLE</li>
            <li>Post: {displayJob.title}</li>
            <li>Qualification: 10th+</li>
          </ul>
        </div>

        <div className="duties-section">
          <p>
            We are seeking a reliable and efficient {displayJob.title} with at least one year of
            experience to join our team. The ideal candidate will be responsible for the timely and
            safe delivery of products/packages/food to our customers. You will play a crucial role in
            ensuring customer satisfaction through prompt and courteous service.
          </p>
          <h2 className="Responsibilities-one">Responsibilities:</h2>
          <h4>Delivery:</h4>
          <ul>
            <li>Accurately and efficiently deliver products/packages/food to designated locations within the specified timeframe.</li>
            <li>Plan and follow the most efficient routes for timely deliveries.</li>
            <li>Ensure all deliveries are completed with accuracy and attention to detail.</li>
            <li>Handle packages and items with care to prevent damage.</li>
          </ul>
          <h4>Customer Service:</h4>
          <ul>
            <li>Provide excellent customer service by being polite, professional, and responsive to customer inquiries.</li>
            <li>Obtain customer signatures and/or payments as required.</li>
            <li>Address customer concerns or complaints in a professional manner.</li>
          </ul>
          <h4>Vehicle Maintenance (If applicable):</h4>
          <ul>
            <li>Maintain the cleanliness and basic upkeep of the delivery vehicle (motorcycle, scooter, car, etc.).</li>
            <li>Report any vehicle maintenance issues to the supervisor.</li>
            <li>Ensure vehicle has adequate fuel.</li>
          </ul>
          <h4>Documentation:</h4>
          <ul>
            <li>Maintain accurate delivery records and logs.</li>
            <li>Use provided delivery applications or devices effectively.</li>
            <li>Handle cash transactions and provide accurate change (if applicable).</li>
          </ul>
          <h4>Safety:</h4>
          <ul>
            <li>Adhere to all traffic laws and safety regulations.</li>
            <li>Wear appropriate safety gear.</li>
            <li>Report any accidents or incidents immediately.</li>
          </ul>
          <h4>Other Duties:</h4>
          <ul>
            <li>Assist with other tasks as assigned by the supervisor.</li>
          </ul>
        </div>

        <div className="qualifications-section">
          <h3>Qualifications:</h3>
          <ul>
            <li>Minimum of 1 year of experience as a {displayJob.title}.</li>
            <li>Valid driver’s license, motorcycle.</li>
            <li>Familiarity with local streets and routes.</li>
            <li>Ability to use GPS and navigation applications.</li>
            <li>Good communication and interpersonal skills.</li>
            <li>Ability to work independently and as part of a team.</li>
            <li>Strong organizational and time-management skills.</li>
            <li>Reliable and punctual.</li>
            <li>Ability to lift and carry (weight) pounds.</li>
            <li>Smartphone with data connection.</li>
            <li>Ability to handle cash transactions.</li>
          </ul>
        </div>

        <div className="preferred-qualifications">
          <h3>Preferred Qualifications:</h3>
          <ul>
            <li>Experience with specific delivery application or software.</li>
            <li>Knowledge of food delivery or courier services.</li>
          </ul>
        </div>

        <div className="benefits-section">
          <h3>Benefits:</h3>
          <ul>
            <li>Competitive salary, health insurance, paid time off, etc.</li>
          </ul>
        </div>

        <div className="apply-section">
          <button className="apply-button" onClick={handleApply} aria-label="Apply now">
            Apply Now
          </button>
          <button className="buttonforarrows" aria-label="Next job">
            <img
              style={{ width: '30px', height: '30px' }}
              src="/imageswebsite/Back arrow (1).png"
              alt="Next Arrow"
            />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetailsPage;