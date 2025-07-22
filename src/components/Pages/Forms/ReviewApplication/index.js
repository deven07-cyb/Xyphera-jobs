import React from 'react';
import './ReviewApplication.css';

// SVG Icon for the PDF file
const PdfIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 18V18.01" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 18V18.01" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 18V18.01" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// SVG Icon for the download button
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 10L12 15L17 10" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V3" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReviewApplication = () => {
  // Sample data for the form fields
  const applicationData = {
    fullName: 'Sudhir Kumar',
    email: 'sudhirkumar555@gmail.com',
    contactNumber: '+91 6058058043',
    resume: {
      name: 'my-cv.pdf',
      size: '120 KB',
    },
  };

  return (
    <div className="review-application-container">
      {/* Header */}
      <div className="review-application-header">
        <h2>Please Review Your Application</h2>
      </div>

      {/* Contact Information */}
      <div className="contact-info-section">
        <div className="section-header">
          <h3>Contact Information</h3>
          <a href="datta" className="edit-link">Edit</a>
        </div>
        <div className="form-field">
          <label>Full Name</label>
          <input type="text" value={applicationData.fullName} readOnly />
        </div>
        <div className="form-field">
          <label>Email ID</label>
          <input type="email" value={applicationData.email} readOnly />
        </div>
        <div className="form-field">
          <label>Contact Number</label>
          <input type="tel" value={applicationData.contactNumber} readOnly />
        </div>
      </div>

      {/* Resume */}
      <div className="resume-section">
        <div className="file-info">
          <PdfIcon />
          <div className="file-details">
            <p className="file-name">{applicationData.resume.name}</p>
            <p className="file-size">{applicationData.resume.size}</p>
          </div>
        </div>
        <button className="download-btn">
          <DownloadIcon />
        </button>
      </div>

      {/* Submit Button */}
      <div className="submit-btn-container">
        <button className="submit-btn">Submit Application</button>
      </div>
    </div>
  );
};

export default ReviewApplication;