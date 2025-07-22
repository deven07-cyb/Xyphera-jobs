//  import React, { useState, useEffect } from 'react';
// import Header from '../../ReusableComponents/Header';
// import Footer from '../../ReusableComponents/Footer';
// import './SAVEDJOB.css';
 

// const SAVEDJOB = () => {
//   // State for filters (removed searchQuery and location)
//   const [categoryFilters, setCategoryFilters] = useState([]);
//   const [jobTypeFilters, setJobTypeFilters] = useState([]);
//   const [experienceFilters, setExperienceFilters] = useState([]);
//   const [datePostedFilters, setDatePostedFilters] = useState([]);
//   const [salaryRange, setSalaryRange] = useState(25000);

//   // State for fetched jobs
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Filter options (static)
//   const categories = [
//     { name: 'Commerce', count: 10 },
//     { name: 'Telecommunications', count: 10 },
//     { name: 'Hotels & Tourism', count: 10 },
//     { name: 'Education', count: 10 },
//     { name: 'Financial Services', count: 10 },
//   ];

//   const jobTypes = [
//     { name: 'Full Time', count: 10 },
//     { name: 'Part Time', count: 10 },
//     { name: 'Freelance', count: 10 },
//     { name: 'Seasonal', count: 10 },
//     { name: 'Fixed-Price', count: 10 },
//   ];

//   const experienceLevels = [
//     { name: 'No-experience', count: 10 },
//     { name: 'Fresher', count: 10 },
//     { name: 'Intermediate', count: 10 },
//     { name: 'Expert', count: 10 },
//   ];

//   const datePosted = [
//     { name: 'All', count: 10 },
//     { name: 'Last Hour', count: 10 },
//     { name: 'Last 24 Hours', count: 10 },
//     { name: 'Last 7 Days', count: 10 },
//     { name: 'Last 30 Days', count: 10 },
//   ];

//   const tags = ['engineering', 'design', 'ui/ux', 'marketing', 'management', 'soft', 'construction'];

//   // Fetch jobs from API on component mount
//   useEffect(() => {
//     // Fallback job data (moved inside useEffect to avoid ESLint warning)
//     const fallbackJobs = Array(10).fill({
//       company: 'Zomato',
//       postedTime: '2025-05-23T12:00:00Z',
//       title: 'Delivery Boy',
//       description:
//         "We're the engine behind fast, reliable deliveries. Our company connects you with skilled professionals, ensuring your packages reach their destination safely and on time.",
//       type: ['Part Time', 'Full Time'],
//       salary: '25000 ₹ /Month',
//       category: 'Hotels & Tourism',
//       experienceLevel: 'Fresher',
//       location: 'Bangalore',
//     });

//     const fetchJobs = async () => {
//       setLoading(true);
//       setError('');

//       // Retrieve token from local storage
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         setError('No authorization token found. Please log in.');
//         setJobs(fallbackJobs); // Use fallback data
//         setLoading(false);
//         return;
//       }

//       try {
//         // Attempt to fetch a list of jobs (assumed endpoint)
//         const response = await fetch('http://107.22.99.147:8080/verified/jobs', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           if (response.status === 404) {
//             throw new Error('');
//           }
//           const data = await response.json();
//           throw new Error(data.message || 'Failed to fetch job data');
//         }

//         const data = await response.json();

//         // Ensure data is an array
//         const jobsArray = Array.isArray(data) ? data : [data];

//         // Map the API response to the expected job structure
//         const mappedJobs = jobsArray.map((job) => ({
//           company: job.company || 'Unknown Company',
//           title: job.title || 'Untitled Job',
//           description: job.description || 'No description available.',
//           type: job.type || ['Full Time'],
//           salary: job.salary || 'Not specified',
//           postedTime: job.postedTime || new Date().toISOString(), // Default to now if missing
//           category: job.category || 'Uncategorized',
//           experienceLevel: job.experienceLevel || 'Fresher',
//           location: job.location || 'Unknown',
//         }));

//         setJobs(mappedJobs);
//         console.log('Fetched Jobs:', mappedJobs);
//       } catch (err) {
//         // If the API fails, use fallback data
//         setError(err.message || '');
//         setJobs(fallbackJobs);
//         console.error('Error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []); // No dependencies needed since fallbackJobs is now inside useEffect

//   // Handle filter changes
//   const handleCategoryChange = (category) => {
//     setCategoryFilters((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
//     );
//   };

//   const handleJobTypeChange = (type) => {
//     setJobTypeFilters((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   const handleExperienceChange = (level) => {
//     setExperienceFilters((prev) =>
//       prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
//     );
//   };

//   const handleDatePostedChange = (date) => {
//     setDatePostedFilters((prev) =>
//       prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
//     );
//   };

//   // Filter jobs based on user input (removed searchQuery and location filters)
//   const filteredJobs = jobs.filter((job) => {
//     // Category filter
//     const matchesCategory =
//       categoryFilters.length === 0 || categoryFilters.includes(job.category);

//     // Job type filter
//     const matchesJobType =
//       jobTypeFilters.length === 0 ||
//       jobTypeFilters.some((type) => job.type.includes(type));

//     // Experience level filter
//     const matchesExperience =
//       experienceFilters.length === 0 || experienceFilters.includes(job.experienceLevel);

//     // Date posted filter (improved to handle timestamps)
//     const matchesDatePosted = () => {
//       if (datePostedFilters.length === 0 || datePostedFilters.includes('All')) return true;

//       // Parse the postedTime (assumed to be an ISO timestamp like "2025-05-23T12:00:00Z")
//       const postedDate = new Date(job.postedTime);
//       const currentDate = new Date(); // Current date: June 04, 2025, 10:09 AM IST
//       const timeDiff = (currentDate - postedDate) / (1000 * 60 * 60); // Time difference in hours

//       if (datePostedFilters.includes('Last Hour') && timeDiff <= 1) return true;
//       if (datePostedFilters.includes('Last 24 Hours') && timeDiff <= 24) return true;
//       if (datePostedFilters.includes('Last 7 Days') && timeDiff <= 7 * 24) return true;
//       if (datePostedFilters.includes('Last 30 Days') && timeDiff <= 30 * 24) return true;
//       return false;
//     };

//     // Salary filter (assumes salary is a string like "25000 ₹ /Month")
//     const matchesSalary = () => {
//       const salaryValue = parseInt(job.salary.split(' ')[0], 10) || 0;
//       return salaryValue >= 20000 && salaryValue <= salaryRange;
//     };

//     return (
//       matchesCategory &&
//       matchesJobType &&
//       matchesExperience &&
//       matchesDatePosted() &&
//       matchesSalary()
//     );
//   });

//   return (
//     <div >
//       <Header />
//       <h1>
//         <span className='savedjobs-heading'>Saved</span> <span style={{color:"#033E8A"}}>Jobs</span>
//       </h1>
//       {/* Main Content */}
//       <section className="jpp-main-content">
//         {/* Left Sidebar (Filters) */}
//         <aside className="jpp-sidebar">
//           <div className="jpp-filter-group">
//             <h3>Category</h3>
//             {categories.map((category, index) => (
//               <label key={index} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={categoryFilters.includes(category.name)}
//                   onChange={() => handleCategoryChange(category.name)}
//                 />
//                 <span className="jpp-filter-label">{category.name}</span>
//                 <span className="jpp-filter-count">{category.count}</span>
//               </label>
//             ))}
//             <button className="jpp-show-more">SHOW MORE</button>
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Job Type</h3>
//             {jobTypes.map((type, index) => (
//               <label key={index} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={jobTypeFilters.includes(type.name)}
//                   onChange={() => handleJobTypeChange(type.name)}
//                 />
//                 <span className="jpp-filter-label">{type.name}</span>
//                 <span className="jpp-filter-count">{type.count}</span>
//               </label>
//             ))}
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Experience Level</h3>
//             {experienceLevels.map((level, index) => (
//               <label key={index} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={experienceFilters.includes(level.name)}
//                   onChange={() => handleExperienceChange(level.name)}
//                 />
//                 <span className="jpp-filter-label">{level.name}</span>
//                 <span className="jpp-filter-count">{level.count}</span>
//               </label>
//             ))}
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Date Posted</h3>
//             {datePosted.map((date, index) => (
//               <label key={index} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={datePostedFilters.includes(date.name)}
//                   onChange={() => handleDatePostedChange(date.name)}
//                 />
//                 <span className="jpp-filter-label">{date.name}</span>
//                 <span className="jpp-filter-count">{date.count}</span>
//               </label>
//             ))}
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Salary</h3>
//             <div className="jpp-salary-range">
//               <span>20000 INR</span>
//               <input
//                 type="range"
//                 min="20000"
//                 max="50000"
//                 value={salaryRange}
//                 onChange={(e) => setSalaryRange(e.target.value)}
//               />
//               <span>50000 INR</span>
//             </div>
//             <span className="jpp-salary-value">Salary: {salaryRange} INR</span>
//             <button className="jpp-apply-button">Apply</button>
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Tags</h3>
//             <div className="jpp-tags">
//               {tags.map((tag, index) => (
//                 <span key={index} className="jpp-tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* Job Listings */}
//         <div className="jpp-job-listings">
//           {loading && <div className="jpp-loading-message">Loading jobs...</div>}
//           {error && <div className="jpp-error-message">{error}</div>}
//           {!loading && !error && filteredJobs.length === 0 && (
//             <div className="jpp-no-jobs-message">No jobs found matching your criteria.</div>
//           )}
//           <div className="jpp-job-grid">
//             {filteredJobs.map((job, index) => (
//               <div key={index} className="jpp-job-card">
//                 <div className="jpp-job-card-header">
//                   <div className="jpp-job-card-header-left">
//                     <img className='zomoto-image' src='/imageswebsite/zomoto.png' alt="zomoto"/>
//                     <p className="jpp-company-name">{job.company}</p>
//                     <p className='datapara'>
//                       {Math.floor(
//                         (new Date() - new Date(job.postedTime)) / (1000 * 60 * 60 * 24)
//                       )}{' '}
//                       days ago
//                     </p>
//                   </div>
//                   <button className="jpp-save-button">
//                     <span>Save</span>
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#666666"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <p className="jpp-job-description">{job.description}</p>
//                 <h4 className="jpp-job-title">{job.title}</h4>
//                 <div className="jpp-job-type-container">
//                   {job.type.map((type, idx) => (
//                     <span key={idx} className="jpp-job-type">
//                       {type.toUpperCase()}
//                     </span>
//                   ))}
//                 </div>
//                 <hr className='hoizentalines'/>
//                 <div className="jpp-job-footer">
//                   <p className="jpp-job-salary">{job.salary}</p>
//                   <img src="/imageswebsite/arrowhorizental.png" alt="pppng"/>
//                   <button className="jpp-apply-now-button">
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default SAVEDJOB;  




// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../ReusableComponents/Header';
// import Footer from '../../ReusableComponents/Footer';
// import './SAVEDJOB.css';
 

// const  SavedJobs = () => {
//   // State for filters
   
//   const [categoryFilters, setCategoryFilters] = useState([]);
//   const [jobTypeFilters, setJobTypeFilters] = useState([]);
//   const [experienceFilters, setExperienceFilters] = useState([]);
//   const [datePostedFilters, setDatePostedFilters] = useState([]);
//   const [salaryRange, setSalaryRange] = useState(70000);

//   // State for fetched jobs and filter counts
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [jobTypes, setJobTypes] = useState([]);
//   const [experienceLevels, setExperienceLevels] = useState([]);
//   const [datePosted, setDatePosted] = useState([]);

//   const navigate = useNavigate();

//   // Memoized base filter options
//   const baseCategories = useMemo(
//     () => [
//       'Technology',
//       'Sales & Marketing',
//       'Commerce',
//       'Telecommunications',
//       'Hotels & Tourism',
//       'Education',
//       'Financial Services',
//     ],
//     []
//   );

//   const baseJobTypes = useMemo(
//     () => [
//       'All',
//       'Full Time',
//       'Part Time',
//       'Contract',
//       'Freelance',
//       'Seasonal',
//       'Fixed-Price',
//     ],
//     []
//   );

//   const baseExperienceLevels = useMemo(
//     () => [
//       'Junior',
//       'Mid',
//       'Senior',
//       'No-experience',
//       'Fresher',
//       'Expert',
//     ],
//     []
//   );

//   const baseDatePosted = useMemo(
//     () => [
//       'All',
//       'Last Hour',
//       'Last 24 Hours',
//       'Last 7 Days',
//       'Last 30 Days',
//     ],
//     []
//   );

//   const tags = useMemo(
//     () => ['engineering', 'design', 'ui/ux', 'marketing', 'management', 'soft', 'construction'],
//     []
//   );

//   // Fetch jobs from API and calculate filter counts
//   const fetchJobs = useCallback(async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/jobs/', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to fetch jobs: ${response.statusText}`);
//       }

//       const { jobs: jobsArray = [] } = await response.json();

//       const mappedJobs = jobsArray.map((job) => ({
//         id: job.id,
//         company: job.employer_company_name || 'Unknown Company',
//         title: job.title || 'Untitled Job',
//         description: job.short_description || 'No description available.',
//         type: [job.employment_type.replace('-', ' ').toUpperCase()],
//         salary: job.show_salary
//           ? `${job.salary_currency} ${parseFloat(job.salary_min).toLocaleString()} - ${parseFloat(job.salary_max).toLocaleString()}`
//           : 'Not specified',
//         postedTime: job.posted_at || new Date().toISOString(),
//         category: job.category_name || 'Uncategorized',
//         experienceLevel: job.experience_level
//           ? job.experience_level.charAt(0).toUpperCase() + job.experience_level.slice(1)
//           : 'Fresher',
//         location: job.location || 'Unknown',
//         remoteType: job.remote_type ? job.remote_type.charAt(0).toUpperCase() + job.remote_type.slice(1) : 'Onsite',
//         employer_logo_url: job.employer_logo_url || '/imageswebsite/default-logo.png',
//       }));

//       // Calculate filter counts
//       const categoryCounts = baseCategories.map((name) => ({
//         name,
//         count: mappedJobs.filter((job) => job.category === name).length,
//       }));

//       const jobTypeCounts = baseJobTypes.map((name) => ({
//         name,
//         count: name === 'All'
//           ? mappedJobs.length
//           : mappedJobs.filter((job) => job.type.includes(name.toUpperCase())).length,
//       }));

//       const experienceCounts = baseExperienceLevels.map((name) => ({
//         name,
//         count: mappedJobs.filter((job) => job.experienceLevel === name).length,
//       }));

//       const datePostedCounts = baseDatePosted.map((name) => {
//         if (name === 'All') return { name, count: mappedJobs.length };

//         const currentDate = new Date();
//         return {
//           name,
//           count: mappedJobs.filter((job) => {
//             const postedDate = new Date(job.postedTime);
//             const timeDiff = (currentDate - postedDate) / (1000 * 60 * 60);
//             if (name === 'Last Hour' && timeDiff <= 1) return true;
//             if (name === 'Last 24 Hours' && timeDiff <= 24) return true;
//             if (name === 'Last 7 Days' && timeDiff <= 7 * 24) return true;
//             if (name === 'Last 30 Days' && timeDiff <= 30 * 24) return true;
//             return false;
//           }).length,
//         };
//       });

//       setCategories(categoryCounts);
//       setJobTypes(jobTypeCounts);
//       setExperienceLevels(experienceCounts);
//       setDatePosted(datePostedCounts);
//       setJobs(mappedJobs);
//     } catch (err) {
//       setError(err.message || 'An error occurred while fetching jobs.');
//       setJobs([]);
//       setCategories(baseCategories.map((name) => ({ name, count: 0 })));
//       setJobTypes(baseJobTypes.map((name) => ({ name, count: 0 })));
//       setExperienceLevels(baseExperienceLevels.map((name) => ({ name, count: 0 })));
//       setDatePosted(baseDatePosted.map((name) => ({ name, count: 0 })));
//     } finally {
//       setLoading(false);
//     }
//   }, [baseCategories, baseJobTypes, baseExperienceLevels, baseDatePosted]);

//   useEffect(() => {
//     fetchJobs();
//   }, [fetchJobs]);

//   // Handle filter changes
//   const handleCategoryChange = useCallback((category) => {
//     setCategoryFilters((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
//     );
//   }, []);

//   const handleJobTypeChange = useCallback((type) => {
//     setJobTypeFilters((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   }, []);

//   const handleExperienceChange = useCallback((level) => {
//     setExperienceFilters((prev) =>
//       prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
//     );
//   }, []);

//   const handleDatePostedChange = useCallback((date) => {
//     setDatePostedFilters((prev) =>
//       prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
//     );
//   }, []);

//   // Filter jobs based on user input
//   const filteredJobs = useMemo(() => {
//     return jobs.filter((job) => {
       

      

//       const matchesJobType =
//         jobTypeFilters.length === 0 ||
//         jobTypeFilters.some((type) => job.type.includes(type.toUpperCase())) ||
//         (jobTypeFilters.includes('All') && jobTypeFilters.length === 1);

//       const matchesExperience =
//         experienceFilters.length === 0 || experienceFilters.includes(job.experienceLevel);

//       const matchesDatePosted = () => {
//         if (datePostedFilters.length === 0 || datePostedFilters.includes('All')) return true;

//         const postedDate = new Date(job.postedTime);
//         const currentDate = new Date();
//         const timeDiff = (currentDate - postedDate) / (1000 * 60 * 60);

//         if (datePostedFilters.includes('Last Hour') && timeDiff <= 1) return true;
//         if (datePostedFilters.includes('Last 24 Hours') && timeDiff <= 24) return true;
//         if (datePostedFilters.includes('Last 7 Days') && timeDiff <= 7 * 24) return true;
//         if (datePostedFilters.includes('Last 30 Days') && timeDiff <= 30 * 24) return true;
//         return false;
//       };

//       const matchesSalary = () => {
//         if (!job.salary.includes('INR')) return true;
//         const salaryMin = parseFloat(job.salary.split(' - ')[0].replace('INR ', '').replace(',', '')) || 0;
//         return salaryMin <= salaryRange;
//       };

//       return (
//         matchesJobType &&
//         matchesExperience &&
//         matchesDatePosted() &&
//         matchesSalary()
//       );
//     });
//   }, [jobs, jobTypeFilters, experienceFilters, datePostedFilters, salaryRange]);

//   // Handle Apply Now button click
//   const handleApply = (job) => {
//     navigate('/Jobdetailspage', { state: { job } });
//   };

//   return (
//     <div  >
//       <Header />
//       <h1>
//       <span className='savedjobs-heading'>Saved</span> <span style={{color:"#033E8A"}}>Jobs</span>
//       </h1>
//       {/* Search and Filter Section */}
       

//       {/* Main Content */}
//       <section className="jpp-main-content" aria-label="Job Listings and Filters">
//         {/* Left Sidebar (Filters) */}
//         <aside className="jpp-sidebar" aria-label="Job Filters">
//           <div className="jpp-filter-group">
//             <h3>Category</h3>
//             {categories.map((category) => (
//               <label key={category.name} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={categoryFilters.includes(category.name)}
//                   onChange={() => handleCategoryChange(category.name)}
//                   aria-label={`Filter by ${category.name}`}
//                 />
//                 <span className="jpp-filter-label">{category.name}</span>
//                 <span className="jpp-filter-count">({category.count})</span>
//               </label>
//             ))}
//             <button className="jpp-show-more" aria-label="Show more categories">
//               SHOW MORE
//             </button>
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Job Type</h3>
//             {jobTypes.map((type) => (
//               <label key={type.name} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={jobTypeFilters.includes(type.name)}
//                   onChange={() => handleJobTypeChange(type.name)}
//                   aria-label={`Filter by ${type.name}`}
//                 />
//                 <span className="jpp-filter-label">{type.name}</span>
//                 <span className="jpp-filter-count">({type.count})</span>
//               </label>
//             ))}
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Experience Level</h3>
//             {experienceLevels.map((level) => (
//               <label key={level.name} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={experienceFilters.includes(level.name)}
//                   onChange={() => handleExperienceChange(level.name)}
//                   aria-label={`Filter by ${level.name}`}
//                 />
//                 <span className="jpp-filter-label">{level.name}</span>
//                 <span className="jpp-filter-count">({level.count})</span>
//               </label>
//             ))}
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Date Posted</h3>
//             {datePosted.map((date) => (
//               <label key={date.name} className="jpp-filter-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={datePostedFilters.includes(date.name)}
//                   onChange={() => handleDatePostedChange(date.name)}
//                   aria-label={`Filter by ${date.name}`}
//                 />
//                 <span className="jpp-filter-label">{date.name}</span>
//                 <span className="jpp-filter-count">({date.count})</span>
//               </label>
//             ))}
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Salary Range</h3>
//             <div className="jpp-salary-range">
//               <span>20,000 INR</span>
//               <input
//                 type="range"
//                 min="20000"
//                 max="120000"
//                 value={salaryRange}
//                 onChange={(e) => setSalaryRange(Number(e.target.value))}
//                 aria-label="Filter by salary range"
//               />
//               <span>120,000 INR</span>
//             </div>
//             <span className="jpp-salary-value">Salary: {salaryRange.toLocaleString()} INR</span>
//             <button className="jpp-apply-button" aria-label="Apply salary filter">
//               Apply
//             </button>
//           </div>
//           <div className="jpp-filter-group">
//             <h3>Tags</h3>
//             <div className="jpp-tags">
//               {tags.map((tag) => (
//                 <span key={tag} className="jpp-tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </aside>

//         {/* Job Listings */}
//         <div className="jpp-job-listings" aria-label="Job Listings">
//           {loading && <div className="jpp-loading-message">Loading jobs...</div>}
//           {error && <div className="jpp-error-message">{error}</div>}
//           {!loading && !error && filteredJobs.length === 0 && (
//             <div className="jpp-no-jobs-message">No jobs found matching your criteria.</div>
//           )}
//           <div className="jpp-job-grid">
//             {filteredJobs.map((job) => (
//               <article key={job.id} className="jpp-job-card" aria-label={`Job: ${job.title}`}>
//                 <div className="jpp-job-card-header">
//                   <div className="jpp-job-card-header-left">
//                     <img
//                       className="jpp-company-logo"
//                       src={job.employer_logo_url}
//                       alt={`${job.company} logo`}
//                       onError={(e) => (e.target.src = '/imageswebsite/zomato.png')}
//                     />
//                     <p className="jpp-company-name">{job.company}</p>
//                     <p className="jpp-posted-time">
//                       {Math.floor((new Date() - new Date(job.postedTime)) / (1000 * 60 * 60 * 24))}{' '}
//                       days ago
//                     </p>
//                   </div>
//                   <button
//                     className="jpp-save-button"
//                     aria-label="Save job"
//                     onClick={() => console.log(`Save job ${job.id}`)}
//                   >
//                     <span>Save</span>
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="#666666"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <h4 className="jpp-job-title">{job.title}</h4>
//                 <p className="jpp-job-description">{job.description}</p>
//                 <div className="jpp-job-type-description">
//                   <span className="jpp-job-type">{job.type.join(', ')}</span>
//                   <span className="jpp-job-type">{job.remoteType}</span>
//                   <span className="jpp-job-type">{job.location}</span>
//                 </div>
//                 <hr className="jpp-divider" />
//                 <div className="jpp-job-footer">
//                   <p className="jpp-job-salary">{job.salary}</p>
//                   <div className="jpp-image-button-container">
//                     <img
//                       src="/imageswebsite/arrowhorizental.png"
//                       alt="Apply arrow"
//                       className="jpp-apply-arrow"
//                     />
//                     <button
//                       className="jpp-apply-now-button"
//                       aria-label="Apply now"
//                       onClick={() => handleApply(job)}
//                     >
//                       Apply Now
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default  SavedJobs; 




import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './SAVEDJOB.css';

const SavedJobs = () => {
  // State for filters
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [jobTypeFilters, setJobTypeFilters] = useState([]);
  const [experienceFilters, setExperienceFilters] = useState([]);
  const [datePostedFilters, setDatePostedFilters] = useState([]);
  const [salaryRange, setSalaryRange] = useState(70000);

  // State for fetched jobs and filter counts
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [datePosted, setDatePosted] = useState([]);
  const [savedJobs, setSavedJobs] = useState(() => {
    const saved = localStorage.getItem('savedJobs');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  // Memoized base filter options
  const baseCategories = useMemo(
    () => [
      'Technology',
      'Sales & Marketing',
      'Commerce',
      'Telecommunications',
      'Hotels & Tourism',
      'Education',
      'Financial Services',
    ],
    []
  );

  const baseJobTypes = useMemo(
    () => [
      'All',
      'Full Time',
      'Part Time',
      'Contract',
      'Freelance',
      'Seasonal',
      'Fixed-Price',
    ],
    []
  );

  const baseExperienceLevels = useMemo(
    () => [
      'Junior',
      'Mid',
      'Senior',
      'No-experience',
      'Fresher',
      'Expert',
    ],
    []
  );

  const baseDatePosted = useMemo(
    () => [
      'All',
      'Last Hour',
      'Last 24 Hours',
      'Last 7 Days',
      'Last 30 Days',
    ],
    []
  );

  const tags = useMemo(
    () => ['engineering', 'design', 'ui/ux', 'marketing', 'management', 'soft', 'construction'],
    []
  );

  // Fetch jobs from API and calculate filter counts
  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/jobs/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.statusText}`);
      }

      const { jobs: jobsArray = [] } = await response.json();

      const mappedJobs = jobsArray
        .filter((job) => savedJobs.includes(job.id)) // Only include saved jobs
        .map((job) => ({
          id: job.id,
          company: job.employer_company_name || 'Unknown Company',
          title: job.title || 'Untitled Job',
          description: job.short_description || 'No description available.',
          type: [job.employment_type.replace('-', ' ').toUpperCase()],
          salary: job.show_salary
            ? `${job.salary_currency} ${parseFloat(job.salary_min).toLocaleString()} - ${parseFloat(job.salary_max).toLocaleString()}`
            : 'Not specified',
          postedTime: job.posted_at || new Date().toISOString(),
          category: job.category_name || 'Uncategorized',
          experienceLevel: job.experience_level
            ? job.experience_level.charAt(0).toUpperCase() + job.experience_level.slice(1)
            : 'Fresher',
          location: job.location || 'Unknown',
          remoteType: job.remote_type ? job.remote_type.charAt(0).toUpperCase() + job.remote_type.slice(1) : 'Onsite',
          employer_logo_url: job.employer_logo_url || '/imageswebsite/default-logo.png',
        }));

      // Calculate filter counts
      const categoryCounts = baseCategories.map((name) => ({
        name,
        count: mappedJobs.filter((job) => job.category === name).length,
      }));

      const jobTypeCounts = baseJobTypes.map((name) => ({
        name,
        count: name === 'All'
          ? mappedJobs.length
          : mappedJobs.filter((job) => job.type.includes(name.toUpperCase())).length,
      }));

      const experienceCounts = baseExperienceLevels.map((name) => ({
        name,
        count: mappedJobs.filter((job) => job.experienceLevel === name).length,
      }));

      const datePostedCounts = baseDatePosted.map((name) => {
        if (name === 'All') return { name, count: mappedJobs.length };

        const currentDate = new Date();
        return {
          name,
          count: mappedJobs.filter((job) => {
            const postedDate = new Date(job.postedTime);
            const timeDiff = (currentDate - postedDate) / (1000 * 60 * 60);
            if (name === 'Last Hour' && timeDiff <= 1) return true;
            if (name === 'Last 24 Hours' && timeDiff <= 24) return true;
            if (name === 'Last 7 Days' && timeDiff <= 7 * 24) return true;
            if (name === 'Last 30 Days' && timeDiff <= 30 * 24) return true;
            return false;
          }).length,
        };
      });

      setCategories(categoryCounts);
      setJobTypes(jobTypeCounts);
      setExperienceLevels(experienceCounts);
      setDatePosted(datePostedCounts);
      setJobs(mappedJobs);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching jobs.');
      setJobs([]);
      setCategories(baseCategories.map((name) => ({ name, count: 0 })));
      setJobTypes(baseJobTypes.map((name) => ({ name, count: 0 })));
      setExperienceLevels(baseExperienceLevels.map((name) => ({ name, count: 0 })));
      setDatePosted(baseDatePosted.map((name) => ({ name, count: 0 })));
    } finally {
      setLoading(false);
    }
  }, [baseCategories, baseJobTypes, baseExperienceLevels, baseDatePosted, savedJobs]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Handle save job (unsave in SavedJobs)
  const handleSaveJob = useCallback((jobId) => {
    setSavedJobs((prev) => {
      let updatedSavedJobs;
      if (prev.includes(jobId)) {
        updatedSavedJobs = prev.filter((id) => id !== jobId); // Unsave job
      } else {
        updatedSavedJobs = [...prev, jobId]; // Save job
      }
      localStorage.setItem('savedJobs', JSON.stringify(updatedSavedJobs));
      return updatedSavedJobs;
    });
    // Refetch jobs to update the list
    fetchJobs();
  }, [fetchJobs]);

  // Handle filter changes
  const handleCategoryChange = useCallback((category) => {
    setCategoryFilters((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  }, []);

  const handleJobTypeChange = useCallback((type) => {
    setJobTypeFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }, []);

  const handleExperienceChange = useCallback((level) => {
    setExperienceFilters((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  }, []);

  const handleDatePostedChange = useCallback((date) => {
    setDatePostedFilters((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  }, []);

  // Filter jobs based on user input
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesCategory =
        categoryFilters.length === 0 || categoryFilters.includes(job.category);

      const matchesJobType =
        jobTypeFilters.length === 0 ||
        jobTypeFilters.some((type) => job.type.includes(type.toUpperCase())) ||
        (jobTypeFilters.includes('All') && jobTypeFilters.length === 1);

      const matchesExperience =
        experienceFilters.length === 0 || experienceFilters.includes(job.experienceLevel);

      const matchesDatePosted = () => {
        if (datePostedFilters.length === 0 || datePostedFilters.includes('All')) return true;

        const postedDate = new Date(job.postedTime);
        const currentDate = new Date();
        const timeDiff = (currentDate - postedDate) / (1000 * 60 * 60);

        if (datePostedFilters.includes('Last Hour') && timeDiff <= 1) return true;
        if (datePostedFilters.includes('Last 24 Hours') && timeDiff <= 24) return true;
        if (datePostedFilters.includes('Last 7 Days') && timeDiff <= 7 * 24) return true;
        if (datePostedFilters.includes('Last 30 Days') && timeDiff <= 30 * 24) return true;
        return false;
      };

      const matchesSalary = () => {
        if (!job.salary.includes('INR')) return true;
        const salaryMin = parseFloat(job.salary.split(' - ')[0].replace('INR ', '').replace(',', '')) || 0;
        return salaryMin <= salaryRange;
      };

      return (
        matchesCategory &&
        matchesJobType &&
        matchesExperience &&
        matchesDatePosted() &&
        matchesSalary()
      );
    });
  }, [jobs, categoryFilters, jobTypeFilters, experienceFilters, datePostedFilters, salaryRange]);

  // Handle Apply Now button click
  const handleApply = (job) => {
    navigate('/Jobdetailspage', { state: { job } });
  };

  return (
    <div>
      <Header />
      <h1>
        <span className="savedjobs-heading">Saved</span>{' '}
        <span style={{ color: '#033E8A' }}>Jobs</span>
      </h1>
      {/* Main Content */}
      <section className="jpp-main-content" aria-label="Job Listings and Filters">
        {/* Left Sidebar (Filters) */}
        <aside className="jpp-sidebar" aria-label="Job Filters">
          <div className="jpp-filter-group">
            <h3>Category</h3>
            {categories.map((category) => (
              <label key={category.name} className="jpp-filter-checkbox">
                <input
                  type="checkbox"
                  checked={categoryFilters.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                  aria-label={`Filter by ${category.name}`}
                />
                <span className="jpp-filter-label">{category.name}</span>
                <span className="jpp-filter-count">({category.count})</span>
              </label>
            ))}
            <button className="jpp-show-more" aria-label="Show more categories">
              SHOW MORE
            </button>
          </div>
          <div className="jpp-filter-group">
            <h3>Job Type</h3>
            {jobTypes.map((type) => (
              <label key={type.name} className="jpp-filter-checkbox">
                <input
                  type="checkbox"
                  checked={jobTypeFilters.includes(type.name)}
                  onChange={() => handleJobTypeChange(type.name)}
                  aria-label={`Filter by ${type.name}`}
                />
                <span className="jpp-filter-label">{type.name}</span>
                <span className="jpp-filter-count">({type.count})</span>
              </label>
            ))}
          </div>
          <div className="jpp-filter-group">
            <h3>Experience Level</h3>
            {experienceLevels.map((level) => (
              <label key={level.name} className="jpp-filter-checkbox">
                <input
                  type="checkbox"
                  checked={experienceFilters.includes(level.name)}
                  onChange={() => handleExperienceChange(level.name)}
                  aria-label={`Filter by ${level.name}`}
                />
                <span className="jpp-filter-label">{level.name}</span>
                <span className="jpp-filter-count">({level.count})</span>
              </label>
            ))}
          </div>
          <div className="jpp-filter-group">
            <h3>Date Posted</h3>
            {datePosted.map((date) => (
              <label key={date.name} className="jpp-filter-checkbox">
                <input
                  type="checkbox"
                  checked={datePostedFilters.includes(date.name)}
                  onChange={() => handleDatePostedChange(date.name)}
                  aria-label={`Filter by ${date.name}`}
                />
                <span className="jpp-filter-label">{date.name}</span>
                <span className="jpp-filter-count">({date.count})</span>
              </label>
            ))}
          </div>
          <div className="jpp-filter-group">
            <h3>Salary Range</h3>
            <div className="jpp-salary-range">
              <span>20,000 INR</span>
              <input
                type="range"
                min="20000"
                max="120000"
                value={salaryRange}
                onChange={(e) => setSalaryRange(Number(e.target.value))}
                aria-label="Filter by salary range"
              />
              <span>120,000 INR</span>
            </div>
            <span className="jpp-salary-value">Salary: {salaryRange.toLocaleString()} INR</span>
            <button className="jpp-apply-button" aria-label="Apply salary filter">
              Apply
            </button>
          </div>
          <div className="jpp-filter-group">
            <h3>Tags</h3>
            <div className="jpp-tags">
              {tags.map((tag) => (
                <span key={tag} className="jpp-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <div className="jpp-job-listings" aria-label="Job Listings">
          {loading && <div className="jpp-loading-message">Loading jobs...</div>}
          {error && <div className="jpp-error-message">{error}</div>}
          {!loading && !error && filteredJobs.length === 0 && (
            <div className="jpp-no-jobs-message">No saved jobs found.</div>
          )}
          <div className="jpp-job-grid">
            {filteredJobs.map((job) => (
              <article key={job.id} className="jpp-job-card" aria-label={`Job: ${job.title}`}>
                <div className="jpp-job-card-header">
                  <div className="jpp-job-card-header-left">
                    <img
                      className="jpp-company-logo"
                      src={job.employer_logo_url}
                      alt={`${job.company} logo`}
                      onError={(e) => (e.target.src = '/imageswebsite/zomato.png')}
                    />
                    <p className="jpp-company-name">{job.company}</p>
                    <p className="jpp-posted-time">
                      {Math.floor((new Date() - new Date(job.postedTime)) / (1000 * 60 * 60 * 24))}{' '}
                      days ago
                    </p>
                  </div>
                  <button
                    className="jpp-save-button"
                    aria-label={savedJobs.includes(job.id) ? 'Unsave job' : 'Save job'}
                    onClick={() => handleSaveJob(job.id)}
                  >
                    <span>{savedJobs.includes(job.id) ? 'Saved' : 'Save'}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={savedJobs.includes(job.id) ? '#666666' : 'none'}
                      stroke="#666666"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>
                <h4 className="jpp-job-title">{job.title}</h4>
                <p className="jpp-job-description">{job.description}</p>
                <div className="jpp-job-type-description">
                  <span className="jpp-job-type">{job.type.join(', ')}</span>
                  <span className="jpp-job-type">{job.remoteType}</span>
                  <span className="jpp-job-type">{job.location}</span>
                </div>
                <hr className="jpp-divider" />
                <div className="jpp-job-footer">
                  <p className="jpp-job-salary">{job.salary}</p>
                  <div className="jpp-image-button-container">
                    <img
                      src="/imageswebsite/arrowhorizental.png"
                      alt="Apply arrow"
                      className="jpp-apply-arrow"
                    />
                    <button
                      className="jpp-apply-now-button"
                      aria-label="Apply now"
                      onClick={() => handleApply(job)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SavedJobs;