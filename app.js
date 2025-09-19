// Enhanced Portfolio JavaScript with Fixed Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initThemeToggle();
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initActiveNavigation();
    initProjectFiltering();
    initContactForm();
    initTypewriter();
    initBlogCards();
    initPhotoUpload();
    initResumeDownload();
});

// Theme Toggle Functionality - FIXED
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
    
    // Check for saved theme preference or default to 'dark'
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply the theme immediately
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle theme
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply theme to document
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        
        // Save preference
        localStorage.setItem('theme', currentTheme);
        
        // Update icon
        updateThemeIcon(currentTheme);
        
        // Add animation to the toggle button
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}

// Photo Upload Functionality
function initPhotoUpload() {
    const uploadBtn = document.getElementById('upload-photo-btn');
    const photoInput = document.getElementById('photo-input');
    const profilePhoto = document.getElementById('profile-photo');
    const placeholder = document.getElementById('photo-placeholder');
    
    if (!uploadBtn || !photoInput || !profilePhoto || !placeholder) return;
    
    // Check for saved photo in localStorage
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        profilePhoto.src = savedPhoto;
        profilePhoto.style.display = 'block';
        placeholder.style.display = 'none';
        uploadBtn.textContent = 'Change Photo';
    }
    
    uploadBtn.addEventListener('click', function() {
        photoInput.click();
    });
    
    photoInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                showNotification('Please select a valid image file', 'error');
                return;
            }
            
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                showNotification('Image size should be less than 5MB', 'error');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                
                // Display the image
                profilePhoto.src = imageData;
                profilePhoto.style.display = 'block';
                placeholder.style.display = 'none';
                uploadBtn.textContent = 'Change Photo';
                
                // Save to localStorage
                localStorage.setItem('profilePhoto', imageData);
                
                showNotification('Profile photo updated successfully!', 'success');
            };
            reader.readAsDataURL(file);
        }
    });
}

// Resume Download Functionality - FIXED
function initResumeDownload() {
    // No need for complex logic, the HTML link handles the download
    console.log('Resume download initialized - direct link to GitHub PDF');
}

// Mobile Menu Functionality
function initMobileMenu() {
    const hamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling Navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');
    
    function handleSmoothScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const navbar = document.querySelector('.navbar');
            const navHeight = navbar ? navbar.offsetHeight : 70;
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    heroButtons.forEach(button => {
        button.addEventListener('click', handleSmoothScroll);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');
    
    // Intersection Observer for section animations
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for navbar styling
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}

// Active Navigation Highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    const navigationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (entry.isIntersecting && navLink) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current nav link
                navLink.classList.add('active');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -50%'
    });
    
    sections.forEach(section => {
        navigationObserver.observe(section);
    });
}

// Project Filtering
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.all-projects-grid .project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects with animation
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.5s ease-out';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                    card.style.transition = 'all 0.3s ease-out';
                    
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// Enhanced Contact Form
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
        
        // Create enhanced email content
        const emailSubject = `Portfolio Contact: ${subject}`;
        const emailBody = `Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Kaustubh Pandey's Portfolio Website
Time: ${new Date().toLocaleString()}`;
        
        // Create mailto link with proper encoding
        const mailtoLink = `mailto:kaustubhofficial.kp@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Opening Email Client...';
        submitBtn.disabled = true;
        
        // Create a hidden link and click it to open email client
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        
        // Show success message and reset form
        setTimeout(() => {
            showNotification('Email client opened! Please send the message from your email app.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
    
    function validateForm(name, email, subject, message) {
        const errors = [];
        
        if (!name) errors.push('Name is required');
        if (!email) {
            errors.push('Email is required');
        } else if (!isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }
        if (!subject) errors.push('Subject is required');
        if (!message) errors.push('Message is required');
        
        if (errors.length > 0) {
            showNotification(errors.join(', '), 'error');
            return false;
        }
        
        return true;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Typewriter Effect
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    const text = 'VLSI Designer & Hardware Innovation Enthusiast';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typewriterElement.innerHTML = text + '<span class="cursor blink">|</span>';
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Blog Cards Interaction
function initBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('click', function() {
            showNotification('This blog post is currently in development. Stay tuned for technical insights on VLSI design and hardware engineering!', 'info');
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    // Get current theme for proper colors
    const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'dark';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        color: var(--color-text);
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        max-width: 350px;
        animation: slideInRight 0.3s ease-out;
        border-left: 4px solid ${type === 'error' ? 'var(--color-error)' : type === 'success' ? 'var(--color-success)' : 'var(--color-info)'};
        font-size: 14px;
        line-height: 1.4;
        border: 1px solid var(--color-border);
    `;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    notification.innerHTML = `<strong>${icon}</strong> ${message}`;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
    
    // Click to dismiss
    notification.addEventListener('click', () => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    });
}

// Enhanced animations and styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .cursor {
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .profile-photo-section {
        margin-top: 2rem;
        text-align: center;
    }
    
    .profile-photo-upload {
        display: inline-block;
    }
    
    .profile-photo-placeholder {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto 1rem;
        position: relative;
        border: 3px solid var(--color-primary);
        background: var(--color-surface);
        transition: all 0.3s ease;
    }
    
    .profile-photo-placeholder:hover {
        transform: scale(1.05);
        border-color: var(--color-primary-hover);
    }
    
    #profile-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }
    
    .photo-placeholder-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: var(--color-text-secondary);
    }
    
    .photo-placeholder-text span {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    
    .photo-placeholder-text p {
        margin: 0;
        font-size: 0.8rem;
        font-weight: var(--font-weight-medium);
    }
    
    .upload-photo-btn {
        background: var(--color-secondary);
        color: var(--color-text);
        border: 1px solid var(--color-border);
        padding: 10px 20px;
        border-radius: var(--radius-base);
        cursor: pointer;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        transition: all var(--duration-fast) var(--ease-standard);
        box-shadow: var(--shadow-xs);
    }
    
    .upload-photo-btn:hover {
        background: var(--color-secondary-hover);
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
    }
    
    .notification {
        cursor: pointer;
        user-select: none;
    }
    
    .notification:hover {
        transform: translateX(-5px);
        box-shadow: var(--shadow-xl);
    }
    
    /* Mobile responsive adjustments for profile photo */
    @media (max-width: 768px) {
        .profile-photo-section {
            margin-top: 1.5rem;
        }
        
        .profile-photo-placeholder {
            width: 100px;
            height: 100px;
        }
        
        .upload-photo-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
        }
    }
`;
document.head.appendChild(style);

// Performance optimization
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.warn('Portfolio Error:', e.error);
});

// Log successful initialization
console.log('🚀 Enhanced Portfolio loaded successfully!');
console.log('✨ Features: Fixed theme toggle, Photo upload, Resume download, Enhanced animations');
console.log('📧 Contact: kaustubhofficial.kp@gmail.com');
console.log('📄 Resume: Direct download from GitHub');
