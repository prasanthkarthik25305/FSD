document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        let valid = true;

        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address.');
            valid = false;
        } else {
            clearError(emailInput);
        }

        // Password validation
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password cannot be empty.');
            valid = false;
        } else {
            clearError(passwordInput);
        }

        if (valid) {
            // Perform AJAX request for login
            const formData = new FormData(form);
            fetch('login_process.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Redirect to home page upon successful login
                    window.location.href = "health.html";
                } else {
                    // Show error message if login fails
                    showError(passwordInput, data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showError(passwordInput, 'An error occurred during login.');
            });
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        let error = formGroup.querySelector('.error-message');
        if (!error) {
            error = document.createElement('div');
            error.className = 'error-message';
            formGroup.appendChild(error);
        }
        error.textContent = message;
        input.classList.add('is-invalid');
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) {
            formGroup.removeChild(error);
        }
        input.classList.remove('is-invalid');
    }
});
