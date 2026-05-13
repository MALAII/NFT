import React from "react";
import "./Reports.css";

const Reports = [
  {
    title: "Aadhar Card",
    description: "Government-issued identity document.",
    fileUrl: "/docs/aadhar.pdf",
    thumbnail: "/images/aadhar.png",
  },
  {
    title: "PAN Card",
    description: "Tax identity document for individuals and businesses.",
    fileUrl: "/docs/pan.pdf",
    thumbnail: "/images/pan.png",
  },
  {
    title: "Degree Certificate",
    description: "Engineering Graduation Certificate.",
    fileUrl: "/docs/degree.pdf",
    thumbnail: "/images/degree.png",
  },
  {
    title: "Experience Letter",
    description: "Letter of experience from previous employer.",
    fileUrl: "/docs/experience.pdf",
    thumbnail: "/images/experience.png",
  },
];

const Reportsview = () => {
  return (
    <div className="document-container">
      <h1 className="document-heading">My Documents</h1>
      <div className="document-grid">
        {documents.map((doc, index) => (
          <div className="document-card" key={index}>
            <img
              src={doc.thumbnail}
              alt={doc.title}
              className="document-thumbnail"
            />
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
            <a href={doc.fileUrl} target="_blank" rel="noreferrer">
              <button className="view-btn">View Document</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
