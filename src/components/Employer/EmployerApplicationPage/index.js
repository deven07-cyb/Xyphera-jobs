// import React from 'react';
// import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
// import Footer from '../../Pages/ReusableComponents/Footer';
// import './EmployerApplicationPage.css';

// const postedJobs = [
//   { title: 'Electrician', type: 'Full-Time', location: 'Mumbai', salary: '₹20,000', deadline: 'Mar 15, 2025', postingDate: 'Mar 01, 2025', applicants: 34, status: 'Active' },
//   { title: 'Electrician', type: 'Full-Time', location: 'Mumbai', salary: '₹20,000', deadline: 'Mar 15, 2025', postingDate: 'Mar 01, 2025', applicants: 24, status: 'Active' },
//   { title: 'Electrician', type: 'Full-Time', location: 'Mumbai', salary: '₹20,000', deadline: 'Mar 15, 2025', postingDate: 'Mar 01, 2025', applicants: 34, status: 'Active' },
//   { title: 'Carpenter', type: 'Full-Time', location: 'Hyderabad', salary: '₹10,000', deadline: 'Feb 06, 2025', postingDate: 'Mar 01, 2025', applicants: 12, status: 'Active' },
//   { title: 'Driver', type: 'Full-Time', location: 'Bangalore', salary: '₹25,000', deadline: 'Feb 09, 2025', postingDate: 'Jan 22, 2025', applicants: 19, status: 'Active' },
//   { title: 'Electrician', type: 'Full-Time', location: 'Mumbai', salary: '₹20,000', deadline: 'Mar 15, 2025', postingDate: 'Mar 01, 2025', applicants: 32, status: 'Active' },
// ];

// const EmployerApplicationPage = () => {
//   return (
//     <div className="homepage-wrapper">
//       <EmployerHeader />
//       <div className="applications-container">
//         <h2 className="applications-title">Applications</h2>
//         <div className="tabs-container">
//           <button className="tab active-tab">Posted</button>
//           <button className="tab">Saved</button>
//           <button className="tab">Drafts</button>
//         </div>
//         <div className="posted-jobs-container">
//           <h3 className="posted-jobs-title">Posted Jobs</h3>
//           <div className="jobs-grid">
//             {postedJobs.map((job, index) => (
//               <div key={index} className="job-card">
//                 <div className="job-icon" style={{ backgroundColor: index % 3 === 0 ? '#e6f0fa' : index % 3 === 1 ? '#f0e6fa' : '#e6faeb' }}>
//                   <img src="/imageswebsite/Employerapplicationpageimage.png" alt="dataimage" className="job-image" />
//                 </div>
//                 <div className="job-details">
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Job Title:</strong> {job.title}</p>
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Job Type:</strong> {job.type}</p>
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Location:</strong> {job.location}</p>
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Salary:</strong> {job.salary}</p>
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Application Deadline:</strong> {job.deadline}</p>
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Number of Applicants:</strong> {job.applicants}</p>
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Job Posting Date:</strong> {job.postingDate}</p>
//                   <p className="job-detail paddingimage"><strong className="detail-label  ">Status:</strong> <span className="status-active">{job.status}</span></p>
//                   <button className="view-applications-btn">View Applications <span className="arrow">→</span></button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EmployerApplicationPage;  






// import React, { useState, useEffect } from 'react';
// import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
// import Footer from '../../Pages/ReusableComponents/Footer';
// import './EmployerApplicationPage.css';

// const EmployerApplicationPage = () => {
//   const [postedJobs, setPostedJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newJob, setNewJob] = useState({
//     title: '',
//     job_type: '',
//     location: '',
//     salary: '',
//     application_deadline: '',
//   });
//   const [searchParams, setSearchParams] = useState({
//     location: '',
//     title: '',
//     job_type: '',
//     salary: '',
//     application_deadline: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

//   // Function to fetch all jobs from the API
//   const fetchJobs = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/jobs', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to fetch jobs: ${response.statusText}`);
//       }

//       const data = await response.json();
//       setPostedJobs(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   // Function to create a new job
//   const createJob = async (e) => {
//     e.preventDefault();
//     if (isSubmitting) return; // Prevent multiple submissions
//     setIsSubmitting(true);
//     try {
//       const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/jobs', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newJob),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to create job: ${response.statusText}`);
//       }

//       setNewJob({
//         title: '',
//         job_type: '',
//         location: '',
//         salary: '',
//         application_deadline: '',
//       });
//       fetchJobs(); // Refresh job list
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Function to change job status
//   const changeJobStatus = async (jobId, status) => {
//     try {
//       const response = await fetch(
//         `http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/jobs/${jobId}/status`,
//         {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ status }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Failed to update job status: ${response.statusText}`);
//       }

//       fetchJobs(); // Refresh job list
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   // Function to search jobs
//   const searchJobs = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setError(null);
//       const query = new URLSearchParams(searchParams).toString();
//       const response = await fetch(
//         `http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/jobs/search?${query}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Failed to search jobs: ${response.statusText}`);
//       }

//       const data = await response.json();
//       setPostedJobs(data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   // Fetch jobs when the component mounts
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   // Handle input changes for new job form
//   const handleNewJobChange = (e) => {
//     setNewJob({ ...newJob, [e.target.name]: e.target.value });
//   };

//   // Handle input changes for search form
//   const handleSearchChange = (e) => {
//     setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="homepage-wrapper">
//       <EmployerHeader />
//       <div className="applications-container">
//         <h2 className="applications-title">Applications</h2>

//         {/* Form to Create a New Job */}
//         <div className="create-job-container">
//           <h3>Create New Job</h3>
//           <form onSubmit={createJob} className="create-job-form">
//             <input
//               type="text"
//               name="title"
//               placeholder="Job Title"
//               value={newJob.title}
//               onChange={handleNewJobChange}
//               required
//             />
//             <input
//               type="text"
//               name="job_type"
//               placeholder="Job Type (e.g., Contract)"
//               value={newJob.job_type}
//               onChange={handleNewJobChange}
//               required
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location"
//               value={newJob.location}
//               onChange={handleNewJobChange}
//               required
//             />
//             <input
//               type="number"
//               name="salary"
//               placeholder="Salary"
//               value={newJob.salary}
//               onChange={handleNewJobChange}
//               required
//             />
//             <input
//               type="date"
//               name="application_deadline"
//               value={newJob.application_deadline}
//               onChange={handleNewJobChange}
//               required
//             />
//             <button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Creating...' : 'Create Job'}
//             </button>
//           </form>
//         </div>

//         {/* Form to Search Jobs */}
//         <div className="search-jobs-container">
//           <h3>Search Jobs</h3>
//           <form onSubmit={searchJobs} className="search-jobs-form">
//             <input
//               type="text"
//               name="title"
//               placeholder="Job Title"
//               value={searchParams.title}
//               onChange={handleSearchChange}
//             />
//             <input
//               type="text"
//               name="job_type"
//               placeholder="Job Type"
//               value={searchParams.job_type}
//               onChange={handleSearchChange}
//             />
//             <input
//               type="text"
//               name="location"
//               placeholder="Location (e.g., Bangalore)"
//               value={searchParams.location}
//               onChange={handleSearchChange}
//             />
//             <input
//               type="number"
//               name="salary"
//               placeholder="Salary"
//               value={searchParams.salary}
//               onChange={handleSearchChange}
//             />
//             <input
//               type="date"
//               name="application_deadline"
//               value={searchParams.application_deadline}
//               onChange={handleSearchChange}
//             />
//             <button type="submit">Search</button>
//           </form>
//         </div>

//         <div className="tabs-container">
//           <button className="tab active-tab">Posted</button>
//           <button className="tab">Saved</button>
//           <button className="tab">Drafts</button>
//         </div>

//         <div className="posted-jobs-container">
//           <h3 className="posted-jobs-title">Posted Jobs</h3>
//           {loading ? (
//             <p>Loading jobs...</p>
//           ) : error ? (
//             <p className="error-message">Error: {error}</p>
//           ) : postedJobs.length === 0 ? (
//             <p>No jobs found.</p>
//           ) : (
//             <div className="jobs-grid">
//               {postedJobs.map((job, index) => (
//                 <div key={job.id || index} className="job-card">
//                   <div
//                     className="job-icon"
//                     style={{
//                       backgroundColor: index % 3 === 0 ? '#e6f0fa' : index % 3 === 1 ? '#f0e6fa' : '#e6faeb',
//                     }}
//                   >
//                     <img
//                       src="/imageswebsite/Employerapplicationpageimage.png"
//                       alt="dataimage"
//                       className="job-image"
//                     />
//                   </div>
//                   <div className="job-details">
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Job Title:</strong> {job.title}
//                     </p>
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Job Type:</strong> {job.job_type}
//                     </p>
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Location:</strong> {job.location}
//                     </p>
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Salary:</strong> ₹{job.salary}
//                     </p>
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Application Deadline:</strong>{' '}
//                       {job.application_deadline}
//                     </p>
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Number of Applicants:</strong>{' '}
//                       {job.applicants || 'N/A'}
//                     </p>
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Job Posting Date:</strong>{' '}
//                       {job.postingDate || 'N/A'}
//                     </p>
//                     <p className="job-detail paddingimage">
//                       <strong className="detail-label">Status:</strong>{' '}
//                       <span className="status-active">{job.status || 'N/A'}</span>
//                     </p>
//                     <button
//                       className="status-btn"
//                       onClick={() => changeJobStatus(job.id, job.status === 'Active' ? 'Inactive' : 'Active')}
//                     >
//                       {job.status === 'Active' ? 'Deactivate' : 'Activate'}
//                     </button>
//                     <button className="view-applications-btn">
//                       View Applications <span className="arrow">→</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EmployerApplicationPage;  



import React, { useState, useEffect } from 'react';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerApplicationPage.css';

const EmployerApplicationPage = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch jobs from the API
  const fetchJobs = async () => {
    try {
      const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/jobs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const data = await response.json();
      setPostedJobs(data.jobs); // Access the 'jobs' array from the API response
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="homepage-wrapper">
      <EmployerHeader />
      <div className="applications-container">
        <h2 className="applications-title">Applications</h2>
        <div className="tabs-container">
          <button className="tab active-tab">Posted</button>
          <button className="tab">Saved</button>
          <button className="tab">Drafts</button>
        </div>
        <div className="posted-jobs-container">
          <h3 className="posted-jobs-title">Posted Jobs</h3>
          {loading ? (
            <p>Loading jobs...</p>
          ) : error ? (
            <p className="error-message">Error: {error}</p>
          ) : postedJobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            <div className="jobs-grid">
              {postedJobs.map((job, index) => (
                <div key={job.id || index} className="job-card">
                  <div
                    className="job-icon"
                    style={{
                      backgroundColor: index % 3 === 0 ? '#e6f0fa' : index % 3 === 1 ? '#f0e6fa' : '#e6faeb',
                    }}
                  >
                    <img
                      src="/imageswebsite/Employerapplicationpageimage.png"
                      alt="dataimage"
                      className="job-image"
                    />
                  </div>
                  <div className="job-details">
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Job Title:</strong> {job.title}
                    </p>
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Job Type:</strong> {job.job_type}
                    </p>
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Location:</strong> {job.location}
                    </p>
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Salary:</strong> ₹{job.salary}
                    </p>
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Application Deadline:</strong>{' '}
                      {job.application_deadline}
                    </p>
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Number of Applicants:</strong>{' '}
                      {job.application_count}
                    </p>
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Job Posting Date:</strong> {job.posting_date}
                    </p>
                    <p className="job-detail paddingimage">
                      <strong className="detail-label">Status:</strong>{' '}
                      <span className="status-active">{job.status}</span>
                    </p>
                    <button className="view-applications-btn">
                      View Applications <span className="arrow">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerApplicationPage;