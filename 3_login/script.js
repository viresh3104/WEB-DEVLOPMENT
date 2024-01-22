document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your own logic to check the username and password
    if (username === 'your-username' && password === 'your-password') {
        alert('Login successful!');
        // Redirect to another page or perform further actions
    } else {
        alert('Invalid username or password');
    }
});