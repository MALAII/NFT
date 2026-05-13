import React, { useState } from 'react';
import './Books.css';

const pdfs = [
   {
    title: "திருக்குறள்",
    file: '/thirukural.pdf',
  },
  {
    title: " Holy Bhagavad Geeta ",
    file: '/GITHAI.pdf',
  },
  {
    title: "Holy Bible",
    file: '/Bible.pdf',
  },
  {
    title: " Holy Quran",
    file: '/Quran.pdf',
  },

];

const Books = () => {
  const [activePdf, setActivePdf] = useState(null);

  const openPdf = (index) => {
    setActivePdf(index);
  };

  const closePdf = () => {
    setActivePdf(null);
  };

  return (
    <div className="pdf-view-container">
      <h1 className="page-title">📄 LIBRARY </h1>
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

export default Books;
