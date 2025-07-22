 import React, { useState } from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './MessagesPage.css';

// SVG Icons
const ExpandIcon = () => (
  <svg className="msg-expand-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 3H21V9" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 21H3V15" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 3L14 10" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21L10 14" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmojiIcon = () => (
  <svg className="msg-emoji-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 9H9.01" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 9H15.01" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AttachmentIcon = () => (
  <svg className="msg-attachment-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.44 11.05L12.25 20.24C10.66 21.83 8.04 21.83 6.46 20.24C4.87 18.65 4.87 16.03 6.46 14.44L15.65 5.25C16.45 4.45 17.71 4.45 18.51 5.25C19.31 6.05 19.31 7.31 18.51 8.11L9.32 17.3C8.92 17.7 8.29 17.7 7.89 17.3C7.49 16.9 7.49 16.27 7.89 15.87L15.65 8.11" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DeleteIcon = () => (
  <svg className="msg-delete-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H5H21" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MoreOptionsIcon = () => (
  <svg className="msg-more-options-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 19.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#033E8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MessagesPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('Sudhir Kumar');
  const [messages, setMessages] = useState([
    {
      sender: 'Sudhir Kumar',
      content: `Dear Rudra,

Thank you for your interest in the Delivery Boy position at [Company Name] and for submitting your application. We have received your resume and cover letter and are currently reviewing all applications. We were particularly interested in your experience of "one year of delivery experience in the local area," or "your familiarity with using delivery applications"]. We are looking for a reliable and efficient individual to join our team, and we will carefully consider your qualifications.

We anticipate completing our initial review within [number] business days. If your application is selected for further consideration, we will contact you to schedule an interview.

In the meantime, please do not hesitate to reach out to us at [phone number] or [email address] if you have any questions.

Thank you again for your interest in [Company Name].

Sincerely,

The Hiring Team
[Company Name]
[Website (optional)]`,
      timestamp: '2 days ago',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [recipient, setRecipient] = useState('Sudhir Kumar');

  const candidates = [
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: 2 },
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: 1 },
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: null },
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: 2 },
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: null },
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: 5 },
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: null },
    { name: 'Sudhir Kumar', messagePreview: "Hi there, I'm so sorry I to...", job: 'Electrician', badge: 1 },
  ];

  const handleCandidateSelect = (name) => {
    setSelectedCandidate(name);
    setRecipient(name);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'Rudra', content: newMessage, timestamp: 'Just now' }]);
      setNewMessage('');
    }
  };

  const handleRemoveRecipient = () => {
    setRecipient('');
  };

  return (
    <div className="msg-page-container">
      <Header />
      <h1 className="msg-page-title">Messages</h1>
      <div className="msg-search-bar">
        <img src="/imageswebsite/search-01.png" alt="Search" className="msg-search-icon" />
        <input
          type="text"
          placeholder="Search for messages, HR, profiles..."
          className="msg-search-input"
        />
      </div>
      <section className="msg-content-section">
        <div className="msg-main-content">
          <aside className="msg-left-sidebar">
            <div className="msg-candidates-header">
              <h3 className="msg-candidates-title">Candidates</h3>
              <select className="msg-sort-dropdown">
                <option className="msg-sort-option">
                  <span className="msg-sort-label">Sort By:</span> Job
                </option>
                <option className="msg-sort-option">Sort By: Name</option>
                <option className="msg-sort-option">Sort By: Date</option>
              </select>
            </div>
            <div className="msg-candidates-list">
              {candidates.map((candidate, index) => (
                <div style={{background:"transparent"}}
                  key={index}
                  className={`msg-candidate-card ${selectedCandidate === candidate.name ? 'msg-candidate-selected' : ''}`}
                  onClick={() => handleCandidateSelect(candidate.name)}
                >
                  <img
                    src="/imageswebsite/CIRCLEIMAGE.png"
                    alt="Profile"
                    className="msg-candidate-avatar"
                  />
                  <div className="msg-candidate-info">
                    <h3 className="msg-candidate-name">{candidate.name}</h3>
                    <p className="msg-candidate-message">{candidate.messagePreview}</p>
                    <p className="msg-candidate-job">{candidate.job}</p>
                  </div>
                  {candidate.badge && (
                    <span className="msg-notification-badge">{candidate.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </aside>
          <div className="msg-chat-area">
            <div className="msg-chat-header">
              <h2 className="msg-selected-candidate">{selectedCandidate}</h2>
              <p className="msg-application-status">Applied a week ago</p>
            </div>
            <hr className="msg-divider" />
            <div className="msg-messages-thread">
               
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`msg-message-container ${message.sender === 'Rudra' ? 'msg-message-sent' : 'msg-message-received'}`}
                >
                  <div className="msg-message-header">
                    <img
                      src="/imageswebsite/CIRCLEIMAGE.png"
                      alt="Profile"
                      className="msg-message-avatar"
                    />
                    <h2 className="msg-message-sender">Sudhir Kumar</h2>
                  </div>
                  <p className="msg-message-timestamp"><strong>{message.timestamp}</strong></p>
                  <p className="msg-message-content">{message.content}</p>
                </div>
              ))}
            </div>
            <div className="msg-reply-box">
              <div className="msg-reply-header">
                <div className="msg-recipient-container">
                  <img className="msg-reply-arrow" src="/imageswebsite/arrowleftdown.png" alt="reply" />
                  <img  className="msg-reply-arrow"  src="/imageswebsite/downhori.png" alt="down" />
                  <div className="msg-recipient-section">
                    <span className="msg-reply-to">To:</span>
                    {recipient && (
                      <div className="msg-recipient-chip">
                        {recipient}
                        <button className="msg-remove-recipient" onClick={handleRemoveRecipient}>×</button>
                      </div>
                    )}
                  </div>
                </div>
                <ExpandIcon />
              </div>
              <textarea
                className="msg-reply-textarea"
                placeholder="Neque porro quisquam est.

Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                rows="4"
              />
              <div className="msg-reply-actions">
                <button className="msg-send-button" onClick={handleSendMessage}>
                  Send Now
                </button>
                <div className="msg-action-icons">
                  <MoreOptionsIcon />
                  <DeleteIcon />
                  <EmojiIcon />
                  <AttachmentIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="msg-right-sidebar">
            <div className="msg-candidate-profile">
              <img
                src="/imageswebsite/humanimagecircle.png"
                alt="Profile"
                className="msg-profile-pic-large"
              />
              <h2 className="msg-profile-name">{selectedCandidate}</h2>
              <p className="msg-profile-status">Applied a week ago</p>
              <div className="msg-job-details">
                <p  style={{color:"white"}}>APPLIED JOBS</p>
                <div className="msg-job-card">
                  <h2 className="msg-job-title">Electrician</h2>
                  <p className="msg-job-info">Full Time • Bangalore, India</p>
                </div>
              </div>
              <hr className="msg-profile-divider" />
              <div className="msg-contact-details">
                <p className="msg-contact-title">CONTACT DETAILS</p>
                <div className="msg-contact-item">
                  <div className="msg-contact-icon">
                    <img src="/imageswebsite/email.png" alt="email" />
                  </div>
                  <div className="msg-contact-info">
                    <span className="msg-contact-label">Email</span>
                    <p className="msg-contact-value">sudhirkumar5555@gmail.com</p>
                  </div>
                </div>
                <div className="msg-contact-item">
                  <div className="msg-contact-icon">
                    <img src="/imageswebsite/phone.png" alt="phone" />
                  </div>
                  <div className="msg-contact-info">
                    <span className="msg-contact-label">Phone</span>
                    <p className="msg-contact-value">+91 6058058043</p>
                  </div>
                </div>
                <div className="msg-contact-item">
                  <div className="msg-contact-icon">
                    <img src="/imageswebsite/home.png" alt="address" />
                  </div>
                  <div className="msg-contact-info">
                    <span className="msg-contact-label">Address</span>
                    <p className="msg-contact-value">Electronic City, Bangalore</p>
                  </div>
                </div>
              </div>
              <hr className="msg-profile-divider" />
              <div className="msg-notes-section">
                <p className="msg-section-title">NOTES</p>
                <textarea
                  className="msg-notes-textarea"
                  placeholder="Write notes here..."
                  rows="4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MessagesPage;
 