import React, { useState } from 'react';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerFAQ.css';

const EmployerFAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How do I post a job?',
      answer: 'To post a job, navigate to the "Post a Job" section, fill in the job details, and submit your posting. It’s quick and easy!',
      isOpen: false,
    },
    {
      question: 'How are candidates verified?',
      answer: 'Candidates are verified through a multi-step process including identity checks, skill assessments, and background verification.',
      isOpen: false,
    },
    {
      question: 'What happens if a candidate doesn’t show up?',
      answer: 'If a candidate doesn’t show up, you can report it to our support team, and we’ll assist you in finding a replacement.',
      isOpen: false,
    },
    {
      question: 'Can I search for candidates without posting a job?',
      answer: 'Yes, you can browse candidates under the "Candidates" section even without posting a job.',
      isOpen: false,
    },
    {
      question: 'How do I create an account?',
      answer: 'Click on the "Sign Up" button at the top right, fill in your details, and follow the registration steps.',
      isOpen: false,
    },
    {
      question: 'Is there a fee to use this job board?',
      answer: 'Basic features are free, but premium features like featured listings may require a subscription.',
      isOpen: false,
    },
    {
      question: 'Can I edit or delete my job postings?',
      answer: 'Yes, you can edit or delete your job postings from the "My Jobs" section anytime.',
      isOpen: false,
    },
    {
      question: 'What should I do if I forget my password?',
      answer: 'Click on "Forgot Password" on the login page and follow the reset instructions sent to your email.',
      isOpen: false,
    },
    {
      question: 'How do I receive applications from candidates?',
      answer: 'Applications will be sent to your dashboard under the "Applications" tab.',
      isOpen: false,
    },
    {
      question: 'Can I feature or promote my job postings?',
      answer: 'Yes, you can promote your job postings by upgrading to a premium plan.',
      isOpen: false,
    },
    {
      question: 'How do I update my company profile?',
      answer: 'Go to the "Company Profile" section and edit your details as needed.',
      isOpen: false,
    },
  ]);

  const handleToggle = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <div className="employer-faq-page">
      <EmployerHeader />
      <div className="employer-faq-content">
        <h1 className="employer-faq-title">FAQs</h1>
        <div className="employer-faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className={`employer-faq-entry ${faq.isOpen ? 'expanded' : ''}`}>
              <div className="employer-faq-query" onClick={() => handleToggle(index)}>
                {faq.question}
                <span className="employer-faq-toggle">{faq.isOpen ? '−' : '+'}</span>
              </div>
              {faq.isOpen && <div className="employer-faq-response">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerFAQ;