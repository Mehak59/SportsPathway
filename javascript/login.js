function validateLoginForm() {
    const username = document.getElementById('logName').value.trim();
    const password = document.getElementById('logPassword').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.innerHTML = '';

    if (username === '') {
        errorMsg.innerHTML += 'Username is required.<br />';
        return false;
    }

    if (password === '') {
        errorMsg.innerHTML += 'Password is required.<br />';
        return false;
    if (password.length <= 8) {
        errorMsg.innerHTML += 'Password must be more than 8 characters.<br />';
        return false;
    }

    return true; 
}
}

function validateSignupForm() {
    const email = document.getElementById('signEmail').value.trim();
    const username = document.getElementById('signName').value.trim();
    const password = document.getElementById('signPassword').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    errorMsg.innerHTML = '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (email === '' || !emailPattern.test(email)) {
        errorMsg.innerHTML += 'Valid email is required.<br />';
        return false;
    }

    if (username === '') {
        errorMsg.innerHTML += 'Username is required.<br />';
        return false;
    }

    if (password === '' || password.length <= 8) {
        errorMsg.innerHTML += 'Password must be more than 8 characters.<br />';
        return false;
    }
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    return true; 
}
document.getElementById('login').addEventListener('click', function() {
    document.querySelector('.login').style.display = 'flex';
    document.querySelector('.signup').style.display = 'none';
});

document.getElementById('signup').addEventListener('click', function() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.signup').style.display = 'flex';
});
