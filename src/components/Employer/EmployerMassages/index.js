import React, { useState } from 'react';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerMassages.css';

const EmployerMassages = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('Sudhir Kumar');
  const [message, setMessage] = useState('');

  const candidates = [
    { name: 'Sudhir Kumar', job: 'Electrician', message: "Hi there, I'm so sorry I for..." },
    { name: 'Sudhir Kumar', job: 'Electrician', message: "Hi there, I'm so sorry I to..." },
    { name: 'Sudhir Kumar', job: 'Electrician', message: "Hi there, I'm so sorry I to..." },
    { name: 'Sudhir Kumar', job: 'Electrician', message: "Hi there, I'm so sorry I to..." },
    { name: 'Sudhir Kumar', job: 'Electrician', message: "Hi there, I'm so sorry I to..." },
  ];

  const messages = [
    {
      sender: 'Sudhir Kumar',
      time: '2 days ago',
      content: "Hi there, I'm so sorry I forgot to add my resume in the application. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      sender: 'Sudhir K.',
      content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      sender: 'Sudhir K.',
      content: "Thanks, Sudhir K.",
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('Message sent:', message);
    setMessage('');
    // Add your message sending logic here
  };

  return (
    <div className="homepage-wrapper">
      <EmployerHeader />
      <div className="messages-wrapper">
        <div className="messages-container">
          <h1 className="messages-title">Messages</h1>
          <div className="search-bar-wrapper">
            <div className="search-input-container">
              <span className="search-icon-wrapper">
                <svg className="search-icon-image" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#6b7280"/>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search for messages, candidates, profiles..."
                className="search-input-field"
              />
              <button className="search-clear-button">×</button>
            </div>
          </div>
          <div className="messages-content">
            <div className="candidates-list">
              <div className="candidates-header">
                <h2 className="candidates-title">Candidates</h2>
                <p className="sort-by">Sort By: Job</p>
              </div>
              {candidates.map((candidate, index) => (
                <div
                  key={index}
                  className={`candidate-item ${selectedCandidate === candidate.name ? 'active' : ''}`}
                  onClick={() => setSelectedCandidate(candidate.name)}
                >
                  <div className="candidate-avatar"></div>
                  <div className="candidate-info">
                    <p className="candidate-name">{candidate.name}</p>
                    <p className="candidate-job">{candidate.job}</p>
                    <p className="candidate-message">{candidate.message}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-section">
              <div className="chat-header">
                <div className="chat-candidate-info">
                  <div className="candidate-avatar large"></div>
                  <div>
                    <h3 className="chat-candidate-name">{selectedCandidate}</h3>
                    <p className="chat-applied-status">Applied 2 weeks ago</p>
                  </div>
                </div>
              </div>
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className="message">
                    <p className="message-sender">
                      {msg.sender}{' '}
                      {msg.time && <span className="message-time">{msg.time}</span>}
                    </p>
                    <p className="message-content">{msg.content}</p>
                    {msg.sender === 'Sudhir K.' && index === 1 && (
                       <div className="attachments">
                        <p className="attachments-title">2 Attachments</p>
                        <div className="attachment-files">
                          <a href="attachment" className="attachment">
                            Resume.pdf{' '}
                            <span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="#6b7280"/>
                              </svg>
                            </span>
                          </a>
                          <a href="attachment" className="attachment">
                            Assignment.zip{' '}
                            <span>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="#6b7280"/>
                              </svg>
                            </span>
                          </a>
                          <a href="attachment" className="download-all">
                            Download All
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <form className="message-input-form" onSubmit={handleSendMessage}>
                <div className="message-input-container">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={`To: ${selectedCandidate}`}
                    className="message-input-field"
                  />
                  <div className="message-actions">
                    <span className="action-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12Z" fill="#6b7280"/>
                      </svg>
                    </span>
                    <span className="action-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12ZM12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14Z" fill="#6b7280"/>
                      </svg>
                    </span>
                    <span className="action-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="#6b7280"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <button type="submit" className="send-message-button">Send Now</button>
              </form>
            </div>
            <div className="candidate-details">
              <h3 className="details-candidate-name">{selectedCandidate}</h3>
              <p className="details-applied-status">Applied 2 weeks ago</p>
              <div className="job-details">
                <h4 className="section-title">Applied Jobs</h4>
                <p className="job-title">Electrician</p>
                <p className="job-info">Full Time • Bangalore, India</p>
              </div>
              <div className="contact-details">
                <h4 className="section-title">Contact Details</h4>
                <p className="contact-item">
                  <span className="contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="#6b7280"/>
                    </svg>
                  </span>
                  sudhirkumar555@gmail.com
                </p>
                <p className="contact-item">
                  <span className="contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#6b7280"/>
                    </svg>
                  </span>
                  +91 91608508043
                </p>
                <p className="contact-item">
                  <span className="contact-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#6b7280"/>
                    </svg>
                  </span>
                  Electronic City, Bangalore
                </p>
              </div>
              <div className="notes">
                <h4 className="section-title">Notes</h4>
                <textarea className="notes-textarea" placeholder="Write notes here..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerMassages;