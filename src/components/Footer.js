import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Header.css'; 

function Footer() {
    return (
        <section class="footer">
      <div class="footer-box">
        <h3>Services</h3>
        <Link to="/questionnaire">Questionnaire</Link>
        <Link to="/latest">Latest</Link>
      </div>
      <div class="footer-box">
        <h3>About</h3>
        <Link to="/about">About Us</Link>
      </div>
      <div class="footer-box">
        <h3>Help</h3>
        <Link to="/faq">FAQs</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <div class="footer-box">
        <h3>Social</h3>
        <div class="social">
          <a href="https://www.instagram.com/"
            ><i class="ri-instagram-fill"></i
          ></a>
          <a href="https://x.com/"><i class="ri-twitter-x-fill"></i></a>
          <a href="https://www.facebook.com/"
            ><i class="ri-facebook-fill"></i
          ></a>
        </div>
      </div>
    </section>
    );
}

export default Footer;
