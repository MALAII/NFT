import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMobileAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import "../footer/Footer.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-10 px-5">
            <div className="container">
                <div className="row g-5"> {/* Added gutter spacing */}
                    {/* Information Column */}
                    <div className="col-md-6 col-lg-3">
                        <h4 className="text-warning mb-3">Information</h4>
                        <ul className="list-unstyled">
                            <li className="mb-1">
                                <Link to='/About' className="text-white text-decoration-none hover-gold">About Us</Link>
                            </li>
                            <li className="mb-1">
                                <Link to='/Mission' className="text-white text-decoration-none hover-gold">Mission & Vision</Link>
                            </li>
                            <li className="mb-1">
                                <Link to="/Blog" className="text-white text-decoration-none hover-gold">Project</Link>
                            </li>
                            <li className="mb-1">
                                <Link to='/Events' className="text-white text-decoration-none hover-gold">Events</Link>
                            </li>
                            <li className="mb-1">
                                <Link to="/Volunteer" className="text-white text-decoration-none hover-gold">Become a Volunteer</Link>
                            </li>
                            <li className="mb-1">
                                <Link to='/Donation' className="text-white text-decoration-none hover-gold">Donate Now</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-md-6 col-lg-5">
                        <h4 className="text-warning mb-1">Contact Information</h4>
                        <div className="contact-info">
                            <p className="mb-1 d-flex align-items-center">
                                <FaPhone className="me-2 text-warning" />
                                <span>Call us: 04179-295781</span>
                            </p>
                            <p className="mb-1 d-flex align-items-center">
                                <FaMobileAlt className="me-2 text-warning" />
                                <span>Mobile: +91-7598378989</span>
                            </p>
                            <p className="mb-2 d-flex align-items-center">
                                <FaEnvelope className="me-2 text-warning" />
                                <span>Email:nft.rss.ind@gmail.com</span>
                            </p>
                            <p className="mb-2 d-flex align-items-center">
                                <FaGlobe className="me-2 text-warning" />
                                <span>Website: www.nationsfirsttrust.com</span>
                            </p>
                        </div>
                        <div className="social-icons d-flex">
                            <Link to='#' className="text-white me-3 hover-gold"><FaFacebook /></Link>
                            <Link to='#' className="text-white me-3 hover-gold"><FaInstagram /></Link>
                            <Link to='#' className="text-white hover-gold"><FaYoutube /></Link>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="col-md-12 col-lg-4">
                        <h4 className="text-warning mb-3">Stay Updated</h4>
                        <p className="mb-3">Subscribe to our newsletter for the latest updates</p>
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email"
                                aria-label="Your Email"
                            />
                            <button
                                className="btn btn-warning"
                                type="button"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="row mt-3 pt-3 border-top border-secondary">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <h6 className="mb-0">
                            Copyright © Nation's First Trust - All Rights Reserved
                        </h6>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="privacy-policy">
                            <Link to='#' className="text-white text-decoration-none hover-gold me-2">Privacy policy</Link>
                            <span className="text-secondary mx-1">|</span>
                            <Link to='#' className="text-white text-decoration-none hover-gold ms-2">Terms & Conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;