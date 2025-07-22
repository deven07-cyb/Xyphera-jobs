
// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom'; // For redirecting to login
// import './ResumeUpload.css';
// import Footer from '../../ReusableComponents/Footer';

// // SVG Icon for the close button
// const CloseIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M18 6L6 18" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M6 6L18 18" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

// const ResumeUpload = () => {
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const navigate = useNavigate(); // For redirecting to login

//   // Handle file selection
//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setUploading(true);
//       uploadFile(selectedFile);
//     }
//   };

//   // Handle file removal
//   const handleRemoveFile = () => {
//     setFile(null);
//     setUploading(false);
//     setProgress(0);
//     setUploadStatus('');
//   };

//   // Upload file to backend
//   const uploadFile = async (file) => {
//     const token = localStorage.getItem('authToken');
//     if (!token) {
//       toast.error('You must be logged in to upload a resume. Redirecting to login...', {
//         position: 'top-right',
//         autoClose: 3000,
//       });
//       setUploading(false);
//       setProgress(0);
//       setTimeout(() => navigate('/login'), 3000); // Redirect to login page
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/api/v1/profile/upload-resume', {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setUploadStatus('Upload successful!');
//         setProgress(100);
//         toast.success(`Your resume "${result.data?.filename || file.name}" was uploaded successfully!`, {
//           position: 'top-right',
//           autoClose: 5000,
//         });
//         if (result.data && result.data.filename) {
//           setFile({ ...file, uploadedFilename: result.data.filename });
//         }
//       } else {
//         const error = await response.json();
//         if (response.status === 401) {
//           toast.error('Session expired. Please log in again.', {
//             position: 'top-right',
//             autoClose: 3000,
//           });
//           setTimeout(() => navigate('/login'), 3000); // Redirect to login
//         } else {
//           toast.error(`Upload failed: ${error.message || 'Server error'}`, {
//             position: 'top-right',
//             autoClose: 5000,
//           });
//         }
//         setUploadStatus(`Upload failed: ${error.message || 'Server error'}`);
//         setProgress(0);
//       }
//     } catch (error) {
//       toast.error(`Upload error: ${error.message}`, {
//         position: 'top-right',
//         autoClose: 5000,
//       });
//       setUploadStatus(`Upload error: ${error.message}`);
//       setProgress(0);
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Simulate upload progress (0% to 100%)
//   useEffect(() => {
//     let progressValue = 0;
//     if (uploading && progress < 100) {
//       const interval = setInterval(() => {
//         progressValue += 10;
//         if (progressValue > 100) progressValue = 100;
//         setProgress(progressValue);
//         if (progressValue >= 100) {
//           clearInterval(interval);
//         }
//       }, 500);
//       return () => clearInterval(interval);
//     }
//   }, [uploading, progress]);

//   return (
//     <div>
//       <ToastContainer />
//       <div className="resume-upload-container">
//         {/* Header */}
//         <div className="resume-upload-header">
//           <h2 className="reasumeheading">Resume Upload</h2>
//         </div>
//         <div className="header-buttons">
//           <button className="cancel-btn" onClick={() => navigate('/dashboard')}>
//             Cancel
//           </button>
//           <button className="save-btn" disabled={!file || uploading} onClick={handleFileChange}>
//             {uploading ? 'Uploading...' : 'Save Changes'}
//           </button>
//         </div>

//         {/* Upload Area */}
//         <div className="upload-area">
//           <div className="upload-area-div">
//             <div className="upload-icon">
//               <img src="/imageswebsite/resumeicon.png" alt="resumeicon" />
//               <img src="/imageswebsite/crossicon.png" alt="resumeicon" />
//             </div>
//             <p className="upload-title">Upload files</p>
//             <p className="upload-subtitle">Select and upload the files of your choice</p>
//           </div>
//           <hr className="hrrrrrrrrr" />

//           <div className="upload-box">
//             <img src="/imageswebsite/iconsmallresumefile.png" alt="resumeicon" />
//             <p className="upload-instruction">Choose a file or drag & drop it here</p>
//             <p className="upload-formats">JPEG, PNG, PDF, and MP4 formats, up to 50MB</p>
//             <label className="browse-btn">
//               {uploading ? 'Uploading...' : 'Browse File'}
//               <input
//                 type="file"
//                 accept=".jpeg,.png,.pdf,.mp4"
//                 onChange={handleFileChange}
//                 hidden
//                 disabled={uploading}
//               />
//             </label>
//           </div>
//         </div>

//         {/* Uploading Progress */}
//         {file && (
//           <div className="uploading-file">
//             <div className="file-info">
//               <img src="/imageswebsite/pdfffffffff.png" alt="pdffffff" />
//               <div className="file-details">
//                 <p className="file-name">{file.name}</p>
//                 <p className="file-size">
//                   {Math.round(file.size / 1024)} KB • {uploading ? 'Uploading...' : uploadStatus || 'Selected'}
//                 </p>
//                 {uploading && (
//                   <div className="progress-bar">
//                     <div className="progress" style={{ width: `${progress}%` }}></div>
//                   </div>
//                 )}
//                 {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
//               </div>
//             </div>
//             <button className="remove-file-btn" onClick={handleRemoveFile}>
//               <CloseIcon />
//             </button>
//           </div>
//         )}

//         {/* Continue Button */}
//         <div className="continue-btn-container">
//           <button
//             className="continue-btn"
//             disabled={uploading || !file || uploadStatus !== 'Upload successful!'}
//             onClick={() => navigate('/dashboard')}
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ResumeUpload;  

 
 


import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './ResumeUpload.css';
import Footer from '../../ReusableComponents/Footer';

// SVG Icon for the close button
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6L18 18" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState('');
  const [applicationData, setApplicationData] = useState({
    job_id: '',
    resume_id: '',
    cover_letter: '',
  });
  const navigate = useNavigate();

  // Handle file selection and trigger upload
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploading(true);
      setProgress(0);
      setUploadStatus('');
      uploadFile(selectedFile);
    }
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setFile(null);
    setUploading(false);
    setProgress(0);
    setUploadStatus('');
    setApplicationData((prev) => ({ ...prev, resume_id: '' }));
  };

  // Upload file to backend
  const uploadFile = async (file) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('You must be logged in to upload a resume. Redirecting to login...', {
        position: 'top-right',
        autoClose: 3000,
      });
      setUploading(false);
      setProgress(0);
      setTimeout(() => navigate('/login'), 3000);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/v1/profile/upload-resume', {  // Changed to localhost:5000
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
        credentials: 'include', // Include cookies if backend uses them
      });

      const result = await response.json();
      if (response.ok) {
        setUploadStatus('Upload successful!');
        setProgress(100);
        toast.success(`Your resume "${result.data?.filename || file.name}" was uploaded successfully!`, {
          position: 'top-right',
          autoClose: 5000,
        });
        setApplicationData((prev) => ({ ...prev, resume_id: result.data.resume_id }));
      } else {
        if (response.status === 401) {
          toast.error('Session expired. Please log in again.', {
            position: 'top-right',
            autoClose: 3000,
          });
          localStorage.removeItem('authToken');
          setTimeout(() => navigate('/login'), 3000);
        } else if (response.status === 400) {
          toast.error(`Upload failed: ${result.message || 'Invalid request'}`, {
            position: 'top-right',
            autoClose: 5000,
          });
        } else {
          toast.error(`Upload failed: ${result.message || 'Server error'}`, {
            position: 'top-right',
            autoClose: 5000,
          });
        }
        setUploadStatus(`Upload failed: ${result.message || 'Server error'}`);
        setProgress(0);
      }
    } catch (error) {
      toast.error(`Upload error: ${error.message || 'Network error'}`, {
        position: 'top-right',
        autoClose: 5000,
      });
      setUploadStatus(`Upload error: ${error.message || 'Network error'}`);
      setProgress(0);
    } finally {
      setUploading(false);
    }
  };

  // Submit application
  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (!token) {
      toast.error('You must be logged in to submit an application. Redirecting to login...', {
        position: 'top-right',
        autoClose: 3000,
      });
      localStorage.removeItem('authToken');
      setTimeout(() => navigate('/login'), 3000);
      return;
    }

    if (!applicationData.job_id || !applicationData.resume_id) {
      toast.error('Job ID and resume are required.', {
        position: 'top-right',
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await fetch('http://207.0.0.1:5000/api/v1/applications/submit', {  // Changed to localhost:5000
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          job_id: applicationData.job_id,
          resume_id: applicationData.resume_id,
          cover_letter: applicationData.cover_letter,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(`Application submitted successfully! Application ID: ${result.data?.application_id || 'N/A'}`, {
          position: 'top-right',
          autoClose: 5000,
        });
        setTimeout(() => navigate('/dashboard'), 3000);
      } else {
        if (response.status === 401) {
          toast.error('Session expired. Please log in again.', {
            position: 'top-right',
            autoClose: 3000,
          });
          localStorage.removeItem('authToken');
          setTimeout(() => navigate('/login'), 3000);
        } else {
          toast.error(`Application failed: ${result.message || 'Server error'}`, {
            position: 'top-right',
            autoClose: 5000,
          });
        }
      }
    } catch (error) {
      toast.error(`Application error: ${error.message || 'Network error'}`, {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  // Simulate upload progress
  useEffect(() => {
    let progressValue = 0;
    if (uploading && progress < 100) {
      const interval = setInterval(() => {
        progressValue += 10;
        if (progressValue >= 100) {
          progressValue = 100;
          clearInterval(interval);
        }
        setProgress(progressValue);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [uploading, progress]);

  return (
    <div>
      <ToastContainer />
      <div className="resume-upload-container">
        <div className="resume-upload-header">
          <h2 className="reasumeheading">Resume Upload</h2>
        </div>
        <div className="header-buttons">
          <button className="cancel-btn" onClick={() => navigate('/dashboard')}>
            Cancel
          </button>
          <button
            className="save-btn"
            disabled={!file || uploading}
            onClick={() => {
              if (file && !uploading) {
                setUploading(true);
                uploadFile(file);
              }
            }}
          >
            {uploading ? 'Uploading...' : 'Save Changes'}
          </button>
        </div>

        <div className="upload-area">
          <div className="upload-area-div">
            <div className="upload-icon">
              <img src="/imageswebsite/resumeicon.png" alt="resume icon" />
              <img src="/imageswebsite/crossicon.png" alt="cross icon" />
            </div>
            <p className="upload-title">Upload files</p>
            <p className="upload-subtitle">Select and upload the files of your choice</p>
          </div>
          <hr className="hrrrrrrrrr" />

          <div className="upload-box">
            <img src="/imageswebsite/iconsmallresumefile.png" alt="file icon" />
            <p className="upload-instruction">Choose a file or drag & drop it here</p>
            <p className="upload-formats">JPEG, PNG, PDF, and MP4 formats, up to 50MB</p>
            <label className="browse-btn">
              {uploading ? 'Uploading...' : 'Browse File'}
              <input
                type="file"
                accept=".jpeg,.png,.pdf,.mp4"
                onChange={handleFileChange}
                hidden
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        {file && (
          <div className="uploading-file">
            <div className="file-info">
              <img src="/imageswebsite/pdfffffffff.png" alt="pdf icon" />
              <div className="file-details">
                <p className="file-name">{file.name}</p>
                <p className="file-size">
                  {(file.size / 1024).toFixed(2)} KB • {uploading ? 'Uploading...' : uploadStatus || 'Selected'}
                </p>
                {uploading && (
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                  </div>
                )}
                {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
              </div>
            </div>
            <button className="remove-file-btn" onClick={handleRemoveFile} disabled={uploading}>
              <CloseIcon />
            </button>
          </div>
        )}

        {uploadStatus === 'Upload successful!' && (
          <div className="application-form">
            <h3>Submit Application</h3>
            <form onSubmit={handleSubmitApplication}>
              <div>
                <label>Job ID:</label>
                <input
                  type="text"
                  value={applicationData.job_id}
                  onChange={(e) => setApplicationData({ ...applicationData, job_id: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Cover Letter:</label>
                <textarea
                  value={applicationData.cover_letter}
                  onChange={(e) => setApplicationData({ ...applicationData, cover_letter: e.target.value })}
                />
              </div>
              <button type="submit" disabled={uploading}>
                {uploading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        )}

        <div className="continue-btn-container">
          <button
            className="continue-btn"
            disabled={uploading || !file || uploadStatus !== 'Upload successful!'}
            onClick={() => navigate('/resumebuilder')}
          >
            Continue
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeUpload;