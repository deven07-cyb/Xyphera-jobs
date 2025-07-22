import React, { useState } from 'react';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerContactUs.css';

const SUBJECTS = [
  'General Inquiry',
  'Account Setup',
  'Job Posting',
  'Report an Issue'
];

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: SUBJECTS[0],
  message: ''
};

const EmployerContactUs = () => {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (e) => {
    setForm((prev) => ({ ...prev, subject: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm(INITIAL_FORM);
  };

  return (
    <div className="homepage-wrapper">
      <EmployerHeader />
      <h1 className="contactus-title">Contact Us</h1>
      <div className="contactus-container">
        <div className="contactus-card">
          {/* Left: Contact Info */}
          <div className="contactus-info-panel">
            <div className="contactus-info-header">
              <h2 className='headingtwo'>Contact Information</h2>
              <p>Say something to start a live chat!</p>
            </div>
            <div className="contactus-info-details">
              <div className="contactus-info-row">
                <span className="contactus-info-icon" aria-label="Phone">
                  <img src="/imageswebsite/Contactcall-02.png" alt="Phone Icon" />
                </span>
                <span>+91 7039429022</span>
              </div>
              <div className="contactus-info-row">
                <span className="contactus-info-icon" aria-label="Email">
                  <img src="/imageswebsite/Contactmail-01.png" alt="Email Icon" />
                </span>
                <span>logo@gmail.com</span>
              </div>
              <div className="contactus-info-row">
                <span className="contactus-info-icon" aria-label="Location">
                  <img src="/imageswebsite/Contactlocation-01 (1).png" alt="Location Icon" />
                </span>
                <span>
                  3 & 4, Sadarmangala Road, Kadugodi, Bengaluru, Karnataka 560066, India
                </span>
              </div>
            </div>
            <div className="contactus-social-row">
              <a href="https://facebook.com" className="contactus-social-icon" aria-label="Facebook">
                <img src="/imageswebsite/Contactfacebook.png" alt="Facebook Icon" />
              </a>
              <a href="https://telegram.org" className="contactus-social-icon" aria-label="Telegram">
                <img src="/imageswebsite/Contacttelegram.png" alt="Telegram Icon" />
              </a>
              <a href="mailto:logo@gmail.com" className="contactus-social-icon" aria-label="Email">
                <img src="/imageswebsite/ContactEmail.png" alt="Email Icon" />
              </a>
              <a href="https://x.com" className="contactus-social-icon" aria-label="X">
                <img src="/imageswebsite/Contactx.png" alt="X Icon" />
              </a>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form className="contactus-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="contactus-form-row">
              <div className="contactus-form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Add First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contactus-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Add Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contactus-form-row">
              <div className="contactus-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Add Email Id"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contactus-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Add Contact Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10,15}"
                  title="Please enter a valid phone number"
                />
              </div>
            </div>
            <div className="contactus-form-group">
              <label>Select Subject</label>
              <div className="contactus-subject-row">
                {SUBJECTS.map((subj) => (
                  <label key={subj} className="contactus-radio-label">
                    <input
                      type="radio"
                      name="subject"
                      value={subj}
                      checked={form.subject === subj}
                      onChange={handleSubjectChange}
                    />
                    {subj}
                  </label>
                ))}
              </div>
            </div>
            <div className="contactus-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message.."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button  style={{ width:"50%"}} type="submit" className="contactus-submit-btn">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerContactUs;