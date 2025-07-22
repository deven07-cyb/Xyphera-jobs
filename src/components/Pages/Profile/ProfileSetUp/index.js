// //  import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import Header from '../../ReusableComponents/Header';
// // import Footer from '../../ReusableComponents/Footer';
// // import './ProfileSetup.css';

// // const ProfileSetup = () => {
// //   const navigate = useNavigate();

// //   // State to manage form inputs
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     category: '',
// //     locations: '',
// //     presentAddress: '',
// //     qualification: '',
// //     phoneNumber: '',
// //     skills: '',
// //     bio: '',
// //     contactEmail: '',
// //     contactPhone: '',
// //     officeAddress: '',
// //     subscriptions: { newsletter: true },
// //     notifications: true,
// //     updatePassword: false,
// //     deleteAccount: false,
// //   });

// //   // State to manage uploaded files and their URLs (from API)
// //   const [profilePhoto, setProfilePhoto] = useState(null);
// //   const [resumeFile, setResumeFile] = useState(null);
// //   const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
// //   const [resumeUrl, setResumeUrl] = useState('');

// //   // State for API response feedback
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const [loading, setLoading] = useState(true);

// //   // Fetch employee profile data on component mount
// //   useEffect(() => {
// //     const fetchEmployeeProfile = async () => {
// //       setLoading(true);
// //       setError('');

// //       const token = localStorage.getItem('authToken');
// //       if (!token) {
// //         setError('No authorization token found. Please log in.');
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await fetch('http://107.22.99.147:8080/verified/get-employee-profile', {
// //           method: 'GET',
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             'Content-Type': 'application/json',
// //           },
// //         });

// //         const data = await response.json();

// //         if (!response.ok) {
// //           throw new Error(data.message || '');
// //         }

// //         const parseSubscriptions = (subs) => {
// //           if (!subs) return { newsletter: true };

// //           const isBase64 = (str) => {
// //             try {
// //               return btoa(atob(str)) === str;
// //             } catch (err) {
// //               return false;
// //             }
// //           };

// //           try {
// //             if (typeof subs === 'string' && isBase64(subs)) {
// //               const decoded = atob(subs);
// //               return JSON.parse(decoded);
// //             }
// //             if (typeof subs === 'string') return JSON.parse(subs);
// //             if (typeof subs === 'object') return subs;
// //             return { newsletter: true };
// //           } catch (err) {
// //             console.error('Error parsing subscriptions:', err);
// //             return { newsletter: true };
// //           }
// //         };

// //         setFormData({
// //           firstName: data.first_name || '',
// //           lastName: data.last_name || '',
// //           category: data.category || '',
// //           locations: data.locations || '',
// //           presentAddress: data.present_address || '',
// //           qualification: data.qualification || '',
// //           phoneNumber: data.phone_number || '',
// //           skills: data.skills || '',
// //           bio: data.bio || '',
// //           contactEmail: data.contact_email || '',
// //           contactPhone: data.contact_phone || data.phone_number || '',
// //           officeAddress: data.office_address || '',
// //           subscriptions: parseSubscriptions(data.subscriptions),
// //           notifications: data.notifications !== undefined ? data.notifications : true,
// //           updatePassword: data.update_password !== undefined ? data.update_password : false,
// //           deleteAccount: data.delete_account !== undefined ? data.delete_account : false,
// //         });

// //         setProfilePhotoUrl(data.profile_photo || '');
// //         setResumeUrl(data.resume || '');

// //         console.log('Fetched Profile Data:', data);
// //       } catch (err) {
// //         setError(err.message || '');
// //         console.error('Error:', err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchEmployeeProfile();
// //   }, []);

// //   // Handle input changes for text fields
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   // Handle checkbox changes for boolean fields
// //   const handleCheckboxChange = (e) => {
// //     const { name, checked } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: checked,
// //     }));
// //   };

// //   // Handle subscriptions checkbox (nested object)
// //   const handleSubscriptionsChange = (e) => {
// //     const { name, checked } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       subscriptions: {
// //         ...prevData.subscriptions,
// //         [name]: checked,
// //       },
// //     }));
// //   };

// //   // Handle file uploads
// //   const handleFileUpload = (e, setFile) => {
// //     const file = e.target.files[0];
// //     if (file) setFile(file);
// //   };

// //   // Handle form submission (POST request)
// //   const handleSaveChanges = async () => {
// //     setError('');
// //     setSuccess('');

// //     const token = localStorage.getItem('authToken');
// //     if (!token) {
// //       setError(' ');
// //       return;
// //     }

// //     if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.contactEmail) {
// //       setError('');
// //       return;
// //     }

// //     const formDataToSend = new FormData();
// //     formDataToSend.append('first_name', formData.firstName);
// //     formDataToSend.append('last_name', formData.lastName);
// //     formDataToSend.append('category', formData.category);
// //     formDataToSend.append('locations', formData.locations);
// //     formDataToSend.append('present_address', formData.presentAddress);
// //     formDataToSend.append('qualification', formData.qualification);
// //     formDataToSend.append('phone_number', formData.phoneNumber);
// //     formDataToSend.append('skills', formData.skills);
// //     formDataToSend.append('bio', formData.bio);
// //     formDataToSend.append('contact_email', formData.contactEmail);
// //     formDataToSend.append('contact_phone', formData.phoneNumber);
// //     formDataToSend.append('office_address', formData.officeAddress);
// //     formDataToSend.append('subscriptions', JSON.stringify(formData.subscriptions));
// //     formDataToSend.append('notifications', formData.notifications);
// //     formDataToSend.append('update_password', formData.updatePassword);
// //     formDataToSend.append('delete_account', formData.deleteAccount);

// //     if (profilePhoto) formDataToSend.append('profile_photo', profilePhoto);
// //     if (resumeFile) formDataToSend.append('resume', resumeFile);

// //     try {
// //       const response = await fetch('http://107.22.99.147:8080/verified/create-employee-profile', {
// //         method: 'POST',
// //         headers: { Authorization: `Bearer ${token}` },
// //         body: formDataToSend,
// //       });

// //       const data = await response.json();

// //       if (!response.ok) throw new Error(data.message || 'Failed to create employee profile');

// //       setSuccess('Employee profile updated successfully!');
// //       console.log('API Response:', data);

// //       setTimeout(() => navigate('/'), 2000);
// //     } catch (err) {
// //       setError(err.message || 'An error occurred while updating the profile.');
// //       console.error('Error:', err);
// //     }
// //   };

// //   // Handle cancel action
// //   const handleCancel = () => navigate(-1);

// //   // Handle back button
// //   const handleBack = () => navigate(-1);

// //   return (
// //     <div className="psn-profile-container">
// //       <Header />

// //       {/* Main Content */}
// //       <main className="psn-main-content">
// //         <div style={{position:"relative"}} className="psn-heading-subheading">
// //           <button style={{ color: '#000000', position:"relative" }} className="psn-back-button" onClick={handleBack}>
// //             <img src="/imageswebsite/arrowleft.png" alt="backarrow" /> Back
// //           </button>
// //         </div>

// //         {/* Display loading, success, or error messages */}
// //         {loading && <div  >Loading profile...</div>}
// //         {success && <div  >{success}</div>}
// //         {error && <div >{error}</div>}

// //         {/* Profile Image Section */}
// //         <div className="psn-image-section">
// //           <h1 className="psn-title">Profile Setup</h1>
// //           <div className="psn-image-placeholder">
// //             {profilePhoto ? (
// //               <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="psn-profile-image" />
// //             ) : profilePhotoUrl ? (
// //               <img src={profilePhotoUrl} alt="Profile" className="psn-profile-image" />
// //             ) : (
// //               ''
// //             )}
// //           </div>
// //           <label className="psn-edit-button">
// //             <span className="psn-edit-icon">
// //               <img src="/imageswebsite/pencil-edit-02.png" alt="EditProfile" />
// //             </span>{' '}
// //             Edit Profile
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={(e) => handleFileUpload(e, setProfilePhoto)}
// //               style={{ display: 'none' }}
// //             />
// //           </label>
// //         </div>

// //         {/* Section 1: Basic Details */}
// //         <section className="psn-section">
// //           <h2 className="psn-section-heading">1. Basic Details</h2>
// //           <div className="psn-form-group">
// //             <input
// //               type="text"
// //               name="firstName"
// //               className="psn-input"
// //               placeholder="First Name"
// //               value={formData.firstName}
// //               onChange={handleInputChange}
// //             />
// //             <input
// //               type="text"
// //               name="lastName"
// //               className="psn-input"
// //               placeholder="Last Name"
// //               value={formData.lastName}
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <div className="psn-form-group">
// //             <input
// //               type="text"
// //               name="category"
// //               className="psn-input"
// //               placeholder="Category (e.g., Software)"
// //               value={formData.category}
// //               onChange={handleInputChange}
// //             />
// //             <input
// //               type="text"
// //               name="locations"
// //               className="psn-input"
// //               placeholder="Locations (e.g., Hyderabad,Bangalore)"
// //               value={formData.locations}
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <div className="psn-form-group">
// //             <input
// //               type="text"
// //               name="presentAddress"
// //               className="psn-input"
// //               placeholder="Present Address"
// //               value={formData.presentAddress}
// //               onChange={handleInputChange}
// //             />
// //             <input
// //               type="text"
// //               name="qualification"
// //               className="psn-input"
// //               placeholder="Qualification (e.g., B.Tech)"
// //               value={formData.qualification}
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <div className="psn-form-group psn-single-input">
// //             <input
// //               type="text"
// //               name="phoneNumber"
// //               className="psn-input"
// //               placeholder="Phone Number (e.g., 9876543210)"
// //               value={formData.phoneNumber}
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <div className="psn-form-group psn-single-input">
// //             <input
// //               type="text"
// //               name="skills"
// //               className="psn-input"
// //               placeholder="Skills (e.g., Go,Python)"
// //               value={formData.skills}
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           <div className="psn-form-group psn-resume-group">
// //             <input
// //               type="text"
// //               className="psn-input"
// //               placeholder="Upload Resume (PDF, DOC, DOCX)"
// //               value={resumeFile ? resumeFile.name : resumeUrl ? 'Resume Uploaded' : ''}
// //               disabled
// //             />
// //             {resumeUrl && !resumeFile && (
// //               <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="psn-file-link">
// //                 View Resume
// //               </a>
// //             )}
// //             <label className="psn-upload-button">
// //               +
// //               <input
// //                 type="file"
// //                 accept=".pdf,.doc,.docx"
// //                 onChange={(e) => handleFileUpload(e, setResumeFile)}
// //                 style={{ display: 'none' }}
// //               />
// //             </label>
// //           </div>
// //           <div className="psn-form-group psn-single-input">
// //             <textarea
// //               name="bio"
// //               className="psn-textarea"
// //               placeholder="Bio (e.g., Backend developer with 5 years experience)"
// //               value={formData.bio}
// //               onChange={handleInputChange}
// //             ></textarea>
// //           </div>
// //         </section>

// //         {/* Section 2: Contact Information */}
// //         <section className="psn-section">
// //           <h2 className="psn-section-heading">2. Contact Information</h2>
// //           <div className="psn-form-group">
// //             <input
// //               type="email"
// //               name="contactEmail"
// //               className="psn-input"
// //               placeholder="Contact Email (e.g., john.doe@example.com)"
// //               value={formData.contactEmail}
// //               onChange={handleInputChange}
// //             />
// //             <input
// //               type="text"
// //               name="phoneNumber"
// //               className="psn-input"
// //               placeholder="Phone Number (e.g., 9876543210)"
// //               value={formData.phoneNumber}
// //               onChange={handleInputChange}
// //               disabled
// //             />
// //           </div>
// //           <div className="psn-form-group">
// //             <input
// //               type="text"
// //               name="officeAddress"
// //               className="psn-input"
// //               placeholder="Office Address (e.g., XYZ Tech Park, BLR)"
// //               value={formData.officeAddress}
// //               onChange={handleInputChange}
// //             />
// //             <input
// //               type="text"
// //               name="password"
// //               className="psn-input"
// //               placeholder="password"
// //               value={formData.officeAddress}
// //               onChange={handleInputChange}
// //             />
            
// //           </div>
// //         </section>

// //         {/* Section 3: Account Settings & Preferences */}
// //         <section className="psn-section">
// //           <h2 className="psn-section-heading">3. Account Settings & Preferences</h2>
// //           <div className="psn-form-group">
             
// //               <input
// //                 type="text"
// //                 className="psn-input"
// //                 name="notifications"
// //                 placeholder='Enable Notifications'
// //                 checked={formData.notifications}
// //                 onChange={handleCheckboxChange}
// //               />
             
             
// //               <input
// //                 type="text"
// //                  className="psn-input"
// //                 name="newsletter"
// //                 placeholder='Subscribe to Newsletter'
// //                 checked={formData.subscriptions.newsletter}
// //                 onChange={handleSubscriptionsChange}
// //               />
               
             
// //           </div>
// //           <div className="psn-form-group">
             
// //               <input
// //                 type="text"
// //                  className="psn-input"
// //                 name="updatePassword"
// //                 placeholder='Update Password'
// //                 checked={formData.updatePassword}
// //                 onChange={handleCheckboxChange}
// //               />
               
           
            
// //               <input
// //                 type="text"
// //                  className="psn-input"
// //                 name="deleteAccount"
// //                 placeholder='Delete Account'
// //                 checked={formData.deleteAccount}
// //                 onChange={handleCheckboxChange}
// //               />
      
             
// //           </div>
// //         </section>

// //         {/* Action Buttons */}
// //         <div className="psn-action-buttons">
// //           <button className="psn-cancel-button" onClick={handleCancel}>
// //             Cancel
// //           </button>
// //           <button className="psn-save-button" onClick={handleSaveChanges}>
// //             Save Changes
// //           </button>
// //         </div>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ProfileSetup;  


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../ReusableComponents/Header';
// import Footer from '../../ReusableComponents/Footer';
// import './ProfileSetup.css';

// const ProfileSetup = () => {
//   const navigate = useNavigate();

//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     category: '',
//     locations: '',
//     presentAddress: '',
//     qualification: '',
//     phoneNumber: '',
//     skills: '',
//     bio: '',
//     contactEmail: '',
//     officeAddress: '',
//   });

//   // State for uploaded files and their URLs (from API)
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [resumeFile, setResumeFile] = useState(null);
//   const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
//   const [resumeUrl, setResumeUrl] = useState('');

//   // State for API response feedback
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Fetch employee profile data on component mount
//   useEffect(() => {
//     const fetchEmployeeProfile = async () => {
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         setError('No authorization token found. Please log in.');
//         navigate('/signin'); // Redirect to sign-in page if no token
//         return;
//       }

//       setLoading(true);
//       setError('');

//       try {
//         const response = await fetch('http://127.0.0.1:5000/api/v1/employees/profile', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.message || 'Failed to fetch employee profile');
//         }

//         setFormData({
//           firstName: data.data.first_name || '',
//           lastName: data.data.last_name || '',
//           category: data.data.current_position || '',
//           locations: data.data.city || '',
//           presentAddress: data.data.address || '',
//           qualification: data.data.qualification || '', // No direct backend field
//           phoneNumber: data.data.phone || '',
//           skills: data.data.summary || '',
//           bio: data.data.summary || '',
//           contactEmail: data.data.email || '',
//           officeAddress: data.data.office_address || '', // No direct backend field
//         });

//         setProfilePhotoUrl(data.data.profile_photo || '');
//         setResumeUrl(data.data.resume_url || '');

//         console.log('Fetched Profile Data:', data);
//       } catch (err) {
//         setError(err.message || 'An error occurred while fetching the profile.');
//         console.error('Error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEmployeeProfile();
//   }, [navigate]); // Added navigate to dependency array

//   // Handle input changes for text fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle file uploads
//   const handleFileUpload = (e, setFile) => {
//     const file = e.target.files[0];
//     if (file) setFile(file);
//   };

//   // Handle form submission (PUT request)
//   const handleSaveChanges = async () => {
//     setError('');
//     setSuccess('');

//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       setError('No authorization token found. Please log in.');
//       navigate('/signin'); // Redirect to sign-in page if no token
//       return;
//     }

//     if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.contactEmail) {
//       setError('Please fill in all required fields (First Name, Last Name, Phone Number, Contact Email).');
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append('first_name', formData.firstName);
//     formDataToSend.append('last_name', formData.lastName);
//     formDataToSend.append('phone', formData.phoneNumber);
//     formDataToSend.append('city', formData.locations);
//     formDataToSend.append('address', formData.presentAddress);
//     formDataToSend.append('current_position', formData.category);
//     formDataToSend.append('summary', formData.skills || formData.bio); // Combine skills and bio for summary
//     formDataToSend.append('email', formData.contactEmail);

//     if (profilePhoto) formDataToSend.append('profile_photo', profilePhoto);
//     if (resumeFile) formDataToSend.append('resume_url', resumeFile);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/v1/employees/profile', {
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formDataToSend,
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || 'Failed to update employee profile');

//       setSuccess('Employee profile updated successfully!');
//       console.log('API Response:', data);

//       setTimeout(() => navigate('/'), 2000);
//     } catch (err) {
//       setError(err.message || 'An error occurred while updating the profile.');
//       console.error('Error:', err);
//     }
//   };

//   // Handle cancel action
//   const handleCancel = () => navigate(-1);

//   // Handle back button
//   const handleBack = () => navigate(-1);

//   return (
//     <div className="psn-profile-container">
//       <Header />

//       {/* Main Content */}
//       <main className="psn-main-content">
//         <div style={{ position: "relative" }} className="psn-heading-subheading">
//           <button style={{ color: '#000000', position: "relative" }} className="psn-back-button" onClick={handleBack}>
//             <img src="/imageswebsite/arrowleft.png" alt="backarrow" /> Back
//           </button>
//         </div>

//         {/* Display loading, success, or error messages */}
//         {loading && <div>Loading profile...</div>}
//         {success && <div>{success}</div>}
//         {error && <div>{error}</div>}

//         {/* Profile Image Section */}
//         <div className="psn-image-section">
//           <h1 className="psn-title">Profile Setup</h1>
//           <div className="psn-image-placeholder">
//             {profilePhoto ? (
//               <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="psn-profile-image" />
//             ) : profilePhotoUrl ? (
//               <img src={profilePhotoUrl} alt="Profile" className="psn-profile-image" />
//             ) : (
//               ''
//             )}
//           </div>
//           <label className="psn-edit-button">
//             <span className="psn-edit-icon">
//               <img src="/imageswebsite/pencil-edit-02.png" alt="EditProfile" />
//             </span>{' '}
//             Edit Profile
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleFileUpload(e, setProfilePhoto)}
//               style={{ display: 'none' }}
//             />
//           </label>
//         </div>

