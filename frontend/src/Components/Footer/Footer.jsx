import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterester_icon from "../Assets/pintester_icon.png";
import whatssap_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Dar Nowar</p>
      </div>
      <ul className="footer-menu">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-subscribe">
        Rejoignez notre communauté pour recevoir des mises à jour exclusives !
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pinterester_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whatssap_icon} alt="" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2024 DarNowar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
