import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/love.png";
import { FaBars } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import "./Nav.css";

const Navi = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowSideBar(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = () => setShowSideBar(false);

  return (
    <>
      <nav className='navbar sticky-nav'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='title'>
          <h4>தேசமே ! பிரதானம் !</h4>
          <Link className='a' to='/'>NATION'S FIRST TRUST</Link>
          <p>Service to Mankind</p>
        </div>

        {/* Desktop Nav */}
        <div className='mobile-view'>
          <ul className='nav-link'>
            <li><NavLink to='/' exact="true">Home</NavLink></li>
            <li className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <p>About <GoChevronDown /></p>
              <div className="dropdown-content">
                <Link className='a' to="/About">About Us</Link>
                <Link className='a' to="/Board of trustees">Board of Trustees</Link>
                <Link className='a' to="/Mission">Mission & Vision</Link>
                <Link className='a' to="/Volunteer">Volunteer</Link>
                    <Link className='a' to="/PdfView">Documents</Link>
              </div>
            </li>
            <li><NavLink to="/Blog"> Blogs</NavLink></li>
            <li><NavLink to="/Events">Events</NavLink></li>
            <li><NavLink to="/Gallery">Gallery</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <Link className='dona' to="/Donation"><span>Donation 🤍</span></Link>
          </ul>
        </div>

        {/* Sidebar for Mobile */}
        <div className={`mobile-views ${showSideBar ? 'active' : ''}`} ref={menuRef}>
          <ul className='nav-link'>
            <li><NavLink to='/' onClick={handleNavClick}>Home</NavLink></li>
            <li className="dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <p>About <GoChevronDown /></p>
              <div className="dropdown-content">
                <Link className='a' to="/About" onClick={handleNavClick}>About Us</Link>
                <Link className='a' to="/Board of trustees" onClick={handleNavClick}>Board of Trustees</Link>
                <Link className='a' to="/Mission" onClick={handleNavClick}>Mission & Vision</Link>
                <Link className='a' to="/Volunteer" onClick={handleNavClick}>Volunteer</Link>
                  <Link className='a' to="/PdfView">Documents</Link>     
              </div>
            </li>
            <li><NavLink to="/Blog" onClick={handleNavClick}>Blog</NavLink></li>
            <li><NavLink to="/Events" onClick={handleNavClick}>Events</NavLink></li>
            <li><NavLink to="/Gallery" onClick={handleNavClick}>Gallery</NavLink></li>
            <li><NavLink to="/Contact" onClick={handleNavClick}>Contact</NavLink></li>
            <Link className='dona' to="/Donation" onClick={handleNavClick}><span>Donation 🤍</span></Link>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="iconsbar">
          <FaBars onClick={() => setShowSideBar(!showSideBar)} />
        </div>
      </nav>
      <div className='nav2'></div>
    </>
  );
};

export default Navi;
