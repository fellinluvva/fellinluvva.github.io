// DATE AND TIME
function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();

    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);
}

displayDateTime();
setInterval(displayDateTime, 1000);

// Dark and Light Mode Changer
const colorButton = document.getElementById('colorButton');

// move between pages wo changing
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

function applyTheme() {
    if (isDarkMode) {
        // Dark mode
        document.body.style.backgroundColor = '#202020';
        document.body.style.color = '#dddddd';
        colorButton.textContent = 'Switch to Light Mode'; 
        document.querySelector('header').style.backgroundColor = '#333'; 
        document.querySelector('footer').style.backgroundColor = '#333'; 
        const navbar = document.querySelector('.navbar');
        navbar.style.backgroundColor = '#444'; 
        navbar.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#dddddd'; 
        });
        document.querySelectorAll('.btn-dark').forEach(btn => {
            btn.style.backgroundColor = '#444'; 
            btn.style.color = '#dddddd'; 
        });
    } else {
        // Light mode
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000'; 
        colorButton.textContent = 'Switch to Dark Mode';
        document.querySelector('header').style.backgroundColor = '#f8f9fa';
        document.querySelector('footer').style.backgroundColor = '#f8f9fa'; 
        const navbar = document.querySelector('.navbar');
        navbar.style.backgroundColor = '#eaeaea'
        navbar.querySelectorAll('.nav-link').forEach(link => {
            link.style.color = '#000000'; 
        });
        document.querySelectorAll('.btn-dark').forEach(btn => {
            btn.style.backgroundColor = '#ffffff'; 
            btn.style.color = '#000000'; 
        });
    }
}
applyTheme();
colorButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode); 
    applyTheme(); 
});


// Form validation
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    if (!name || !email || !feedback) {
        alert('All fields are required!');
        return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Feedback submitted successfully!');
});

// Form validation for Subscription
document.getElementById('subscribeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const subscriberEmail = document.getElementById('subscriberEmail').value.trim();

    if (!subscriberEmail) {
        alert('Email is required!');
        return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(subscriberEmail)) {
        alert('Please enter a valid email address!');
        return;
    }


    alert('Subscription successful!');
    $('#subscribeModal').modal('hide');
});




// Rating system
document
	.getElementById("feedbackForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		var rating = document.querySelector('input[name="rating"]:checked').value;
		var comment = document.getElementById("comment").value;

		console.log("Rating: ", rating);
		console.log("Comment: ", comment);

	});



// login
function login() {
    const username = document.getElementById('username-input').value;
    if (username) {
        localStorage.setItem('username', username);
        updateLoginState();
    }
}

function logout() {
    localStorage.removeItem('username');
    updateLoginState();
}

function updateLoginState() {
    const username = localStorage.getItem('username'); 
    
    if (username) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('welcome-section').style.display = 'block';
        document.getElementById('username-display').textContent = username;
    } else {
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('welcome-section').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateLoginState();
});

