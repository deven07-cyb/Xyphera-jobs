 import React from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './NotificationPage.css';

const NotificationPage = () => {
  const notifications = [
    { id: 1, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
    { id: 2, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
    { id: 3, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
    { id: 4, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
    { id: 5, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
    { id: 6, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
    { id: 7, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
    { id: 8, message: "You're invited to apply", details: "Hi User, We found your resume & thought you would be a great match for the Zomato Delivery Boy role", date: "27th March 2023 at 9:30AM" },
  ];

  return (
    <div className="notification-page-container">
      <Header />
      <div className="dstyles">
        <h1 className="notification-heading">Notifications</h1>
        <div className="notification-container">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-item">
              <img className="zomato-logo" src="/imageswebsite/zomoto.png" alt="ZomatoLogo" />
              <div className="notification-text-block">
                <p className="notification-title">{notification.message}</p>
                <p className="notification-details">{notification.details}</p>
              </div>
              <div className="notification-meta-section">
                 <button className="notification-close-btn notification-close-btn-one"><img src="/imageswebsite/clockdown.png" alt="crossmark"/></button>
                <span className="notification-timestamp">{notification.date}</span>
                <button className="notification-close-btn"><img src="/imageswebsite/crossmark.png" alt="crossmark"/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationPage;