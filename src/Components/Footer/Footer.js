import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.jpg";
import twitter from "../../assets/tweeter.jpg";

import "./Footer.css";

const Footer = () => {
  const social = [fb, insta, twitter];
  return (
    <footer>
      <h1 className="logo">GLX TRVL</h1>

      <div className="links">
        <h3>Useful Links</h3>
        <div className="link-list">
          <Link to="/">Home</Link>
          <Link to="/training">Training</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="social">
        {social.map((item, i) =>(
          <img key={i} src={item} alt="social-icon" />        
        ))}
      </div>
    </footer>
  );
};

export default Footer;
