:root {
  /* Primitive Color Tokens */
  --color-white: rgba(255, 255, 255, 1);
  --color-black: rgba(0, 0, 0, 1);
  --color-cream-50: rgba(252, 252, 249, 1);
  --color-cream-100: rgba(255, 255, 253, 1);
  --color-gray-200: rgba(245, 245, 245, 1);
  --color-gray-300: rgba(167, 169, 169, 1);
  --color-gray-400: rgba(119, 124, 124, 1);
  --color-slate-500: rgba(98, 108, 113, 1);
  --color-brown-600: rgba(94, 82, 64, 1);
  --color-charcoal-700: rgba(31, 33, 33, 1);
  --color-charcoal-800: rgba(38, 40, 40, 1);
  --color-slate-900: rgba(19, 52, 59, 1);
  --color-teal-300: rgba(50, 184, 198, 1);
  --color-teal-400: rgba(45, 166, 178, 1);
  --color-teal-500: rgba(33, 128, 141, 1);
  --color-teal-600: rgba(29, 116, 128, 1);
  --color-teal-700: rgba(26, 104, 115, 1);
  --color-teal-800: rgba(41, 150, 161, 1);
  --color-red-400: rgba(255, 84, 89, 1);
  --color-red-500: rgba(192, 21, 47, 1);
  --color-orange-400: rgba(230, 129, 97, 1);
  --color-orange-500: rgba(168, 75, 47, 1);

  /* RGB versions for opacity control */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;
  --color-slate-500-rgb: 98, 108, 113;
  --color-red-500-rgb: 192, 21, 47;
  --color-red-400-rgb: 255, 84, 89;
  --color-orange-500-rgb: 168, 75, 47;
  --color-orange-400-rgb: 230, 129, 97;

  /* Background color tokens (Light Mode) */
  --color-bg-1: rgba(59, 130, 246, 0.08); /* Light blue */
  --color-bg-2: rgba(245, 158, 11, 0.08); /* Light yellow */
  --color-bg-3: rgba(34, 197, 94, 0.08); /* Light green */
  --color-bg-4: rgba(239, 68, 68, 0.08); /* Light red */
  --color-bg-5: rgba(147, 51, 234, 0.08); /* Light purple */
  --color-bg-6: rgba(249, 115, 22, 0.08); /* Light orange */
  --color-bg-7: rgba(236, 72, 153, 0.08); /* Light pink */
  --color-bg-8: rgba(6, 182, 212, 0.08); /* Light cyan */

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
  --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);

  /* Common style patterns */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for opacity control */
  --color-success-rgb: 33, 128, 141;
  --color-error-rgb: 192, 21, 47;
  --color-warning-rgb: 168, 75, 47;
  --color-info-rgb: 98, 108, 113;

  /* Typography */
  --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  --font-size-4xl: 30px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
  --font-weight-bold: 600;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --letter-spacing-tight: -0.01em;

  /* Spacing */
  --space-0: 0;
  --space-1: 1px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-base: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04),
    0 2px 4px -1px rgba(0, 0, 0, 0.02);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04),
    0 4px 6px -2px rgba(0, 0, 0, 0.02);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.03);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}

/* Dark mode colors */
@media (prefers-color-scheme: dark) {
  :root {
    /* RGB versions for opacity control (Dark Mode) */
    --color-gray-400-rgb: 119, 124, 124;
    --color-teal-300-rgb: 50, 184, 198;
    --color-gray-300-rgb: 167, 169, 169;
    --color-gray-200-rgb: 245, 245, 245;

    /* Background color tokens (Dark Mode) */
    --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
    --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
    --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
    --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
    --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
    --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
    --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
    --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

    /* Semantic Color Tokens (Dark Mode) */
    --color-background: var(--color-charcoal-700);
    --color-surface: var(--color-charcoal-800);
    --color-text: var(--color-gray-200);
    --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
    --color-primary: var(--color-teal-300);
    --color-primary-hover: var(--color-teal-400);
    --color-primary-active: var(--color-teal-800);
    --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
    --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
    --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
    --color-border: rgba(var(--color-gray-400-rgb), 0.3);
    --color-error: var(--color-red-400);
    --color-success: var(--color-teal-300);
    --color-warning: var(--color-orange-400);
    --color-info: var(--color-gray-300);
    --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
    --color-btn-primary-text: var(--color-slate-900);
    --color-card-border: rgba(var(--color-gray-400-rgb), 0.2);
    --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
    --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    --button-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
    --color-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
    --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);

    /* Common style patterns - updated for dark mode */
    --focus-ring: 0 0 0 3px var(--color-focus-ring);
    --focus-outline: 2px solid var(--color-primary);
    --status-bg-opacity: 0.15;
    --status-border-opacity: 0.25;
    --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

    /* RGB versions for dark mode */
    --color-success-rgb: var(--color-teal-300-rgb);
    --color-error-rgb: var(--color-red-400-rgb);
    --color-warning-rgb: var(--color-orange-400-rgb);
    --color-info-rgb: var(--color-gray-300-rgb);
  }
}

/* Data attribute for manual theme switching */
[data-color-scheme="dark"] {
  /* RGB versions for opacity control (dark mode) */
  --color-gray-400-rgb: 119, 124, 124;
  --color-teal-300-rgb: 50, 184, 198;
  --color-gray-300-rgb: 167, 169, 169;
  --color-gray-200-rgb: 245, 245, 245;

  /* Colorful background palette - Dark Mode */
  --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
  --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
  --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
  --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
  --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
  --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
  --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
  --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

  /* Semantic Color Tokens (Dark Mode) */
  --color-background: var(--color-charcoal-700);
  --color-surface: var(--color-charcoal-800);
  --color-text: var(--color-gray-200);
  --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
  --color-primary: var(--color-teal-300);
  --color-primary-hover: var(--color-teal-400);
  --color-primary-active: var(--color-teal-800);
  --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
  --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
  --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
  --color-border: rgba(var(--color-gray-400-rgb), 0.3);
  --color-error: var(--color-red-400);
  --color-success: var(--color-teal-300);
  --color-warning: var(--color-orange-400);
  --color-info: var(--color-gray-300);
  --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
  --color-btn-primary-text: var(--color-slate-900);
  --color-card-border: rgba(var(--color-gray-400-rgb), 0.15);
  --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  --color-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
  --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);

  /* Common style patterns - updated for dark mode */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for dark mode */
  --color-success-rgb: var(--color-teal-300-rgb);
  --color-error-rgb: var(--color-red-400-rgb);
  --color-warning-rgb: var(--color-orange-400-rgb);
  --color-info-rgb: var(--color-gray-300-rgb);
}

