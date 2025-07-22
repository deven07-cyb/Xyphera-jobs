import React from 'react';
import './TermOfServices.css';
import Header from './../ReusableComponents/Header/index';
import Footer from './../ReusableComponents/Footer/index';

const TermsOfServicePage = () => {
  return (
    <div className="terms-of-service-page">
      <Header />

      <div className="terms-of-service-container">
        <h1 className="terms-of-service-title">Terms of Service</h1>
        <p className="updated-date">Updated March 10, 2025</p>

        <div className="terms-content">
          <h2>Introduction</h2>
          <p>
            Welcome to Job Board. By accessing or using our website located at "Location", you agree to comply with and be bound by these Terms of Service. If you do not agree to these Terms, please do not use the Site.
          </p>

          <h2>Definitions</h2>
          <ul>
            <li><strong>Employer:</strong> An individual or entity posting job listings on the Site.</li>
            <li><strong>Job Seeker:</strong> An individual searching and applying for job opportunities through the Site.</li>
            <li><strong>User Content:</strong> All information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials submitted by users.</li>
          </ul>

          <h2>Eligibility</h2>
          <p>
            Users must be at least 18 years old and legally capable of entering into binding contracts to use the Site.
          </p>

          <h2>Account Registration</h2>
          <p>
            Users may need to create an account to access certain features. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
          </p>

          <h2>User Obligations</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Violate any applicable laws or regulations.</li>
            <li>Post false, misleading, or fraudulent information.</li>
            <li>Infringe upon any third-party rights.</li>
            <li>Transmit any viruses or other harmful code.</li>
          </ul>

          <h2>Job Posting Guidelines (For Employers)</h2>
          <p>Employers must ensure that job listings:</p>
          <ul>
            <li>Are accurate and not misleading.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Do not contain discriminatory language or requirements.</li>
          </ul>

          <h2>Application Process (For Job Seekers)</h2>
          <p>Job Seekers agree to:</p>
          <ul>
            <li>Provide truthful information in applications.</li>
            <li>Apply only for positions for which they are qualified.</li>
          </ul>

          <h2>Fees and Payments</h2>
          <p>
            Employers may be required to pay fees for posting jobs or accessing certain features. All fees are non-refundable unless otherwise stated.
          </p>

          <h2>Content Ownership and Licenses</h2>
          <p>
            Users retain ownership of their User Content but grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Our <a href="/privacy-policy">Privacy Policy</a> describes how we handle your personal data.
          </p>

          <h2>Termination of Accounts</h2>
          <p>
            We reserve the right to suspend or terminate accounts at our discretion, including for violations of these Terms.
          </p>

          <h2>Disclaimers and Limitations of Liability</h2>
          <p>
            The Site is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the Site.
          </p>

          <h2>Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of [Jurisdiction]. Any disputes will be resolved through binding arbitration in [Location].
          </p>

          <h2>Changes to the Terms</h2>
          <p>
            We may update the Terms from time to time. Continued use of the Site constitutes acceptance of the revised Terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at: <a href="mailto:support@example.com">support@example.com</a> (Physical Address).
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;