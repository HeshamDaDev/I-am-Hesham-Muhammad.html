document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.win7-btn:not(:disabled)');
    
    buttons.forEach(button => {
        // Add glow effect on focus
        button.addEventListener('focus', function() {
            this.classList.add('glow');
        });
        
        // Remove glow effect when focus is lost
        button.addEventListener('blur', function() {
            this.classList.remove('glow');
        });
        
        // Windows 7 style "pressed" effect
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // For demonstration: Add glow to primary button after 1 second
    setTimeout(() => {
        const primaryBtn = document.querySelector('.win7-btn.primary');
        primaryBtn.classList.add('glow');
        setTimeout(() => primaryBtn.classList.remove('glow'), 3000);
    }, 1000);
});