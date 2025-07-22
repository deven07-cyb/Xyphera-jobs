//  import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
// import Footer from '../../Pages/ReusableComponents/Footer';
// import './EmployerPostAJob.css';

// const EmployerPostAJob = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     companyLogo: null,
//     jobTitle: '',
//     department: '',
//     jobType: '',
//     location: '',
//     workEnvironment: '',
//     responsibilities: '',
//     experienceRequired: '',
//     skillsRequired: '',
//     shortDescription: '',
//     salaryRange: '',
//     benefits: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'companyLogo' && files[0]) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       console.log('Form submitted:', formData);
//     } catch (error) {
//       console.error('Submission error:', error);
//     }
//     setIsSubmitting(false);
//   };

//   const handlePreview = () => {
//     setShowPreview(!showPreview);
//   };

//   return (
//     <div className="xyj-homepage-wrapper" id="xyj-post-job">
//       <EmployerHeader />
//       <div className="xyj-job-posting-container">
//         <div className="xyj-header-section">
//           <div className="xyj-back-link">
//             <Link to="/home" aria-label="Back to home">
//               <img src="/imageswebsite/arrowleft.png" alt="Back arrow" className="xyj-back-arrow" />
//               <span style={{color:"#000000"}} className="xyj-back-text">Back</span>
//             </Link>
//           </div>
//           <h1 className="xyj-heading-post">Post Your Job</h1>
//         </div>
//         <form className="xyj-job-form" onSubmit={handleSubmit}>
//           <div className="xyj-form-section">
//             <h3 className="xyj-section-title">Company</h3>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="companyName"
//                 placeholder="Company Name"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Company Name"
//               />
//               <input
//                 type="file"
//                 name="companyLogo"
//                 accept="image/*"
//                 onChange={handleInputChange}
//                 aria-label="Company Logo Upload"
//               />
//             </div>
//           </div>

//           <div className="xyj-form-section">
//             <h3 className="xyj-section-title">Job Details</h3>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="jobTitle"
//                 placeholder="Job Title"
//                 value={formData.jobTitle}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Job Title"
//               />
//               <input
//                 type="text"
//                 name="department"
//                 placeholder="Department"
//                 value={formData.department}
//                 onChange={handleInputChange}
//                 aria-label="Department"
//               />
//             </div>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="jobType"
//                 placeholder="Job Type (e.g., Full-time)"
//                 value={formData.jobType}
//                 onChange={handleInputChange}
//                 aria-label="Job Type"
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 aria-label="Location"
//               />
//             </div>
//           </div>

//           <div className="xyj-form-section">
//             <h3 className="xyj-section-title">Job Description</h3>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="workEnvironment"
//                 placeholder="Work Environment (e.g., Remote)"
//                 value={formData.workEnvironment}
//                 onChange={handleInputChange}
//                 aria-label="Work Environment"
//               />
//               <textarea
//                 name="responsibilities"
//                 placeholder="Responsibilities"
//                 value={formData.responsibilities}
//                 onChange={handleInputChange}
//                 aria-label="Responsibilities"
//               />
//             </div>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="experienceRequired"
//                 placeholder="Experience Required"
//                 value={formData.experienceRequired}
//                 onChange={handleInputChange}
//                 aria-label="Experience Required"
//               />
//               <input
//                 type="text"
//                 name="skillsRequired"
//                 placeholder="Skills Required"
//                 value={formData.skillsRequired}
//                 onChange={handleInputChange}
//                 aria-label="Skills Required"
//               />
//             </div>
//             <div className="xyj-form-row full-width">
//               <textarea
//                 name="shortDescription"
//                 placeholder="Short Description"
//                 value={formData.shortDescription}
//                 onChange={handleInputChange}
//                 aria-label="Short Description"
//               />
//             </div>
//           </div>

//           <div className="xyj-form-section">
//             <h3 className="xyj-section-title">Compensation and Benefits</h3>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="salaryRange"
//                 placeholder="Salary Range (e.g., $50k-$70k)"
//                 value={formData.salaryRange}
//                 onChange={handleInputChange}
//                 aria-label="Salary Range"
//               />
//               <input
//                 type="text"
//                 name="benefits"
//                 placeholder="Benefits"
//                 value={formData.benefits}
//                 onChange={handleInputChange}
//                 aria-label="Benefits"
//               />
//             </div>
//           </div>

