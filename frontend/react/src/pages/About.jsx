import React from 'react';
import aboutImage from "/images/about.svg";
import bharatMataImage from "/images/barat Mata.svg";
import "./About.css";

const About = () => {
  return (
 <div className="about-hero-container">
      {/* Hero Section */}
      <div className="about-hero ">
      <div className="about-hero-image-wrapper">
          <img 
            src={aboutImage} 
            alt="About our organization" 
             className="about-hero-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-subheading">ABOUT THE ORGANISATION</h2>

          <div className="about-paragraph">
            {[
              "Bharat's culture is its lifeblood a timeless source of identity, unity, and strength. To truly preserve the spirit of Bharat, we must first nurture its cultural roots. If the richness of our culture fades within our own borders, and if Hindu society is no longer upheld, then what remains would merely be a geographical expression, not the true Bharat-India we have always genuinely loved and passionately revered.",
              "Geographical boundaries alone do not define a nation. It is the shared values, traditions, and collective spirit of the people that breathe life into a country. Therefore, it is vital for our society to remain vigilant, united, and well-organized, for from unity comes strength. When we stand together in purpose and pride, no force can possibly undermine our timeless honor or our rich heritage.",
              "It is the responsibility of every individual to contribute to the strengthening and consolidation of Bharat's social fabric. One meaningful path is through fostering appreciation for Indian arts and culture. By promoting educational programs, cultural orientation sessions, and outreach activities for children and youth, we can inspire a deep connection to our roots and ensure that our glorious legacy lives on with pride for future generations to come."
            ].map((paragraph, index) => (
              <p key={index}>
                <span className="about-bullet">•</span>
                <span>{paragraph}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="about-image-wrapper ">
          <div className="about-image-container">
            <img 
              src={bharatMataImage} 
              alt="Bharat Mata illustration" 
              className="about-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Trust Information Section */}
      <div className="trust-information">
        <h2 className="trust-heading">Trust Information</h2>
        <div className="trust-details">
          <p><strong>R.N:</strong> 4192024</p>
          <p><strong>DUI-TN:</strong> 20250502721</p>
          <p><strong>Chief Functionary:</strong> S.Sampangi</p>
          <p><strong>Chief Functionary:</strong> S.Yogini M.A.LET</p>
        </div>
      </div>
    </div>
  );
};

export default About;