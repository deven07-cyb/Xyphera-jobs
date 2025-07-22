import React from 'react';
import Header from '../../ReusableComponents/Header';
import './JobsCatogory.css';

 

const JobsCatogory = () => {
  const jobCategories = [
    {
      title: 'Delivery Boy',
      icon: '/imageswebsite/deliveryBoyIcon.png',
      link: '/jobs/delivery-boy', // Replace with actual route
    },
    {
      title: 'Sales',
      icon:  '/imageswebsite/sales-icon.png',
      link: '/jobs/sales',
    },
    {
      title: 'BPO',
      icon:  '/imageswebsite/bpo-icon.png',
      link: '/jobs/bpo',
    },
  ];

  return (
    <div >
      <Header />
      <div className="jp-content">
        <h1 className="jp-title">Job <spam className="Categories">Categories</spam></h1>
        <div className="jp-categories-grid">
          {jobCategories.map((category, index) => (
            <div key={index} className="jp-category-card">
              <img src={category.icon} alt={category.title} className="jp-category-icon" />
              <h3 className="jp-category-title">{category.title}</h3>
              <a href={category.link} className="jp-view-jobs-btn">
                View Jobs
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsCatogory;