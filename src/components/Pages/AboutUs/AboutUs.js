 import React from 'react';
import './AboutUs.css';
import Header from '../ReusableComponents/Header';
import Footer from '../ReusableComponents/Footer';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Header />

      {/* About Us Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <p className="subheading">A BIT</p>
            <h1>About Us</h1>
            <p>
              Welcome to Company Name, your trusted partner in finding reliable
              and rewarding job opportunities across India. Whether you’re a
              fresher starting your career or looking for a better position, we are
              here to connect you with companies that value your skills and
              dedication. We specialize in offering a wide range of jobs across
              sectors like IT, Core, Delivery Services, and Skilled Trades like
              Welding. Our platform is designed to make job hunting simple, fast,
              and accessible to everyone—no matter your background or experience.
            </p>
          </div>
          <div className="image-grid">
            <div className="image-with-text">
              <img src="/imageswebsite/image screen shoot.png" alt="Office" className="grid-image large" />
              {/* <span className="experience"> 10+ </span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="who-we-are-content">
          <div className="who-we-are-text">
            <p className="subheading">W h o   W e   A r e</p>
            <h1 style={{textWrap:'nowrap'}}>Who We Are</h1>
            <p>
              We are a passionate team of professionals committed to helping job
              seekers find meaningful work and helping businesses hire the right
              talent. At Company Name, we understand the challenges of finding
              jobs, building your career, or working with trusted employers. We
              bring you verified job listings, fair salaries, and career growth
              opportunities. Our mission is to bridge the gap between employers and
              skilled individuals who are ready to work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section">
        <div className="why-us-content">
           <img src="/imageswebsite/grouppropleimages.png" alt="Team" className="team-image" />
          <div className="why-us-text">
            <h1>Why Us</h1>
            <ul>
              <li>
                Verified Jobs: We partner only with reputable employers to ensure
                you get genuine and secure job opportunities.
              </li>
              <li>
                Easy to Apply: A user-friendly platform that helps you find and
                apply for jobs in just a few clicks.
              </li>
              <li>
                Support Every Step: From resume-building to interview tips, we’re
                with you throughout your job journey.
              </li>
              <li>
                Jobs That Match You: Find work that suits your location,
                experience, and schedule.
              </li>
              <li>
                Core Sectors: We specialize in high-demand fields like IT, core
                services, and trades like welding—ensuring a wide range of
                opportunities.
              </li>
              <img src="/imageswebsite/womenimage.png" alt="Professional" className="professional-image" />
            </ul>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;