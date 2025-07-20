function navigateTo(page) {
    window.location.href = page;
}

function goBack() {
    window.location.href = 'index.html';
}

// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }

}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    } else {
        // Default to dark mode
        html.setAttribute('data-theme', 'dark');
    }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
});