[data-color-scheme="light"] {
  /* RGB versions for opacity control (light mode) */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);

  /* RGB versions for light mode */
  --color-success-rgb: var(--color-teal-500-rgb);
  --color-error-rgb: var(--color-red-500-rgb);
  --color-warning-rgb: var(--color-orange-500-rgb);
  --color-info-rgb: var(--color-slate-500-rgb);
}

/* Base styles */
html {
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Typography */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
}

h1 {
  font-size: var(--font-size-4xl);
}
h2 {
  font-size: var(--font-size-3xl);
}
h3 {
  font-size: var(--font-size-2xl);
}
h4 {
  font-size: var(--font-size-xl);
}
h5 {
  font-size: var(--font-size-lg);
}
h6 {
  font-size: var(--font-size-md);
}

p {
  margin: 0 0 var(--space-16) 0;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-standard);
}

a:hover {
  color: var(--color-primary-hover);
}

code,
pre {
  font-family: var(--font-family-mono);
  font-size: calc(var(--font-size-base) * 0.95);
  background-color: var(--color-secondary);
  border-radius: var(--radius-sm);
}

code {
  padding: var(--space-1) var(--space-4);
}

pre {
  padding: var(--space-16);
  margin: var(--space-16) 0;
  overflow: auto;
  border: 1px solid var(--color-border);
}

pre code {
  background: none;
  padding: 0;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-standard);
  border: none;
  text-decoration: none;
  position: relative;
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-btn-primary-text);
}

.btn--primary:hover {
  background: var(--color-primary-hover);
}

.btn--primary:active {
  background: var(--color-primary-active);
}

.btn--secondary {
  background: var(--color-secondary);
  color: var(--color-text);
}

.btn--secondary:hover {
  background: var(--color-secondary-hover);
}

.btn--secondary:active {
  background: var(--color-secondary-active);
}

.btn--outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn--outline:hover {
  background: var(--color-secondary);
}

.btn--sm {
  padding: var(--space-4) var(--space-12);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-sm);
}

.btn--lg {
  padding: var(--space-10) var(--space-20);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-md);
}

.btn--full-width {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Form elements */
.form-control {
  display: block;
  width: 100%;
  padding: var(--space-8) var(--space-12);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  transition: border-color var(--duration-fast) var(--ease-standard),
    box-shadow var(--duration-fast) var(--ease-standard);
}

textarea.form-control {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
}

select.form-control {
  padding: var(--space-8) var(--space-12);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: var(--select-caret-light);
  background-repeat: no-repeat;
  background-position: right var(--space-12) center;
  background-size: 16px;
  padding-right: var(--space-32);
}

/* Add a dark mode specific caret */
@media (prefers-color-scheme: dark) {
  select.form-control {
    background-image: var(--select-caret-dark);
  }
}

/* Also handle data-color-scheme */
[data-color-scheme="dark"] select.form-control {
  background-image: var(--select-caret-dark);
}

[data-color-scheme="light"] select.form-control {
  background-image: var(--select-caret-light);
}

.form-control:focus {
  border-color: var(--color-primary);
  outline: var(--focus-outline);
}

.form-label {
  display: block;
  margin-bottom: var(--space-8);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.form-group {
  margin-bottom: var(--space-16);
}

/* Card component */
.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-card-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--duration-normal) var(--ease-standard);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card__body {
  padding: var(--space-16);
}

.card__header,
.card__footer {
  padding: var(--space-16);
  border-bottom: 1px solid var(--color-card-border-inner);
}

/* Status indicators - simplified with CSS variables */
.status {
  display: inline-flex;
  align-items: center;
  padding: var(--space-6) var(--space-12);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.status--success {
  background-color: rgba(
    var(--color-success-rgb, 33, 128, 141),
    var(--status-bg-opacity)
  );
  color: var(--color-success);
  border: 1px solid
    rgba(var(--color-success-rgb, 33, 128, 141), var(--status-border-opacity));
}

.status--error {
  background-color: rgba(
    var(--color-error-rgb, 192, 21, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-error);
  border: 1px solid
    rgba(var(--color-error-rgb, 192, 21, 47), var(--status-border-opacity));
}

.status--warning {
  background-color: rgba(
    var(--color-warning-rgb, 168, 75, 47),
    var(--status-bg-opacity)
  );
  color: var(--color-warning);
  border: 1px solid
    rgba(var(--color-warning-rgb, 168, 75, 47), var(--status-border-opacity));
}

.status--info {
  background-color: rgba(
    var(--color-info-rgb, 98, 108, 113),
    var(--status-bg-opacity)
  );
  color: var(--color-info);
  border: 1px solid
    rgba(var(--color-info-rgb, 98, 108, 113), var(--status-border-opacity));
}

/* Container layout */
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--space-16);
  padding-left: var(--space-16);
}

@media (min-width: 640px) {
  .container {
    max-width: var(--container-sm);
  }
}
@media (min-width: 768px) {
  .container {
    max-width: var(--container-md);
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: var(--container-lg);
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: var(--container-xl);
  }
}

/* Utility classes */
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-4 {
  gap: var(--space-4);
}
.gap-8 {
  gap: var(--space-8);
}
.gap-16 {
  gap: var(--space-16);
}

.m-0 {
  margin: 0;
}
.mt-8 {
  margin-top: var(--space-8);
}
.mb-8 {
  margin-bottom: var(--space-8);
}
.mx-8 {
  margin-left: var(--space-8);
  margin-right: var(--space-8);
}
.my-8 {
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
}

.p-0 {
  padding: 0;
}
.py-8 {
  padding-top: var(--space-8);
  padding-bottom: var(--space-8);
}
.px-8 {
  padding-left: var(--space-8);
  padding-right: var(--space-8);
}
.py-16 {
  padding-top: var(--space-16);
  padding-bottom: var(--space-16);
}
.px-16 {
  padding-left: var(--space-16);
  padding-right: var(--space-16);
}

.block {
  display: block;
}
.hidden {
  display: none;
}

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

:focus-visible {
  outline: var(--focus-outline);
  outline-offset: 2px;
}

/* Dark mode specifics */
[data-color-scheme="dark"] .btn--outline {
  border: 1px solid var(--color-border-secondary);
}

@font-face {
  font-family: 'FKGroteskNeue';
  src: url('https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2')
    format('woff2');
}

/* END PERPLEXITY DESIGN SYSTEM */
:root {
  /* Primitive Color Tokens */
  --color-white: rgba(255, 255, 255, 1);
  --color-black: rgba(0, 0, 0, 1);
  --color-cream-50: rgba(252, 252, 249, 1);
  --color-cream-100: rgba(255, 255, 253, 1);
  --color-gray-200: rgba(245, 245, 245, 1);
  --color-gray-300: rgba(167, 169, 169, 1);
  --color-gray-400: rgba(119, 124, 124, 1);
  --color-slate-500: rgba(98, 108, 113, 1);
  --color-brown-600: rgba(94, 82, 64, 1);
  --color-charcoal-700: rgba(31, 33, 33, 1);
  --color-charcoal-800: rgba(38, 40, 40, 1);
  --color-slate-900: rgba(19, 52, 59, 1);
  --color-teal-300: rgba(50, 184, 198, 1);
  --color-teal-400: rgba(45, 166, 178, 1);
  --color-teal-500: rgba(33, 128, 141, 1);
  --color-teal-600: rgba(29, 116, 128, 1);
  --color-teal-700: rgba(26, 104, 115, 1);
  --color-teal-800: rgba(41, 150, 161, 1);
  --color-red-400: rgba(255, 84, 89, 1);
  --color-red-500: rgba(192, 21, 47, 1);
  --color-orange-400: rgba(230, 129, 97, 1);
  --color-orange-500: rgba(168, 75, 47, 1);

  /* RGB versions for opacity control */
  --color-brown-600-rgb: 94, 82, 64;
  --color-teal-500-rgb: 33, 128, 141;
  --color-slate-900-rgb: 19, 52, 59;
  --color-slate-500-rgb: 98, 108, 113;
  --color-red-500-rgb: 192, 21, 47;
  --color-red-400-rgb: 255, 84, 89;
  --color-orange-500-rgb: 168, 75, 47;
  --color-orange-400-rgb: 230, 129, 97;

  /* Background color tokens (Light Mode) */
  --color-bg-1: rgba(59, 130, 246, 0.08); /* Light blue */
  --color-bg-2: rgba(245, 158, 11, 0.08); /* Light yellow */
  --color-bg-3: rgba(34, 197, 94, 0.08); /* Light green */
  --color-bg-4: rgba(239, 68, 68, 0.08); /* Light red */
  --color-bg-5: rgba(147, 51, 234, 0.08); /* Light purple */
  --color-bg-6: rgba(249, 115, 22, 0.08); /* Light orange */
  --color-bg-7: rgba(236, 72, 153, 0.08); /* Light pink */
  --color-bg-8: rgba(6, 182, 212, 0.08); /* Light cyan */

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
  --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);

  /* Common style patterns */
  --focus-ring: 0 0 0 3px var(--color-focus-ring);
  --focus-outline: 2px solid var(--color-primary);
  --status-bg-opacity: 0.15;
  --status-border-opacity: 0.25;
  --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  /* RGB versions for light mode */
  --color-success-rgb: var(--color-teal-500-rgb);
  --color-error-rgb: var(--color-red-500-rgb);
  --color-warning-rgb: var(--color-orange-500-rgb);
  --color-info-rgb: var(--color-slate-500-rgb);

  /* Typography */
  --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;
  --font-size-4xl: 30px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
  --font-weight-bold: 600;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --letter-spacing-tight: -0.01em;

  /* Spacing */
  --space-0: 0;
  --space-1: 1px;
  --space-2: 2px;
  --space-4: 4px;
  --space-6: 6px;
  --space-8: 8px;
  --space-10: 10px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-base: 8px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.03);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

  /* Portfolio-specific styles (Light Mode) */
  --portfolio-primary: var(--color-teal-500);
  --portfolio-primary-hover: var(--color-teal-600);
  --portfolio-primary-active: var(--color-teal-700);
  --portfolio-secondary: var(--color-slate-500);
  --portfolio-accent: var(--color-teal-500);
  --portfolio-gradient: linear-gradient(135deg, var(--portfolio-primary) 0%, var(--portfolio-accent) 100%);
}

