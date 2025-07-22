 import React, { useState } from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './ResumeBuilder.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { FiAlignLeft } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { TbWorldWww } from "react-icons/tb";

const MemoizedFooter = React.memo(Footer);

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    firstName: 'AHMDD',
    lastName: 'SAAH',
    jobTitle: 'Marketing Manager',
    email: 'hello@ahmddsaah.com',
    phone: '+1 424-429-7940',
    city: 'Any City',
    country: '',
    linkedIn: 'www.ahmddsaah.com',
    profile: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    workExperience: [
      {
        title: 'Marketing Manager & Specialist',
        company: 'Borcellie Studio',
        duration: '2020 - Present',
        description: 'Formulate and implement detailed marketing strategies and initiatives that support the company’s mission and objectives. Guide, inspire, and lead the marketing team, promoting a collaborative and performance-oriented culture. Ensure uniformity of the brand across marketing platforms and materials.',
      },
      {
        title: 'Marketing Manager & Specialist',
        company: 'Fauget Studio',
        duration: '2015 - 2020',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      },
      {
        title: 'Marketing Manager & Specialist',
        company: 'Studio Showde',
        duration: '2014 - 2015',
        description: 'Formulate and implement detailed marketing strategies and initiatives that support the company’s mission and objectives. Guide, inspire, and lead the marketing team, promoting a collaborative and performance-oriented culture. Ensure uniformity of the brand across marketing platforms and materials.',
      },
    ],
    education: [
      {
        degree: 'Master of Business Management',
        institution: 'School of Business | Wardire University',
        duration: '2018 - 2020',
      },
    ],
    skills: [
      'Strategic Planning',
      'Problem Solving',
      'Crisis Management',
      'Creative Thinking',
      'Data Analysis',
      'Brand Development',
      'Negotiation',
      'Customer Orientation',
      'Adaptability to Change',
    ],
    languages: ['English (Fluent)'],
    reference: {
      name: 'Estelle Darcy',
      company: 'Wardire Inc. / CTO',
      phone: '+124-426-7894',
      email: 'hello@ahmddsaah.com',
    },
  });

  const [expandedSections, setExpandedSections] = useState({
    personalDetails: false,
    contactDetails: false,
    professionalSummary: false,
    workExperience: false,
    education: false,
    skills: false,
    languages: false,
    reference: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (section, index, field, value) => {
    setFormData((prev) => {
      const updatedArray = [...prev[section]];
      updatedArray[index] = { ...updatedArray[index], [field]: value };
      return { ...prev, [section]: updatedArray };
    });
  };

  const handleAddItem = (section) => {
    setFormData((prev) => {
      const newItem = section === 'workExperience'
        ? { title: '', company: '', duration: '', description: '' }
        : section === 'education'
          ? { degree: '', institution: '', duration: '' }
          : section === 'skills' || section === 'languages'
            ? ''
            : {};
      return {
        ...prev,
        [section]: [...prev[section], newItem],
      };
    });
  };

  const handleRemoveItem = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="resume-builder-container">
      <Header />
      <div className="resume-builder-content">
        {/* Left Sidebar: Form */}
        <div className="resume-form">
          {/* Personal Details */}
          <div className={`form-section ${expandedSections.personalDetails ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Personal Details</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('personalDetails')}>
                  <img src={expandedSections.personalDetails ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.personalDetails && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Personal Details</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                <div className="sectiondivs">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sectiondivs">
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Contact Details */}
          <div className={`form-section ${expandedSections.contactDetails ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Contact Details</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('contactDetails')}>
                  <img src={expandedSections.contactDetails ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.contactDetails && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Contact Details</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                <div className="sectiondivs">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sectiondivs">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sectiondivs">
                  <input
                    type="text"
                    name="linkedIn"
                    placeholder="LinkedIn Profile"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Professional Summary */}
          <div className={`form-section ${expandedSections.professionalSummary ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Professional Summary</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('professionalSummary')}>
                  <img src={expandedSections.professionalSummary ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.professionalSummary && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Professional Summary</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                <textarea
                  name="profile"
                  placeholder="Professional Summary"
                  value={formData.profile}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>

          {/* Work Experience */}
          <div className={`form-section ${expandedSections.workExperience ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Work Experience</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('workExperience')}>
                  <img src={expandedSections.workExperience ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.workExperience && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Work Experience</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                {formData.workExperience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <input
                      type="text"
                      placeholder="Title"
                      value={exp.title}
                      onChange={(e) => handleArrayInputChange('workExperience', index, 'title', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => handleArrayInputChange('workExperience', index, 'company', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., 2020 - Present)"
                      value={exp.duration}
                      onChange={(e) => handleArrayInputChange('workExperience', index, 'duration', e.target.value)}
                    />
                    <textarea
                      placeholder="Description"
                      value={exp.description}
                      onChange={(e) => handleArrayInputChange('workExperience', index, 'description', e.target.value)}
                    />
                    <button onClick={() => handleRemoveItem('workExperience', index)}>Remove</button>
                  </div>
                ))}
                <button onClick={() => handleAddItem('workExperience')}>Add Experience</button>
              </div>
            )}
          </div>

          {/* Education */}
          <div className={`form-section ${expandedSections.education ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Education</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('education')}>
                  <img src={expandedSections.education ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.education && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Education</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                {formData.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <input
                      type="text"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => handleArrayInputChange('education', index, 'degree', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Institution"
                      value={edu.institution}
                      onChange={(e) => handleArrayInputChange('education', index, 'institution', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Duration (e.g., 2018 - 2020)"
                      value={edu.duration}
                      onChange={(e) => handleArrayInputChange('education', index, 'duration', e.target.value)}
                    />
                    <button onClick={() => handleRemoveItem('education', index)}>Remove</button>
                  </div>
                ))}
                <button onClick={() => handleAddItem('education')}>Add Education</button>
              </div>
            )}
          </div>

          {/* Skills */}
          <div className={`form-section ${expandedSections.skills ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Skills</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('skills')}>
                  <img src={expandedSections.skills ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.skills && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Skills</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <input
                      type="text"
                      placeholder="Skill"
                      value={skill}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[index] = e.target.value;
                        setFormData({ ...formData, skills: newSkills });
                      }}
                    />
                    <button onClick={() => handleRemoveItem('skills', index)}>Remove</button>
                  </div>
                ))}
                <button onClick={() => handleAddItem('skills')}>Add Skill</button>
              </div>
            )}
          </div>

          {/* Languages */}
          <div className={`form-section ${expandedSections.languages ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Languages</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('languages')}>
                  <img src={expandedSections.languages ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.languages && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Languages</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                {formData.languages.map((lang, index) => (
                  <div key={index} className="language-item">
                    <input
                      type="text"
                      placeholder="Language"
                      value={lang}
                      onChange={(e) => {
                        const newLanguages = [...formData.languages];
                        newLanguages[index] = e.target.value;
                        setFormData({ ...formData, languages: newLanguages });
                      }}
                    />
                    <button onClick={() => handleRemoveItem('languages', index)}>Remove</button>
                  </div>
                ))}
                <button onClick={() => handleAddItem('languages')}>Add Language</button>
              </div>
            )}
          </div>

          {/* Reference */}
          <div className={`form-section ${expandedSections.reference ? "form-section-details-two" : "form-section-details"}`}>
            <div className="section-header">
              <h3>Reference</h3>
              <div className="personalDetailsdatacontainers">
                <div className="personalDetailsdatacontainers-one">
                  <img src="/imageswebsite/eye.png" alt="up" />
                </div>
                <div className="personalDetailsdatacontainers-one">
                  <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                </div>
                <div className="personalDetailsdatacontainers-one" onClick={() => toggleSection('reference')}>
                  <img src={expandedSections.reference ? "/imageswebsite/up.png" : "/imageswebsite/downbelow.png"} alt="toggle-icon" />
                </div>
              </div>
            </div>
            {expandedSections.reference && (
              <div className="section-content">
                <div style={{ background: "none" }} className="section-header">
                  <h4 style={{ color: "#033E8A" }}>Reference</h4>
                  <div className="BsThreeDotsVertical">
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} />
                    <BsThreeDotsVertical style={{ color: "#033E8A" }} className="BsThreeDotsVerticalicon" />
                  </div>
                </div>
                <input
                  type="text"
                  name="reference.name"
                  placeholder="Name"
                  value={formData.reference.name}
                  onChange={(e) => setFormData({ ...formData, reference: { ...formData.reference, name: e.target.value } })}
                />
                <input
                  type="text"
                  name="reference.company"
                  placeholder="Company"
                  value={formData.reference.company}
                  onChange={(e) => setFormData({ ...formData, reference: { ...formData.reference, company: e.target.value } })}
                />
                <input
                  type="text"
                  name="reference.phone"
                  placeholder="Phone"
                  value={formData.reference.phone}
                  onChange={(e) => setFormData({ ...formData, reference: { ...formData.reference, phone: e.target.value } })}
                />
                <input
                  type="email"
                  name="reference.email"
                  placeholder="Email"
                  value={formData.reference.email}
                  onChange={(e) => setFormData({ ...formData, reference: { ...formData.reference, email: e.target.value } })}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Preview: Resume */}
        <div className="resume-preview">
          <div className="preview-header">
            <h4 className="askai">ASK AI</h4>
            <button style={{ background: "#033E8A", color: "white" }} className="selectbutton">Select Template</button>
            <button><img src="/imageswebsite/AAAAAAAAAAAAAAAAAAAAAAAA.png" alt="upf" /></button>
            <button><img src="/imageswebsite/TTTTTT.png" alt="upf" /></button>
            <button><MdOutlineFormatLineSpacing style={{ color: "#033E8A" }} /></button>
            <button><FiAlignLeft style={{ color: "#033E8A" }} /></button>
            <button><img src="/imageswebsite/tangk.png" alt="upf" /></button>
            <button><img src="/imageswebsite/black2.png" alt="upf" /></button>
            <button style={{ background: "#033E8A", color: "white", gap: "10px" }} className="Downloadone">
              <img src="/imageswebsite/download.png" alt="upf" />Download
            </button>
          </div>
          <div className="preview-content">
            <h1 className="honeheading">{`${formData.firstName} ${formData.lastName}`}</h1>
            <h2>{formData.jobTitle}</h2>
            <hr className="hrcurve" />

            {/* Left Column Content */}
            <div className="resume-columns">
              <div className="left-column">
                {/* Contact Section */}
                <div className="preview-section">
                  <h3>CONTACT</h3>
                  <hr className="hrcurve" />
                  <p><FaPhone /> {formData.phone}</p>
                  <p><IoMail /> {formData.email}</p>
                  <p><ImLocation /> {formData.city}, {formData.country}</p>
                  <p><TbWorldWww /> {formData.linkedIn}</p>
                </div>

                {/* Skills Section */}
                <div className="preview-section">
                  <h3>SKILLS</h3>
                  <hr className="hrcurve" />
                  <ul>
                    {formData.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>

                {/* Languages Section */}
                <div className="preview-section">
                  <h3>LANGUAGES</h3>
                  <hr className="hrcurve" />
                  <ul>
                    {formData.languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                </div>

                {/* Reference Section */}
                <div className="preview-section">
                  <h3>REFERENCE</h3>
                  <hr className="hrcurve" />
                  <p>{formData.reference.name}</p>
                  <p>{formData.reference.company}</p>
                  <p>Phone: {formData.reference.phone}</p>
                  <p>Email: {formData.reference.email}</p>
                </div>
              </div>

              {/* Right Column Content */}
              <div className="right-column">
                {/* Profile Section */}
                <div className="preview-section timeline">
                  <div className="timeline-container">
                    <div className="timeline-header">
                      <div className="timeline-icon"><FaUserCircle /></div>
                      <h3>PROFILE 👤</h3>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-content">
                        <p>{formData.profile}</p>
                      </div>
                    </div>
                  </div>
                  <hr className="hrcurve" />
                </div>

                {/* Work Experience Section */}
                <div className="preview-section timeline">
                  <div className="timeline-container">
                    <div className="timeline-header">
                      <div className="timeline-icon"><FaUserCircle /></div>
                      <h3>WORK EXPERIENCE <FaUserCircle /></h3>
                    </div>
                    {formData.workExperience.map((exp, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-content">
                          <h4>{exp.title} - {exp.company}</h4>
                          <p><strong>Duration:</strong> {exp.duration}</p>
                          <p>{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr className="hrcurve" />
                </div>

                {/* Education Section */}
                <div className="preview-section timeline">
                  <div className="timeline-container">
                    <div className="timeline-header">
                      <div className="timeline-icon">🎓</div>
                      <h3>EDUCATION 🎓</h3>
                    </div>
                    {formData.education.map((edu, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-content">
                          <h4>{edu.degree}</h4>
                          <p><strong>Institution:</strong> {edu.institution}</p>
                          <p><strong>Duration:</strong> {edu.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <hr className="hrcurve" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MemoizedFooter />
    </div>
  );
};

export default ResumeBuilder;