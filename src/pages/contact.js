import React from 'react';
import './contact.css'; 

const Contact = () => {
  return (
    <div>
      <section className="cont">
        <div className="headings">
          <h1>Contact Us</h1>
          <p>
            At SportsPathway, we value your feedback and inquiries. Whether you
            have questions about our services, need assistance with pricing and
            plans, or want to schedule a demo, our dedicated team is here to help.
            We strive to provide exceptional support and guidance, ensuring that
            your experience with us is seamless and rewarding. Please fill out the
            contact form below, and we will get back to you as soon as possible.
            Your satisfaction is our top priority, and we look forward to
            connecting with you!
          </p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h1>Contact our team</h1>
          <p>
            Get help with pricing and plans, schedule a demo, explore use-cases,
            and more.
          </p>
          <form id="contactForm">
            <div className="form-group">
              <input type="text" placeholder="First name *" id="fname" required />
              <input type="text" placeholder="Last name *" id="lname" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email *" id="email" required />
              <input type="tel" placeholder="Phone number *" id="num" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Interests *" id="inter" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Age Group *</option>
                <option value="1-10">1-10</option>
                <option value="11-17">11-17</option>
                <option value="18-35">18-35</option>
                <option value="35+">35+</option>
              </select>
              <select required>
                <option value="">Country or region *</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            <div className="form-group">
              <select required>
                <option value="">Reason for contact *</option>
                <option value="pricing">Pricing</option>
                <option value="demo">Request a demo</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Provide more details (optional)"></textarea>
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="marketingConsent" />
              <label htmlFor="marketingConsent">
                I agree to SportsPathway sending marketing communications about
                SportsPathway
              </label>
            </div>
            <button type="submit">Contact</button>
          </form>
        </div>
      </section>

      <button id="scrollToTopBtn" className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
        ↑
      </button>
    </div>
  );
};

export default Contact;