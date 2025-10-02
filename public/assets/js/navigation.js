/**
 * Navigation Active State Management
 */
function setActiveNavigation() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Remove all active classes first
    const navItems = document.querySelectorAll('#mobile-menu ul li');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Page to navigation mapping
    const pageNavMap = {
        'index.html': 'nav-home',
        '': 'nav-home', // Handle root path
        'about-us.html': 'nav-about',
        'services.html': 'nav-services',
        'story.html': 'nav-story',
        'countrie.html': 'nav-countries',
        'countrie-details.html': 'nav-countries',
        'blog-grid.html': 'nav-blog',
        'blog-details.html': 'nav-blog',
        'faq.html': 'nav-faq',
        'contact.html': 'nav-contact',
        // Pages that belong to the "Page" dropdown
        'visa-offers.html': 'nav-page',
        'gallery.html': 'nav-page',
        'pricing.html': 'nav-page',
        'coaching.html': 'nav-page',
        'coaching-details.html': 'nav-page',
        'team.html': 'nav-page',
        'team-details.html': 'nav-page',
        '404.html': 'nav-page'
    };

    // Set active class based on current page
    const navId = pageNavMap[currentPage];
    if (navId) {
        const activeNavItem = document.getElementById(navId);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }
}

/**
 * Include HTML functionality using fetch API
 */
async function includeHTML() {
    const includeElements = document.querySelectorAll('[data-include]');

    for (const element of includeElements) {
        const file = element.getAttribute('data-include');
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    const html = await response.text();
                    element.innerHTML = html;
                    element.removeAttribute('data-include');

                    // If we just loaded the header, set active navigation
                    if (file.includes('header.html')) {
                        // Wait a bit for DOM to update
                        setTimeout(setActiveNavigation, 100);
                    }
                } else {
                    element.innerHTML = `<p>Error loading ${file}</p>`;
                }
            } catch (error) {
                console.error('Error loading include:', error);
                element.innerHTML = `<p>Error loading ${file}</p>`;
            }
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
});

// Alternative approach for browsers that don't support fetch
function fallbackIncludeHTML() {
    const includeElements = document.querySelectorAll('[data-include]');

    includeElements.forEach(element => {
        const file = element.getAttribute('data-include');
        if (file) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', file, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        element.innerHTML = xhr.responseText;
                        element.removeAttribute('data-include');

                        if (file.includes('header.html')) {
                            setTimeout(setActiveNavigation, 100);
                        }
                    } else {
                        element.innerHTML = `<p>Error loading ${file}</p>`;
                    }
                }
            };
            xhr.send();
        }
    });
}