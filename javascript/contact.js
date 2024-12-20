window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const user = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
    };

    const userString = JSON.stringify(user);

    localStorage.setItem('user', userString);
    const interest={
        phone: document.getElementById('num').value,
        interest: document.getElementById('inter').value
    }
    const interest1=JSON.stringify(interest);
    sessionStorage.setItem('interest',interest1);

    alert('User information saved!');
    alert("Form submitted successfully!");
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("num").value.trim();
        const interests = document.getElementById("inter").value.trim();
        const ageGroup = form.querySelector('select[placeholder="Age Group *"]').value;
        const country = form.querySelector('select[placeholder="Country or region *"]').value;
        const reason = form.querySelector('select[placeholder="Reason for contact *"]').value;
        const marketingConsent = document.getElementById("marketingConsent").checked;
        let valid = true;
        let errorMessage = '';
        if (!fname) {
            valid = false;
            errorMessage += 'First name is required.\n';
        }
        if (!lname) {
            valid = false;
            errorMessage += 'Last name is required.\n';
        }
        if (!email || !validateEmail(email)) {
            valid = false;
            errorMessage += 'A valid email is required.\n';
        }
        if (!phone) {
            valid = false;
            errorMessage += 'Phone number is required.\n';
        }
        if (!interests) {
            valid = false;
            errorMessage += 'Interests are required.\n';
        }
        if (ageGroup === '') {
            valid = false;
            errorMessage += 'Age group is required.\n';
        }
        if (country === '') {
            valid = false;
            errorMessage += 'Country or region is required.\n';
        }
        if (reason === '') {
            valid = false;
            errorMessage += 'Reason for contact is required.\n';
        }
        if (!valid) {
            alert(errorMessage);
        } else {
            alert("Form submitted successfully!");
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  localStorage.setItem("scrollPosition", window.scrollY);
  header.classList.toggle("sticky", window.scrollY > 60);
});
document.addEventListener("DOMContentLoaded", function () {
    const savedScrollPosition = localStorage.getItem("scrollPosition");

  if (savedScrollPosition) {
    window.scrollTo(0, parseInt(savedScrollPosition, 10));
  }
});
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navigation');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
}
window.onscroll = function () {
    const button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
  };
