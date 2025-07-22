import React from 'react';
 
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerCandidateProfile.css';

const EmployerCandidateProfile = () => {
  return (
    <div  >
      <EmployerHeader />
      <div className="profile-section-container">
        {/* Back Button and Candidate Profile Heading */}
        <div style={{marginTop:"100px"}}   className="profile-top-header">
          <button className="profile-back-button">
            {/* <FiArrowLeft style={{ marginRight: 6 }} /> */}
            <img style={{ marginRight: 6 }} src="/imageswebsite/arrowleft.png" alt='data' />
            Back
          </button>
          <h1 style={{position:"absolute",left:"40%",marginBottom:"10px"}} className="profile-main-title">Candidate Profile</h1>
        </div>

        <div className="profile-content-wrapper">
          {/* Left Sidebar */}
          <div className="profile-side-panel">
            <div className="profile-user-avatar">
              <div className="avatar-background"></div>
              <img
                className="profile-verification-tick"
                src="/imageswebsite/Employerprofiletickimage.png"
                alt="tick"
              />
            </div>
            <h2 >Ramesh Patil</h2>
            <p className="profile-user-role">Electrician</p>
            <div className="profile-user-details">
              
              <div className="profile-contact-info">
                <div className='bottomborderdata'>
                  <span className="profile-contact-icon">
                    <img src="/imageswebsite/Employerpofilemassage.png" alt="email icon" />
                  </span>
                  ramesh.patil@gmail.com
                </div>
                <div className='bottomborderdata'>
                  <span className="profile-contact-icon">
                    <img src="/imageswebsite/location-01.png" alt="location icon" />
                  </span>
                  Mumbai, Maharashtra, India
                </div>
                <div className='bottomborderdata'>
                  <span className="profile-contact-icon">
                    <img src="/imageswebsite/building-01.png" alt="employment icon" />
                  </span>
                  Full-time, Contract-based
                </div>
                <div style={{borderBottom:"none"}}  className='bottomborderdata'>
                  <span className="profile-contact-icon">
                    <img src="/imageswebsite/arrange.png" alt="specialties icon" />
                  </span>
                  Electrical Installation, Maintenance, and Repair
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="profile-main-content">
            <div className="profile-section-block">
              <h3 className='Professionalsummury'>Professional Summary</h3>
              <p className='rameshpatil'>
                Ramesh Patil is a highly skilled and experienced electrician with over a decade of hands-on experience in the electrical industry. Specializing in residential, commercial, and industrial electrical installations and maintenance, Ramesh has developed a strong expertise in troubleshooting electrical systems, ensuring safety compliance, and executing complex wiring projects. Known for his attention to detail, safety-first approach, and excellent problem-solving abilities, he consistently delivers high-quality results in every job he undertakes.
              </p>
            </div>

            <div className="profile-section-block">
              <h3>Work Experience</h3>
              <div className="profile-experience-list">
                <div className="experience-entry">
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <span className="experience-title">Senior Electrician | 2015 - Present</span>
                      <div className='experienceonetwo'>
                      <span className="experience-type">Full Time</span>
                      <span className="experience-date"><img src="/imageswebsite/calendar-04.png" alt="pngs"/>April 12, 2015</span>
                      </div>
                       
                    </div>
                    <div className="experience-details">
                      <span className="experience-location"><img src="/imageswebsite/briefcase-02.png" alt="brreef" />Shree Electricals</span>
                      <span className="experience-location"><img src="/imageswebsite/building-01.png" alt="brreef" /> Mumbai, Maharashtra, India</span>
                    </div>
                     
                  </div>
                  <ul>
                    <li>Lead a team in providing electrical services for residential, commercial, and industrial projects.</li>
                    <li>Supervised and executed installation, repair, and maintenance of electrical systems.</li>
                  </ul>
                </div>
                <div className="experience-entry">
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <span className="experience-title">Electrician | 2010 - 2015</span>
                      <div className='experienceonetwo'>
                          <span className="experience-type">Full Time</span>
                      <span className="experience-date"><img src="/imageswebsite/calendar-04.png" alt="pngs"/>April 12, 2015</span>
                      </div>
                    </div>
                    <div className="experience-details">
                      <span className="experience-location"><img src="/imageswebsite/briefcase-02.png" alt="brreef" />PowerGrid Solutions</span>
                      <span className="experience-location"><img src="/imageswebsite/building-01.png" alt="brreef" />Mumbai, Maharashtra, India</span>
                    </div>
                     
                  </div>
                  <ul>
                    <li>Performed electrical wiring, installation, and troubleshooting for residential properties.</li>
                    <li>Installed lighting fixtures, circuit breakers, and electrical panels.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="profile-section-block">
              <h3 style={{fontSize:"24px",color:"#000000"}} className='education'>Education</h3>
              <div className="education-entry">
                <div className="education-header">
                  <div className="education-title-row">
                    <span className="education-title"><img src="/imageswebsite/school (2).png" alt='fata'/> Diploma in Electrical Engineering</span>
                    <span  className="education-type">Full Time</span>
                  </div>
                  <div className="education-details">
                    <span className="education-school">Mumbai Technical Institute</span>
                    <span className="education-date">June 11, 2008 - June 11, 2009</span>
                  </div>
                   
                </div>
              </div>
            </div>

            <div className="profile-section-block">
              <h3 style={{fontSize:"24px"}} className='skillsheading' >Skills</h3>
              <div className="profile-skills-list">
                <span className='Electricalspan'>Electrical Installation</span>
                <span className='Electricalspan'>Troubleshooting</span>
                <span className='Electricalspan'>Wiring</span>
                <span className='Electricalspan'>Rewiring</span>
                <span className='Electricalspan'>Circuit Breaker</span>
                <span className='Electricalspan'>Fuse Box Maintenance</span>
                <span className='Electricalspan'>Power Distribution</span>
                <span className='Electricalspan'>Lighting</span>
              </div>
            </div>

            <div className="profile-section-block">
              <h3>Languages</h3>
              <div>English, Hindi, Marathi</div>
            </div>

            <div className="profile-section-block">
              <h3>Resume</h3>
              <div className="profile-resume-row">
                <span className="resume-file-name"><img src='/imageswebsite/clipboard.png' alt='za'  />ramesh-patil-resume.pdf</span>
                <button className="action-btn download-btn">Download Resume</button>
              </div>
            </div>
          </div>
          <div className="profile-action-buttons">
            <button className="action-btn "><img src="/imageswebsite/magic-wand-02.png" alt="short" />Shortlist</button>
            <button className="action-btn "><img src="/imageswebsite/eraser-01.png" alt="short" />Reject</button>
            <button className="action-btn  "><img src="/imageswebsite/message-02.png" alt="short" />Message</button>
            <button className="action-btn  "><img src="/imageswebsite/bookmark-01.png" alt="short" />Bookmark</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmployerCandidateProfile;