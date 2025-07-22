import React, { useState } from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const [selectedPlanType, setSelectedPlanType] = useState('2-Months Free');

  const plans = [
    {
      name: 'Basic',
      image: "/imageswebsite/employee99icon.png",
      monthlyPrice: 99,
      monthlyOriginalPrice: 299,
      yearlyPrice: 999,
      yearlyOriginalPrice: 1999,
      features: [
        'Access to basic job listings',
        'Resume upload',
        'Limited daily job alerts',
        'Email support',
      ],
    },
    {
      name: 'Advanced',
      image: "/imageswebsite/employee299icon.png",
      monthlyPrice: 299,
      monthlyOriginalPrice: 599,
      yearlyPrice: 2999,
      yearlyOriginalPrice: 4999,
      features: [
        'All Basic Plan features',
        'Enhanced profile visibility',
        'Unlimited daily job alerts',
        'Featured job listings',
        'Direct messaging with some recruiters',
      ],
    },
    {
      name: 'Plus',
      image: "/imageswebsite/employee999icon.png",
      monthlyPrice: 999,
      monthlyOriginalPrice: 1099,
      yearlyPrice: 9999,
      yearlyOriginalPrice: 14999,
      features: [
        'All Advanced Plan features',
        'Featured profile placement',
        'Priority application submission',
        'Access to all recruiter messaging',
        'Career coaching session (one per month)',
      ],
    },
  ];

  const getPrice = (plan) => {
    if (selectedPlanType === 'Yearly' || selectedPlanType === '2-Months Free') {
      return { price: plan.yearlyPrice, originalPrice: plan.yearlyOriginalPrice, period: 'per year' };
    }
    return { price: plan.monthlyPrice, originalPrice: plan.monthlyOriginalPrice, period: 'per month' };
  };

  return (
    <div className="sp-subscription-plans-container">
      {/* Header */}
      <Header />

      {/* Subscription Plans Content */}
      <section className="sp-subscription-plans-content">
        <h1>
          Subscription <span className="sp-heading-highlight">Plans</span>
        </h1>

        {/* Toggle Buttons */}
        <div className="sp-toggle">
          <button
            className={`sp-toggle-button ${selectedPlanType === 'Monthly' ? 'sp-toggle-active' : ''}`}
            onClick={() => setSelectedPlanType('Monthly')}
          >
            Monthly
          </button>
          <button
            className={`sp-toggle-button ${selectedPlanType === 'Yearly' ? 'sp-toggle-active' : ''}`}
            onClick={() => setSelectedPlanType('Yearly')}
          >
            Yearly
          </button>
          <button
            className={`sp-toggle-button ${selectedPlanType === '2-Months Free' ? 'sp-toggle-active' : ''}`}
            onClick={() => setSelectedPlanType('2-Months Free')}
          >
            2-Months Free
          </button>
        </div>

        {/* Plans List */}
        <div className="sp-plans-list">
          {plans.map((plan) => {
            const { price, originalPrice, period } = getPrice(plan);
            return (
              <div
                key={plan.name}
                className={`sp-plan-card ${plan.name === 'Advanced' ? 'sp-plan-card-highlight' : ''}`}
              >
                <div className="sp-plan-header">
                  <div className="sp-plan-icon">
                    <img src={plan.image} alt={`${plan.name} icon`} />
                  </div>
                   
                </div>
                <h2>{plan.name} Plan</h2>
                <p className="sp-price">
                  <span className="sp-original-price">
                    ₹{originalPrice}
                  </span>{' '}
                  ₹{price}{' '}
                  <span>/ {period}</span>
                </p>
                <ul className="sp-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <img
                        style={{ paddingRight: "10px" }}
                        src="/imageswebsite/CheckCircle.png"
                        alt="tickmark"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="sp-buy-now-button">Buy Now</button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SubscriptionPlans;