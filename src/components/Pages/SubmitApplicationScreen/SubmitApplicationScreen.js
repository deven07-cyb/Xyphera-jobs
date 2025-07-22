 import React from 'react';
import Footer from '../ReusableComponents/Footer';
import './SubmitApplicationScreen.css';

// SVG for PDF icon
const PdfIcon = () => (
  <img src="/imageswebsite/pdficonimage.png" alt="pdf" style={{ width: '24px', height: '24px' }} />
);

// SVG for Edit icon
const EditIcon = () => (
  <img className="delete" src="/imageswebsite/editicon.png" alt="edit" style={{ width: '24px', height: '24px' }} />
);

const SubmitApplicationScreen = () => {
  return (
    <div className="application-container">
      <div className="application-content">
        <div className="application-form-container">
          <h1 className="application-heading">Please Review Your Application</h1>
          <div className="contact-info-section">
            <div className="contact-info-header">
              <h2 className="contact-info-title">Contact Information</h2>
              <button className="edit-button">
                {/* <EditIcon /> */}
                <span className="edit-label">Edit</span>
              </button>
            </div>
            <div className="form-field">
              <input
                style={{
                  border: 'none',
                  borderBottom: '2px solid #D9D9D9',
                  background: 'none',
                  width: '50%',
                  textAlign: 'start',
                }}
                type="text"
                className="form-input"
                placeholder="Full Name"
                readOnly
              />
            </div>
            <div className="form-field">
              <input
                style={{
                  border: 'none',
                  borderBottom: '2px solid #D9D9D9',
                  background: 'none',
                  width: '50%',
                  textAlign: 'start',
                }}
                type="email"
                className="form-input"
                placeholder="Email Id"
                readOnly
              />
            </div>
            <div className="form-field">
              <input
                style={{
                  border: 'none',
                  borderBottom: '2px solid #D9D9D9',
                  background: 'none',
                  width: '50%',
                  textAlign: ' start',
                }}
                type="tel"
                className="form-input"
                placeholder="Contact Number"
                readOnly
              />
            </div>
          </div>
          <div className="resume-section-one">
            <h2 className="resume-title">Resume</h2>
            <div className="resume-upload">
              
              <div className="resume-details">

                 <PdfIcon />
                 <div className='my-cv'>
                     <span className="resume-file-name">my-cv.pdf</span>
                <span className="resume-file-size">120 KB</span>
                 </div>
                 
              </div>
              <EditIcon />
            </div>
            <div className="divider-line"></div>
            <div className="submit-button-container">
              <button className="submit-application-button">Submit Application</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitApplicationScreen;