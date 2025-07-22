// //  import React, { useState } from 'react';
// // import Header from '../../ReusableComponents/Header';
// // import Footer from '../../ReusableComponents/Footer';
// // import './CareerPage.css';

// // // Static job data (can be replaced with API data)
// // const initialJobs = [
// //   {
// //     jobType: 'FULL TIME',
// //     title: 'UI/UX DESIGNER',
// //     company: 'COMPANY NAME WITH LOGO',
// //     skills: ['UI', 'UX', 'User Research',"+4"],
// //     experience: '4+',
// //     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
// //     location: 'Bangalore',
// //     category: 'Regular Jobs',
// //   },
// //   {
// //     jobType: 'FULL TIME',
// //     title: 'UI/UX DESIGNER',
// //     company: 'COMPANY NAME WITH LOGO',
// //     skills: ['UI', 'UX', 'User Research',"+4"],
// //     experience: '4+',
// //     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
// //     location: 'Mumbai',
// //     category: 'Walkin drives',
// //   },
// //   {
// //     jobType: 'FULL TIME',
// //     title: 'UI/UX DESIGNER',
// //     company: 'COMPANY NAME WITH LOGO',
// //     skills: ['UI', 'UX', 'User Research',"+4"],
// //     experience: '4+',
// //     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
// //     location: 'Bangalore',
// //     category: 'Regular Jobs',
// //   },
// //   {
// //     jobType: 'FULL TIME',
// //     title: 'UI/UX DESIGNER',
// //     company: 'COMPANY NAME WITH LOGO',
// //     skills: ['UI', 'UX', 'User Research',"+4"],
// //     experience: '4+',
// //     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
// //     location: 'Hyderabad',
// //     category: 'Walkin drives',
// //   },
// //   {
// //     jobType: 'FULL TIME',
// //     title: 'UI/UX DESIGNER',
// //     company: 'COMPANY NAME WITH LOGO',
// //     skills: ['UI', 'UX', 'User Research',"+4"],
// //     experience: '4+',
// //     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
// //     location: 'Bangalore',
// //     category: 'Regular Jobs',
// //   },
// //   {
// //     jobType: 'FULL TIME',
// //     title: 'UI/UX DESIGNER',
// //     company: 'COMPANY NAME WITH LOGO',
// //     skills: ['UI', 'UX', 'User Research',"+4"],
// //     experience: '4+',
// //     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
// //     location: 'Mumbai',
// //     category: 'Regular Jobs',
// //   },
// // ];


// // const CareerPage = () => {
// //   const [searchFilters, setSearchFilters] = useState({
// //     jobTitle: '',
// //     jobLocation: '',
// //     deliveryBoy: '',
// //     regularJobs: false,
// //     walkinDrives: false,
// //   });
// //   const [filteredJobs, setFilteredJobs] = useState(initialJobs);

// //   // Handle input changes for search filters
// //   const handleInputChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setSearchFilters({
// //       ...searchFilters,
// //       [name]: type === 'checkbox' ? checked : value,
// //     });
// //   };

// //   // Handle filter button click to filter jobs locally
// //   const handleFilter = () => {
// //     let filtered = initialJobs;

// //     // Filter by job title
// //     if (searchFilters.jobTitle) {
// //       filtered = filtered.filter((job) =>
// //         job.title.toLowerCase().includes(searchFilters.jobTitle.toLowerCase())
// //       );
// //     }

// //     // Filter by job location
// //     if (searchFilters.jobLocation) {
// //       filtered = filtered.filter((job) =>
// //         job.location.toLowerCase().includes(searchFilters.jobLocation.toLowerCase())
// //       );
// //     }

// //     // Filter by category (Regular Jobs or Walkin drives)
// //     if (searchFilters.regularJobs || searchFilters.walkinDrives) {
// //       filtered = filtered.filter((job) => {
// //         if (searchFilters.regularJobs && searchFilters.walkinDrives) {
// //           return true; // Show all if both are checked
// //         } else if (searchFilters.regularJobs) {
// //           return job.category === 'Regular Jobs';
// //         } else if (searchFilters.walkinDrives) {
// //           return job.category === 'Walkin drives';
// //         }
// //         return true;
// //       });
// //     }

// //     setFilteredJobs(filtered);
// //   };

// //   return (
// //     <div className="career-page-wrapper">
// //       {/* Header */}
// //       <Header />

// //       {/* Search Bar Section */}
// //       <div className="search-bar-container-one">
// //         <div className="search-bar-row">
// //           <input
// //             type="text"
// //             name="jobTitle"
// //             placeholder="Job Titles"
// //             value={searchFilters.jobTitle}
// //             onChange={handleInputChange}
// //             className="search-input"
// //           />
// //           <input
// //             type="text"
// //             name="jobLocation"
// //             placeholder="Job Location"
// //             value={searchFilters.jobLocation}
// //             onChange={handleInputChange}
// //             className="search-input"
// //           />
// //           <input
// //             type="text"
// //             name="deliveryBoy"
// //             placeholder="Delivery Boy"
// //             value={searchFilters.deliveryBoy}
// //             onChange={handleInputChange}
// //             className="search-input"
// //           />
// //           <button onClick={handleFilter} className="filter-btn">
// //             FILTER
// //           </button>
// //         </div>
// //         <div className="checkbox-group">
// //           <label>
// //             <input
// //               type="checkbox"
// //               name="regularJobs"
// //               checked={searchFilters.regularJobs}
// //               onChange={handleInputChange}
// //             />
// //             Regular Jobs
// //           </label>
// //           <label>
// //             <input
// //               type="checkbox"
// //               name="walkinDrives"
// //               checked={searchFilters.walkinDrives}
// //               onChange={handleInputChange}
// //             />
// //             Walkin drives
// //           </label>
// //         </div>
// //       </div>

// //       {/* Career Section */}
// //       <div className="career-container">
// //         <h1 className="career-title">Career</h1>
// //         {filteredJobs.length === 0 ? (
// //           <p className="no-jobs-message">No jobs found.</p>
// //         ) : (
// //           <div className="jobs-grid">
// //             {filteredJobs.map((job, index) => (
// //               <div key={index} className="job-card">
// //                 <span className="job-type">{job.jobType}</span>
// //                 <h3 className="job-title">{job.title}</h3>
// //                 <p className="company-name">{job.company}</p>
// //                 <div className="skills-experience">
// //                   {job.skills.map((skill, i) => (
// //                     <span key={i} className="skill-tag">
// //                       {skill}
// //                     </span>
// //                   ))}
// //                   <span className="experience">{job.experience}</span>
// //                 </div>
// //                 <p className="job-description">{job.description}</p>
// //                 <hr className='honetwo'/>
// //                 <button className="view-jobs-btn">VIEW JOBS</button>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>

// //       {/* Footer */}
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default CareerPage;  


//  import React, { useState } from 'react';
// import Header from '../../ReusableComponents/Header';
// import Footer from '../../ReusableComponents/Footer';
// import './CareerPage.css';

// // Static job data (can be replaced with API data)
// const initialJobs = [
//   {
//     jobType: 'FULL TIME',
//     title: 'UI/UX DESIGNER',
//     company: 'COMPANY NAME WITH LOGO',
//     skills: ['UI', 'UX', 'User Research',"+4"],
//     experience: '4+',
//     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
//     location: 'Bangalore',
//     category: 'Regular Jobs',
//   },
//   {
//     jobType: 'FULL TIME',
//     title: 'UI/UX DESIGNER',
//     company: 'COMPANY NAME WITH LOGO',
//     skills: ['UI', 'UX', 'User Research',"+4"],
//     experience: '4+',
//     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
//     location: 'Mumbai',
//     category: 'Walkin drives',
//   },
//   {
//     jobType: 'FULL TIME',
//     title: 'UI/UX DESIGNER',
//     company: 'COMPANY NAME WITH LOGO',
//     skills: ['UI', 'UX', 'User Research',"+4"],
//     experience: '4+',
//     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
//     location: 'Bangalore',
//     category: 'Regular Jobs',
//   },
//   {
//     jobType: 'FULL TIME',
//     title: 'UI/UX DESIGNER',
//     company: 'COMPANY NAME WITH LOGO',
//     skills: ['UI', 'UX', 'User Research',"+4"],
//     experience: '4+',
//     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
//     location: 'Hyderabad',
//     category: 'Walkin drives',
//   },
//   {
//     jobType: 'FULL TIME',
//     title: 'UI/UX DESIGNER',
//     company: 'COMPANY NAME WITH LOGO',
//     skills: ['UI', 'UX', 'User Research',"+4"],
//     experience: '4+',
//     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
//     location: 'Bangalore',
//     category: 'Regular Jobs',
//   },
//   {
//     jobType: 'FULL TIME',
//     title: 'UI/UX DESIGNER',
//     company: 'COMPANY NAME WITH LOGO',
//     skills: ['UI', 'UX', 'User Research',"+4"],
//     experience: '4+',
//     description: 'We Are Looking For An UI & UX Designer To Work On Our New Project',
//     location: 'Mumbai',
//     category: 'Regular Jobs',
//   },
// ];


// const CareerPage = () => {
//   const [searchFilters, setSearchFilters] = useState({
//     jobTitle: '',
//     jobLocation: '',
//     deliveryBoy: '',
//     regularJobs: false,
//     walkinDrives: false,
//   });
//   const [filteredJobs, setFilteredJobs] = useState(initialJobs);

//   // Handle input changes for search filters
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setSearchFilters({
//       ...searchFilters,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // Handle filter button click to filter jobs locally
//   const handleFilter = () => {
//     let filtered = initialJobs;

//     // Filter by job title
//     if (searchFilters.jobTitle) {
//       filtered = filtered.filter((job) =>
//         job.title.toLowerCase().includes(searchFilters.jobTitle.toLowerCase())
//       );
//     }

//     // Filter by job location
//     if (searchFilters.jobLocation) {
//       filtered = filtered.filter((job) =>
//         job.location.toLowerCase().includes(searchFilters.jobLocation.toLowerCase())
//       );
//     }

//     // Filter by category (Regular Jobs or Walkin drives)
//     if (searchFilters.regularJobs || searchFilters.walkinDrives) {
//       filtered = filtered.filter((job) => {
//         if (searchFilters.regularJobs && searchFilters.walkinDrives) {
//           return true; // Show all if both are checked
//         } else if (searchFilters.regularJobs) {
//           return job.category === 'Regular Jobs';
//         } else if (searchFilters.walkinDrives) {
//           return job.category === 'Walkin drives';
//         }
//         return true;
//       });
//     }

//     setFilteredJobs(filtered);
//   };

//   return (
//     <div className="career-page-wrapper">
//       {/* Header */}
//       <Header />

//       {/* Search Bar Section */}
//       <div className="search-bar-container-one">
//         <div className="search-bar-row">
//           <input
//             type="text"
//             name="jobTitle"
//             placeholder="Job Titles"
//             value={searchFilters.jobTitle}
//             onChange={handleInputChange}
//             className="search-input"
//           />
//           <input
//             type="text"
//             name="jobLocation"
//             placeholder="Job Location"
//             value={searchFilters.jobLocation}
//             onChange={handleInputChange}
//             className="search-input"
//           />
//           <input
//             type="text"
//             name="deliveryBoy"
//             placeholder="Delivery Boy"
//             value={searchFilters.deliveryBoy}
//             onChange={handleInputChange}
//             className="search-input"
//           />
//           <button onClick={handleFilter} className="filter-btn">
//             FILTER
//           </button>
//         </div>
//         <div className="checkbox-group">
//           <label>
//             <input
//               type="checkbox"
//               name="regularJobs"
//               checked={searchFilters.regularJobs}
//               onChange={handleInputChange}
//             />
//             Regular Jobs
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="walkinDrives"
//               checked={searchFilters.walkinDrives}
//               onChange={handleInputChange}
//             />
//             Walkin drives
//           </label>
//         </div>
//       </div>

//       {/* Career Section */}
//       <div className="career-container">
//         <h1 className="career-title">Career</h1>
//         {filteredJobs.length === 0 ? (
//           <p className="no-jobs-message">No jobs found.</p>
//         ) : (
//           <div className="jobs-grid">
//             {filteredJobs.map((job, index) => (
//               <div key={index} className="job-card">
//                 <span className="job-type">{job.jobType}</span>
//                 <h3 className="job-title">{job.title}</h3>
//                 <p className="company-name">{job.company}</p>
//                 <div className="skills-experience">
//                   {job.skills.map((skill, i) => (
//                     <span key={i} className="skill-tag">
//                       {skill}
//                     </span>
//                   ))}
//                   <span className="experience">{job.experience}</span>
//                 </div>
//                 <p className="job-description">{job.description}</p>
//                 <hr className='honetwo'/>
//                 <button className="view-jobs-btn">VIEW JOBS</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default CareerPage;.career-page-wrapper {


//   display: flex;

//   flex-direction: column;

// }

// .search-bar-container-one {
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: start;
//   margin-top: 50px;
//   margin-left: 20px;
//   padding: 20px;
//   width: 100%;

// }

// .search-bar-row {
//   display: flex;
//   gap: 15px;
//   align-items: start;
//   justify-content: start;
// }

// .search-input {
//   padding: 10px;
//   width: 337px;
//   height: 73px;

//   border-radius: 10px;
//   border-width: 1px;

//   border: 2px solid #D9D9D9;
//   border-radius: 4px;
//   font-size: 14px;
//   outline: none;
// }

// .search-input:focus {
//   border-color: #D9D9D9;
// }

// .checkbox-group {
//   display: flex;
//   gap: 20px;
//   margin-top: 10px;
//   align-items: flex-start;
//   justify-content: flex-start;

// }

// .checkbox-group label {
//   display: flex;
//   align-items: center;
//   gap: 5px;

//   font-weight: 400;
//   font-size: 20px;
//   line-height: 100%;
//   letter-spacing: 0%;
//   color: #000000;

// }

// .checkbox-group input[type="checkbox"] {
//   width: 38px;
//   height: 35px;
//   border: 2px solid #003087;
//   border-radius: 3px;
//   cursor: pointer;
// }

// .filter-btn {
//   padding: 10px 20px;
//   background-color: #033E8A;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 14px;
//   font-weight: bold;
//   width: 337px;
//   height: 73px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// }

// .filter-btn:hover {
//   background-color: #033E8A;
// }

// .career-container {
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 40px 20px;
//   text-align: center;
//   flex: 1;
// }

// .career-title {
//   font-size: 36px;
//   font-weight: bold;
//   margin-bottom: 40px;
//   color: #000000;

//   font-weight: 600;
//   font-size: 52px;
//   line-height: 100%;
//   letter-spacing: 0%;

// }

// .jobs-grid {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// }

// .job-card {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 2px 10px  #BCBCBC;
//   text-align: center;
//   transition: transform 0.3s;
//   border: 2px solid #BCBCBC;
//   Width: 350.57px ;
//   Height: 398px;
// }

// .job-card:hover {
//   transform: translateY(-5px);
// }

// .job-type {
//   display:  flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #003087;
//   color: white;
//   padding: 5px 10px;
//   border-radius: 42px;
//   font-size: 12px;
//   font-weight: bold;
//   text-transform: uppercase;
//   margin-bottom: 50px;
//   margin-right: 180px;
//   width: 112px;
//   height: 42px;
   
// font-weight: 700;
// font-size: 13px;
// line-height: 100%;
// letter-spacing: 0%;

// }

// .job-title {
//   font-size: 18px;
//   font-weight: bold;
//   text-transform: uppercase;
//   margin: 10px 0;
//   color: #000000;
   
// font-weight: 700;
// font-size: 20px;
// line-height: 100%;
// letter-spacing: 0%;
 
// }

// .company-name {
//   font-size: 14px;
//   font-weight: bold;
//   text-transform: uppercase;
//   color: #000000;
//   margin-bottom: 10px;
   
// font-weight: 700;
// font-size: 13px;
// line-height: 100%;
// letter-spacing: 0%;

// }

// .skills-experience {
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin-top: 20px;
//   margin-bottom: 20px;
// }

// .skill-tag {
//   background-color: #fff;
//   color: #033E8A;
//   border: 2px solid   #033E8A;
//   padding: 5px 20px;
//   border-radius: 20px;
//   font-size: 10px;
  
// }
// .honetwo{
//   width: 100%;
//   color: #033E8A;
// }
// .experience {
//   background-color: #033E8A;
//   color: white;
//   padding: 5px 10px;
//   border-radius: 20px;
//   font-size: 12px;
// }

// .job-description {
//   font-size: 14px;
//   color: #000000;
//   margin-bottom: 20px;
//   text-transform: capitalize;
// }

// .view-jobs-btn {
//   display: block;
//   width: 100%;
//   padding: 10px;
//   background-color: none;
//   border:  none;
//   border-radius: none;
//   font-size: 14px;
//   cursor: pointer;
//   text-align: center;
//   text-transform: uppercase;
//   transition: background-color 0.3s;
//   background: none;
// }

// .view-jobs-btn:hover {
//    background: none;
// }

// .no-jobs-message {
//   font-size: 16px;
//   color: #666;
//   text-align: center;
//   margin: 20px 0;
// }

// @media (max-width: 768px) {
//   .search-bar-row {
//     flex-direction: column;
//     align-items: stretch;
//   }

//   .search-input {
//     width: 100%;
//   }

//   .jobs-grid {
//     grid-template-columns: 1fr;
//   }
// }rewrite all code responsive ness is add give me updated code  just check responsive ness of the pplication give me codes





import React, { useState } from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './CareerPage.css';

// Static job data (can be replaced with API data)
const initialJobs = [
  {
    jobType: 'FULL TIME',
    title: 'UI/UX DESIGNER',
    company: 'Zomato',
    logo: '/imageswebsite/zomato.png',
    skills: ['UI', 'UX', 'User Research', 'Prototyping'],
    experience: '4+ years',
    description: 'We are looking for a UI & UX Designer to work on our new project.',
    location: 'Bangalore',
    category: 'Regular Jobs',
  },
  {
    jobType: 'FULL TIME',
    title: 'UI/UX DESIGNER',
    company: 'Zomato',
    logo: '/imageswebsite/zomato.png',
    skills: ['UI', 'UX', 'User Research', 'Prototyping'],
    experience: '4+ years',
    description: 'We are looking for a UI & UX Designer to work on our new project.',
    location: 'Mumbai',
    category: 'Walkin drives',
  },
  {
    jobType: 'FULL TIME',
    title: 'UI/UX DESIGNER',
    company: 'Zomato',
    logo: '/imageswebsite/zomato.png',
    skills: ['UI', 'UX', 'User Research', 'Prototyping'],
    experience: '4+ years',
    description: 'We are looking for a UI & UX Designer to work on our new project.',
    location: 'Bangalore',
    category: 'Regular Jobs',
  },
  {
    jobType: 'FULL TIME',
    title: 'UI/UX DESIGNER',
    company: 'Zomato',
    logo: '/imageswebsite/zomato.png',
    skills: ['UI', 'UX', 'User Research', 'Prototyping'],
    experience: '4+ years',
    description: 'We are looking for a UI & UX Designer to work on our new project.',
    location: 'Hyderabad',
    category: 'Walkin drives',
  },
  {
    jobType: 'FULL TIME',
    title: 'UI/UX DESIGNER',
    company: 'Zomato',
    logo: '/imageswebsite/zomato.png',
    skills: ['UI', 'UX', 'User Research', 'Prototyping'],
    experience: '4+ years',
    description: 'We are looking for a UI & UX Designer to work on our new project.',
    location: 'Bangalore',
    category: 'Regular Jobs',
  },
  {
    jobType: 'FULL TIME',
    title: 'UI/UX DESIGNER',
    company: 'Zomato',
    logo: '/imageswebsite/zomato.png',
    skills: ['UI', 'UX', 'User Research', 'Prototyping'],
    experience: '4+ years',
    description: 'We are looking for a UI & UX Designer to work on our new project.',
    location: 'Mumbai',
    category: 'Regular Jobs',
  },
];

const CareerPage = () => {
  const [searchFilters, setSearchFilters] = useState({
    jobTitle: '',
    jobLocation: '',
    deliveryBoy: '',
    regularJobs: false,
    walkinDrives: false,
  });
  const [filteredJobs, setFilteredJobs] = useState(initialJobs);

  // Handle input changes for search filters
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchFilters({
      ...searchFilters,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle filter button click to filter jobs locally
  const handleFilter = () => {
    let filtered = initialJobs;

    if (searchFilters.jobTitle) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchFilters.jobTitle.toLowerCase())
      );
    }

    if (searchFilters.jobLocation) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(searchFilters.jobLocation.toLowerCase())
      );
    }

    if (searchFilters.deliveryBoy) {
      filtered = filtered.filter((job) =>
        job.title.toLowerCase().includes(searchFilters.deliveryBoy.toLowerCase())
      );
    }

    if (searchFilters.regularJobs || searchFilters.walkinDrives) {
      filtered = filtered.filter((job) => {
        if (searchFilters.regularJobs && searchFilters.walkinDrives) {
          return true;
        } else if (searchFilters.regularJobs) {
          return job.category === 'Regular Jobs';
        } else if (searchFilters.walkinDrives) {
          return job.category === 'Walkin drives';
        }
        return true;
      });
    }

    setFilteredJobs(filtered);
  };

  return (
    <div className="career-page-wrapper">
      <Header />

      {/* Search Bar Section */}
      <div className="cp-search-bar-container">
        <div className="cp-search-bar-row">
          <div className="cp-search-input-wrapper">
            <input
              type="text"
              name="jobTitle"
              placeholder="Search job titles..."
              value={searchFilters.jobTitle}
              onChange={handleInputChange}
              className="cp-search-input"
            />
            <span
              className="cp-clear-icon"
              onClick={() => setSearchFilters({ ...searchFilters, jobTitle: '' })}
              style={{ display: searchFilters.jobTitle ? 'block' : 'none' }}
            >
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gray)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </div>
          <div className="cp-search-input-wrapper">
            <input
              type="text"
              name="jobLocation"
              placeholder="Search job location..."
              value={searchFilters.jobLocation}
              onChange={handleInputChange}
              className="cp-search-input"
            />
            <span
              className="cp-clear-icon"
              onClick={() => setSearchFilters({ ...searchFilters, jobLocation: '' })}
              style={{ display: searchFilters.jobLocation ? 'block' : 'none' }}
            >
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gray)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </div>
          <div className="cp-search-input-wrapper">
            <input
              type="text"
              name="deliveryBoy"
              placeholder="Search delivery jobs..."
              value={searchFilters.deliveryBoy}
              onChange={handleInputChange}
              className="cp-search-input"
            />
            <span
              className="cp-clear-icon"
              onClick={() => setSearchFilters({ ...searchFilters, deliveryBoy: '' })}
              style={{ display: searchFilters.deliveryBoy ? 'block' : 'none' }}
            >
              <svg
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gray)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </div>
          <button onClick={handleFilter} className="cp-filter-btn">
            Filter
          </button>
        </div>
        <div className="cp-checkbox-group">
          <label>
            <input
              type="checkbox"
              name="regularJobs"
              checked={searchFilters.regularJobs}
              onChange={handleInputChange}
            />
            Regular Jobs
          </label>
          <label>
            <input
              type="checkbox"
              name="walkinDrives"
              checked={searchFilters.walkinDrives}
              onChange={handleInputChange}
            />
            Walkin Drives
          </label>
        </div>
      </div>

      {/* Career Section */}
      <div className="cp-career-container">
        <h1 className="cp-career-title">Career</h1>
        {filteredJobs.length === 0 ? (
          <p className="cp-no-jobs-message">No jobs found.</p>
        ) : (
          <div className="cp-jobs-grid">
            {filteredJobs.map((job, index) => (
              <div key={index} className="cp-job-card">
                <div className="cp-job-card-header">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="cp-company-logo"
                  />
                  <span className="cp-job-type">{job.jobType}</span>
                </div>
                <h3 className="cp-job-title">{job.title}</h3>
                <p className="cp-company-name">{job.company}</p>
                <div className="cp-skills-experience">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="cp-skill-tag">
                      {skill}
                    </span>
                  ))}
                  <span className="cp-experience">{job.experience}</span>
                </div>
                <p className="cp-job-description">{job.description}</p>
                <p className="cp-job-location">{job.location}</p>
                <hr className="cp-horizontal-line" />
                <button className="cp-view-jobs-btn">
                  View Jobs
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--primary-blue)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CareerPage;