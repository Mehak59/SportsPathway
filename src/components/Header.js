import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }
  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  componentDidMount() {
    console.log("Header component mounted");
  }

  handleBurgerClick = () => {
    this.toggleMenu();
  };


  render() {
    const { isMenuOpen } = this.state;

    return (
      <header>
        <a href="#" className="logo">
          <img src="/assets/logo.png" width="200px" height="110px" alt="Logo" />
        </a>
        <ul className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/explore">EXPLORE</Link></li>
          <li><Link to="/latest">LATEST</Link></li>
          <li><Link to="/questionnaire">QUESTIONNAIRE</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
        <div className="navtabs">
          <a href="#">Follow us</a>
          <a href="https://www.instagram.com/">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="https://x.com/">
            <i className="ri-twitter-x-fill"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="ri-facebook-fill"></i>
          </a>
          <div className={`bx bx-menu ${isMenuOpen ? 'active' : ''}`} id="menu" onClick={this.handleBurgerClick}></div>
        </div>
      </header>
    );
  }
}

export default Header;
