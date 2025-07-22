// :root {
//   --primary-blue: #033E8A;
//   --gray: #666666;
//   --light-gray: #D3D3D3;
//   --white: #FFFFFF;
//   --black: #000000;
//   --spacing-sm: 10px;
//   --spacing-md: 20px;
//   --spacing-lg: 40px;
//   --font-size-sm: 14px;
//   --font-size-md: 16px;
//   --font-size-lg: 20px;
//   --font-size-xl: 28px;
//   --border-radius: 8px;
//   --shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// }

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: 'Arial', sans-serif;
//   line-height: 1.6;
// }

// .prof-preview-container {
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   background-color: var(--white);
// }

// .prof-preview-content {
//   padding: var(--spacing-lg);
//   flex: 1;
//   max-width: 1200px;
//   margin: 0 auto;
//   width: 100%;
// }

// .prof-header-section {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: var(--spacing-sm);
//   flex-wrap: wrap;
// }

// .prof-main-heading {
//   font-size: var(--font-size-xl);
//   color: var(--black);
//   text-transform: uppercase;
// }

// .prof-download-button {
//   background-color: var(--primary-blue);
//   color: var(--white);
//   padding: 10px 20px;
//   border: none;
//   border-radius: var(--border-radius);
//   font-size: var(--font-size-sm);
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// }

// .prof-download-button:hover {
//   background-color: #0D2A6B;
// }

// .prof-subheading {
//   font-size: var(--font-size-md);
//   color: var(--gray);
//   margin-bottom: var(--spacing-md);
// }

// .prof-profile-card {
//   background-color: var(--white);
//   border-radius: var(--border-radius);
//   padding: 20px;
//   margin: 0 auto;
//   max-width: 1300px;
//   width: 100%;
//   box-shadow: var(--shadow);
// }

// .prof-profile-header {
//   display: flex;
//   align-items: center;
//   margin-bottom: var(--spacing-md);
//   width: 100%;
// }

// .prof-profile-avatar {
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   margin-right: var(--spacing-md);
//   object-fit: cover;
// }

// .prof-profile-info {
//   flex: 1;
// }

// .prof-profile-name {
//   font-size: var(--font-size-xl);
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-nebulae-softness {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   gap: 10px;
// }

// .prof-profile-company {
//   font-size: var(--font-size-md);
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-profile-details {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 10px;
// }

// .prof-profile-title {
//   font-size: var(--font-size-md);
//   color: var(--black);
//   margin: 0;
// }

// .prof-resume-section {
//   display: flex;
//   align-items: center;
//   gap: 5px;
// }

// .prof-resume-icon {
//   width: 16px;
//   height: 16px;
// }

// .prof-resume-text {
//   font-size: var(--font-size-sm);
//   color: var(--black);
//   margin: 0;
// }

// .prof-social-links {
//   display: flex;
//   gap: 10px;
// }

// .prof-social-icon {
//   width: 24px;
//   height: 24px;
// }

// .prof-tabs {
//   display: flex;
//   gap: 10px;
//   margin-bottom: var(--spacing-md);
//   flex-wrap: wrap;
// }

// .prof-tab {
//   padding: 10px 20px;
//   border-radius: 20px;
//   background-color: var(--white);
//   border: 1px solid var(--light-gray);
//   font-size: var(--font-size-md);
//   color: var(--black);
//   cursor: pointer;
//   flex: 1;
//   min-width: 100px;
//   text-align: center;
// }

// .prof-tab:hover {
//   background-color: #E0E0E0;
// }

// .prof-tab-active {
//   background-color: #E0E0E0;
//   font-weight: bold;
// }

// .prof-work-experience {
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 20px;
//   flex-wrap: wrap;
// }

// .prof-section {
//   margin-bottom: var(--spacing-md);
// }

// .prof-section-heading {
//   font-size: var(--font-size-lg);
//   color: var(--black);
//   font-weight: bold;
//   text-transform: uppercase;
//   margin-bottom: var(--spacing-sm);
// }

// .prof-section-text {
//   font-size: var(--font-size-md);
//   color: var(--black);
//   margin-bottom: var(--spacing-sm);
// }

// .prof-add-more {
//   background: none;
//   border: none;
//   color: var(--primary-blue);
//   font-size: 1rem;
//   cursor: pointer;
//   margin-left: auto;
//   display: block;
// }

// .prof-add-more:hover {
//   text-decoration: underline;
// }

// .prof-experience-header {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   flex-wrap: wrap;
// }

// .prof-experience-item {
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;
//   margin-bottom: var(--spacing-sm);
// }

// .prof-horizontal-line {
//   border: 0;
//   height: 1px;
//   background: var(--light-gray);
//   margin: 20px 0;
// }

// .prof-remove-item {
//   background: none;
//   border: none;
//   color: var(--gray);
//   font-size: var(--font-size-md);
//   cursor: pointer;
//   padding: 5px;
// }

// .prof-remove-item:hover {
//   color: var(--black);
// }

// .prof-experience-details {
//   flex: 1;
// }

// .prof-experience-title {
//   font-size: var(--font-size-md);
//   font-weight: bold;
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-experience-company {
//   font-size: var(--font-size-md);
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-experience-duration {
//   font-size: var(--font-size-sm);
//   color: var(--gray);
//   margin-bottom: 5px;
// }

// .prof-experience-description {
//   font-size: var(--font-size-md);
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-experience-list {
//   list-style-type: disc;
//   padding-left: 20px;
//   font-size: var(--font-size-md);
//   color: var(--black);
// }

// .prof-experience-list li {
//   margin-bottom: 5px;
// }

// .prof-skills-list {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: var(--spacing-sm);
// }

// .prof-skill-tag {
//   background-color: var(--white);
//   border: 1px solid var(--light-gray);
//   color: var(--black);
//   padding: 5px 15px;
//   border-radius: 20px;
//   font-size: var(--font-size-sm);
// }

// .prof-education-item {
//   margin-bottom: var(--spacing-sm);
// }

// .prof-education-institution {
//   font-size: var(--font-size-md);
//   font-weight: bold;
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-education-degree {
//   font-size: var(--font-size-md);
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-education-grade {
//   font-size: var(--font-size-md);
//   color: var(--black);
//   margin-bottom: 5px;
// }

// .prof-education-duration {
//   font-size: var(--font-size-sm);
//   color: var(--gray);
//   margin-bottom: 5px;
// }

// .prof-education-cgpa {
//   font-size: var(--font-size-md);
//   color: var(--black);
// }

// /* Responsive Design */
// @media (max-width: 1024px) {
//   .prof-preview-content {
//     padding: var(--spacing-md);
//   }

//   .prof-profile-card {
//     padding: 15px;
//     max-width: 700px;
//   }

//   .prof-profile-header {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }

//   .prof-profile-avatar {
//     margin-right: 0;
//     margin-bottom: var(--spacing-sm);
//   }

//   .prof-nebulae-softness {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }

//   .prof-profile-details {
//     align-items: center;
//   }

//   .prof-tabs {
//     flex-direction: column;
//     align-items: center;
//     gap: 5px;
//   }

//   .prof-tab {
//     width: 100%;
//     text-align: center;
//   }

//   .prof-work-experience {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// }

// @media (max-width: 768px) {
//   .prof-preview-content {
//     padding: var(--spacing-sm);
//   }

//   .prof-header-section {
//     flex-direction: column;
//     gap: var(--spacing-sm);
//   }

//   .prof-main-heading {
//     font-size: var(--font-size-lg);
//   }

//   .prof-download-button {
//     padding: 8px 16px;
//     font-size: 12px;
//   }

//   .prof-profile-avatar {
//     width: 120px;
//     height: 120px;
//   }

//   .prof-profile-name {
//     font-size: var(--font-size-lg);
//   }

//   .prof-profile-company {
//     font-size: var(--font-size-sm);
//   }

//   .prof-profile-title {
//     font-size: var(--font-size-md);
//   }

//   .prof-section-heading {
//     font-size: var(--font-size-md);
//   }

//   .prof-section-text,
//   .prof-experience-description,
//   .prof-experience-list li {
//     font-size: var(--font-size-sm);
//   }
// }

// @media (max-width: 480px) {
//   .prof-preview-content {
//     padding: var(--spacing-sm);
//   }

//   .prof-header-section {
//     text-align: center;
//   }

//   .prof-main-heading {
//     font-size: var(--font-size-md);
//   }

//   .prof-download-button {
//     padding: 6px 12px;
//     font-size: 10px;
//   }

//   .prof-profile-avatar {
//     width: 100px;
//     height: 100px;
//   }

//   .prof-profile-name {
//     font-size: var(--font-size-md);
//   }

//   .prof-profile-company {
//     font-size: 12px;
//   }

//   .prof-profile-title {
//     font-size: var(--font-size-sm);
//   }

//   .prof-tabs {
//     gap: 3px;
//     justify-content: center;
//   }

//   .prof-tab {
//     padding: 8px 12px;
//     font-size: var(--font-size-sm);
//     width: 45%;
//   }

//   .prof-section-heading {
//     font-size: var(--font-size-sm);
//   }

//   .prof-section-text,
//   .prof-experience-description,
//   .prof-experience-list li {
//     font-size: 12px;
//   }

//   .prof-skills-list {
//     justify-content: center;
//   }

//   .prof-skill-tag {
//     font-size: 10px;
//     padding: 3px 10px;
//   }

//   .prof-education-institution,
//   .prof-education-degree,
//   .prof-education-grade,
//   .prof-education-cgpa {
//     font-size: 12px;
//   }
// }

// @media (max-width: 360px) {
//   .prof-preview-content {
//     padding: 5px;
//   }

//   .prof-profile-card {
//     padding: 10px;
//     max-width: 100%;
//   }

//   .prof-main-heading {
//     font-size: var(--font-size-md);
//   }

//   .prof-download-button {
//     padding: 5px 10px;
//     font-size: 10px;
//   }

//   .prof-profile-avatar {
//     width: 80px;
//     height: 80px;
//   }

//   .prof-profile-name {
//     font-size: var(--font-size-sm);
//   }

//   .prof-profile-company {
//     font-size: 10px;
//   }

//   .prof-profile-title {
//     font-size: 10px;
//   }

//   .prof-tabs {
//     gap: 2px;
//   }

//   .prof-tab {
//     padding: 6px 10px;
//     font-size: 10px;
//     width: 40%;
//   }

//   .prof-section-heading {
//     font-size: 14px;
//   }

//   .prof-section-text,
//   .prof-experience-description,
//   .prof-experience-list li {
//     font-size: 10px;
//   }

//   .prof-skill-tag {
//     font-size: 8px;
//     padding: 2px 8px;
//   }

//   .prof-education-institution,
//   .prof-education-degree,
//   .prof-education-grade,
//   .prof-education-cgpa {
//     font-size: 10px;
//   }

//   .prof-horizontal-line {
//     margin: 20px 0;
//   }
// }




import React, { useState, useEffect, useCallback } from 'react';
import './ProfilePreview.css';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import { getDocument } from 'pdfjs-dist';

const ProfilePreview = () => {
  const [profileData, setProfileData] = useState({
    name: 'Rudra',
    company: 'Nebulae Soft',
    title: 'UI/UX DESIGNER',
    summary: 'Proven ability to create user-centered designs through research, wireframing, prototyping, and usability testing. Skilled in crafting intuitive interfaces and delivering exceptional user experiences. Collaborated with cross-functional teams to achieve project goals and drive product success. Proficient in design tools and methodologies.',
    experiences: [
      { company: 'Nebulae Soft', role: 'UI/UX Designer (Intern)', duration: 'JULY 2024 -', description: 'To identify key pain points and opportunities to improve user satisfaction and loyalty within a food delivery app. Perform testing and research on user journeys, develop storyboards and web copy, and deliver presentations to the UX team on design enhancements.' },
      { company: 'Accenture North America', role: 'Product Design virtual experience program', duration: 'SEPTEMBER 2024', description: 'Completed a simulation focused on how the Product Design team can transform a user’s experience. Added a new feature and iterated on an existing product screen. Communicated the decisions made for the feature design.' },
      { company: 'BCG', role: 'Strategic & Experience Design Job on Forage', duration: 'OCTOBER 2024', description: 'Completed a job simulation where I helped to research and design a new banking product for a hypothetical client. Built a research plan, developed primary research tools, and reviewed data to understand the target customers’ attitudes, needs and beliefs. Created a customer persona to inform new product ideas and presented these using a concept chart.' },
      { company: 'Zidio Development', role: 'UI/UX Designer (Internship)', duration: 'MAY 2024 - SEP 2024', description: 'Leveraged Figma to create user-friendly web applications for Resume Craft, expertise in Figma for designing intuitive and visually appealing web applications.' }
    ],
    skills: ['Critical thinking', 'Product Design', 'UI Design', 'UX Design', 'Wireframing', 'Prototyping', 'Visual Design', 'User Research', 'User Interview', 'Auto layout', 'Figma', 'Adobe XD'],
    education: [
      { institution: 'BERHAMPUR UNIVERSITY', degree: 'BSc BACHELOR OF SCIENCE', duration: 'SEPTEMBER 2021', cgpa: '6.9/10' },
      { institution: 'KENDRIYA VIDYALAYA', degree: 'CBSE CENTRAL BOARD OF SECONDARY EDUCATION', grade: 'XIIth GRADE', duration: 'NOVEMBER 2017', cgpa: '6.5/10' },
      { institution: 'KENDRIYA VIDYALAYA', degree: 'CBSE CENTRAL BOARD OF SECONDARY EDUCATION', grade: 'Xth GRADE', duration: 'APRIL 2015', cgpa: '6.5/10' }
    ]
  });
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...profileData });

  const parseResumeText = useCallback((text) => {
    const data = { ...profileData };
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    data.name = lines.find(line => line.includes('Name:'))?.replace('Name:', '').trim() || data.name;
    data.company = lines.find(line => line.includes('Company:'))?.replace('Company:', '').trim() || data.company;
    data.title = lines.find(line => line.includes('Title:'))?.replace('Title:', '').trim() || data.title;
    data.summary = lines.find(line => line.includes('Summary:'))?.replace('Summary:', '').trim() || data.summary;
    data.experiences = lines
      .filter(line => line.includes('Experience:'))
      .map(line => {
        const [company, role, duration, ...desc] = line.replace('Experience:', '').split(',').map(s => s.trim());
        return { company, role, duration, description: desc.join(',') };
      }) || data.experiences;
    data.skills = lines.find(line => line.includes('Skills:'))?.replace('Skills:', '').split(',').map(s => s.trim()) || data.skills;
    data.education = lines
      .filter(line => line.includes('Education:'))
      .map(line => {
        const [institution, degree, duration, cgpa] = line.replace('Education:', '').split(',').map(s => s.trim());
        return { institution, degree, duration, cgpa };
      }) || data.education;
    return data;
  }, [profileData]);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch('/api/v1/profile/upload-resume', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log('Response status:', response.status);
        console.log('Response text:', await response.text()); // Debug raw response
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success && data.data && data.data.file_path) {
          const loadingTask = getDocument(data.data.file_path);
          const pdf = await loadingTask.promise;
          const page = await pdf.getPage(1);
          const textContent = await page.getTextContent();
          const text = textContent.items.map(item => item.str).join(' ');
          const parsedData = parseResumeText(text);
          setFormData(parsedData);
        } else {
          console.warn('No file_path in response:', data);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    if (editMode) fetchResumeData();
  }, [editMode, parseResumeText]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setProfileData({ ...formData });
    setEditMode(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...formData.experiences];
    newExperiences[index][name] = value;
    setFormData(prev => ({ ...prev, experiences: newExperiences }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...formData.education];
    newEducation[index][name] = value;
    setFormData(prev => ({ ...prev, education: newEducation }));
  };

  return (
    <div className="prof-preview-container">
      <Header />
      <section className="prof-preview-content">
        <div className="prof-profile-card">
          <div className="prof-header-section">
            <h1 className="prof-main-heading">PREVIEW & APPLY</h1>
            <button className={`prof-download-button ${editMode ? 'prof-save-button' : ''}`} onClick={editMode ? handleSaveClick : handleEditClick}>
              {editMode ? 'Save' : 'Edit Profile'}
            </button>
          </div>
          <p className="prof-subheading">
            This is how the recruiters will view your profile. Review and edit it before applying.
          </p>
          <div className="prof-profile-header">
            <img
              src="/imageswebsite/imagecircle.png"
              alt="Profile"
              className="prof-profile-avatar"
            />
            <div className="prof-profile-info">
              <h2 className="prof-profile-name">{editMode ? <input name="name" value={formData.name} onChange={handleChange} /> : formData.name}</h2>
              <div className="prof-nebulae-softness">
                <div>
                  <p className="prof-profile-company">{editMode ? <input name="company" value={formData.company} onChange={handleChange} /> : formData.company}</p>
                  <div className="prof-social-links">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <img src="/imageswebsite/lindinone.png" alt="LinkedIn" className="prof-social-icon" />
                    </a>
                    <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
                      <img src="/imageswebsite/be.png" alt="Email" className="prof-social-icon" />
                    </a>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                      <img src="/imageswebsite/github.png" alt="Website" className="prof-social-icon" />
                    </a>
                  </div>
                </div>
                <div className="prof-profile-details">
                  <p className="prof-profile-title">{editMode ? <input name="title" value={formData.title} onChange={handleChange} /> : formData.title}</p>
                  <div className="prof-resume-section">
                    <img src="/imageswebsite/droppciclesend.png" alt="Resume Icon" className="prof-resume-icon" />
                    <p className="prof-resume-text">Resume</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="prof-tabs">
            <button className="prof-tab prof-tab-active">About</button>
            <button className="prof-tab">Work</button>
            <button className="prof-tab">Experience</button>
            <button className="prof-tab">Education</button>
          </div>

          <div className="prof-section">
            <h3 className="prof-section-heading">PROFESSIONAL SUMMARY</h3>
            <p className="prof-section-text">
              {editMode ? <textarea name="summary" value={formData.summary} onChange={handleChange} /> : formData.summary}
            </p>
            <button className="prof-add-more">Add more details</button>
          </div>

          <div className="prof-section">
            <h3 className="prof-section-heading">WORK EXPERIENCE</h3>
            {formData.experiences.map((exp, index) => (
              <div key={index} className="prof-experience-item">
                <div className="prof-experience-details">
                  <h3 className="prof-experience-company">{editMode ? <input name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} /> : exp.company}</h3>
                  <p className="prof-experience-duration">{editMode ? <input name="duration" value={exp.duration} onChange={(e) => handleExperienceChange(index, e)} /> : exp.duration}</p>
                  <p className="prof-experience-description">
                    {editMode ? <input name="description" value={exp.description} onChange={(e) => handleExperienceChange(index, e)} /> : exp.description}
                  </p>
                </div>
                <hr className="prof-horizontal-line" />
              </div>
            ))}
            <button className="prof-add-more">Add more details</button>
          </div>

          <div className="prof-section">
            <h3 className="prof-section-heading">SKILLS</h3>
            <div className="prof-skills-list">
              {editMode ? (
                <input name="skills" value={formData.skills.join(', ')} onChange={handleChange} />
              ) : formData.skills.map((skill, index) => (
                <span key={index} className="prof-skill-tag">{skill}</span>
              ))}
            </div>
            <button className="prof-add-more">Add more details</button>
          </div>

          <div className="prof-section">
            <h3 className="prof-section-heading">EDUCATION</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="prof-education-item">
                <h4 className="prof-education-institution">{editMode ? <input name="institution" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} /> : edu.institution}</h4>
                <p className="prof-education-degree">{editMode ? <input name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} /> : edu.degree}</p>
                <p className="prof-education-duration">{editMode ? <input name="duration" value={edu.duration} onChange={(e) => handleEducationChange(index, e)} /> : edu.duration}</p>
                <p className="prof-education-cgpa">{editMode ? <input name="cgpa" value={edu.cgpa} onChange={(e) => handleEducationChange(index, e)} /> : edu.cgpa}</p>
                <hr className="prof-horizontal-line" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProfilePreview;