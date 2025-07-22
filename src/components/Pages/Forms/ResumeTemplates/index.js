 import React from 'react';
import Header from '../../ReusableComponents/Header';
import Footer from '../../ReusableComponents/Footer';
import './ResumeTemplates.css';

const ResumeTemplates = () => {
  // Sample data for resume templates (using placeholder images)
  const templates = [
    { id: 1, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 2, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 3, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 4, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 5, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 6, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 7, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 8, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 9, image: '/imageswebsite/resumetemplateimage.png' },
    { id: 10, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 11, image: '/imageswebsite/resumetemplateimage.png' },
    { id: 12, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 13, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 14, image: '/imageswebsite/resumetemplateimage.png'  },
    { id: 15, image: '/imageswebsite/resumetemplateimage.png' },
  ];

  return (
    <div className="rt-resume-templates-container">
      {/* Header */}
      <Header />

      {/* Resume Templates Content */}
      <section className="rt-resume-templates-content">
        
        <div className="rt-headings">
           <div className="rt-back-button-container">
              <button style={{background:"none",border:"none"}} className="rt-back-button" onClick={() => window.history.back()}>
                <img src="/imageswebsite/Back arrow.png" alt="rtbackbutton" />
              </button>
        </div>
          <h1>Create A Job <span className="jobsdata">Winning Resume</span></h1>
          <h2>Select Template</h2>
        </div>
        <div className="rt-templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="rt-template-card">
              <img src={template.image} alt={template.name} className="rt-template-image" />
               
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResumeTemplates;