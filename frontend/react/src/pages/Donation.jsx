import React from "react";
import { useNavigate } from "react-router-dom";
import "./Donation.css";

const descriptions = {
  "Education": "Education is the key to a brighter future. Your donation helps provide books, school supplies, and scholarships to children in need.",
  "Tree Plantation": "Support tree plantation to create a greener and healthier environment for future generations.",
  "Seminar Class": "Help organize educational and awareness seminars for various social and professional topics.",
  "Sports": "Encourage physical fitness and sportsmanship by supporting sports programs and activities.",
  "Welfare": "Contribute to welfare initiatives aimed at improving community living standards.",
  "Electricity": "Provide electricity to underprivileged areas, bringing light to homes and schools.",
  "Housing": "Help build homes for homeless families, giving them a safe and secure place to live.",
  "Temple Donation": "Support temple maintenance, religious activities, and cultural preservation.",
  "Transgender": "Empower transgender individuals with education, employment, and social inclusion programs.",
  "Disability": "Assist people with disabilities by providing medical aid, support equipment, and accessibility solutions.",
  "Old Age Home": "Ensure elderly individuals receive the care, shelter, and companionship they deserve.",
  "Annadanam-Food": "Donate food to the needy and help eliminate hunger through meal distribution programs.",
  "Children's Home": "Provide shelter, education, and care for orphaned and homeless children.",
  "Medical": "Support medical aid, treatments, and health checkups for those in need.",
  "Yoga": "Promote physical and mental well-being through yoga programs and awareness.",
  "Animal": "Help protect and rescue animals, ensuring their safety and well-being.",
  "Below Poverty": "Guidance of Below Poverty",
  "Transportations": "Support transportation initiatives to improve mobility for underprivileged communities.",
  "Cultural Programmes": "Preserve and promote cultural heritage through events and artistic initiatives.",
  "Library": "Help establish and maintain libraries to encourage education and knowledge-sharing.",
  "Awareness programs": "Awareness is the first step towards change – Act now, make a difference!",
  "Swachh Bharat": "Swasth Bharat – Clean India for a Healthy India!",
  "School": "School is the first step towards turning dreams into reality.",
  "Ex- Army": "Served with honor, living with pride."
};

const Donation = () => {
  const navigate = useNavigate();

  // Converts name to URL-friendly slug, e.g. "Tree Plantation" => "tree-plantation"
  const slugify = (text) => text.toLowerCase().replace(/ /g, "-");

  const handleCardClick = (area) => {
    navigate(`/Bank/${slugify(area)}`);
  };

  return (
    <div className="donation-container">
      <h1 className="donation-header">Choose a Cause to Support</h1>

      <div className="card-grid ">
        {Object.keys(descriptions).map((area) => (
          <div
            key={area}
            className="donation-card"
            onClick={() => handleCardClick(area)}
          >
            {area}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