//         {/* Section 1: Basic Details */}
//         <section className="psn-section">
//           <h2 className="psn-section-heading">1. Basic Details</h2>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="firstName"
//               className="psn-input"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="lastName"
//               className="psn-input"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="category"
//               className="psn-input"
//               placeholder="Category (e.g., Software)"
//               value={formData.category}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="locations"
//               className="psn-input"
//               placeholder="Locations (e.g., Hyderabad,Bangalore)"
//               value={formData.locations}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="presentAddress"
//               className="psn-input"
//               placeholder="Present Address"
//               value={formData.presentAddress}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="qualification"
//               className="psn-input"
//               placeholder="Qualification (e.g., B.Tech)"
//               value={formData.qualification}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group psn-single-input">
//             <input
//               type="text"
//               name="phoneNumber"
//               className="psn-input"
//               placeholder="Phone Number (e.g., 9876543210)"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group psn-single-input">
//             <input
//               type="text"
//               name="skills"
//               className="psn-input"
//               placeholder="Skills (e.g., Go,Python)"
//               value={formData.skills}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group psn-resume-group">
//             <input
//               type="text"
//               className="psn-input"
//               placeholder="Upload Resume (PDF, DOC, DOCX)"
//               value={resumeFile ? resumeFile.name : resumeUrl ? 'Resume Uploaded' : ''}
//               disabled
//             />
//             {resumeUrl && !resumeFile && (
//               <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="psn-file-link">
//                 View Resume
//               </a>
//             )}
//             <label className="psn-upload-button">
//               +
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => handleFileUpload(e, setResumeFile)}
//                 style={{ display: 'none' }}
//               />
//             </label>
//           </div>
//           <div className="psn-form-group psn-single-input">
//             <textarea
//               name="bio"
//               className="psn-textarea"
//               placeholder="Bio (e.g., Backend developer with 5 years experience)"
//               value={formData.bio}
//               onChange={handleInputChange}
//             ></textarea>
//           </div>
//         </section>

//         {/* Section 2: Contact Information */}
//         <section className="psn-section">
//           <h2 className="psn-section-heading">2. Contact Information</h2>
//           <div className="psn-form-group">
//             <input
//               type="email"
//               name="contactEmail"
//               className="psn-input"
//               placeholder="Contact Email (e.g., john.doe@example.com)"
//               value={formData.contactEmail}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="phoneNumber"
//               className="psn-input"
//               placeholder="Phone Number (e.g., 9876543210)"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               disabled
//             />
//           </div>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="officeAddress"
//               className="psn-input"
//               placeholder="Office Address (e.g., XYZ Tech Park, BLR)"
//               value={formData.officeAddress}
//               onChange={handleInputChange}
//             />
//           </div>
//         </section>

//         {/* Action Buttons */}
//         <div className="psn-action-buttons">
//           <button className="psn-cancel-button" onClick={handleCancel}>
//             Cancel
//           </button>
//           <button className="psn-save-button" onClick={handleSaveChanges}>
//             Save Changes
//           </button>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProfileSetup; 

 


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../ReusableComponents/Header';
// import Footer from '../../ReusableComponents/Footer';
// import './ProfileSetup.css';

// const ProfileSetup = () => {
//   const navigate = useNavigate();

//   // State to manage form inputs
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     category: '',
//     locations: '',
//     presentAddress: '',
//     qualification: '',
//     phoneNumber: '',
//     skills: '',
//     bio: '',
//     contactEmail: '',
//     contactPhone: '',
//     officeAddress: '',
//     subscriptions: { newsletter: true },
//     notifications: true,
//     updatePassword: false,
//     deleteAccount: false,
//   });

