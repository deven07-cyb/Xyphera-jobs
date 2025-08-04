import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './savejobs.css';

const SavedJobs = () => {
  // State for filters - removed unused search and location states
  // const [categoryFilters, setCategoryFilters] = useState([]);
  const [jobTypeFilters, setJobTypeFilters] = useState([]);
  // const [experienceFilters, setExperienceFilters] = useState([]);
  const [datePostedFilters, setDatePostedFilters] = useState([]);
  const [salaryRange, setSalaryRange] = useState(70000);

  // State for fetched jobs and filter counts
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // const [categories, setCategories] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  // const [experienceLevels, setExperienceLevels] = useState([]);
  const [datePosted, setDatePosted] = useState([]);

  const navigate = useNavigate();

  // Memoized base filter options

  const baseJobTypes = useMemo(
    () => [
      'All',
      'Full Time',
      'Part Time',
      'Contract',
      'Freelance',
    ],
    []
  );


  const baseDatePosted = useMemo(
    () => [
      'All',
      'Last 24 Hours',
      'Last 7 Days',
      'Last 30 Days',
    ],
    []
  );

  // Removed tags array as it's not being used functionally

  // Fetch jobs from API and calculate filter counts
  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('authToken');
    const headers = { 'Content-Type': 'application/json' };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/v1/jobs/saved/${localStorage.getItem('user_id')}`, {
        method: 'GET',
        headers: headers
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch jobs: ${response.statusText}`);
      }

      const { jobs: jobsArray = [] } = await response.json();

      const mappedJobs = jobsArray.map((job) => {
        let logoUrl = '/imageswebsite/default-logo.png';
        if (job.company_logo_path) {
          logoUrl = `http://127.0.0.1:5000/${job.company_logo_path.replace(/\\/g, '/')}`;
        }

        return {
          id: job.job_id,
          company: job.company_name || 'Unknown Company',
          title: job.title || 'Untitled Job',
          description: job.description || 'No description available.',
          type: [job.employment_type.replace('-', ' ').toUpperCase()],
          salary_min: job.salary_min ? parseFloat(job.salary_min) : 0,
          salary_max: job.salary_max ? parseFloat(job.salary_max) : 0,
          postedTime: job.posted_at || new Date().toISOString(),
          remoteType: job.remote_type
            ? job.remote_type.replace('_', ' ').charAt(0).toUpperCase() + job.remote_type.replace('_', ' ').slice(1)
            : 'Onsite',
          employer_logo_url: logoUrl,
          saved_job_id: job.saved_job_id,
        };
      });

      // Calculate filter counts
      // const categoryCounts = baseCategories.map((name) => ({
      //   name,
      //   count: mappedJobs.filter((job) => job.category === name).length,
      // }));

      const jobTypeCounts = baseJobTypes.map((name) => ({
        name,
        count:
          name === 'All'
            ? mappedJobs.length
            : mappedJobs.filter((job) => job.type.includes(name.toUpperCase())).length,
      }));

      // const experienceCounts = baseExperienceLevels.map((name) => ({
      //   name,
      //   count: mappedJobs.filter((job) => job.experienceLevel === name).length,
      // }));

      const datePostedCounts = baseDatePosted.map((name) => {
        if (name === 'All') return { name, count: mappedJobs.length };

        const currentDate = new Date();
        return {
          name,
          count: mappedJobs.filter((job) => {
            const postedDate = new Date(job.postedTime);
            const timeDiff = (currentDate - postedDate) / (1000 * 60 * 60);
            if (name === 'Last 24 Hours' && timeDiff <= 24) return true;
            if (name === 'Last 7 Days' && timeDiff <= 7 * 24) return true;
            if (name === 'Last 30 Days' && timeDiff <= 30 * 24) return true;
            return false;
          }).length,
        };
      });

      // setCategories(categoryCounts);
      setJobTypes(jobTypeCounts);
      // setExperienceLevels(experienceCounts);
      setDatePosted(datePostedCounts);
      setJobs(mappedJobs);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching jobs.');
      setJobs([]);
      // setCategories(baseCategories.map((name) => ({ name, count: 0 })));
      setJobTypes(baseJobTypes.map((name) => ({ name, count: 0 })));
      // setExperienceLevels(baseExperienceLevels.map((name) => ({ name, count: 0 })));
      setDatePosted(baseDatePosted.map((name) => ({ name, count: 0 })));
    } finally {
      setLoading(false);
    }
  }, [baseJobTypes, baseDatePosted]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  // Handle unsave job (remove from saved jobs)
  const handleUnsaveJob = useCallback(async (savedJobId) => {
    console.log('Unsaving job with ID:', savedJobId);
  }, []);

  // Handle filter changes
  // const handleCategoryChange = useCallback((category) => {
  //   setCategoryFilters((prev) =>
  //     prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
  //   );
  // }, []);

  const handleJobTypeChange = useCallback((type) => {
    setJobTypeFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }, []);

  // const handleExperienceChange = useCallback((level) => {
  //   setExperienceFilters((prev) =>
  //     prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
  //   );
  // }, []);

  const handleDatePostedChange = useCallback((date) => {
    setDatePostedFilters((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  }, []);

  // Filter jobs based on selected filters
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // const matchesCategory =
      //   categoryFilters.length === 0 || categoryFilters.includes(job.category);

      const matchesJobType =
        jobTypeFilters.length === 0 ||
        jobTypeFilters.some((type) => job.type.includes(type.toUpperCase())) ||
        (jobTypeFilters.includes('All') && jobTypeFilters.length === 1);

      // const matchesExperience =
      //   experienceFilters.length === 0 || experienceFilters.includes(job.experienceLevel);

      const matchesDatePosted = () => {
        if (datePostedFilters.length === 0 || datePostedFilters.includes('All')) return true;

        const postedDate = new Date(job.postedTime);
        const currentDate = new Date();
        const timeDiff = (currentDate - postedDate) / (1000 * 60 * 60);

        if (datePostedFilters.includes('Last 24 Hours') && timeDiff <= 24) return true;
        if (datePostedFilters.includes('Last 7 Days') && timeDiff <= 7 * 24) return true;
        if (datePostedFilters.includes('Last 30 Days') && timeDiff <= 30 * 24) return true;
        return false;
      };

      const matchesSalary = () => {
        if (job.salary_min === 0) return true;
        return job.salary_min <= salaryRange || (job.salary_max > 0 && job.salary_max >= salaryRange);
      };

      return (
        matchesJobType &&
        matchesDatePosted() &&
        matchesSalary()
      );
    });
  }, [jobs, jobTypeFilters, datePostedFilters, salaryRange]);

  // Handle Apply Now button click
  const handleApply = (job) => {
    navigate('/Jobdetailspage', { state: { job } });
  };

  return (
    <div className="homepage-wrapper">
      <Header />
      {loading && (
        <div className="jpp-fullscreen-loader">
          <div className="jpp-loader-backdrop" />
          <div className="jpp-loader-container">
            <div className="jpp-spinner" />
            <p className="jpp-loader-text">Loading saved jobs...</p>
          </div>
        </div>
      )}
      <div className='jpp-jobs-page-container'>
        <h1 style={{marginTop:"50px"}}>Saved <span style={{color:"#033E8A"}}>Jobs</span></h1>

        {/* Main Content */}
        <section className="jpp-main-content" aria-label="Saved Job Listings and Filters">
          {/* Left Sidebar (Filters) */}
          <aside className="jpp-sidebar" aria-label="Job Filters">
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
                <span>1,000</span>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  value={salaryRange}
                  onChange={(e) => setSalaryRange(Number(e.target.value))}
                  aria-label="Filter by salary range"
                />
                <span>20,000</span>
              </div>
              <span className="jpp-salary-value">Salary: ₹{salaryRange.toLocaleString()}</span>
            </div>
          </aside>

          {/* Job Listings */}
          <div className="jpp-job-listings" aria-label="Saved Job Listings">
            {loading && <div className="jpp-loading-message">Loading saved jobs...</div>}
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
                    </div>
                    <button
                      className="jpp-save-button"
                      aria-label="Remove from saved jobs"
                      onClick={() => handleUnsaveJob(job.saved_job_id)}
                      style={{ color: '#666666' }}
                    >
                      <span>Saved</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#666666"
                        stroke="#666666"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="jpp-company-name">{job.company}</span>
                    <span className="jpp-posted-time">
                      {Math.floor((new Date() - new Date(job.postedTime)) / (1000 * 60 * 60 * 24))}{' '}
                      days ago
                    </span>
                  </div>
                  
                  <p className="jpp-job-description">{job.description}</p>
                  <h4 className="jpp-job-title">{job.title}</h4>
                  
                  <div className="jpp-job-type-description">
                    <span className="jpp-job-type">{job.type.join(', ')}</span>
                    <span className="jpp-job-type">{job.remoteType}</span>
                  </div>
                  
                  <hr className="jpp-divider" />
                  
                  <div className="jpp-job-footer">
                    <p className="jpp-job-salary" style={{ marginBottom: '5px' }}>
                      ₹{job.salary_min} - ₹{job.salary_max}/month
                    </p>
                  </div>
                  
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
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SavedJobs;