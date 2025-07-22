import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ApplicationReviewPage.css';

const ApplicationReviewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { job } = location.state || {};

  // State for form fields
  const [fullName, setFullName] = useState(''); // In a real app, this would be pre-filled from user profile
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  // Handle edit navigation (e.g., to ProfilePage to edit contact info)
  const handleEdit = () => {
    navigate('/profile');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !contactNumber || !resumeFile) {
      alert('Please fill in all fields and upload a resume.');
      return;
    }
    alert('Application submitted successfully!');
    navigate('/jobs'); // Navigate back to JobsPage after submission
  };

  return (
    <div className="application-review-page-container">
      {/* Job Summary Section */}
      <section className="job-summary">
        <div className="job-summary-content">
          <h2>Looking for {job?.title || 'Delivery Boy'} Position</h2>
          <p className="company-name">At Company Name</p>
          <div className="job-details">
            <div className="job-detail-item">
              <span className="icon location-icon">
                 <img src="/imageswebsite/locationicon appreviewpage.png" alt="llocation" />
              </span>
              <span>Whitefield, Bangalore</span>
            </div>
            <div className="job-detail-item">
              <span className="icon experience-icon">
              <img src="/imageswebsite/jobbagicon appreviwpage.png" alt="llocation" />
              </span>
              <span>0-1 Year</span>
            </div>
            <div className="job-detail-item">
              <span className="icon salary-icon">
              <img src="/imageswebsite/purseicon appreviwpage.png" alt="llocation" />
              </span>
              <span>₹ {job?.salary || '25000/Month'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Application Review Form */}
      <section className="application-review-content">
        <h1>Please Review Your Application</h1>

        <div className="contact-info-section">
          <div className="section-header">
            <h3>Contact Information</h3>
            <button className="edit-button" onClick={handleEdit}>Edit</button>
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email id</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email id"
            />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="Contact Number"
            />
          </div>
        </div>

        <div className="resume-section">
          <h3>Resume</h3>
          <div className="resume-upload">
            {resumeFile ? (
              <div className="uploaded-file">
                <span className="file-icon">
                  <img src="/imageswebsite/pdficon appreviewpage.png" alt="adficon"/>
                </span>
                <span>{resumeFile.name}</span>
                <span className="file-size">{Math.round(resumeFile.size / 1024)} KB</span>
                <span className="delete-icon" onClick={() => setResumeFile(null)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                  </svg>
                </span>
              </div>
            ) : (
              <input type="file" accept=".pdf" onChange={handleFileChange} />
            )}
            {resumeFile && <div className="progress-bar"></div>}
          </div>
        </div>

        <div className="submit-section">
          <button className="submit-button" onClick={handleSubmit}>SUBMIT APPLICATION</button>
        </div>
      </section>
    </div>
  );
};

export default ApplicationReviewPage;