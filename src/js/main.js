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
}

// Make function globally available for onclick handlers
window.showSection = showSection;