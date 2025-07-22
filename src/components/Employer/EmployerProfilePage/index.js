import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerProfilePage.css';
import EmployerHeader from './../EmployerReusablecomponents/EmployerHeader/index';

const EmployerProfilePage = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    category: '',
    location: '',
    address: '',
    qualification: '',
    whatsappNumber: '',
    bio: '',
    email: '',
    phoneNumber: '',
    officeAddress: '',
    password: '',
    manageNotifications: '',
    subscriptions: '',
    updatePassword: '',
    deleteAccount: '',
  });

  // State to manage the uploaded resume file
  const [resumeFile, setResumeFile] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  // Handle form submission
  const handleSaveChanges = () => {
    console.log('Form Data:', formData);
    console.log('Uploaded Resume:', resumeFile);
    // Add your save logic here (e.g., API call)
  };

  // Handle cancel action
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Handle back button
  const handleBack = () => navigate(-1);

  return (
    <div className="ps-profile-setup-container">
      <EmployerHeader />

      {/* Main Content */}
      <main className="ps-profile-main">
        <div className="ps-container-heading-subheading">
          <div className="ps-back-button" onClick={handleBack}>
            ← Back
          </div>
          <h1 className="ps-profile-title">Profile Setup</h1>
        </div>
        <div className="ps-profile-image-section">
          <div className="ps-profile-image-placeholder"></div>
          <button className="ps-edit-profile-button">
            <span className="ps-edit-icon">✎</span> Edit
          </button>
        </div>

        {/* Section 1: Basic Details */}
        <section className="ps-profile-section">
          <h2 className="ps-section-heading">1. Basic Details</h2>
          <div className="ps-form-group">
            <input
              type="text"
              name="firstName"
              className="ps-form-input"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              className="ps-form-input"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="ps-form-group">
            <input
              type="text"
              name="category"
              className="ps-form-input"
              placeholder="Category"
              value={formData.category}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              className="ps-form-input"
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="ps-form-group">
            <input
              type="text"
              name="address"
              className="ps-form-input"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="qualification"
              className="ps-form-input"
              placeholder="Qualification"
              value={formData.qualification}
              onChange={handleInputChange}
            />
          </div>
          <div className="ps-form-group ps-single-input">
            <input
              type="text"
              name="whatsappNumber"
              className="ps-form-input"
              placeholder="Phone Number"
              value={formData.whatsappNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="ps-form-group ps-resume-group">
            <input
              type="text"
              className="ps-form-input"
              placeholder="Upload Resume"
              value={resumeFile ? resumeFile.name : ''}
              disabled
            />
            <label className="ps-upload-button">
              +
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          <div className="ps-form-group ps-single-input">
            <textarea
              name="bio"
              className="ps-form-textarea"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </section>

        {/* Section 2: Contact Information */}
        <section className="ps-profile-section">
          <h2 className="ps-section-heading">2. Contact Information</h2>
          <div className="ps-form-group">
            <input
              type="email"
              name="email"
              className="ps-form-input"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="phoneNumber"
              className="ps-form-input"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="ps-form-group">
            <input
              type="text"
              name="officeAddress"
              className="ps-form-input"
              placeholder="Office Address"
              value={formData.officeAddress}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              className="ps-form-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Section 3: Account Settings & Preferences */}
        <section className="ps-profile-section">
          <h2 className="ps-section-heading">3. Account Settings & Preferences</h2>
          <div className="ps-form-group">
            <input
              type="text"
              name="manageNotifications"
              className="ps-form-input"
              placeholder="Manage Notifications"
              value={formData.manageNotifications}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="subscriptions"
              className="ps-form-input"
              placeholder="Subscriptions"
              value={formData.subscriptions}
              onChange={handleInputChange}
            />
          </div>
          <div className="ps-form-group">
            <input
              type="text"
              name="updatePassword"
              className="ps-form-input"
              placeholder="Update Password"
              value={formData.updatePassword}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="deleteAccount"
              className="ps-form-input"
              placeholder="Delete Account"
              value={formData.deleteAccount}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Action Buttons */}
        <div className="ps-action-buttons">
          <button className="ps-cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="ps-save-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmployerProfilePage;