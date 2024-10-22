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
        phone: document.getElementById('num').value
    };

    const userString = JSON.stringify(user);

    localStorage.setItem('user', userString);
    const interest={
        interest: document.getElementById('inter').value
    }
    const interest1=JSON.stringify(interest);
    sessionStorage.setItem('interest',interest1);

    alert('User information saved!');
    alert("Form submitted successfully!");
});




  