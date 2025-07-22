// import React from 'react';
// import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
// import Footer from '../../Pages/ReusableComponents/Footer';
// import './EmployerPrivacyPolicy.css';

// const EmployerPrivacyPolicy = () => {
//   return (
//     <div className="homepage-wrapper">
//       <EmployerHeader />
//       <div className="privacy-policy-wrapper">
//         {/* Main Content */}
//         <h1 style={{marginTop:"100px"}} >Privacy Policy</h1>
//           <p className="updated-date">Updated March 10, 2025</p>
//         <main className="privacy-content">
           

//           <div className="policy-section">
//             <h2>Introduction</h2>
//             <p>
//               Welcome to the Job Board. This Privacy Policy explains how we collect, use, disclose, and safeguard your
//               information when you visit our website and use our services. By accessing or using the Site, you agree to the
//               terms of this Privacy Policy.
//             </p>
//           </div>

//           <div className="policy-section">
//             <h2>Information We Collect</h2>
//             <p>We may collect and process the following types of information:</p>
//             <ul>
//               <li>Personal identification information: Name, email address, phone number, postal address, and other contact details.</li>
//               <li>Professional information: Resume/CV details, employment history, education background, skills, and certifications.</li>
//               <li>Usage Data: Information about how you use our Site, including your IP address, browser type, access times, and pages viewed.</li>
//             </ul>
//           </div>

//           <div className="policy-section">
//             <h2>How We Use Your Information</h2>
//             <p>We use the collected information for various purposes, including:</p>
//             <ul>
//               <li>To provide and improve our services: Facilitating job searches, processing applications, and enhancing user experience.</li>
//               <li>To communicate with you: Sending notifications about job opportunities, updates, and promotional materials.</li>
//               <li>To maintain security: Monitoring and analyzing usage to ensure the security and integrity of our Site.</li>
//             </ul>
//           </div>

//           <div className="policy-section">
//             <h2>Sharing Your Information</h2>
//             <p>We may share your information with:</p>
//             <ul>
//               <li>Employers: To facilitate job applications and recruitment processes.</li>
//               <li>Service Providers: Third-party vendors who assist in operating our Site and providing our services.</li>
//               <li>Legal Obligations: When required by law or to protect our rights and safety.</li>
//             </ul>
//           </div>

//           <div className="policy-section">
//             <h2>Data Security</h2>
//             <p>
//               We implement appropriate security measures to protect your personal data from unauthorized access, alteration,
//               disclosure, or destruction.
//             </p>
//           </div>

//           <div className="policy-section">
//             <h2>Your Data Protection Rights</h2>
//             <p>Depending on your jurisdiction, you may have the right to:</p>
//             <ul>
//               <li>Access: Request copies of your personal data.</li>
//               <li>Rectification: Request correction of inaccurate or incomplete data.</li>
//               <li>Erase: Request deletion of your personal data under certain conditions.</li>
//               <li>Restrict Processing: Request restriction of processing your data under certain conditions.</li>
//               <li>Object Processing: Object to processing your data under certain conditions.</li>
//               <li>Data Portability: Request to transfer your data to another organization or directly to you under certain conditions.</li>
//             </ul>
//             <p>
//               To exercise these rights, please contact us at <a href="mailto:support@jobboard.com">support@jobboard.com</a>.
//             </p>
//           </div>

//           <div className="policy-section">
//             <h2>Cookies and Tracking Technologies</h2>
//             <p>
//               We use cookies and similar tracking technologies to enhance your experience on our Site. You can manage your
//               cookie preferences through your browser settings.
//             </p>
//           </div>

//           <div className="policy-section">
//             <h2>Changes to This Privacy Policy</h2>
//             <p>
//               We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
//               Privacy Policy on this page.
//             </p>
//           </div>

//           <div className="policy-section">
//             <h2>Contact Us</h2>
//             <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
//             <ul>
//               <li>Email: <a href="mailto:support@jobboard.com">support@jobboard.com</a></li>
//               <li>Address: 3 & 4, Sadarmangala Road, Kadugodi, Bengaluru, Karnataka 560066, India</li>
//             </ul>
//           </div>
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EmployerPrivacyPolicy;  


 import React from 'react';
import './EmployerPrivacyPolicy.css';
 
import Header from './../../Pages/ReusableComponents/Header/index';
import Footer from './../../Pages/ReusableComponents/Footer/index';

const  EmployerPrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <Header />
                <h1 className="privacy-policy-title">Privacy Policy</h1>
        <p className="updated-date">Updated March 10, 2025</p> 
      <div className="privacy-policy-container">
        

        <div className="policy-content">
          <h2>Introduction</h2>
          <p>
            Welcome to the Job Board. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. By accessing or using the Site, you agree to the terms of this Privacy Policy.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect and process the following types of information:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, postal address, and other contact details.</li>
            <li><strong>Professional Information:</strong> Resume/CV data, employment history, education background, skills, and certifications.</li>
            <li><strong>Usage Data:</strong> Information about how you use our Site, including your IP address, browser type, access times, and pages viewed.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information for various purposes, including:</p>
          <ul>
            <li><strong>To Provide and Improve Our Services:</strong> Facilitating job searches, processing applications, and enhancing user experience.</li>
            <li><strong>To Communicate with You:</strong> Sending notifications about job opportunities, updates, and promotional materials.</li>
            <li><strong>To Maintain Safety:</strong> Monitoring and analyzing usage to ensure the security and integrity of our Site.</li>
          </ul>

          <h2>Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li><strong>Employers:</strong> To facilitate job applications and recruitment processes.</li>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our Site and providing our services.</li>
            <li><strong>Legal Obligations:</strong> When required by law or to protect our rights and safety.</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Data Protection Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request copies of your personal data.</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request deletion of your personal data under certain conditions.</li>
            <li><strong>Restrict Processing:</strong> Request restriction of processing your data under certain conditions.</li>
            <li><strong>Object Processing:</strong> Object to processing your data under certain conditions.</li>
            <li><strong>Data Portability:</strong> Request transfer of your data to another organization or directly to you under certain conditions.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at [Contact Information].
          </p>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our Site. You can manage your cookie preferences through your browser settings.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:support@example.com">[Email]</a></li>
            <li><strong>Address:</strong> [Physical Address]</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmployerPrivacyPolicyPage;