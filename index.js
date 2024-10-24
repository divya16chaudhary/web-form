document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const jobRoleSelect = form.querySelector('select');
    const jobRoleDescription = document.createElement('p');
    jobRoleDescription.style.marginTop = '10px';
    jobRoleSelect.parentElement.appendChild(jobRoleDescription);

    jobRoleSelect.addEventListener('change', () => {
        const selectedJobRole = jobRoleSelect.value;
        let description = '';
        switch (selectedJobRole) {
            case 'frontend':
                description = 'A Frontend Developer works on the client side of applications.';
                break;
            case 'backend':
                description = 'A Backend Developer works on the server side of applications.';
                break;
            case 'full_stack':
                description = 'A Full Stack Developer works on both client and server sides.';
                break;
            default:
                description = '';
                break;
        }
        jobRoleDescription.textContent = description;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Get form values
        const firstName = form.querySelector('input[placeholder="enter your name"]').value.trim();
        const secondName = form.querySelector('input[placeholder="Enter Your Second Name"]').value.trim();
        const email = form.querySelector('input[placeholder="Enter Your Email"]').value.trim();
        const jobRole = form.querySelector('select').value;
        const address = form.querySelector('textarea[placeholder="Enter Your address"]').value.trim();
        const city = form.querySelector('input[placeholder="Enter Your city"]').value.trim();
        const pincode = form.querySelector('input[placeholder="Enter pincode"]').value.trim();
        const date = form.querySelector('input[placeholder="current date"]').value;
        const cv = form.querySelector('input[type="file"]').files[0];

        // Simple validation
        if (!firstName || !secondName || !email || !jobRole || !address || !city || !pincode || !date || !cv) {
            alert("Please fill in all fields.");
            return;
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Pincode validation (assuming 6-digit pincode)
        if (pincode.length !== 6 || isNaN(pincode)) {
            alert("Please enter a valid 6-digit pincode.");
            return;
        }

        // File size validation (assuming max size is 5MB)
        const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes
        if (cv.size > maxFileSize) {
            alert("Please upload a CV smaller than 5MB.");
            return;
        }

        // If form is valid, you can handle the form submission
        alert("Form submitted successfully!");

        // Optionally, clear the form after successful submission
        form.reset();
        jobRoleDescription.textContent = ''; // Clear job role description
    });
});