//   // State for uploaded files and their URLs (from API)
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [resumeFile, setResumeFile] = useState(null);
//   const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
//   const [resumeUrl, setResumeUrl] = useState('');

//   // State for API response feedback
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [loading, setLoading] = useState(true);

//   // Fetch employee profile data on component mount
//   useEffect(() => {
//     const fetchEmployeeProfile = async () => {
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         setError('No authorization token found. Please log in.');
//         navigate('/signin');
//         return;
//       }

//       setLoading(true);
//       setError('');

//       try {
//         const response = await fetch('http://127.0.0.1:5000/api/v1/employees/profile', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(data.message || 'Failed to fetch employee profile');
//         }

//         // Parse subscriptions field (handle string, base64, or object)
//         const parseSubscriptions = (subs) => {
//           if (!subs) return { newsletter: true };
//           try {
//             if (typeof subs === 'string') {
//               try {
//                 const decoded = atob(subs);
//                 return JSON.parse(decoded);
//               } catch {
//                 return JSON.parse(subs);
//               }
//             }
//             if (typeof subs === 'object') return subs;
//             return { newsletter: true };
//           } catch (err) {
//             console.error('Error parsing subscriptions:', err);
//             return { newsletter: true };
//           }
//         };

//         setFormData({
//           firstName: data.data.first_name || '',
//           lastName: data.data.last_name || '',
//           category: data.data.current_position || '',
//           locations: data.data.city || '',
//           presentAddress: data.data.address || '',
//           qualification: data.data.qualification || '',
//           phoneNumber: data.data.phone || '',
//           skills: data.data.summary || '',
//           bio: data.data.summary || '',
//           contactEmail: data.data.email || '',
//           contactPhone: data.data.contact_phone || data.data.phone || '',
//           officeAddress: data.data.office_address || '',
//           subscriptions: parseSubscriptions(data.data.subscriptions),
//           notifications: data.data.notifications !== undefined ? data.data.notifications : true,
//           updatePassword: data.data.update_password !== undefined ? data.data.update_password : false,
//           deleteAccount: data.data.delete_account !== undefined ? data.data.delete_account : false,
//         });

//         setProfilePhotoUrl(data.data.profile_photo || '');
//         setResumeUrl(data.data.resume_url || '');

//         console.log('Fetched Profile Data:', data);
//       } catch (err) {
//         setError(err.message || 'An error occurred while fetching the profile.');
//         console.error('Error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEmployeeProfile();
//   }, [navigate]);

//   // Handle input changes for text fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle checkbox changes for boolean fields
//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: checked,
//     }));
//   };

//   // Handle subscriptions checkbox (nested object)
//   const handleSubscriptionsChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       subscriptions: {
//         ...prevData.subscriptions,
//         [name]: checked,
//       },
//     }));
//   };

//   // Handle file uploads
//   const handleFileUpload = (e, setFile) => {
//     const file = e.target.files[0];
//     if (file) setFile(file);
//   };

//   // Handle form submission (PUT request)
//   const handleSaveChanges = async () => {
//     setError('');
//     setSuccess('');

//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       setError('No authorization token found. Please log in.');
//       navigate('/signin');
//       return;
//     }

//     if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.contactEmail) {
//       setError('Please fill in all required fields (First Name, Last Name, Phone Number, Contact Email).');
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append('first_name', formData.firstName);
//     formDataToSend.append('last_name', formData.lastName);
//     formDataToSend.append('phone', formData.phoneNumber);
//     formDataToSend.append('city', formData.locations);
//     formDataToSend.append('address', formData.presentAddress);
//     formDataToSend.append('current_position', formData.category);
//     formDataToSend.append('summary', formData.skills || formData.bio);
//     formDataToSend.append('email', formData.contactEmail);
//     if (formData.qualification) formDataToSend.append('qualification', formData.qualification);
//     if (formData.officeAddress) formDataToSend.append('office_address', formData.officeAddress);
//     if (formData.contactPhone) formDataToSend.append('contact_phone', formData.contactPhone);
//     formDataToSend.append('subscriptions', JSON.stringify(formData.subscriptions));
//     formDataToSend.append('notifications', formData.notifications.toString());
//     formDataToSend.append('update_password', formData.updatePassword.toString());
//     formDataToSend.append('delete_account', formData.deleteAccount.toString());
//     if (profilePhoto) formDataToSend.append('profile_photo', profilePhoto);
//     if (resumeFile) formDataToSend.append('resume_url', resumeFile);

