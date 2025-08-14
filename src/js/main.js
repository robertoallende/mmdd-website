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
    
    // Update nav buttons
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
        // Reset inactive styles
        btn.style.background = 'rgba(15, 15, 15, 0.8)';
        btn.style.color = 'rgba(204, 170, 85, 0.6)';
    });
    
    // Set active tab styles - use the passed button element
    if (clickedButton) {
        clickedButton.classList.add('active');
        clickedButton.style.background = 'rgba(20, 20, 20, 0.85)';
        clickedButton.style.color = '#ffcc66';
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

// Initialize copy buttons when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        addCopyButtons();
        trackExternalLinks();
    });
} else {
    // DOM is already loaded
    addCopyButtons();
    trackExternalLinks();
}