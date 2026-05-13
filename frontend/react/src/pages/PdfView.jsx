import React, { useState } from 'react';
import './PdfView.css';

const pdfs = [
  {
    title: "Nation's First Trust Profile",
    file: '/sample.pdf',
  },
  {
    title: "Center Government Schemes",
    file: '/Schemes.pdf',
  },
  {
    title: "Kandha Shashti Kavasam",
    file: '/Muruga.pdf',
  },
];

const PdfView = () => {
  const [activePdf, setActivePdf] = useState(null);

  const openPdf = (index) => {
    setActivePdf(index);
  };

  const closePdf = () => {
    setActivePdf(null);
  };

  return (
    <div className="pdf-view-container">
      <h1 className="page-title">📄 Documents</h1>
      <div className="pdf-grid">
        {pdfs.map((doc, index) => (
          <div className="pdf-card" key={index}>
            <h2>{doc.title}</h2>
            <button className="view-btn" onClick={() => openPdf(index)}>
              View Full Page
            </button>
          </div>
        ))}
      </div>

      {activePdf !== null && (
        <div className="fullscreen-pdf">
          <button className="close-btn" onClick={closePdf}>✖ Close</button>
          <iframe
            src={pdfs[activePdf].file}
            title={pdfs[activePdf].title}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PdfView;
