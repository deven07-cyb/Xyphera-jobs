import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerJobOverview.css';
import Header from '../../Pages/ReusableComponents/Header';
import { useNavigate } from 'react-router-dom';


const EmployerJobOverview = () => {
  const { jobId } = useParams();
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch(`http://127.0.0.1:5000/api/v1/jobs/overview/${jobId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();

        setOverview(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchJobs();
  }, [jobId]);


  const handleViewCandidate = (id) => {
    navigate(`/EmployerCandidateProfile/${id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (!overview) return <div>No job found for ID: {jobId}</div>;

  return (
    <div className="homepage-wrapper">
      <Header />
      <div className="job-portal-bg">
        <div className="job-overview-header">
          <button className="back-btn-one">
            <FiArrowLeft style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Back
          </button>
          <h1 className="job-overview-title">Job Overview</h1>
        </div>
        <div className="job-portal-main-container">
          <div className="job-portal-content">
            <div className="job-details-section">
              <div className="job-header-row">
                <div className="job-avatar">
                  <img src={`http://127.0.0.1:5000/${overview.company_logo}`} alt="avatar" />
                </div>
                <div>
                  <div className="spanicondtadiv">
                    <h2 className="job-title">{overview.title}</h2>
                    <h2 className="job-title-one">({overview.employment_type})</h2>
                  </div>
                  <div className="company">{overview.company_name}</div>
                  <div className="salary">₹{overview.salary_min} - ₹{overview.salary_max}</div>
                </div>
              </div>
              <div className="job-summary">{overview.responsibilities || "No summary available"}</div>

              <div className="skills-section">
                <div className="skills-label">Skills</div>
                <div className="skills-list">
                  {overview.skills && overview.skills.length > 0 ? (
                    overview.skills.map((skill, idx) => (
                      <span className="skill-pill" key={idx}>
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span>No skills listed</span>
                  )}
                </div>
              </div>

              <div className="desc-section">
                <div className="desc-label">Description</div>
                <div className="desc-paragraphs">
                  <p>{overview.description || "No description available"}</p>
                </div>
              </div>
            </div>

            <div className="top-applicants-sidebar-wrapper">
              <button className="edit-btn">
                <img src="/imageswebsite/pencil-edit-02.png" alt="edit" />
                Edit
              </button>
              <div className="top-applicants-sidebar">
                <div className="top-applicants-title">Top Applicants</div>
                <div className="top-applicants-list">
                  {overview.top_applicants.map((applicant, idx) => (
                    <div className="top-applicant-card" key={idx} onClick={() => handleViewCandidate(applicant.id)}>
                      <div>
                        {applicant.profile_image !== "" && (
                          <img
                            src={
                              "http://127.0.0.1:5000/" + (applicant.profile_image || '').replace(/\\/g, '/')
                            }
                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                            alt="avatar"
                          />
                        )}
                        {applicant.profile_image === "" && (
                          <img
                            src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                            alt="avatar"
                          />
                        )}
                      </div>
                      <div className="top-applicant-info">
                        <div className="applicant-name">{applicant.name}</div>
                        <div className="applicant-exp">{applicant.experience} Years of Experience</div>
                      </div>
                      <div>
                        <img src="/imageswebsite/Employerprofiletickimage.png" alt="tick" style={{ width: '20px', height: '20px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="applicants-section">
            <h2 className="applicants-section-title">List Of Applicants</h2>
            <div className="search-bar-row">
              <div className="search-bar-container">
                <img src="/imageswebsite/search-01.png" alt="search" className="search-icon" />
                <input
                  style={{ background: "none" }}
                  type="text"
                  name="search"
                  id="search"
                  className="search-input"
                  placeholder="Search applications by job type, skills, location..."
                />
                <select className="search-select">
                  <option value="all">All</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                  <option value="carpenter">Carpenter</option>
                </select>
              </div>
            </div>

            <div className="applicants-grid">
              {overview.remaining_applicants.map((applicant, idx) => (
                <div className="applicant-card" key={idx}>
                  <div className="applicant-card-avatars-image">
                    <div className="applicant-card-avatar-row">
                      <div className="applicant-card-avatar">
                        {/* <img
                          className="imagedrop"
                          src="/imageswebsite/Employerprofiletickimage.png"
                          alt="tick"
                        /> */}
                        {applicant.profile_image !== "" && (
                          <img
                            src={
                              "http://127.0.0.1:5000/" + (applicant.profile_image || '').replace(/\\/g, '/')
                            }
                            className="imagedrop"
                            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                            alt="avatar"
                          />
                        )}
                        {applicant.profile_image === "" && (
                          <img
                            src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
                            className="imagedrop"
                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                            alt="avatar"
                          />
                        )}

                      </div>
                    </div>
                    <div className="applicant-card-name">{applicant.name}</div>
                    <div className="applicant-card-exp">{applicant.experience} Years of Experience</div>
                  </div>
                  <div className="applicant-card-info">
                    <div>
                      <span className="applicant-card-label">Job Role</span>
                      <span className="applicant-card-value">{applicant.role}</span>
                    </div>
                    <div>
                      <span className="applicant-card-label">Key Skills</span>
                      <span className="applicant-card-value">{applicant.skills}</span>
                    </div>
                    <div>
                      <span className="applicant-card-label">Availability</span>
                      <span className="applicant-card-value">Testing Availability Now</span>
                    </div>
                    <button className="tata" onClick={() => handleViewCandidate(applicant.id)}>
                      View Profile
                      <img src="/imageswebsite/fi_arrow-right.png" alt="arrow" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerJobOverview;
