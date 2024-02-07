document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Get form data
    const username = formData.get('username');
    const password = formData.get('password');

    // Show the Lottie animation
    const lottiePlayer = document.getElementById('lottie-animation');
    lottiePlayer.style.display = 'block';
    lottiePlayer.play();

    // Delay for 3 seconds before hiding the animation and proceeding with the login logic
    setTimeout(function() {
        // Hide the Lottie animation
        lottiePlayer.style.display = 'none';

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
    }, 3000); // Delay for 3 seconds
});



// Function to handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = {
        username: form.elements['username'].value,
        password: form.elements['password'].value
    };

    // Send request to RestDB API to create a new user
    fetch('https://loginpage-955a.restdb.io/rest/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '65c27cebeea793c9c1ce3392'
        },
        body: JSON.stringify(formData)
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
