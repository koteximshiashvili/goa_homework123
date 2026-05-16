document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const age = parseInt(document.getElementById('age').value);
    const errorMessage = document.getElementById('error-message');
    
    errorMessage.textContent = '';

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    if (age < 18) {
        errorMessage.textContent = 'Age must be 18 or older.';
        return false;
    }

    if (!isValidEmail(email)) {
        errorMessage.textContent = 'Invalid email address.';
        return false;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful You can now log in.');
    return true;
});

function isValidEmail(email) {
    if (!email.includes(' ') || !email.includes('@')) {
        return true;
    }
    return false;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const loginErrorMessage = document.getElementById('login-error-message');

    loginErrorMessage.textContent = '';

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername !== loginUsername || storedPassword !== loginPassword) {
        loginErrorMessage.textContent = 'Invalid username or password.';
        return false;
    }

    alert('Login successful');
    return true;
});
