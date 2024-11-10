import React, { useState } from 'react';
import '../pages/login.css'; // Optional: Import a CSS file for styling

function Login() {
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [signupData, setSignupData] = useState({ email: '', username: '', password: '' });

  // Login form validation
  const validateLoginForm = () => {
    const { username, password } = loginData;
    let errors = '';

    if (username === '') {
      errors += 'Username is required.<br />';
    }

    if (password === '') {
      errors += 'Password is required.<br />';
    } else if (password.length <= 8) {
      errors += 'Password must be more than 8 characters.<br />';
    }

    setErrorMsg(errors);
    return errors === ''; // Returns true if no errors
  };

  // Signup form validation
  const validateSignupForm = () => {
    const { email, username, password } = signupData;
    let errors = '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || !emailPattern.test(email)) {
      errors += 'Valid email is required.<br />';
    }

    if (username === '') {
      errors += 'Username is required.<br />';
    }

    if (password === '' || password.length <= 8) {
      errors += 'Password must be more than 8 characters.<br />';
    }

    setErrorMsg(errors);

    if (errors === '') {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
    }

    return errors === ''; // Returns true if no errors
  };

  // Handle form data change
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'login') {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else if (type === 'signup') {
      setSignupData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submit
  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'login') {
      if (validateLoginForm()) {
        // Handle login logic here
        console.log('Login successful');
      }
    } else if (type === 'signup') {
      if (validateSignupForm()) {
        // Handle signup logic here
        console.log('Signup successful');
      }
    }
  };

  // Toggle active tab (Login/Signup)
  const toggleTab = (tab) => {
    setActiveTab(tab);
    setErrorMsg(''); // Reset error message when switching tabs
  };

  return (
    <section className="login-home">
      <div className="box">
        <div className="page">
          <div className="header">
            <a
              id="login"
              className={activeTab === 'login' ? 'active' : ''}
              onClick={() => toggleTab('login')}
              href="#login"
            >
              Login
            </a>
            <a
              id="signup"
              className={activeTab === 'signup' ? 'active' : ''}
              onClick={() => toggleTab('signup')}
              href="#signup"
            >
              Signup
            </a>
          </div>
          <div
            id="errorMsg"
            dangerouslySetInnerHTML={{ __html: errorMsg }}
          ></div>
          <div className="content">
            {activeTab === 'login' && (
              <form className="login" name="loginForm" onSubmit={(e) => handleSubmit(e, 'login')}>
                <input
                  type="text"
                  name="username"
                  id="logName"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={(e) => handleInputChange(e, 'login')}
                />
                <input
                  type="password"
                  name="password"
                  id="logPassword"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => handleInputChange(e, 'login')}
                />
                <div id="check">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <br />
                <br />
                <input type="submit" value="Login" />
                <a href="#">Forgot Password?</a>
              </form>
            )}

            {/* Signup Form */}
            {activeTab === 'signup' && (
              <form className="signup" name="signupForm" onSubmit={(e) => handleSubmit(e, 'signup')}>
                <input
                  type="email"
                  name="email"
                  id="signEmail"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={(e) => handleInputChange(e, 'signup')}
                />
                <input
                  type="text"
                  name="username"
                  id="signName"
                  placeholder="Username"
                  value={signupData.username}
                  onChange={(e) => handleInputChange(e, 'signup')}
                />
                <input
                  type="password"
                  name="password"
                  id="signPassword"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={(e) => handleInputChange(e, 'signup')}
                />
                <br />
                <input type="submit" value="SignUp" />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
