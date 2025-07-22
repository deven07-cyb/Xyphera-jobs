 import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerProfileSetup.css';

const EmployerProfileSetups = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    companyName: '',
    companyLocation: '',
    industry: '',
    teamSize: '',
    tagline: '',
    companyLogo: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    officeAddress: '',
    subscriptions: '',
    notifications: false,
    shortDescription: '',
    website: '',
    headquarters: '',
    foundationYear: '',
    preferredTime: '',
    password: '',
    manageNotifications: '',
    updatePassword: '',
    deleteAccount: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

   
  const token = localStorage.getItem('authToken');

  
  // Fetch employer details on component mount
  useEffect(() => {
    const fetchEmployerDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('http://107.22.99.147:8080/verified/get-employer-details', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Unauthorized: Please log in again or obtain a new token.');
          }
          throw new Error('Failed to fetch employer details');
        }

        const data = await response.json();
        setFormData({
          companyName: data.companyname || '',
          companyLocation: data.companylocation || '',
          industry: data.industry || '',
          teamSize: data.teamsize || '',
          tagline: data.tagline || '',
          companyLogo: data.companylogo || '',
          contactPerson: data.contactperson || '',
          contactEmail: data.contactemail || '',
          contactPhone: data.contactphone || '',
          officeAddress: data.officeaddress || '',
          subscriptions: data.subscriptions || '',
          notifications: data.notifications || false,
          shortDescription: '',
          website: '',
          headquarters: '',
          foundationYear: '',
          preferredTime: '',
          password: '',
          manageNotifications: '',
          updatePassword: '',
          deleteAccount: '',
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployerDetails();
  }, [token]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox change for notifications
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Since the API expects companyLogo as a string, store the file name
      setFormData((prevData) => ({
        ...prevData,
        companyLogo: file.name,
      }));
    }
  };

  // Handle form submission
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    const requiredFields = [
      'companyName',
      'companyLocation',
      'industry',
      'teamSize',
      'tagline',
      'contactPerson',
      'contactEmail',
      'contactPhone',
      'officeAddress',
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      setLoading(false);
      return;
    }

    const payload = {
      companyname: formData.companyName,
      companylocation: formData.companyLocation,
      industry: formData.industry,
      teamsize: parseInt(formData.teamSize, 10) || 0,
      tagline: formData.tagline,
      companylogo: formData.companyLogo,
      contactperson: formData.contactPerson,
      contactemail: formData.contactEmail,
      contactphone: formData.contactPhone,
      officeaddress: formData.officeAddress,
      subscriptions: formData.subscriptions || '{"newsletter":true,"plan":"premium"}',
      notifications: formData.notifications,
    };

    try {
      const response = await fetch('http://107.22.99.147:8080/verified/create-employer-details', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized: Please log in again or obtain a new token.');
        }
        throw new Error('Failed to save employer details');
      }

      const result = await response.json();
      setSuccess('Employer details saved successfully!');
      console.log('Save Response:', result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    navigate(-1);
  };

  // Handle back button
  const handleBack = () => navigate(-1);

  return (
    <div className="eps-profile-container">
      <EmployerHeader />

      <main className="eps-main-content">
        <div className="eps-heading-subheading">
          <div className="eps-back-button" onClick={handleBack}>
            <img style={{ marginRight: "10px" }} src="/imageswebsite/arrowleft.png" alt="back" />Back
          </div>
          <h1 className="eps-title">Profile Setup</h1>
        </div>
        <div className="eps-image-section">
          <div className="eps-image-placeholder"></div>
          <button type="button" className="eps-edit-button">
            <span className="eps-edit-icon">✎</span> Edit
          </button>
        </div>

        {loading && <div className="eps-loading">Loading...</div>}
        {error && <div className="eps-error">{error}</div>}
        {success && <div className="eps-success">{success}</div>}

        <section className="eps-section">
          <h2 className="eps-section-heading">1. Company Overview</h2>
          <div className="eps-form-group">
            <input
              type="text"
              name="companyName"
              className="eps-input"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="website"
              className="eps-input"
              placeholder="Website"
              value={formData.website}
              onChange={handleInputChange}
            />
          </div>
          <div className="eps-form-group">
            <select
              name="industry"
              className="eps-input"
              value={formData.industry}
              onChange={handleInputChange}
            >
              <option value="">Select Industry</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Healthcare">Healthcare</option>
            </select>
            <select
              name="companyLocation"
              className="eps-input"
              value={formData.companyLocation}
              onChange={handleInputChange}
            >
              <option value="">Select Location</option>
              <option value="bengaluru">Bengaluru</option>
              <option value="mumbai">Mumbai</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div className="eps-form-group">
            <input
              type="text"
              name="headquarters"
              className="eps-input"
              placeholder="Headquarters"
              value={formData.headquarters}
              onChange={handleInputChange}
            />
            <select
              name="teamSize"
              className="eps-input"
              value={formData.teamSize}
              onChange={handleInputChange}
            >
              <option value="">Select Team Size</option>
              <option value="1">1-5</option>
              <option value="6">6-10</option>
              <option value="11">11-50</option>
            </select>
          </div>
          <div className="eps-form-group">
            <input
              type="text"
              name="tagline"
              className="eps-input"
              placeholder="Tagline"
              value={formData.tagline}
              onChange={handleInputChange}
            />
            <select
              name="foundationYear"
              className="eps-input"
              value={formData.foundationYear}
              onChange={handleInputChange}
            >
              <option value="">Select Year</option>
              {[...Array(50)].map((_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="eps-form-group">
            <select
              name="preferredTime"
              className="eps-input"
              value={formData.preferredTime}
              onChange={handleInputChange}
            >
              <option value="">Select Preferred Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
            <div className="eps-form-group eps-resume-group">
              <input
                type="text"
                className="eps-input"
                placeholder="Upload/Change Logo"
                value={formData.companyLogo}
                disabled
              />
              <label className="eps-upload-button">
                +
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
          </div>
          <div className="eps-form-group eps-single-input">
            <textarea
              name="shortDescription"
              className="eps-textarea"
              placeholder="Short Description"
              value={formData.shortDescription}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section className="eps-section">
          <h2 className="eps-section-heading">2. Contact Information</h2>
          <div className="eps-form-group">
            <input
              type="email"
              name="contactEmail"
              className="eps-input"
              placeholder="Email ID"
              value={formData.contactEmail}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="contactPhone"
              className="eps-input"
              placeholder="Phone Number"
              value={formData.contactPhone}
              onChange={handleInputChange}
            />
          </div>
          <div className="eps-form-group">
            <input
              type="text"
              name="officeAddress"
              className="eps-input"
              placeholder="Office Address"
              value={formData.officeAddress}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              className="eps-input"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="eps-form-group">
            <input
              type="text"
              name="contactPerson"
              className="eps-input"
              placeholder="Contact Person"
              value={formData.contactPerson}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section className="eps-section">
          <h2 className="eps-section-heading">3. Account Settings & Preferences</h2>
          <div className="eps-form-group">
            <div className="eps-form-group eps-single-input">
              <label>
                <input
                  type="checkbox"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleCheckboxChange}
                />
                Enable Notifications
              </label>
            </div>
            <input
              type="text"
              name="subscriptions"
              className="eps-input"
              placeholder='Subscriptions (e.g., {"newsletter":true,"plan":"premium"})'
              value={formData.subscriptions}
              onChange={handleInputChange}
            />
          </div>
          <div className="eps-form-group">
            <input
              type="password"
              name="updatePassword"
              className="eps-input"
              placeholder="Update Password"
              value={formData.updatePassword}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="deleteAccount"
              className="eps-input"
              placeholder="Delete Account"
              value={formData.deleteAccount}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <div className="eps-action-buttons">
          <button
            type="button"
            className="eps-cancel-button"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="button"
            className="eps-save-button"
            onClick={handleSaveChanges}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmployerProfileSetups;