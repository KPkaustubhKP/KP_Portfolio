
// Enhanced Contact Form for Email Integration
function initContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!form || !submitBtn) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();

        // Validate form
        if (!validateForm(name, email, subject, message)) {
            return;
        }

        // Create email content
        const emailSubject = `Portfolio Contact: ${subject}`;
        const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        // Create mailto link
        const mailtoLink = `mailto:kaustubhofficial.kp@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

        // Simulate form submission
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Opening Email Client...';
        submitBtn.disabled = true;

        // Open email client
        window.location.href = mailtoLink;

        // Reset button after delay
        setTimeout(() => {
            showFormSuccess();
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });

    // Rest of the validation functions remain the same...
    // [Keep existing validation code]
}
