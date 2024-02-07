// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Get form data
    const username = formData.get('username');
    const password = formData.get('password');

    // Send request to RestDB API to authenticate user
    fetch('https://loginpage-955a.restdb.io/rest/contact', {
        headers: {
            'x-apikey': '65c27cebeea793c9c1ce3392'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Check if username and password match any entry in the database
        const user = data.find(entry => entry.username === username && entry.password === password);
        if (user) {
            alert('Login successful');
            // Redirect to mainpage.html upon successful login
            window.location.href = 'mainpage.html';
        } else {
            alert('Invalid username or password');
        }
    })
    .catch(error => console.error('Error:', error));
});


// Function to handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Get form data
    const username = formData.get('username');
    const password = formData.get('password');

    // Send request to RestDB API to create a new user
    fetch('https://loginpage-955a.restdb.io/rest/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '65c27cebeea793c9c1ce3392	'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            // Signup successful
            alert('Signup successful');
            // Redirect to login page
            window.location.href = 'login.html';
        } else {
            // Handle signup failure
            alert('Signup failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
});


// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Get form data
    const username = formData.get('username');
    const password = formData.get('password');

    // Send request to RestDB API to authenticate user
    fetch('https://loginpage-955a.restdb.io/rest/contact', {
        method: 'GET',
        headers: {
            'cache-control': 'no-cache',
            'x-apikey': 'a61a63d998f84854cdf508b727668c9a83ee0'
        }
    })
    .then(response => response.json())
    .then(data => {
        // Check if username and password match any entry in the database
        const user = data.find(entry => entry.username === username && entry.password === password);
        if (user) {
            alert('Login successful');
            // Redirect to mainpage.html
            console.log('Before redirect');
window.location.href = 'mainpage.html';
console.log('After redirect');
        } else {
            alert('Invalid username or password');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error
    });
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate login success
    alert('Login successful');

    // Show the 'Go to Page' button
    document.getElementById('goto-page').classList.remove('hidden');
});

// Event listener for the 'Go to Page' button
document.getElementById('goto-page').addEventListener('click', function() {
    // Redirect to mainpage.html
    window.location.href = 'mainpage.html';
});