/* Dark mode colors */
@media (prefers-color-scheme: dark) {
  :root {
    /* RGB versions for opacity control (Dark Mode) */
    --color-gray-400-rgb: 119, 124, 124;
    --color-teal-300-rgb: 50, 184, 198;
    --color-gray-300-rgb: 167, 169, 169;
    --color-gray-200-rgb: 245, 245, 245;

    /* Background color tokens (Dark Mode) */
    --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
    --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
    --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
    --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
    --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
    --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
    --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
    --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

    /* Semantic Color Tokens (Dark Mode) */
    --color-background: var(--color-charcoal-700);
    --color-surface: var(--color-charcoal-800);
    --color-text: var(--color-gray-200);
    --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
    --color-primary: var(--color-teal-300);
    --color-primary-hover: var(--color-teal-400);
    --color-primary-active: var(--color-teal-800);
    --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
    --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
    --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
    --color-border: rgba(var(--color-gray-400-rgb), 0.3);
    --color-btn-primary-text: var(--color-slate-900);
    --color-card-border: rgba(var(--color-gray-400-rgb), 0.2);
    --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
    --color-error: var(--color-red-400);
    --color-success: var(--color-teal-300);
    --color-warning: var(--color-orange-400);
    --color-info: var(--color-gray-300);
    --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
    --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);
    --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.15);

    /* RGB versions for dark mode */
    --color-success-rgb: var(--color-teal-300-rgb);
    --color-error-rgb: var(--color-red-400-rgb);
    --color-warning-rgb: var(--color-orange-400-rgb);
    --color-info-rgb: var(--color-gray-300-rgb);

    /* Portfolio-specific styles (Dark Mode) */
    --portfolio-primary: var(--color-teal-300);
    --portfolio-primary-hover: var(--color-teal-400);
    --portfolio-primary-active: var(--color-teal-800);
    --portfolio-secondary: var(--color-gray-300);
    --portfolio-accent: var(--color-teal-300);
    --portfolio-gradient: linear-gradient(135deg, var(--portfolio-primary) 0%, var(--portfolio-accent) 100%);
  }
}

/* Data attribute for manual theme switching */
[data-color-scheme="dark"] {
  /* RGB versions for opacity control (dark mode) */
  --color-gray-400-rgb: 119, 124, 124;
  --color-teal-300-rgb: 50, 184, 198;
  --color-gray-300-rgb: 167, 169, 169;
  --color-gray-200-rgb: 245, 245, 245;

  /* Background color tokens (Dark Mode) */
  --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
  --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
  --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
  --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
  --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
  --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
  --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
  --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

  /* Semantic Color Tokens (Dark Mode) */
  --color-background: var(--color-charcoal-700);
  --color-surface: var(--color-charcoal-800);
  --color-text: var(--color-gray-200);
  --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
  --color-primary: var(--color-teal-300);
  --color-primary-hover: var(--color-teal-400);
  --color-primary-active: var(--color-teal-800);
  --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
  --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
  --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
  --color-border: rgba(var(--color-gray-400-rgb), 0.3);
  --color-btn-primary-text: var(--color-slate-900);
  --color-card-border: rgba(var(--color-gray-400-rgb), 0.2);
  --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
  --color-error: var(--color-red-400);
  --color-success: var(--color-teal-300);
  --color-warning: var(--color-orange-400);
  --color-info: var(--color-gray-300);
  --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
  --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);
  --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.15);

  /* RGB versions for dark mode */
  --color-success-rgb: var(--color-teal-300-rgb);
  --color-error-rgb: var(--color-red-400-rgb);
  --color-warning-rgb: var(--color-orange-400-rgb);
  --color-info-rgb: var(--color-gray-300-rgb);

  /* Portfolio-specific styles (Dark Mode) */
  --portfolio-primary: var(--color-teal-300);
  --portfolio-primary-hover: var(--color-teal-400);
  --portfolio-primary-active: var(--color-teal-800);
  --portfolio-secondary: var(--color-gray-300);
  --portfolio-accent: var(--color-teal-300);
  --portfolio-gradient: linear-gradient(135deg, var(--portfolio-primary) 0%, var(--portfolio-accent) 100%);
}

[data-color-scheme="light"] {
  /* Background color tokens (Light Mode) */
  --color-bg-1: rgba(59, 130, 246, 0.08); /* Light blue */
  --color-bg-2: rgba(245, 158, 11, 0.08); /* Light yellow */
  --color-bg-3: rgba(34, 197, 94, 0.08); /* Light green */
  --color-bg-4: rgba(239, 68, 68, 0.08); /* Light red */
  --color-bg-5: rgba(147, 51, 234, 0.08); /* Light purple */
  --color-bg-6: rgba(249, 115, 22, 0.08); /* Light orange */
  --color-bg-7: rgba(236, 72, 153, 0.08); /* Light pink */
  --color-bg-8: rgba(6, 182, 212, 0.08); /* Light cyan */

  /* Semantic Color Tokens (Light Mode) */
  --color-background: var(--color-cream-50);
  --color-surface: var(--color-cream-100);
  --color-text: var(--color-slate-900);
  --color-text-secondary: var(--color-slate-500);
  --color-primary: var(--color-teal-500);
  --color-primary-hover: var(--color-teal-600);
  --color-primary-active: var(--color-teal-700);
  --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
  --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
  --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
  --color-border: rgba(var(--color-brown-600-rgb), 0.2);
  --color-btn-primary-text: var(--color-cream-50);
  --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
  --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
  --color-error: var(--color-red-500);
  --color-success: var(--color-teal-500);
  --color-warning: var(--color-orange-500);
  --color-info: var(--color-slate-500);
  --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
  --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);

  /* RGB versions for light mode */
  --color-success-rgb: var(--color-teal-500-rgb);
  --color-error-rgb: var(--color-red-500-rgb);
  --color-warning-rgb: var(--color-orange-500-rgb);
  --color-info-rgb: var(--color-slate-500-rgb);

  /* Portfolio-specific styles (Light Mode) */
  --portfolio-primary: var(--color-teal-500);
  --portfolio-primary-hover: var(--color-teal-600);
  --portfolio-primary-active: var(--color-teal-700);
  --portfolio-secondary: var(--color-slate-500);
  --portfolio-accent: var(--color-teal-500);
  --portfolio-gradient: linear-gradient(135deg, var(--portfolio-primary) 0%, var(--portfolio-accent) 100%);
}

/* Base styles */
html {
  font-size: var(--font-size-base);
  font-family: var(--font-family-base);
  line-height: var(--line-height-normal);
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
}

h1 { font-size: var(--font-size-4xl); }
h2 { font-size: var(--font-size-3xl); }
h3 { font-size: var(--font-size-2xl); }
h4 { font-size: var(--font-size-xl); }
h5 { font-size: var(--font-size-lg); }
h6 { font-size: var(--font-size-md); }

p {
  margin: 0 0 var(--space-16) 0;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-standard);
}

a:hover {
  color: var(--color-primary-hover);
}

code, pre {
  font-family: var(--font-family-mono);
  font-size: calc(var(--font-size-base) * 0.95);
  background-color: var(--color-secondary);
  border-radius: var(--radius-sm);
}

code { padding: var(--space-1) var(--space-4); }

pre {
  padding: var(--space-16);
  margin: var(--space-16) 0;
  overflow: auto;
  border: 1px solid var(--color-border);
}

pre code {
  background: none;
  padding: 0;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-standard);
  border: none;
  text-decoration: none;
  position: relative;
}

.btn:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
}

.btn--primary {
  background: var(--color-primary);
  color: var(--color-btn-primary-text);
}

.btn--primary:hover {
  background: var(--color-primary-hover);
}

.btn--primary:active {
  background: var(--color-primary-active);
}

.btn--secondary {
  background: var(--color-secondary);
  color: var(--color-text);
}

.btn--secondary:hover {
  background: var(--color-secondary-hover);
}

.btn--secondary:active {
  background: var(--color-secondary-active);
}

.btn--outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn--outline:hover {
  background: var(--color-secondary);
}

.btn--sm {
  padding: var(--space-4) var(--space-12);
  font-size: var(--font-size-sm);
  border-radius: var(--radius-sm);
}

.btn--lg {
  padding: var(--space-10) var(--space-20);
  font-size: var(--font-size-lg);
  border-radius: var(--radius-md);
}

.btn--full-width {
  width: 100%;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Form elements */
.form-control {
  display: block;
  width: 100%;
  padding: var(--space-8) var(--space-12);
  font-size: var(--font-size-md);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}

textarea.form-control {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
}

select.form-control {
  padding: var(--space-8) var(--space-12);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: var(--select-caret-light);
  background-repeat: no-repeat;
  background-position: right var(--space-12) center;
  background-size: 16px;
  padding-right: var(--space-32);
}

@media (prefers-color-scheme: dark) {
  select.form-control {
    background-image: var(--select-caret-dark);
  }
}

[data-color-scheme="dark"] select.form-control {
  background-image: var(--select-caret-dark);
}

[data-color-scheme="light"] select.form-control {
  background-image: var(--select-caret-light);
}

.form-control:focus {
  border-color: var(--color-primary);
  outline: var(--focus-outline);
}

.form-label {
  display: block;
  margin-bottom: var(--space-8);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.form-group {
  margin-bottom: var(--space-16);
}

/* Card component */
.card {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-card-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--duration-normal) var(--ease-standard);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.card__body {
  padding: var(--space-16);
}

.card__header, .card__footer {
  padding: var(--space-16);
  border-bottom: 1px solid var(--color-card-border-inner);
}

/* Status indicators */
.status {
  display: inline-flex;
  align-items: center;
  padding: var(--space-6) var(--space-12);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.status--success {
  background-color: rgba(var(--color-success-rgb, 33, 128, 141), var(--status-bg-opacity));
  color: var(--color-success);
  border: 1px solid rgba(var(--color-success-rgb, 33, 128, 141), var(--status-border-opacity));
}

.status--error {
  background-color: rgba(var(--color-error-rgb, 192, 21, 47), var(--status-bg-opacity));
  color: var(--color-error);
  border: 1px solid rgba(var(--color-error-rgb, 192, 21, 47), var(--status-border-opacity));
}

.status--warning {
  background-color: rgba(var(--color-warning-rgb, 168, 75, 47), var(--status-bg-opacity));
  color: var(--color-warning);
  border: 1px solid rgba(var(--color-warning-rgb, 168, 75, 47), var(--status-border-opacity));
}

.status--info {
  background-color: rgba(var(--color-info-rgb, 98, 108, 113), var(--status-bg-opacity));
  color: var(--color-info);
  border: 1px solid rgba(var(--color-info-rgb, 98, 108, 113), var(--status-border-opacity));
}

/* Container layout */
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--space-16);
  padding-left: var(--space-16);
}

@media (min-width: 640px) { .container { max-width: var(--container-sm); } }
@media (min-width: 768px) { .container { max-width: var(--container-md); } }
@media (min-width: 1024px) { .container { max-width: var(--container-lg); } }
@media (min-width: 1280px) { .container { max-width: var(--container-xl); } }

/* Utility classes */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: var(--space-4); }
.gap-8 { gap: var(--space-8); }
.gap-16 { gap: var(--space-16); }
.m-0 { margin: 0; }
.mt-8 { margin-top: var(--space-8); }
.mb-8 { margin-bottom: var(--space-8); }
.mx-8 { margin-left: var(--space-8); margin-right: var(--space-8); }
.my-8 { margin-top: var(--space-8); margin-bottom: var(--space-8); }
.p-0 { padding: 0; }
.py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }
.px-8 { padding-left: var(--space-8); padding-right: var(--space-8); }
.py-16 { padding-top: var(--space-16); padding-bottom: var(--space-16); }
.px-16 { padding-left: var(--space-16); padding-right: var(--space-16); }
.block { display: block; }
.hidden { display: none; }

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

:focus-visible {
  outline: var(--focus-outline);
  outline-offset: 2px;
}

@font-face {
  font-family: 'FKGroteskNeue';
  src: url('https://r2cdn.perplexity.ai/fonts/FKGroteskNeue.woff2') format('woff2');
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 253, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  transition: all var(--duration-normal) var(--ease-standard);
}

@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(38, 40, 40, 0.95);
  }
}

[data-color-scheme="dark"] .navbar {
  background: rgba(38, 40, 40, 0.95);
}

[data-color-scheme="light"] .navbar {
  background: rgba(255, 255, 253, 0.95);
}

.nav-container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.nav-logo {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--portfolio-primary);
  text-decoration: none;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--space-32);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-md);
  transition: color var(--duration-fast) var(--ease-standard);
  position: relative;
}

.nav-link:hover {
  color: var(--portfolio-primary);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--portfolio-primary);
  border-radius: 1px;
}

.theme-toggle {
  background: var(--color-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-standard);
}

.theme-toggle:hover {
  background: var(--color-secondary-hover);
  transform: scale(1.05);
}

.theme-toggle-icon {
  font-size: 18px;
  transition: transform var(--duration-normal) var(--ease-standard);
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: var(--space-4);
}

.nav-hamburger span {
  width: 25px;
  height: 3px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--duration-normal) var(--ease-standard);
}

/* VLSI Circuit Board Hero Section */
.hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: var(--color-cream-50);
}

@media (prefers-color-scheme: dark) {
  .hero {
    background: #0a0e1a;
  }
}

[data-color-scheme="dark"] .hero {
  background: #0a0e1a;
}

[data-color-scheme="light"] .hero {
  background: var(--color-cream-50);
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.hero-content {
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 3;
}

/* Circuit Background Components */
.hero-circuit-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: 1;
}

@media (prefers-color-scheme: dark) {
  .hero-circuit-background {
    opacity: 0.3;
  }
}

[data-color-scheme="dark"] .hero-circuit-background {
  opacity: 0.3;
}

[data-color-scheme="light"] .hero-circuit-background {
  opacity: 0.15;
}

.circuit-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, var(--color-teal-500) 0%, transparent 2px),
    linear-gradient(90deg, var(--portfolio-primary) 0%, transparent 1px),
    linear-gradient(0deg, var(--color-teal-500) 0%, transparent 2px),
    linear-gradient(0deg, var(--portfolio-primary) 0%, transparent 1px),
    radial-gradient(circle at 20% 30%, var(--color-teal-500) 1px, transparent 2px),
    radial-gradient(circle at 80% 20%, var(--portfolio-primary) 1px, transparent 2px),
    radial-gradient(circle at 40% 70%, var(--color-teal-500) 1px, transparent 2px),
    radial-gradient(circle at 90% 80%, var(--portfolio-primary) 1px, transparent 2px),
    radial-gradient(circle at 10% 90%, var(--color-teal-500) 1px, transparent 2px);
  background-size: 
    200px 200px,
    40px 40px,
    200px 200px,
    40px 40px,
    100px 100px,
    150px 150px,
    120px 120px,
    80px 80px,
    90px 90px;
  animation: circuitFloat 30s linear infinite;
}

.circuit-nodes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 15% 25%, var(--color-teal-500) 3px, transparent 4px),
    radial-gradient(circle at 85% 15%, var(--portfolio-primary) 2px, transparent 3px),
    radial-gradient(circle at 45% 65%, var(--color-teal-500) 2px, transparent 3px),
    radial-gradient(circle at 75% 85%, var(--portfolio-primary) 3px, transparent 4px),
    radial-gradient(circle at 25% 75%, var(--color-teal-500) 2px, transparent 3px),
    radial-gradient(circle at 95% 45%, var(--portfolio-primary) 2px, transparent 3px),
    radial-gradient(circle at 5% 55%, var(--color-teal-500) 3px, transparent 4px),
    radial-gradient(circle at 35% 35%, var(--color-teal-500) 8px, transparent 9px),
    radial-gradient(circle at 65% 65%, var(--portfolio-primary) 6px, transparent 7px);
  background-size: 
    300px 300px,
    250px 250px,
    200px 200px,
    350px 350px,
    180px 180px,
    220px 220px,
    160px 160px,
    400px 400px,
    320px 320px;
  animation: circuitPulse 20s ease-in-out infinite;
}

.circuit-traces {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(45deg, transparent 40%, var(--color-teal-500) 41%, var(--color-teal-500) 43%, transparent 44%),
    linear-gradient(135deg, transparent 60%, var(--portfolio-primary) 61%, var(--portfolio-primary) 62%, transparent 63%),
    linear-gradient(90deg, transparent 30%, var(--color-teal-500) 31%, var(--color-teal-500) 32%, transparent 33%),
    linear-gradient(0deg, transparent 70%, var(--portfolio-primary) 71%, var(--portfolio-primary) 72%, transparent 73%);
  background-size: 
    150px 150px,
    200px 200px,
    100px 100px,
    250px 250px;
  animation: circuitGlow 25s ease-in-out infinite;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(252, 252, 249, 0.8);
  z-index: 2;
}

@media (prefers-color-scheme: dark) {
  .hero-overlay {
    background: rgba(10, 14, 26, 0.7);
  }
}

[data-color-scheme="dark"] .hero-overlay {
  background: rgba(10, 14, 26, 0.7);
}

[data-color-scheme="light"] .hero-overlay {
  background: rgba(252, 252, 249, 0.8);
}

.hero-title {
  margin-bottom: var(--space-24);
}

.hero-name {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  background: var(--portfolio-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: var(--space-16);
}

@media (prefers-color-scheme: dark) {
  .hero-name {
    text-shadow: 0 0 30px rgba(50, 184, 198, 0.5);
  }
}

[data-color-scheme="dark"] .hero-name {
  text-shadow: 0 0 30px rgba(50, 184, 198, 0.5);
}

.hero-tagline {
  font-size: var(--font-size-xl);
  color: var(--portfolio-primary);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-24);
  min-height: 1.5em;
}

@media (prefers-color-scheme: dark) {
  .hero-tagline {
    text-shadow: 0 0 20px rgba(50, 184, 198, 0.3);
  }
}

[data-color-scheme="dark"] .hero-tagline {
  text-shadow: 0 0 20px rgba(50, 184, 198, 0.3);
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-32);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

@media (prefers-color-scheme: dark) {
  .hero-description {
    color: var(--color-text);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
}

[data-color-scheme="dark"] .hero-description {
  color: var(--color-text);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-buttons {
  display: flex;
  gap: var(--space-16);
  justify-content: center;
  flex-wrap: wrap;
}

/* Circuit Animations */
@keyframes circuitFloat {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-5px, -5px) rotate(0.5deg); }
  50% { transform: translate(10px, -10px) rotate(-0.5deg); }
  75% { transform: translate(-10px, 5px) rotate(0.3deg); }
}

@keyframes circuitPulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  25% { opacity: 0.5; transform: scale(1.02); }
  50% { opacity: 0.4; transform: scale(0.98); }
  75% { opacity: 0.6; transform: scale(1.01); }
}

@keyframes circuitGlow {
  0%, 100% { opacity: 0.2; filter: brightness(1); }
  33% { opacity: 0.4; filter: brightness(1.2); }
  66% { opacity: 0.3; filter: brightness(0.9); }
}

/* Section Styling */
section {
  padding: 100px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s var(--ease-standard);
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  text-align: center;
  margin-bottom: var(--space-32);
  font-size: var(--font-size-3xl);
  color: var(--color-text);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--portfolio-primary);
  border-radius: 2px;
}

.section-subtitle {
  font-size: var(--font-size-2xl);
  margin: var(--space-32) 0 var(--space-24) 0;
  color: var(--color-text);
}

/* About Section */
.about {
  background: var(--color-surface);
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-32);
  align-items: center;
}

.about-text p {
  font-size: var(--font-size-lg);
  line-height: 1.7;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-20);
}

.about-interests {
  margin-top: var(--space-32);
}

.about-interests h3 {
  color: var(--color-text);
  margin-bottom: var(--space-16);
  font-size: var(--font-size-xl);
}

.about-interests ul {
  list-style: none;
  padding: 0;
}

.about-interests li {
  padding: var(--space-8) 0;
  border-left: 3px solid var(--portfolio-primary);
  padding-left: var(--space-16);
  margin-bottom: var(--space-8);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: var(--color-bg-2);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--color-border);
  color: var(--color-text-secondary);
}

.image-placeholder span {
  font-size: 4rem;
  margin-bottom: var(--space-16);
}

/* Projects Section */
.projects {
  background: var(--color-bg-3);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-24);
  margin-bottom: var(--space-32);
}

.all-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-24);
}

.project-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-24);
  border: 1px solid var(--color-card-border);
  transition: all var(--duration-normal) var(--ease-standard);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--portfolio-primary);
}

.project-card:hover .tech-tag {
  transform: translateY(-1px);
}

.project-card:hover .project-status {
  transform: scale(1.05);
}

.project-card.featured {
  border-left: 4px solid var(--portfolio-primary);
}

.project-card.hidden {
  display: none;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-16);
  gap: var(--space-16);
}

.project-card h3 {
  color: var(--color-text);
  font-size: var(--font-size-xl);
  margin: 0;
}

.project-role {
  color: var(--portfolio-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-12);
}

.project-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-20);
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
}

.tech-tag {
  background: var(--color-bg-1);
  color: var(--color-text);
  padding: var(--space-4) var(--space-12);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-border);
  transition: all var(--duration-fast) var(--ease-standard);
}

.project-status {
  padding: var(--space-4) var(--space-12);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  transition: all var(--duration-fast) var(--ease-standard);
}

.project-status.completed {
  background: var(--color-bg-3);
  color: var(--color-success);
  border: 1px solid rgba(var(--color-success-rgb), 0.3);
}

.project-status.in-progress {
  background: var(--color-bg-2);
  color: var(--color-warning);
  border: 1px solid rgba(var(--color-warning-rgb), 0.3);
}

.project-status.ongoing {
  background: var(--color-bg-1);
  color: var(--portfolio-primary);
  border: 1px solid rgba(var(--color-teal-500-rgb), 0.3);
}

@media (prefers-color-scheme: dark) {
  .project-status.ongoing {
    border: 1px solid rgba(var(--color-teal-300-rgb), 0.3);
  }
}

[data-color-scheme="dark"] .project-status.ongoing {
  border: 1px solid rgba(var(--color-teal-300-rgb), 0.3);
}

.project-filters {
  display: flex;
  justify-content: center;
  gap: var(--space-16);
  margin-bottom: var(--space-32);
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--color-secondary);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  padding: var(--space-8) var(--space-20);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-standard);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
}

.filter-btn:hover, .filter-btn.active {
  background: var(--portfolio-primary);
  color: var(--color-btn-primary-text);
  border-color: var(--portfolio-primary);
}

/* Skills Section */
.skills {
  background: var(--color-surface);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-32);
}

.skill-category {
  background: var(--color-background);
  border-radius: var(--radius-lg);
  padding: var(--space-24);
  border: 1px solid var(--color-card-border);
}

.skill-category h3 {
  color: var(--color-text);
  margin-bottom: var(--space-20);
  font-size: var(--font-size-xl);
  text-align: center;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-12);
}

.skill-tag {
  background: var(--portfolio-primary);
  color: var(--color-btn-primary-text);
  padding: var(--space-8) var(--space-16);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-fast) var(--ease-standard);
}

.skill-tag:hover {
  background: var(--portfolio-primary-hover);
  transform: translateY(-2px);
}

/* Blogs Section */
.blogs {
  background: var(--color-bg-4);
}

.blogs-intro {
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-32);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.blogs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-24);
  margin-bottom: var(--space-32);
}

.blog-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-card-border);
  transition: all var(--duration-normal) var(--ease-standard);
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--portfolio-primary);
}

.blog-image {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-5);
}

.blog-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
}

.blog-placeholder span {
  font-size: 3rem;
  margin-bottom: var(--space-8);
}

.blog-content {
  padding: var(--space-20);
}

.blog-category {
  display: inline-block;
  background: var(--color-bg-1);
  color: var(--portfolio-primary);
  padding: var(--space-4) var(--space-12);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-12);
}

.blog-content h3 {
  color: var(--color-text);
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-12);
  line-height: var(--line-height-tight);
}

.blog-excerpt {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-16);
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.blog-date {
  font-weight: var(--font-weight-medium);
}

.blog-read-time {
  opacity: 0.7;
}

.blogs-cta {
  text-align: center;
}

.blogs-cta p {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-24);
}

/* Resume Section */
.resume {
  background: var(--color-bg-6);
}

.resume-content {
  display: flex;
  justify-content: center;
}

.resume-preview {
  max-width: 600px;
  width: 100%;
}

.resume-card {
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-32);
  border: 1px solid var(--color-card-border);
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: transform var(--duration-normal) var(--ease-standard);
}

.resume-card:hover {
  transform: translateY(-5px);
}

.resume-icon {
  font-size: 4rem;
  margin-bottom: var(--space-24);
  display: block;
}

.resume-card h3 {
  color: var(--color-text);
  margin-bottom: var(--space-16);
  font-size: var(--font-size-2xl);
}

.resume-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-24);
}

.resume-stats {
  display: flex;
  justify-content: space-around;
  margin: var(--space-32) 0;
  padding: var(--space-24) 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--portfolio-primary);
  margin-bottom: var(--space-8);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Achievements Section */
.achievements {
  background: var(--color-surface);
}

.achievements-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.achievement-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--space-24);
  margin-bottom: var(--space-32);
  position: relative;
}

.achievement-item::after {
  content: '';
  position: absolute;
  left: 50px;
  top: 40px;
  bottom: -32px;
  width: 2px;
  background: var(--color-border);
}

.achievement-item:last-child::after {
  display: none;
}

.achievement-year {
  background: var(--portfolio-primary);
  color: var(--color-btn-primary-text);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  position: relative;
  z-index: 1;
}

.achievement-content {
  background: var(--color-background);
  border-radius: var(--radius-lg);
  padding: var(--space-24);
  border: 1px solid var(--color-card-border);
  border-left: 4px solid var(--portfolio-primary);
}

.achievement-content h3 {
  color: var(--color-text);
  margin-bottom: var(--space-12);
  font-size: var(--font-size-xl);
}

.achievement-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-16);
}

.achievement-category {
  background: var(--color-bg-5);
  color: var(--color-text);
  padding: var(--space-4) var(--space-12);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Contact Section */
.contact {
  background: var(--color-surface);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-32);
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info h3 {
  color: var(--color-text);
  margin-bottom: var(--space-16);
  font-size: var(--font-size-2xl);
}

.contact-info p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  margin-bottom: var(--space-24);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.contact-item strong {
  color: var(--color-text);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-item span {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
}

.contact-form {
  background: var(--color-background);
  border-radius: var(--radius-lg);
  padding: var(--space-32);
  border: 1px solid var(--color-card-border);
}

/* Footer */
.footer {
  background: var(--color-background);
  border-top: 1px solid var(--color-border);
  padding: var(--space-32) 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-16);
}

.footer-content p {
  color: var(--color-text-secondary);
  margin: 0;
}

.footer-links {
  display: flex;
  gap: var(--space-20);
  align-items: center;
}

.footer-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: var(--color-secondary);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  transition: all var(--duration-fast) var(--ease-standard);
  text-decoration: none;
}

.footer-icon:hover {
  background: var(--portfolio-primary);
  color: var(--color-btn-primary-text);
  border-color: var(--portfolio-primary);
  transform: translateY(-2px);
}

.footer-icon svg {
  width: 20px;
  height: 20px;
}

.navbar.scrolled {
  background: rgba(255, 255, 253, 0.98);
  box-shadow: var(--shadow-sm);
}

@media (prefers-color-scheme: dark) {
  .navbar.scrolled {
    background: rgba(38, 40, 40, 0.98);
  }
}

[data-color-scheme="dark"] .navbar.scrolled {
  background: rgba(38, 40, 40, 0.98);
}

[data-color-scheme="light"] .navbar.scrolled {
  background: rgba(255, 255, 253, 0.98);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    flex-direction: column;
    padding: var(--space-24) 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--duration-normal) var(--ease-standard);
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-hamburger {
    display: flex;
  }

  .nav-hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 100%;
    max-width: 300px;
  }

  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }

  .achievement-item {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .achievement-item::after {
    display: none;
  }

  .project-filters {
    justify-content: flex-start;
    overflow-x: auto;
    padding: var(--space-8) 0;
  }

  .projects-grid, .all-projects-grid, .blogs-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .resume-card {
    padding: var(--space-24);
  }

  .resume-stats {
    flex-direction: column;
    gap: var(--space-16);
  }

  .stat {
    padding: var(--space-12) 0;
  }

  .footer-links {
    gap: var(--space-16);
  }

  .footer-icon {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 var(--space-12);
  }

  .container {
    padding: 0 var(--space-12);
  }

  section {
    padding: 60px 0;
  }

  .hero-name {
    font-size: 2.5rem;
  }

  .project-card, .skill-category, .contact-form, .blog-card {
    padding: var(--space-20);
  }

  .achievement-content {
    padding: var(--space-20);
  }

  .resume-icon {
    font-size: 3rem;
  }

  .stat-number {
    font-size: var(--font-size-2xl);
  }

  .blog-content {
    padding: var(--space-16);
  }

  .hero-content {
    padding: 0 var(--space-12);
  }

  .hero-title {
    margin-bottom: var(--space-20);
  }

  .hero-tagline {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-20);
  }

  .hero-description {
    font-size: var(--font-size-base);
    margin-bottom: var(--space-24);
  }

  .section-title {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--space-24);
  }

  .about-interests li {
    padding-left: var(--space-12);
    margin-bottom: var(--space-6);
  }

  .image-placeholder {
    width: 250px;
    height: 250px;
  }

  .image-placeholder span {
    font-size: 3rem;
    margin-bottom: var(--space-12);
  }

  .project-header {
    flex-direction: column;
    gap: var(--space-12);
  }

  .achievement-year {
    width: 60px;
    height: 60px;
    font-size: var(--font-size-base);
  }

  .contact-info h3 {
    font-size: var(--font-size-xl);
  }

  .contact-info p {
    font-size: var(--font-size-base);
  }

  .contact-item span {
    font-size: var(--font-size-base);
  }
}
