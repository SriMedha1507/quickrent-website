document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        form.reset();
    });

    const form1 = document.getElementById('signup-form');
    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Basic validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert('Sign up successful! Welcome to QuickRent.');
        form1.reset();
});
const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
         //Form validation
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Here you can add your form submission logic (e.g., send data to a server)
        alert(`Login successful! Welcome back, ${email}.`);
        loginForm.reset();
    });
});