//           <div className="xyj-form-actions">
//             <button
//               type="button"
//               className="xyj-preview-btn"
//               onClick={handlePreview}
//               disabled={isSubmitting}
//               aria-label="Preview Job Posting"
//             >
//               Preview
//             </button>
//             <button
//               type="submit"
//               className="xyj-submit-btn"
//               disabled={isSubmitting}
//               aria-label="Submit Job Posting"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>
//           </div>
//         </form>

//         {showPreview && (
//           <div className="xyj-preview-container">
//             <h2 className="xyj-preview-title">Job Posting Preview</h2>
//             <div className="xyj-preview-content">
//               <p><strong>Company Name:</strong> {formData.companyName || 'N/A'}</p>
//               <p><strong>Company Logo:</strong> {formData.companyLogo ? formData.companyLogo.name : 'N/A'}</p>
//               <p><strong>Job Title:</strong> {formData.jobTitle || 'N/A'}</p>
//               <p><strong>Department:</strong> {formData.department || 'N/A'}</p>
//               <p><strong>Job Type:</strong> {formData.jobType || 'N/A'}</p>
//               <p><strong>Location:</strong> {formData.location || 'N/A'}</p>
//               <p><strong>Work Environment:</strong> {formData.workEnvironment || 'N/A'}</p>
//               <p><strong>Responsibilities:</strong> {formData.responsibilities || 'N/A'}</p>
//               <p><strong>Experience Required:</strong> {formData.experienceRequired || 'N/A'}</p>
//               <p><strong>Skills Required:</strong> {formData.skillsRequired || 'N/A'}</p>
//               <p><strong>Short Description:</strong> {formData.shortDescription || 'N/A'}</p>
//               <p><strong>Salary Range:</strong> {formData.salaryRange || 'N/A'}</p>
//               <p><strong>Benefits:</strong> {formData.benefits || 'N/A'}</p>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EmployerPostAJob;

  





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
// import Footer from '../../Pages/ReusableComponents/Footer';
// import './EmployerPostAJob.css';

// const EmployerPostAJob = () => {
//   //const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     jobTitle: '',
//     jobType: '',
//     location: '',
//     workEnvironment: '',
//     responsibilities: '',
//     experienceRequired: '',
//     skillsRequired: '',
//     shortDescription: '',
//     salaryRange: '',
//     benefits: '',
//     educationLevel: 'bachelor',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const parseSalaryRange = (salaryRange) => {
//     if (!salaryRange) return { salary_min: 0, salary_max: 0 }; // Default to 0 if empty
//     const cleaned = salaryRange.replace(/[^0-9.-]/g, '');
//     const [min, max] = cleaned.split('-').map((val) => parseFloat(val.trim()));
//     return {
//       salary_min: isNaN(min) ? 0 : min,
//       salary_max: isNaN(max) ? min || 0 : max,
//     };
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       setError('You must be logged in to post a job');
//       setIsSubmitting(false);
//       return;
//     }

//     // Validate required fields
//     if (!formData.jobTitle || !formData.location || !formData.shortDescription || !formData.workEnvironment || !formData.jobType || !formData.experienceRequired) {
//       setError('Please fill in all required fields: Job Title, Location, Description, Job Type, Work Environment, Experience Level');
//       setIsSubmitting(false);
//       return;
//     }

//     // Validate salary range
//     const { salary_min, salary_max } = parseSalaryRange(formData.salaryRange);
//     if (salary_min === 0 && salary_max === 0 && formData.salaryRange) {
//       setError('Please provide a valid salary range (e.g., 50000-70000)');
//       setIsSubmitting(false);
//       return;
//     }

//     // Map formData to API payload
//     const required_skills = formData.skillsRequired
//       ? formData.skillsRequired.split(',').map((skill) => skill.trim()).filter((skill) => skill)
//       : [];

//     const jobData = {
//       title: formData.jobTitle,
//       location: formData.location,
//       employment_type: formData.jobType.toLowerCase(),
//       remote_type: formData.workEnvironment.toLowerCase() === 'remote' ? 'fully_remote' : formData.workEnvironment.toLowerCase(),
//       description: formData.shortDescription,
//       responsibilities: formData.responsibilities || null,
//       required_skills,
//       experience_level: formData.experienceRequired.toLowerCase(),
//       benefits: formData.benefits || null,
//       salary_min: salary_min,
//       salary_max: salary_max,
//       salary_currency: 'USD',
//       salary_type: 'annual',
//       education_level: formData.educationLevel || 'bachelor',
//     };

