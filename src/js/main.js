// Enhanced tab interaction - paper-like behavior
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        if (!this.classList.contains('active')) {
            this.style.background = 'rgba(18, 18, 18, 0.9)';
            this.style.color = 'rgba(204, 170, 85, 0.8)';
        }
    });
    
    button.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.background = 'rgba(15, 15, 15, 0.8)';
            this.style.color = 'rgba(204, 170, 85, 0.6)';
        }
    });
    
    // Add click event listener for navigation
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        showSection(sectionId, this);
        
        // Track tab navigation in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'tab_navigation', {
                'section_name': sectionId,
                'event_category': 'navigation'
            });
        }
    });
});

// Mobile Navigation Class
class MobileNavigation {
    constructor() {
        this.hamburger = document.querySelector('.hamburger-menu');
        this.overlay = document.querySelector('.mobile-nav-overlay');
        this.mobileNav = document.querySelector('.mobile-nav');
        this.menuItems = document.querySelectorAll('.mobile-nav a');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        if (!this.hamburger || !this.overlay || !this.mobileNav) {
            return; // Elements not found, skip initialization
        }
        
        // Hamburger click handler
        this.hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMenu();
        });
        
        // Overlay click handler (close menu when clicking outside)
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.closeMenu();
            }
        });
        
        // Menu item click handlers
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = e.target.dataset.section;
                this.handleMenuItemClick(sectionId);
                this.closeMenu();
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
        
        // Update active menu item when section changes
        this.updateActiveMenuItem();
    }
    
    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        this.overlay.style.display = 'block';
        this.mobileNav.classList.add('open');
        this.isOpen = true;
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = 'hidden';
        
        // Track menu open in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'mobile_menu_open', {
                'event_category': 'navigation'
            });
        }
    }
    
    closeMenu() {
        this.overlay.style.display = 'none';
        this.mobileNav.classList.remove('open');
        this.isOpen = false;
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    handleMenuItemClick(sectionId) {
        // Use existing showSection function
        showSection(sectionId);
        this.updateActiveMenuItem();
        
        // Track mobile navigation in Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'mobile_navigation', {
                'section_name': sectionId,
                'event_category': 'navigation'
            });
        }
    }
    
    updateActiveMenuItem() {
        // Find currently active section
        const activeSection = document.querySelector('.content-section.active');
        if (!activeSection) return;
        
        const activeSectionId = activeSection.id;
        
        // Update mobile menu active state
        this.menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.section === activeSectionId) {
                item.classList.add('active');
            }
        });
    }
}

// Add page flip animation
function showSection(sectionId, clickedButton) {
    const currentActive = document.querySelector('.content-section.active');
    const newSection = document.getElementById(sectionId);
    
    if (!newSection) {
        return;
    }
    
    // Add slight delay to simulate page turning
    if (currentActive && currentActive !== newSection) {
        currentActive.style.opacity = '0';
        currentActive.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            currentActive.classList.remove('active');
            newSection.classList.add('active');
            
            // Reset and animate in new section
            setTimeout(() => {
                newSection.style.opacity = '1';
                newSection.style.transform = 'translateX(0)';
            }, 50);
        }, 150);
    } else {
        newSection.classList.add('active');
        newSection.style.opacity = '1';
        newSection.style.transform = 'translateX(0)';
    }
    
    // Update desktop nav buttons
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
        // Reset inactive styles
        btn.style.background = 'rgba(15, 15, 15, 0.8)';
        btn.style.color = 'rgba(204, 170, 85, 0.6)';
    });
    
    // Set active tab styles - use the passed button element or find by section
    if (clickedButton) {
        clickedButton.classList.add('active');
        clickedButton.style.background = 'rgba(20, 20, 20, 0.85)';
        clickedButton.style.color = '#ffcc66';
    } else {
        // Update desktop tabs when called from mobile menu
        const desktopButton = document.querySelector(`.nav-button[data-section="${sectionId}"]`);
        if (desktopButton) {
            desktopButton.classList.add('active');
            desktopButton.style.background = 'rgba(20, 20, 20, 0.85)';
            desktopButton.style.color = '#ffcc66';
        }
    }
    
    // Update mobile menu active state
    const mobileNav = window.mobileNavigation;
    if (mobileNav) {
        mobileNav.updateActiveMenuItem();
    }
    
    // Re-add copy buttons to any new content
    setTimeout(addCopyButtons, 100);
}

// Add copy buttons to code blocks
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre, .code-block');
    
    codeBlocks.forEach(block => {
        // Skip if copy button already exists
        if (block.querySelector('.copy-button')) return;
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'copy';
        
        // Add click event
        copyButton.addEventListener('click', async () => {
            const code = block.textContent;
            
            // Track code copy in Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'code_copy', {
                    'event_category': 'engagement',
                    'code_length': code.length
                });
            }
            
            try {
                await navigator.clipboard.writeText(code);
                
                // Show success feedback
                copyButton.textContent = 'copied!';
                copyButton.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    copyButton.textContent = 'copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                copyButton.textContent = 'copied!';
                copyButton.classList.add('copied');
                
                setTimeout(() => {
                    copyButton.textContent = 'copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            }
        });
        
        // Add button to code block
        block.appendChild(copyButton);
    });
}

// Track external link clicks
function trackExternalLinks() {
    document.addEventListener('click', function(event) {
        const link = event.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Track external links (GitHub, AWS Builder, etc.)
        if (href.startsWith('http') && !href.includes('mmdd.dev')) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'external_link_click', {
                    'event_category': 'outbound',
                    'link_url': href,
                    'link_text': link.textContent.trim()
                });
            }
        }
        
        // Track RSS feed clicks
        if (href.includes('rss.xml')) {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'rss_feed_click', {
                    'event_category': 'engagement'
                });
            }
        }
    });
}

// Initialize mobile navigation when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        window.mobileNavigation = new MobileNavigation();
        addCopyButtons();
        trackExternalLinks();
    });
} else {
    // DOM is already loaded
    window.mobileNavigation = new MobileNavigation();
    addCopyButtons();
    trackExternalLinks();
}