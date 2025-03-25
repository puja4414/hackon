loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateLoginForm()) {
        showSuccessMessage();
        // Redirect to home page after successful login
        setTimeout(() => {
            window.location.href = 'index.html'; // or 'home.html' depending on your file name
        }, 2000);
    }
});

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateLoginForm()) {
        // Store login status (optional)
        localStorage.setItem('isLoggedIn', 'true');
        
        // Show success message
        showSuccessMessage();
        
        // Redirect to home page after 2 seconds
        setTimeout(() => {
            window.location.href = 'index.html'; // Change to your home page filename
        }, 2000);
    }
});