//     console.log('Payload:', JSON.stringify(jobData, null, 2));

//     const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/jobs/';
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(jobData),
//       });

//       const data = await response.json();
//       console.log('Server Response:', JSON.stringify(data, null, 2));

//       if (response.ok) {
//         alert('Job posted successfully!');
         
//         setFormData({
//           jobTitle: '',
//           jobType: '',
//           location: '',
//           workEnvironment: '',
//           responsibilities: '',
//           experienceRequired: '',
//           skillsRequired: '',
//           shortDescription: '',
//           salaryRange: '',
//           benefits: '',
//           educationLevel: 'bachelor',
//         });
//       } else {
//         const errorMessage = data.details
//           ? `Validation failed: ${JSON.stringify(data.details)}`
//           : data.error || `Failed to post job (Status: ${response.status})`;
//         setError(errorMessage);
//       }
//     } catch (err) {
//       setError('Failed to connect to server. Please try again later.');
//       console.error('Submission error:', err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handlePreview = () => {
//     setShowPreview(!showPreview);
//   };

//   return (
//     <div className="xyj-homepage-wrapper" id="xyj-post-job">
//       <EmployerHeader />
//       <div className="xyj-job-posting-container">
//         <div className="xyj-header-section">
//           <div className="xyj-back-link">
//             <Link to="/employerhomepage" aria-label="Back to home">
//               <img src="/imageswebsite/arrowleft.png" alt="Back arrow" className="xyj-back-arrow" />
//               <span style={{ color: '#000000' }} className="xyj-back-text">
//                 Back
//               </span>
//             </Link>
//           </div>
//           <h1 className="xyj-heading-post">Post Your Job</h1>
//         </div>
//         {error && <p className="xyj-error-message">{error}</p>}
//         <form className="xyj-job-form" onSubmit={handleSubmit}>
//           <div className="xyj-form-section">
//             <h3 className="xyj-section-title">Job Details</h3>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="jobTitle"
//                 placeholder="Job Title"
//                 value={formData.jobTitle}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Job Title"
//               />
//               <select
//                 name="jobType"
//                 value={formData.jobType}
//                 onChange={handleInputChange}
//                 required
//                 className='select123'
//                 aria-label="Job Type"
//               >
//                 <option value="">Select Job Type</option>
//                 <option value="full-time">Full-time</option>
//                 <option value="part-time">Part-time</option>
//                 <option value="contract">Contract</option>
//                 <option value="internship">Internship</option>
//               </select>
//             </div>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location (e.g., Hyderabad)"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Location"
//               />
//               <select
//                 className='select123'
//                 name="workEnvironment"
//                 value={formData.workEnvironment}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Work Environment"
//               >
//                 <option value="">Select Work Environment</option>
//                 <option value="fully_remote">Fully Remote</option>
//                 <option value="onsite">Onsite</option>
//                 <option value="hybrid">Hybrid</option>
//               </select>
//             </div>
//           </div>

//           <div className="xyj-form-section">
//             <h3 className="xyj-section-title">Job Description</h3>
//             <div className="xyj-form-row">
//               <textarea
//                 name="responsibilities"
//                 placeholder="Responsibilities (e.g., Develop software, Collaborate with team)"
//                 value={formData.responsibilities}
//                 onChange={handleInputChange}
//                 aria-label="Responsibilities"
//               />
//               <select
//                 className='select123'
//                 name="experienceRequired"
//                 value={formData.experienceRequired}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Experience Required"
//               >
//                 <option value="">Select Experience Level</option>
//                 <option value="junior">Junior</option>
//                 <option value="mid">Mid</option>
//                 <option value="senior">Senior</option>
//               </select>
//             </div>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="skillsRequired"
//                 placeholder="Skills Required (e.g., JavaScript, Python)"
//                 value={formData.skillsRequired}
//                 onChange={handleInputChange}
//                 aria-label="Skills Required"
//               />
//               <select
//                 className='select123'
//                 name="educationLevel"
//                 value={formData.educationLevel}
//                 onChange={handleInputChange}
//                 aria-label="Education Level"
//               >
//                 <option value="bachelor">Bachelor's Degree</option>
//                 <option value="master">Master's Degree</option>
//                 <option value="phd">PhD</option>
//                 <option value="none">None</option>
//               </select>
//             </div>
//             <div className="xyj-form-row full-width">
//               <textarea
//                 name="shortDescription"
//                 placeholder="Short Description"
//                 value={formData.shortDescription}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Short Description"
//               />
//             </div>
//           </div>

//           <div className="xyj-form-section">
//             <h3 className="xyj-section-title">Compensation and Benefits</h3>
//             <div className="xyj-form-row">
//               <input
//                 type="text"
//                 name="salaryRange"
//                 placeholder="Salary Range (e.g., 50000-70000)"
//                 value={formData.salaryRange}
//                 onChange={handleInputChange}
//                 required
//                 aria-label="Salary Range"
//               />
//               <input
//                 type="text"
//                 name="benefits"
//                 placeholder="Benefits (e.g., Health Insurance, Paid Leave)"
//                 value={formData.benefits}
//                 onChange={handleInputChange}
//                 aria-label="Benefits"
//               />
//             </div>
//           </div>

//           <div className="xyj-form-actions">
//             <button
//               type="button"
//               className="xyj-preview-btn"
//               onClick={handlePreview}
//               disabled={isSubmitting}
//               aria-label="Preview Job Posting"
//             >
//               Preview
//             </button>
//             <button
//               type="submit"
//               className="xyj-submit-btn"
//               disabled={isSubmitting}
//               aria-label="Submit Job Posting"
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </button>
//           </div>
//         </form>

//         {showPreview && (
//           <div className="xyj-preview-container">
//             <h2 className="xyj-preview-title">Job Posting Preview</h2>
//             <div className="xyj-preview-content">
//               <p><strong>Job Title:</strong> {formData.jobTitle || 'N/A'}</p>
//               <p><strong>Job Type:</strong> {formData.jobType || 'N/A'}</p>
//               <p><strong>Location:</strong> {formData.location || 'N/A'}</p>
//               <p><strong>Work Environment:</strong> {formData.workEnvironment || 'N/A'}</p>
//               <p><strong>Responsibilities:</strong> {formData.responsibilities || 'N/A'}</p>
//               <p><strong>Experience Required:</strong> {formData.experienceRequired || 'N/A'}</p>
//               <p><strong>Skills Required:</strong> {formData.skillsRequired || 'N/A'}</p>
//               <p><strong>Short Description:</strong> {formData.shortDescription || 'N/A'}</p>
//               <p><strong>Education Level:</strong> {formData.educationLevel || 'N/A'}</p>
//               <p><strong>Salary Range:</strong> {formData.salaryRange || 'N/A'}</p>
//               <p><strong>Benefits:</strong> {formData.benefits || 'N/A'}</p>
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default EmployerPostAJob;

  
  



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmployerHeader from '../EmployerReusablecomponents/EmployerHeader';
import Footer from '../../Pages/ReusableComponents/Footer';
import './EmployerPostAJob.css';

const EmployerPostAJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobType: '',
    location: '',
    city: '',
    country: 'India', // Default to India as per example
    workEnvironment: '',
    responsibilities: '',
    experienceRequired: '',
    skillsRequired: '',
    shortDescription: '',
    salaryRange: '',
    benefits: '',
    educationLevel: 'bachelor',
    categoryId: 2, // Default to 2 as per example (Sales & Marketing)
    applicationMethod: 'external', // Default as per example
    autoCloseAfterDeadline: true, // Default as per example
    showSalary: false, // Default as per example
    status: 'active', // Default as per example
    priority: 'low', // Default as per example
    salaryCurrency: 'INR', // Default as per example
    salaryType: 'monthly', // Default as per example
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const parseSalaryRange = (salaryRange) => {
    if (!salaryRange) return { salary_min: 0, salary_max: 0 };
    const cleaned = salaryRange.replace(/[^0-9.-]/g, '');
    const [min, max] = cleaned.split('-').map((val) => parseFloat(val.trim()));
    return {
      salary_min: isNaN(min) ? 0 : min,
      salary_max: isNaN(max) ? min || 0 : max,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('You must be logged in to post a job');
      setIsSubmitting(false);
      return;
    }

    // Validate required fields
    if (!formData.jobTitle || !formData.location || !formData.city || !formData.country || !formData.shortDescription || 
        !formData.workEnvironment || !formData.jobType || !formData.experienceRequired) {
      setError('Please fill in all required fields: Job Title, Location, City, Country, Description, Job Type, Work Environment, Experience Level');
      setIsSubmitting(false);
      return;
    }

    // Validate salary range
    const { salary_min, salary_max } = parseSalaryRange(formData.salaryRange);
    if (salary_min === 0 && salary_max === 0 && formData.salaryRange) {
      setError('Please provide a valid salary range (e.g., 30000-50000)');
      setIsSubmitting(false);
      return;
    }

    // Parse skills into the required array format
    const skills = formData.skillsRequired
      ? formData.skillsRequired.split(',').map((skill) => {
          const [skillName, years] = skill.trim().split(':');
          return {
            skill_name: skillName.trim(),
            skill_category: skillName.includes('Research') ? 'soft' : 'technical', // Simple heuristic
            proficiency_level: years >= 3 ? 'advanced' : 'intermediate',
            years_experience: parseInt(years) || 2,
            is_required: true,
          };
        })
      : [];

    const jobData = {
      title: formData.jobTitle,
      description: formData.shortDescription,
      city: formData.city,
      country: formData.country,
      location: formData.location,
      employment_type: formData.jobType.toLowerCase(),
      experience_level: formData.experienceRequired.toLowerCase(),
      education_level: formData.educationLevel,
      salary_min: salary_min,
      salary_max: salary_max,
      salary_currency: formData.salaryCurrency,
      salary_type: formData.salaryType,
      remote_type: formData.workEnvironment.toLowerCase() === 'remote' ? 'fully_remote' : formData.workEnvironment.toLowerCase(),
      priority: formData.priority,
      category_id: parseInt(formData.categoryId),
      application_method: formData.applicationMethod,
      auto_close_after_deadline: formData.autoCloseAfterDeadline,
      show_salary: formData.showSalary,
      status: formData.status,
      skills: skills,
      responsibilities: formData.responsibilities || null,
      benefits: formData.benefits || null,
    };

    console.log('Payload:', JSON.stringify(jobData, null, 2));

    const apiUrl = 'http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/jobs/';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();
      console.log('Server Response:', JSON.stringify(data, null, 2));

      if (response.ok) {
        alert('Job posted successfully!');
        setFormData({
          jobTitle: '',
          jobType: '',
          location: '',
          city: '',
          country: 'India',
          workEnvironment: '',
          responsibilities: '',
          experienceRequired: '',
          skillsRequired: '',
          shortDescription: '',
          salaryRange: '',
          benefits: '',
          educationLevel: 'bachelor',
          categoryId: 2,
          applicationMethod: 'external',
          autoCloseAfterDeadline: true,
          showSalary: false,
          status: 'active',
          priority: 'low',
          salaryCurrency: 'INR',
          salaryType: 'monthly',
        });
      } else {
        const errorMessage = data.details
          ? `Validation failed: ${JSON.stringify(data.details)}`
          : data.error || `Failed to post job (Status: ${response.status})`;
        setError(errorMessage);
      }
    } catch (err) {
      setError('Failed to connect to server. Please try again later.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <div className="xyj-homepage-wrapper" id="xyj-post-job">
      <EmployerHeader />
      <div className="xyj-job-posting-container">
        <div className="xyj-header-section">
          <div className="xyj-back-link">
            <Link to="/employerhomepage" aria-label="Back to home">
              <img src="/imageswebsite/arrowleft.png" alt="Back arrow" className="xyj-back-arrow" />
              <span style={{ color: '#000000' }} className="xyj-back-text">
                Back
              </span>
            </Link>
          </div>
          <h1 className="xyj-heading-post">Post Your Job</h1>
        </div>
        {error && <p className="xyj-error-message">{error}</p>}
        <form className="xyj-job-form" onSubmit={handleSubmit}>
          <div className="xyj-form-section">
            <h3 className="xyj-section-title">Job Details</h3>
            <div className="xyj-form-row">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleInputChange}
                required
                aria-label="Job Title"
              />
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                required
                className='select123'
                aria-label="Job Type"
              >
                <option value="">Select Job Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div className="xyj-form-row">
              <input
                type="text"
                name="location"
                placeholder="Location (e.g., Pune)"
                value={formData.location}
                onChange={handleInputChange}
                required
                aria-label="Location"
              />
              <input
                type="text"
                name="city"
                placeholder="City (e.g., Pune)"
                value={formData.city}
                onChange={handleInputChange}
                required
                aria-label="City"
              />
            </div>
            <div className="xyj-form-row">
              <input
                type="text"
                name="country"
                placeholder="Country (e.g., India)"
                value={formData.country}
                onChange={handleInputChange}
                required
                aria-label="Country"
              />
              <select
                className='select123'
                name="workEnvironment"
                value={formData.workEnvironment}
                onChange={handleInputChange}
                required
                aria-label="Work Environment"
              >
                <option value="">Select Work Environment</option>
                <option value="fully_remote">Fully Remote</option>
                <option value="onsite">Onsite</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="xyj-form-section">
            <h3 className="xyj-section-title">Job Description</h3>
            <div className="xyj-form-row">
              <textarea
                name="responsibilities"
                placeholder="Responsibilities (e.g., Develop software, Collaborate with team)"
                value={formData.responsibilities}
                onChange={handleInputChange}
                aria-label="Responsibilities"
              />
              <select
                className='select123'
                name="experienceRequired"
                value={formData.experienceRequired}
                onChange={handleInputChange}
                required
                aria-label="Experience Required"
              >
                <option value="">Select Experience Level</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div className="xyj-form-row">
              <input
                type="text"
                name="skillsRequired"
                placeholder="Skills Required (e.g., Figma:2, User Research:2)"
                value={formData.skillsRequired}
                onChange={handleInputChange}
                aria-label="Skills Required"
              />
              <select
                className='select123'
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                aria-label="Education Level"
              >
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="none">None</option>
              </select>
            </div>
            <div className="xyj-form-row full-width">
              <textarea
                name="shortDescription"
                placeholder="Short Description"
                value={formData.shortDescription}
                onChange={handleInputChange}
                required
                aria-label="Short Description"
              />
            </div>
          </div>

          <div className="xyj-form-section">
            <h3 className="xyj-section-title">Compensation and Benefits</h3>
            <div className="xyj-form-row">
              <input
                type="text"
                name="salaryRange"
                placeholder="Salary Range (e.g., 30000-50000)"
                value={formData.salaryRange}
                onChange={handleInputChange}
                required
                aria-label="Salary Range"
              />
              <input
                type="text"
                name="benefits"
                placeholder="Benefits (e.g., Health Insurance, Paid Leave)"
                value={formData.benefits}
                onChange={handleInputChange}
                aria-label="Benefits"
              />
            </div>
          </div>

          <div className="xyj-form-actions">
            <button
              type="button"
              className="xyj-preview-btn"
              onClick={handlePreview}
              disabled={isSubmitting}
              aria-label="Preview Job Posting"
            >
              Preview
            </button>
            <button
              type="submit"
              className="xyj-submit-btn"
              disabled={isSubmitting}
              aria-label="Submit Job Posting"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {showPreview && (
          <div className="xyj-preview-container">
            <h2 className="xyj-preview-title">Job Posting Preview</h2>
            <div className="xyj-preview-content">
              <p><strong>Job Title:</strong> {formData.jobTitle || 'N/A'}</p>
              <p><strong>Job Type:</strong> {formData.jobType || 'N/A'}</p>
              <p><strong>Location:</strong> {formData.location || 'N/A'}</p>
              <p><strong>City:</strong> {formData.city || 'N/A'}</p>
              <p><strong>Country:</strong> {formData.country || 'N/A'}</p>
              <p><strong>Work Environment:</strong> {formData.workEnvironment || 'N/A'}</p>
              <p><strong>Responsibilities:</strong> {formData.responsibilities || 'N/A'}</p>
              <p><strong>Experience Required:</strong> {formData.experienceRequired || 'N/A'}</p>
              <p><strong>Skills Required:</strong> {formData.skillsRequired || 'N/A'}</p>
              <p><strong>Short Description:</strong> {formData.shortDescription || 'N/A'}</p>
              <p><strong>Education Level:</strong> {formData.educationLevel || 'N/A'}</p>
              <p><strong>Salary Range:</strong> {formData.salaryRange || 'N/A'}</p>
              <p><strong>Benefits:</strong> {formData.benefits || 'N/A'}</p>
              <p><strong>Category ID:</strong> {formData.categoryId || 'N/A'}</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EmployerPostAJob;