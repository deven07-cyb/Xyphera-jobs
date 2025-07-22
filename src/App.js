import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserEneterTab from './components/Pages/Home/UserEneterTab';
import SignIn from './components/Pages/Auth/SignIn'
import CreateAccount from './components/Pages/Forms/CreateAccount';
import AddCompanyDeatils from './components/Pages/Forms/AddCompanyDetails';
import VerifyAccount from './components/Pages/Auth/VerifyAccount';
import CompanyProfile from './components/Pages/Forms/CompanyProfile';
import EmailVerification from './components/Pages/Auth/EmailVerification';
import ForgetPassword from './components/Pages/Auth/ForgetPassword';
import ResetPassword from './components/Pages/Auth/ResetPassword';
import HomePage from './components/Pages/Home/HomePage';
import ProfileSetup from './components/Pages/Profile/ProfileSetUp';
import LandingPage from './components/Pages/Home/LandingPage';
import JobsPage from './components/Pages/Jobs/JobsPage';
import JobDetailsPage from './components/Pages/Jobs/JobsDetailsPage';
import ProfilePage from './components/Pages/Profile/ProfilePage';
import ApplicationReviewPage from './components/Pages/Forms/ApplicationReviewPage';
import IntroScreen from './components/Pages/Home/IntroPage/IntroScreen';
import WelcomeEmployeepage from './components/Pages/Home/WelcomeEmployeePage/WelcomeEmployeepage';
import MessagesPage from './components/Pages/Jobs/MassagePage';
import ProfilePreview from './components/Pages/Profile/ProfilePreview';
import SavedJobs from './components/Pages/Jobs/SavedJobs';
import AppliedJobs from './components/Pages/Jobs/AppiedJobs';
import SubscriptionPlans from './components/Pages/Forms/SubscriptionPlans';
import ResumeTemplates from './components/Pages/Forms/ResumeTemplates';
import ResumeUpload from './components/Pages/Forms/ResumeUpload';
import ReviewApplication from './components/Pages/Forms/ReviewApplication';
import ResumeBuilder from './components/Pages/Forms/ResumeBuilder';
import WelcomeEmployerPage from './components/Employer/Home/WelcomeEmployerPage';
import EmployerLogin from './components/Employer/Auth/EmployerLogin';
import EmployerCreateAccount from './components/Employer/Auth/EmployerCreateAccount';
import EmployerCreateCompanyProfile from './components/Employer/Auth/EmployerCreateCompanyProfile';
import EmployerVerifyCompany from './components/Employer/Auth/EmployerVerifyCompany';
import EmployerHomePages from './components/Employer/EmployerHomePages';
import EmployerApplicationPage from './components/Employer/EmployerApplicationPage';
import EE from './components/Employer/EE';
import EmployerJobOverview from './components/Employer/EmployerJobOverview';
import EmployerTermsOfService from './components/Employer/EmployerTermsOfService';
import EmployerSubcription from './components/Employer/EmployerSubcription';
import EmployerPrivacyPolicy from './components/Employer/EmployerPrivacyPolicy';
import EmployerPostAJob from './components/Employer/EmployerPostAJob';
import EmployerCandidateProfile from './components/Employer/EmployerCandidateProfile';
import EmployerCandidatePage from './components/Employer/EmployerCandidatePage';
import EmployerFAQ from './components/Employer/EmployerFAQ';
import EmployerContactUs from './components/Employer/EmployerContactUs';
import EmployerMassages from './components/Employer/EmployerMassages';
import EmployerAfterSearchPage from './components/Employer/EmployerAfterSearchPage';

import EmployerJobPostings from './components/Employer/EmployerAccountSettingsPage';
import EmployerProfilePage from './components/Employer/EmployerProfilePage';
import EmployerProfileSetups from './components/Employer/EmployerProfileSetup/index';
import JobsCatogory from './components/Pages/Jobs/JobsCatogery';
import CareerPage from './components/Pages/Jobs/CareerPage';
import BlogsPage from './components/Pages/Jobs/Blogspage';
import TermOfServices from './components/Pages/TermOfServices';
import PrivacyPolicyPage from './components/Pages/PrivacyPolicyPage';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Faqsectionone from './components/Pages/Faqsectionone/Faqsectionone';
import SAVEDJOB from './components/Pages/Jobs/SAVEDJOB/SAVEDJOB';
import NotificationPage from './components/Pages/Jobs/NotificationPage/NotificationPage';
import SubmitApplicationScreen from './components/Pages/SubmitApplicationScreen/SubmitApplicationScreen';
import SubmitApplicationScreenTwo from './components/Pages/SubmitApplicationScreenTwo/SubmitApplicationScreenTwo';
import ContactUs from './components/Pages/ContactUs/ContactUs';
 
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userentered" element={<UserEneterTab />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/addcompanydetails" element={<AddCompanyDeatils />} />
        <Route path="/verifyaccount" element={<VerifyAccount />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path='/resetpassword' element={<ResetPassword/>} /> 
        <Route path='/profilesetup' element={<ProfileSetup/>} /> 
        <Route path='/landingpage' element={<LandingPage />} /> 
        <Route path='/JOBSEARCHDETAILS' element={<JobsPage />} /> 
        <Route path='/SubmitApplicationScreenTwo' element={<SubmitApplicationScreenTwo />} /> 
        <Route path='/Jobdetailspage' element={<JobDetailsPage />} /> 
        <Route path='/profilepage' element={<ProfilePage />} /> 
        <Route path='/applicationreviewpage' element={<ApplicationReviewPage />} />
        <Route path='/INTROPAGE' element={<IntroScreen />} />
        <Route path='/WELCOME/EMPLOYEEPAGE' element={<WelcomeEmployeepage />} />
        <Route path='/messagespage' element={<MessagesPage />} />
        <Route path='/Notifications' element={<NotificationPage />} />
        <Route path='/SubmitApplicationScreen' element={<SubmitApplicationScreen />} />
        <Route path='/profilepreview' element={<ProfilePreview />} />
        <Route path='/savedjobs' element={<SavedJobs />} />
        <Route path='/appliedjobs' element={<AppliedJobs />} />
        <Route path='/subscriptionplans' element={<SubscriptionPlans />} /> 
        <Route path='/resumetemplates' element={<ResumeTemplates />} />
        <Route path='/resumeupload' element={<ResumeUpload />} />
        <Route path='/reviewapplication' element={<ReviewApplication/>} />
        <Route path='/resumebuilder' element={<ResumeBuilder/>} />
        <Route path='/welcomeemployerpage' element={<WelcomeEmployerPage/>} />
        <Route path='/employerlogin' element={<EmployerLogin/>} />
        <Route path='/EmployerCreateAccount' element={<EmployerCreateAccount/>} />
        <Route path='/EmployerCreateCompanyProfile' element={<EmployerCreateCompanyProfile  />} /> 
        <Route path='/EmployerVerifyCompany' element={<EmployerVerifyCompany />} />
        <Route path='/EmployerHomePage' element={<EmployerHomePages />} />
        <Route path='/EmployerApplicationPage' element={<EmployerApplicationPage />} />
        <Route path='/EE' element={<EE />}   />
        <Route path='/EmployerJobOverview' element={<EmployerJobOverview />} />
        <Route path='/EmployerTermsOfService' element={<EmployerTermsOfService />} />
        <Route path='/EmployerSubcription' element={<EmployerSubcription />} />
        <Route path='/EmployerPrivacyPolicy' element={<EmployerPrivacyPolicy />} />
        <Route path='/EmployerPostAJob' element={<EmployerPostAJob />} />
        <Route path='/EmployerCandidateProfile' element={<EmployerCandidateProfile />} />
        <Route path='/EmployerCandidatePage' element={<EmployerCandidatePage />} />
        <Route path='/EmployerFAQ' element={<EmployerFAQ />} />
        <Route path='/EmployerContactUs' element={<EmployerContactUs />} /> 
        <Route path='/EmployerMassages' element={<EmployerMassages />} />
        <Route path='/EmployerAfterSearchPage' element={<EmployerAfterSearchPage />} />
        <Route path='/EmployerJobPostings' element={<EmployerJobPostings />} />
        <Route path='/EmployerProfilePage' element={<EmployerProfilePage />} />
        <Route path='/EmployerProfileSetups' element={<EmployerProfileSetups />} />
        <Route path='/JobsCatogory' element={<JobsCatogory />} />
        <Route path='/CareerPage' element={<CareerPage />} />
        <Route path='/BlogsPage' element={<BlogsPage />} />
        <Route path='/TermOfServices' element={ <TermOfServices />} />
        <Route path='/PrivacyPolicyPage' element={ <PrivacyPolicyPage />} />
        <Route path='/AboutUs' element={ <AboutUs />} />
        <Route path='/Faqsectionone' element={ <Faqsectionone />} />
        <Route path='/SAVEDJOB' element={ <SAVEDJOB />} />
        
      </Routes>
    </Router>
  );
}

export default App;