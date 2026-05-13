import React from "react";
import "./Bank.css"; // Make sure this CSS file is created

const Bank = () => {
  return (
    <div className="bank-container">
      <div className="bank-card">
        {/* Left: QR Code Card */}
        <div className="left-card">
          <div className="image-box">
            <img src="/images/LOGO.png" alt="DuitNow" className="logo" />
          </div>
          <p className="title">Nation's  First  Trust </p>
          <div className="qr-box">
            <img src="/images/QR.PNG" alt="QR Code" className="qr" />
          </div>
          <p className="caption">Place QR Code in the scan area</p>
          <p className="title">UPI ID</p>
            <p className="caption">QR917598378989-1947@UNIONBANKOFINDIA </p>
        </div>

        {/* Right: Bank Details */}
        <div className="right-card">
          <div className="logo-wrap">
            <img src="/images/BANK.PNG" alt="Maybank Logo" className="bank-logo" />
            <h2 className="bank-name">UNION BANK OF INDIA</h2>
          </div>

          <div className="info-card">
            <p className="label">Account Holder: Nation's First Trust</p>
    
            <p className="label">Account No: 333802010461947</p>
            <p className="value"></p>
              <p className="label">IFSC code: UBIN0533386</p>
            <p className="value">Branch Code: 533386</p>
             <p className="value">MICR Code: 635026103</p>
               <p className="value">Branch : Natrampalli </p>
               <p className="value">Country : India </p>
          </div>
{/* 
          <div className="info-card">
            <p className="label">Account Holder:</p>
            <p className="value">Nation's First Trust </p>
          </div> */}

          <div className="info-card">
            <p className="label">Contact Persons:</p>
            <p className="value"> Mr. S.Sampangi :-  +91 9952509559</p>
                        <p className="value"> Mr.  M. Ramesh  :-  +91 9597357250</p>
          </div>

          <p className="note">
          We are a government-registered NGO working for the welfare of society across India. All donations made to our organization are used transparently and directly for the betterment of our causes. Your support enables us to continue our mission and extend our reach to those in need.

Every contribution is valuable and deeply appreciated. Thank you for standing with us.
          </p>

          <p className="thankyou">Nation's First Trust</p>
        </div>
      </div>
    </div>
  );
};

export default Bank;