//     // Log FormData contents for debugging
//     for (const [key, value] of formDataToSend.entries()) {
//       console.log(`FormData - ${key}:`, value);
//     }

//     try {
//       const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employees/profile', {
//         method: 'PUT',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formDataToSend,
//       });

//       const data = await response.json();
//       console.log('PUT Response:', data);

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to update employee profile');
//       }

//       setSuccess('Employee profile updated successfully!');
//       console.log('API Response:', data);

//       setTimeout(() => navigate('/'), 2000);
//     } catch (err) {
//       setError(err.message || 'An error occurred while updating the profile.');
//       console.error('PUT Error:', err);
//     }
//   };

//   // Handle cancel action
//   const handleCancel = () => navigate(-1);

//   // Handle back button
//   const handleBack = () => navigate(-1);

//   return (
//     <div className="psn-profile-container">
//       <Header />

//       {/* Main Content */}
//       <main className="psn-main-content">
//         <div style={{ position: 'relative' }} className="psn-heading-subheading">
//           <button style={{ color: '#000000', position: 'relative' }} className="psn-back-button" onClick={handleBack}>
//             <img src="/imageswebsite/arrowleft.png" alt="backarrow" /> Back
//           </button>
//         </div>

//         {/* Display loading, success, or error messages */}
//         {loading && <div>Loading profile...</div>}
//         {success && <div>{success}</div>}
//         {error && <div>{error}</div>}

//         {/* Profile Image Section */}
//         <div className="psn-image-section">
//           <h1 className="psn-title">Profile Setup</h1>
//           <div
//             className="psn-image-placeholder"
//             style={{
//               width: '250px',
//               height: '250px',
//               overflow: 'hidden',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               border: '1px solid #ccc',
//               borderRadius: '50%',
//             }}
//           >
//             {profilePhoto ? (
//               <img
//                 src={URL.createObjectURL(profilePhoto)}
//                 alt="Profile"
//                 className="psn-profile-image"
//                 style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//               />
//             ) : profilePhotoUrl ? (
//               <img
//                 src={profilePhotoUrl}
//                 alt="Profile"
//                 className="psn-profile-image"
//                 style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//               />
//             ) : (
//               <div style={{ color: '#999', fontSize: '14px' }}>No Image</div>
//             )}
//           </div>
//           <label className="psn-edit-button">
//             <span className="psn-edit-icon">
//               <img src="/imageswebsite/pencil-edit-02.png" alt="EditProfile" />
//             </span>{' '}
//             Edit Profile
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleFileUpload(e, setProfilePhoto)}
//               style={{ display: 'none' }}
//             />
//           </label>
//         </div>

//         {/* Section 1: Basic Details */}
//         <section className="psn-section">
//           <h2 className="psn-section-heading">1. Basic Details</h2>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="firstName"
//               className="psn-input"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="lastName"
//               className="psn-input"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="category"
//               className="psn-input"
//               placeholder="Category (e.g., Software)"
//               value={formData.category}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="locations"
//               className="psn-input"
//               placeholder="Locations (e.g., Hyderabad,Bangalore)"
//               value={formData.locations}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="presentAddress"
//               className="psn-input"
//               placeholder="Present Address"
//               value={formData.presentAddress}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="qualification"
//               className="psn-input"
//               placeholder="Qualification (e.g., B.Tech)"
//               value={formData.qualification}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group psn-single-input">
//             <input
//               type="text"
//               name="phoneNumber"
//               className="psn-input"
//               placeholder="Phone Number (e.g., 9876543210)"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group psn-single-input">
//             <input
//               type="text"
//               name="skills"
//               className="psn-input"
//               placeholder="Skills (e.g., Go,Python)"
//               value={formData.skills}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group psn-resume-group">
//             <input
//               type="text"
//               className="psn-input"
//               placeholder="Upload Resume (PDF, DOC, DOCX)"
//               value={resumeFile ? resumeFile.name : resumeUrl ? 'Resume Uploaded' : ''}
//               disabled
//             />
//             {resumeUrl && !resumeFile && (
//               <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="psn-file-link">
//                 View Resume
//               </a>
//             )}
//             <label className="psn-upload-button">
//               +
//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => handleFileUpload(e, setResumeFile)}
//                 style={{ display: 'none' }}
//               />
//             </label>
//           </div>
//           <div className="psn-form-group psn-single-input">
//             <textarea
//               name="bio"
//               className="psn-textarea"
//               placeholder="Bio (e.g., Backend developer with 5 years experience)"
//               value={formData.bio}
//               onChange={handleInputChange}
//             ></textarea>
//           </div>
//         </section>

//         {/* Section 2: Contact Information */}
//         <section className="psn-section">
//           <h2 className="psn-section-heading">2. Contact Information</h2>
//           <div className="psn-form-group">
//             <input
//               type="email"
//               name="contactEmail"
//               className="psn-input"
//               placeholder="Contact Email (e.g., john.doe@example.com)"
//               value={formData.contactEmail}
//               onChange={handleInputChange}
//             />
//             <input
//               type="text"
//               name="contactPhone"
//               className="psn-input"
//               placeholder="Contact Phone (e.g., 9876543210)"
//               value={formData.contactPhone}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="psn-form-group">
//             <input
//               type="text"
//               name="officeAddress"
//               className="psn-input"
//               placeholder="Office Address (e.g., XYZ Tech Park, BLR)"
//               value={formData.officeAddress}
//               onChange={handleInputChange}
//             />
//           </div>
//         </section>

//         {/* Section 3: Account Settings & Preferences */}
//         <section className="psn-section">
//           <h2 className="psn-section-heading">3. Account Settings & Preferences</h2>
//           <div className="psn-form-group">
//             <label className="psn-checkbox-label">
//               <input
//                 type="checkbox"
//                 name="notifications"
//                 checked={formData.notifications}
//                 onChange={handleCheckboxChange}
//               />
//               Enable Notifications
//             </label>
//             <label className="psn-checkbox-label">
//               <input
//                 type="checkbox"
//                 name="newsletter"
//                 checked={formData.subscriptions.newsletter}
//                 onChange={handleSubscriptionsChange}
//               />
//               Subscribe to Newsletter
//             </label>
//           </div>
//           <div className="psn-form-group">
//             <label className="psn-checkbox-label">
//               <input
//                 type="checkbox"
//                 name="updatePassword"
//                 checked={formData.updatePassword}
//                 onChange={handleCheckboxChange}
//               />
//               Update Password
//             </label>
//             <label className="psn-checkbox-label">
//               <input
//                 type="checkbox"
//                 name="deleteAccount"
//                 checked={formData.deleteAccount}
//                 onChange={handleCheckboxChange}
//               />
//               Delete Account
//             </label>
//           </div>
//         </section>

//         {/* Action Buttons */}
//         <div className="psn-action-buttons">
//           <button className="psn-cancel-button" onClick={handleCancel}>
//             Cancel
//           </button>
//           <button className="psn-save-button" onClick={handleSaveChanges}>
//             Save Changes
//           </button>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProfileSetup; 



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './ProfileSetup.css';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    category: '',
    locations: '',
    presentAddress: '',
    qualification: '',
    phoneNumber: '',
    skills: '',
    bio: '',
    contactEmail: '',
    contactPhone: '',
    officeAddress: '',
    subscriptions: { newsletter: true },
    notifications: true,
    updatePassword: false,
    deleteAccount: false,
  });
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState('');
  const [resumeUrl, setResumeUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch employee profile data on component mount
  useEffect(() => {
    const fetchEmployeeProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('No authorization token found. Please log in.');
        navigate('/signin');
        return;
      }

      setLoading(true);
      setError('');

      try {
        const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employees/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch employee profile');
        }

        const parseSubscriptions = (subs) => {
          if (!subs) return { newsletter: true };
          try {
            if (typeof subs === 'string') {
              try {
                const decoded = atob(subs);
                return JSON.parse(decoded);
              } catch {
                return JSON.parse(subs);
              }
            }
            if (typeof subs === 'object') return subs;
            return { newsletter: true };
          } catch (err) {
            console.error('Error parsing subscriptions:', err);
            return { newsletter: true };
          }
        };

        setFormData({
          firstName: data.data.first_name || '',
          lastName: data.data.last_name || '',
          category: data.data.current_position || '',
          locations: data.data.city || '',
          presentAddress: data.data.address || '',
          qualification: data.data.qualification || '',
          phoneNumber: data.data.phone || '',
          skills: data.data.summary || '',
          bio: data.data.summary || '',
          contactEmail: data.data.email || '',
          contactPhone: data.data.contact_phone || data.data.phone || '',
          officeAddress: data.data.office_address || '',
          subscriptions: parseSubscriptions(data.data.subscriptions),
          notifications: data.data.notifications !== undefined ? data.data.notifications : true,
          updatePassword: data.data.update_password !== undefined ? data.data.update_password : false,
          deleteAccount: data.data.delete_account !== undefined ? data.data.delete_account : false,
        });

        setProfilePhotoUrl(data.data.profile_photo || '');
        setResumeUrl(data.data.resume_url || '');
        console.log('Fetched Profile Data:', JSON.stringify(data, null, 2));
      } catch (err) {
        setError(err.message || 'An error occurred while fetching the profile.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeProfile();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubscriptionsChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      subscriptions: {
        ...prevData.subscriptions,
        [name]: checked,
      },
    }));
  };

  const handleFileUpload = (e, setFile) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  const handleSaveChanges = async () => {
    setError('');
    setSuccess('');

    const token = localStorage.getItem('authToken');
    if (!token) {
      setError('No authorization token found. Please log in.');
      navigate('/signin');
      return;
    }

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.contactEmail || !formData.locations || !formData.category || !formData.skills) {
      setError('Please fill in all required fields: First Name, Last Name, Phone Number, Contact Email, City, Category, Skills');
      return;
    }

    // Prepare JSON payload
    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phoneNumber,
      email: formData.contactEmail,
      city: formData.locations,
      current_position: formData.category,
      summary: formData.skills || formData.bio,
      address: formData.presentAddress || null,
      qualification: formData.qualification || null,
      contact_phone: formData.contactPhone || null,
      office_address: formData.officeAddress || null,
      subscriptions: formData.subscriptions,
      notifications: formData.notifications,
      update_password: formData.updatePassword,
      delete_account: formData.deleteAccount,
    };

    console.log('Payload:', JSON.stringify(payload, null, 2));

    try {
      const response = await fetch('http://ec2-107-22-99-147.compute-1.amazonaws.com:5000/api/v1/employees/profile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('PUT Response:', JSON.stringify(data, null, 2));

      if (response.ok) {
        setSuccess('Employee profile updated successfully!');
        setTimeout(() => navigate('/'), 2000);
      } else {
        throw new Error(data.message || 'Failed to update employee profile');
      }
    } catch (err) {
      setError(err.message || 'An error occurred while updating the profile.');
      console.error('PUT Error:', err);
    }
  };

  const handleCancel = () => navigate(-1);
  const handleBack = () => navigate(-1);

  return (
    <div className="psn-profile-container">
      <Header />
      <main className="psn-main-content">
        <div style={{ position: 'relative' }} className="psn-heading-subheading">
          <button style={{ color: '#000000', position: 'relative' }} className="psn-back-button" onClick={handleBack}>
            <img src="/imageswebsite/arrowleft.png" alt="backarrow" /> Back
          </button>
        </div>

        {loading && <div>Loading profile...</div>}
        {success && <div className="psn-success-message">{success}</div>}
        {error && <div className="psn-error-message">{error}</div>}

        <div className="psn-image-section">
          <h1 className="psn-title">Profile Setup</h1>
          <div
            className="psn-image-placeholder"
            style={{
              width: '250px',
              height: '250px',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '1px solid #ccc',
              borderRadius: '50%',
            }}
          >
            {profilePhoto ? (
              <img
                src={URL.createObjectURL(profilePhoto)}
                alt="Profile"
                className="psn-profile-image"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            ) : profilePhotoUrl ? (
              <img
                src={profilePhotoUrl}
                alt="Profile"
                className="psn-profile-image"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            ) : (
              <div style={{ color: '#999', fontSize: '14px' }}>No Image</div>
            )}
          </div>
          <label className="psn-edit-button">
            <span className="psn-edit-icon">
              <img src="/imageswebsite/pencil-edit-02.png" alt="EditProfile" />
            </span>{' '}
            Edit Profile
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setProfilePhoto)}
              style={{ display: 'none' }}
            />
          </label>
        </div>

        <section className="psn-section">
          <h2 className="psn-section-heading">1. Basic Details</h2>
          <div className="psn-form-group">
            <input
              type="text"
              name="firstName"
              className="psn-input"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              className="psn-input"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="psn-form-group">
            <input
              type="text"
              name="category"
              className="psn-input"
              placeholder="Category (e.g., Software)"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="locations"
              className="psn-input"
              placeholder="Locations (e.g., Hyderabad,Bangalore)"
              value={formData.locations}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="psn-form-group">
            <input
              type="text"
              name="presentAddress"
              className="psn-input"
              placeholder="Present Address"
              value={formData.presentAddress}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="qualification"
              className="psn-input"
              placeholder="Qualification (e.g., B.Tech)"
              value={formData.qualification}
              onChange={handleInputChange}
            />
          </div>
          <div className="psn-form-group psn-single-input">
            <input
              type="text"
              name="phoneNumber"
              className="psn-input"
              placeholder="Phone Number (e.g., 9876543210)"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="psn-form-group psn-single-input">
            <input
              type="text"
              name="skills"
              className="psn-input"
              placeholder="Skills (e.g., Go,Python)"
              value={formData.skills}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="psn-form-group psn-resume-group">
            <input
              type="text"
              className="psn-input"
              placeholder="Upload Resume (PDF, DOC, DOCX)"
              value={resumeFile ? resumeFile.name : resumeUrl ? 'Resume Uploaded' : ''}
              disabled
            />
            {resumeUrl && !resumeFile && (
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="psn-file-link">
                View Resume
              </a>
            )}
            <label className="psn-upload-button">
              +
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileUpload(e, setResumeFile)}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          <div className="psn-form-group psn-single-input">
            <textarea
              name="bio"
              className="psn-textarea"
              placeholder="Bio (e.g., Backend developer with 5 years experience)"
              value={formData.bio}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </section>

        <section className="psn-section">
          <h2 className="psn-section-heading">2. Contact Information</h2>
          <div className="psn-form-group">
            <input
              type="email"
              name="contactEmail"
              className="psn-input"
              placeholder="Contact Email (e.g., john.doe@example.com)"
              value={formData.contactEmail}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="contactPhone"
              className="psn-input"
              placeholder="Contact Phone (e.g., 9876543210)"
              value={formData.contactPhone}
              onChange={handleInputChange}
            />
          </div>
          <div className="psn-form-group">
            <input
              type="text"
              name="officeAddress"
              className="psn-input"
              placeholder="Office Address (e.g., XYZ Tech Park, BLR)"
              value={formData.officeAddress}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section className="psn-section">
          <h2 className="psn-section-heading">3. Account Settings & Preferences</h2>
          <div className="psn-form-group">
            <label className="psn-checkbox-label">
              <input
                type="checkbox"
                name="notifications"
                checked={formData.notifications}
                onChange={handleCheckboxChange}
              />
              Enable Notifications
            </label>
            <label className="psn-checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.subscriptions.newsletter}
                onChange={handleSubscriptionsChange}
              />
              Subscribe to Newsletter
            </label>
          </div>
          <div className="psn-form-group">
            <label className="psn-checkbox-label">
              <input
                type="checkbox"
                name="updatePassword"
                checked={formData.updatePassword}
                onChange={handleCheckboxChange}
              />
              Update Password
            </label>
            <label className="psn-checkbox-label">
              <input
                type="checkbox"
                name="deleteAccount"
                checked={formData.deleteAccount}
                onChange={handleCheckboxChange}
              />
              Delete Account
            </label>
          </div>
        </section>

        <div className="psn-action-buttons">
          <button className="psn-cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="psn-save-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfileSetup;