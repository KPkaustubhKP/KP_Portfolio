// Portfolio JavaScript Functionality
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
    initResume();
});

// Theme Toggle Functionality - Dark Mode Default
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
    
    // Default to dark mode
    let currentTheme = 'dark';
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
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

// Enhanced Contact Form with Direct Email Integration
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
        submitBtn.textContent = 'Sending...';
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
            showFormSuccess();
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        let isValid = true;
        let errorMessage = '';
        
        if (!value) {
            isValid = false;
            errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
        } else if (fieldName === 'email' && !isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
        
        if (!isValid) {
            showFieldError(field, errorMessage);
        } else {
            clearFieldError(field);
        }
        
        return isValid;
    }
    
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
            showFormErrors(errors);
            return false;
        }
        
        clearFormErrors();
        return true;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFieldError(field, message) {
        clearFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #ff5555;
            font-size: 12px;
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
        `;
        errorDiv.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            ${message}
        `;
        
        field.parentNode.appendChild(errorDiv);
        field.style.borderColor = '#ff5555';
    }
    
    function clearFieldError(field) {
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        field.style.borderColor = '';
    }
    
    function showFormErrors(errors) {
        clearFormErrors();
        
        const errorContainer = document.createElement('div');
        errorContainer.className = 'form-errors';
        errorContainer.style.cssText = `
            color: #ff5555;
            font-size: 14px;
            margin-bottom: 20px;
            padding: 16px;
            background: rgba(255, 85, 85, 0.1);
            border: 1px solid rgba(255, 85, 85, 0.2);
            border-radius: 8px;
        `;
        
        const errorList = document.createElement('ul');
        errorList.style.cssText = `
            margin: 0;
            padding-left: 20px;
        `;
        
        errors.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error;
            errorList.appendChild(errorItem);
        });
        
        errorContainer.appendChild(errorList);
        form.insertBefore(errorContainer, submitBtn);
    }
    
    function clearFormErrors() {
        const existingErrors = form.querySelectorAll('.form-errors, .field-error');
        existingErrors.forEach(error => error.remove());
        
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '';
        });
    }
    
    function showFormSuccess() {
        clearFormErrors();
        
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.style.cssText = `
            color: #10b981;
            font-size: 14px;
            margin-bottom: 20px;
            padding: 16px;
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.2);
            border-radius: 8px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        `;
        
        successDiv.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <div>
                <strong>Email client opened successfully!</strong><br>
                Please send the email from your email client. I'll get back to you soon!
            </div>
        `;
        
        form.insertBefore(successDiv, submitBtn);
        
        // Remove success message after 8 seconds
        setTimeout(() => {
            if (successDiv && successDiv.parentNode) {
                successDiv.remove();
            }
        }, 8000);
    }
}

// Typewriter Effect
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    const text = typewriterElement.textContent;
    
    // Clear the text and start typing effect
    typewriterElement.textContent = '';
    typewriterElement.style.borderRight = '2px solid var(--portfolio-primary)';
    
    let i = 0;
    const typingSpeed = 100;
    const pauseDuration = 2000;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Blinking cursor effect
            setTimeout(() => {
                typewriterElement.style.borderRight = 'none';
            }, pauseDuration);
        }
    }
    
    // Start typing after a brief delay
    setTimeout(typeWriter, 500);
}

// Blog Cards Interactions
function initBlogCards() {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        // Add hover effect and click interaction
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // For now, show a "coming soon" message
            const category = this.querySelector('.blog-category').textContent;
            const title = this.querySelector('h3').textContent;
            
            // Create a modal-like notification
            showBlogComingSoon(title, category);
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(96, 165, 250, 0.1);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple && ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
    });
    
    function showBlogComingSoon(title, category) {
        // Create notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--color-surface);
            border: 2px solid var(--color-border);
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            max-width: 500px;
            text-align: center;
            animation: slideIn 0.3s ease-out;
        `;
        
        notification.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 16px;">🚧</div>
            <h3 style="color: var(--color-text); margin-bottom: 12px; font-size: 20px;">${title}</h3>
            <p style="color: var(--color-text-secondary); margin-bottom: 24px; line-height: 1.6;">
                This blog post is currently in development. Stay tuned for technical insights on VLSI design and hardware engineering!
            </p>
            <button onclick="this.parentElement.parentElement.remove(); document.querySelector('.blog-overlay').remove();" 
                    style="background: var(--portfolio-primary); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 500;">
                Got it!
            </button>
        `;
        
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'blog-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9999;
            animation: fadeIn 0.3s ease-out;
        `;
        
        // Add to DOM
        document.body.appendChild(overlay);
        document.body.appendChild(notification);
        
        // Remove on overlay click
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
            document.body.removeChild(notification);
        });
        
        // Auto remove after 10 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(overlay);
                document.body.removeChild(notification);
            }
        }, 10000);
    }
}

// Resume Download Functionality
function initResume() {
    // This function can be called from the HTML button
    window.downloadResume = function() {
        // For now, show a message about resume availability
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-surface);
            border: 2px solid var(--portfolio-primary);
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            max-width: 350px;
            animation: slideInRight 0.3s ease-out;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <span style="font-size: 1.5rem;">📄</span>
                <strong style="color: var(--color-text);">Resume Download</strong>
            </div>
            <p style="color: var(--color-text-secondary); margin: 0; line-height: 1.5;">
                Resume will be available for download soon! For now, please connect with me via email or LinkedIn for my latest resume.
            </p>
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 6 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.animation = 'slideOutRight 0.3s ease-in';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 6000);
    };
}

// Project Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            // Don't create ripple if clicking on tech tags or status
            if (e.target.classList.contains('tech-tag') || e.target.classList.contains('project-status')) {
                return;
            }
            
            const ripple = document.createElement('div');
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(96, 165, 250, 0.1);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple && ripple.parentNode) {
                    ripple.remove();
                }
            }, 600);
        });
        
        // Hover effect for tech tags
        const techTags = card.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
                this.style.transition = 'all 0.2s ease-out';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    });
});

// Skill Tags Animation
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill tags on scroll
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillTags = entry.target.querySelectorAll('.skill-tag');
                skillTags.forEach((tag, index) => {
                    tag.style.opacity = '0';
                    tag.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        tag.style.opacity = '1';
                        tag.style.transform = 'translateY(0)';
                        tag.style.transition = `all 0.5s ease-out`;
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-category').forEach(category => {
        skillObserver.observe(category);
    });
});

// Achievement Timeline Animation
document.addEventListener('DOMContentLoaded', function() {
    const achievementItems = document.querySelectorAll('.achievement-item');
    
    const achievementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateX(-50px)';
                entry.target.style.transition = 'all 0.6s ease-out';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, 200);
            }
        });
    }, { threshold: 0.3 });
    
    achievementItems.forEach(item => {
        achievementObserver.observe(item);
    });
});

// Add enhanced CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
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
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .navbar.scrolled {
        background: rgba(var(--color-surface-rgb, 255, 255, 253), 0.98) !important;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        backdrop-filter: blur(20px);
    }
`;
document.head.appendChild(style);

// Utility Functions
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

// Performance optimization for scroll events
const optimizedScrollHandler = debounce(function() {
    // Any additional scroll handling can go here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Accessibility enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add focus indicators for keyboard navigation
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--portfolio-primary)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--portfolio-primary);
        color: white;
        padding: 8px 12px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 9999;
        transition: top 0.3s;
        font-weight: 500;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.warn('Portfolio Error:', e.error);
});

// Log successful initialization
console.log('🚀 Portfolio loaded successfully with enhanced animations and functionality!');
console.log('✨ Features: Dark/Light theme, Smooth scrolling, Project filtering, Contact form, Animations');
console.log('📧 Contact form configured for: kaustubhofficial.kp@gmail.com');
