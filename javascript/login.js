const loginBox=document.querySelector('.loginbox')
const loginLink=document.querySelector('.login-link')
const registerLink=document.querySelector('.register-link')
registerLink.addEventListener('click',() =>{
    loginBox.classList.add('active');
});
loginLink.addEventListener('click',() =>{
    loginBox.classList.remove('active');
});
function validateLoginForm() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    let isValid = true;
    document.getElementById('login-username-error').textContent = '';
    document.getElementById('login-password-error').textContent = '';

    if (username === '') {
      document.getElementById('login-username-error').textContent = 'Username is required';
      isValid = false;
    }

    if (password === '') {
      document.getElementById('login-password-error').textContent = 'Password is required';
      isValid = false;
    }

    return isValid;
  }
  function validateRegisterForm() {
    const email = document.getElementById('register-email').value;
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    let isValid = true;
    document.getElementById('register-email-error').textContent = '';
    document.getElementById('register-username-error').textContent = '';
    document.getElementById('register-password-error').textContent = '';

    if (email === '') {
      document.getElementById('register-email-error').textContent = 'Email is required';
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById('register-email-error').textContent = 'Invalid email format';
      isValid = false;
    }

    if (username === '') {
      document.getElementById('register-username-error').textContent = 'Username is required';
      isValid = false;
    }

    if (password === '') {
      document.getElementById('register-password-error').textContent = 'Password is required';
      isValid = false;
    }

    return isValid;
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }