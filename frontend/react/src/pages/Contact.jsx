import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <img src="images/contact.svg" alt="Contact Us" className="hero-image" />
        <div className="hero-overlay">
        
        </div>
      </div>

      {/* Contact Grid */}
      <div className="contact-grid">
        {/* Phone/Email/Address */}
        <div className="contact-card">
          <h2><FaPhone /> Office Contact</h2>
          <p><strong>Mobile:</strong> +91-7598378989</p>
          <p><strong>Landline:</strong> 04179-295781</p>
          <p><FaEnvelope /> <strong>Email:</strong> nft.rss.ind@gmail.com</p>
        </div>

        {/* President */}
        <div className="contact-card">
          <h2><FaUserTie /> President</h2>
          <p><strong>Name:</strong> Mr. S. Sampangi</p>
          <p><FaPhone /> +91-9952509559</p>
        </div>

        {/* Admin */}
        <div className="contact-card">
          <h2><FaUserTie /> Admin</h2>
          <p><strong>Name:</strong> Mr. M. Ramesh </p>
          <p><FaPhone /> +91-9597357250</p>
        </div>

        {/* Address */}
        <div className="contact-card">
          <h2><FaMapMarkerAlt /> Our Location</h2>
          <p>No.25, Tholkaran Vattam, Nayanacheruvu,</p>
          <p>Natrampalli, Tirupattur, Tamil Nadu - 635852 India</p>
     
        </div>
      </div>
    </div>
  );
};

export default Contact;
