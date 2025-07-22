 import React, { useState } from 'react';
import './Faqsectionone.css';
import Footer from './../ReusableComponents/Footer/index';
import Header from './../ReusableComponents/Header/index';

const Faqsectionone = () => {
  const [expanded, setExpanded] = useState({});

  const faqs = [
    {
      question: "How do I create an account on the job portal?",
      answer: "To create an account, click on the 'Sign Up' button on the homepage, fill in your details such as name, email, and password, and submit the form. You'll receive a confirmation email to verify your account."
    },
    {
      question: "Is it free to use the job portal for job seekers?",
      answer: "Yes, our job portal is completely free for job seekers. You can browse jobs, apply, and manage your profile at no cost."
    },
    {
      question: "How can I upload or update my resume?",
      answer: "Log in to your account, go to your profile section, and select 'Upload Resume' or 'Update Resume'. Choose the file from your device and click 'Submit' to upload or update it."
    },
    {
      question: "Can I apply for multiple jobs at once?",
      answer: "Yes, you can apply for multiple jobs. Simply select the jobs you're interested in and submit your application for each one individually."
    },
    {
      question: "How do I know if my application was successfully submitted?",
      answer: "After submitting an application, you'll receive a confirmation message on the portal. You can also check the status in the 'My Applications' section of your profile."
    },
    {
      question: "How can I track the status of my applications?",
      answer: "Go to the 'My Applications' section in your profile to view the status of all your submitted applications, such as 'Pending', 'Reviewed', or 'Accepted'."
    },
    {
      question: "What should I do if I forget my password?",
      answer: "Click on the 'Forgot Password' link on the login page, enter your registered email address, and follow the instructions to reset your password."
    },
    {
      question: "Can employers contact me directly through the portal?",
      answer: "Yes, if your profile is set to public, employers can contact you directly through the portal's messaging system."
    },
    {
      question: "Are the job listings on your site verified?",
      answer: "Yes, we verify all job listings to ensure they are legitimate and come from reputable employers."
    },
    {
      question: "How can I delete my account?",
      answer: "To delete your account, go to your profile settings, select 'Delete Account', and follow the prompts to confirm the deletion."
    }
  ];

  const toggleFAQ = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="faq-page">
      <Header />
      <section className="faq-section">
        <div className="ask-question">
          <h1>Any Question?</h1>
          <button className="ask-btn">Ask Now</button>
        </div>

        <div className="faq-list">
          <h1>Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-toggle">{expanded[index] ? '−' : '+'}</span>
              </div>
              {expanded[index] && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Faqsectionone;