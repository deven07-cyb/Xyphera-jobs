 

// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../ReusableComponents/Header';
// import Footer from '../../ReusableComponents/Footer';
// import './JobsPage.css';

// const JobsPage = () => {
//   // State for filters
//   const [searchQuery, setSearchQuery] = useState('');
//   const [location, setLocation] = useState('');
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
//       const matchesSearchQuery =
//         !searchQuery ||
//         job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         job.company.toLowerCase().includes(searchQuery.toLowerCase());

//       const matchesLocation =
//         !location || job.location.toLowerCase().includes(location.toLowerCase());

//       const matchesCategory =
//         categoryFilters.length === 0 || categoryFilters.includes(job.category);

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
//         matchesSearchQuery &&
//         matchesLocation &&
//         matchesCategory &&
//         matchesJobType &&
//         matchesExperience &&
//         matchesDatePosted() &&
//         matchesSalary()
//       );
//     });
//   }, [jobs, searchQuery, location, categoryFilters, jobTypeFilters, experienceFilters, datePostedFilters, salaryRange]);

//   // Handle Apply Now button click
//   const handleApply = (job) => {
//     navigate('/Jobdetailspage', { state: { job } });
//   };

//   return (
//     <div className="jpp-jobs-page-container">
//       <Header />
//       {/* Search and Filter Section */}
//       <section className="jpp-search-filter-section" aria-label="Job Search and Filters">
//         <div className="jpp-search-bar">
//           <div className="jpp-search-input-wrapper">
//             <span className="jpp-search-icon" aria-hidden="true">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#666666"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="11" cy="11" r="8" />
//                 <line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//             </span>
//             <input
//               type="text"
//               className="jpp-search-input"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search by job title or company"
//               aria-label="Search jobs"
//             />
//             {searchQuery && (
//               <span
//                 className="jpp-clear-icon"
//                 onClick={() => setSearchQuery('')}
//                 role="button"
//                 aria-label="Clear search query"
//                 tabIndex={0}
//                 onKeyDown={(e) => e.key === 'Enter' && setSearchQuery('')}
//               >
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#666666"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18" />
//                   <line x1="6" y1="6" x2="18" y2="18" />
//                 </svg>
//               </span>
//             )}
//           </div>
//           <span className="jpp-separator" aria-hidden="true">|</span>
//           <div className="jpp-location-input-wrapper">
//             <span className="jpp-location-icon" aria-hidden="true">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#666666"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
//               </svg>
//             </span>
//             <input
//               type="text"
//               className="jpp-location-input"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Enter location"
//               aria-label="Filter by location"
//             />
//             {location && (
//               <span
//                 className="jpp-clear-icon"
//                 onClick={() => setLocation('')}
//                 role="button"
//                 aria-label="Clear location filter"
//                 tabIndex={0}
//                 onKeyDown={(e) => e.key === 'Enter' && setLocation('')}
//               >
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#666666"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18" />
//                   <line x1="6" y1="6" x2="18" y2="18" />
//                 </svg>
//               </span>
//             )}
//           </div>
//           <button
//             className="jpp-search-button"
//             aria-label="Search jobs"
//             onClick={fetchJobs}
//           >
//             SEARCH
//           </button>
//         </div>
//       </section>

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
  
// export default JobsPage; 



import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './JobsPage.css';

const JobsPage = () => {
  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
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

      const mappedJobs = jobsArray.map((job) => ({
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
  }, [baseCategories, baseJobTypes, baseExperienceLevels, baseDatePosted]);

  useEffect( () => {
    fetchJobs();
  }, [fetchJobs]);

  // Handle save job
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
  }, []);

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
      const matchesSearchQuery =
        !searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        !location || job.location.toLowerCase().includes(location.toLowerCase());

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
        matchesSearchQuery &&
        matchesLocation &&
        matchesCategory &&
        matchesJobType &&
        matchesExperience &&
        matchesDatePosted() &&
        matchesSalary()
      );
    });
  }, [jobs, searchQuery, location, categoryFilters, jobTypeFilters, experienceFilters, datePostedFilters, salaryRange]);

  // Handle Apply Now button click
  const handleApply = (job) => {
    navigate('/Jobdetailspage', { state: { job } });
  };

  return (
    <div className="jpp-jobs-page-container">
      <Header />
      {/* Search and Filter Section */}
      <section className="jpp-search-filter-section" aria-label="Job Search and Filters">
        <div className="jpp-search-bar">
          <div className="jpp-search-input-wrapper">
            <span className="jpp-search-icon" aria-hidden="true">
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
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              className="jpp-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title or company"
              aria-label="Search jobs"
            />
            {searchQuery && (
              <span
                className="jpp-clear-icon"
                onClick={() => setSearchQuery('')}
                role="button"
                aria-label="Clear search query"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSearchQuery('')}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            )}
          </div>
          <span className="jpp-separator" aria-hidden="true">|</span>
          <div className="jpp-location-input-wrapper">
            <span className="jpp-location-icon" aria-hidden="true">
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
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </span>
            <input
              type="text"
              className="jpp-location-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              aria-label="Filter by location"
            />
            {location && (
              <span
                className="jpp-clear-icon"
                onClick={() => setLocation('')}
                role="button"
                aria-label="Clear location filter"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLocation('')}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            )}
          </div>
          <button
            className="jpp-search-button"
            aria-label="Search jobs"
            onClick={fetchJobs}
          >
            SEARCH
          </button>
        </div>
      </section>

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
            <div className="jpp-no-jobs-message">No jobs found matching your criteria.</div>
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

export default JobsPage;