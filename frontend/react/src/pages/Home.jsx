import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Home.css";

function Home() {
  const slides = [
    { url: 'images/slide01.svg' },
    { url: 'images/slide1.svg' },
    { url: 'images/slide2.svg' },
    { url: 'images/slide3.svg' },
    { url: 'images/slide4.svg' },
    { url: 'images/slide5.svg' },
  ];

  const books = [

    { image: "images/TK1.jpg", title: "திருக்குறள்" },
    { image: "images/gita.jpg", title: "BHAGAVAD GEETA" },
    { image: "images/bible.jpg", title: "THE HOLY BIBLE" },
      { image: "images/quran.jpg", title: "THE QUR'AN" },
    // { image: "images/book5.jpg", title: "Ignited Minds" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  // const goToPrevious = () => {
  //   const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  return (
    <div>
      <ToastContainer />

<div className="slides">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    navigation={true}
    className="mySwiper"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img
          src={slide.url}
          alt={`Slide ${index}`}
          className="swiper-slide-img"
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>


{/* Who We Are */}
<div className="container my-5 mt-1">
  <div className="row align-items-center">
    {/* Left: Paragraph */}
    <div className="col-lg-7 mb-4">
      <h2 className="heading mb-3  text-orange">Who We Are</h2>

      <div className="about-section">
        <p>
          <strong>Nation's First Trust (NFT)</strong> is dedicated to transforming Bharat into a developed nation.
          We strive to establish a solid foundation of trust through sustainable growth, inclusive development,
          and empowered communities.
        </p>

        <p>
          Bharat, a land of rich heritage and immense potential, is on the verge of a transformative journey.
          NFT envisions harnessing its cultural strength to create a self-reliant, modern, and value-driven society.
        </p>

        <p>
          As a registered Charitable Trust, NFT serves as a catalyst for revitalizing cultural sensitivity—
          blending tradition with innovation for a brighter and stronger Bharat.
        </p>

        <h5 className="signature mt-3 text-end">– Nation's First Trust</h5>
      </div>
    </div>

    {/* Right: Image */}
    <div className="col-lg-5 text-center ">
      <img
        src="images/homein.png"
        alt="Nation's First Trust"
        className="img-fluid rounded shadow about-image"
      />
    </div>
  </div>
</div>

{/* CTA Section */}
<div className="cta-section">
  <div className="cta-box">
    
    {/* Top Image */}
    <img
      src="/images/homejoin.svg"
      alt="Make a Difference"
      className="cta-image"
    />

    {/* Title and Subtitle */}
    <h2 className="cta-title">
      🌟 Make a Difference Today
    </h2>
    <p className="cta-subtitle">
      Your small help can create a big impact. Join hands with us to build a Better Nation.
    </p>

    {/* Buttons Section */}
    <div className="cta-buttons">
      <a href="/Donation" className="btn-cta donate-btn">🤍   Make a Donation</a>
      <a href="/Volunteer" className="btn-cta volunteer-btn">🤝 Become a Volunteer</a>
    </div>
  </div>
</div>


     {/* Books Showcase */}
<div className="books-showcase mt-5">
  <h2 className="text-center mb-4">Explore Holy Books</h2>
  <div className="books-row">
    {books.slice(0, 4).map((book, index) => (
      <div key={index} className="book-item">
        <div className="book-image-wrapper">
          <img src={book.image} alt={book.title} className="book-img" />
        </div>
        <div className="book-info">
          <h5 className="book-title">{book.title}</h5>
          <p className="book-desc">
           "Discover spiritual truths that empower action and deepen self-awareness".
          </p>
          <Link to="/Books" className="book-read-btn">Read More</Link>
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
    
  );
}

export default Home;
