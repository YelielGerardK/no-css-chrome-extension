function annulerCSS() {
    // Disable external style sheets (<link> tags)
    const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    linkElements.forEach(link => {
        link.disabled = true; // Disable the style sheet
    });

    // Remove internal styles (<style> tags)
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => {
        style.remove(); // Remove the style element
    });

    // Remove inline style attributes
    const styledElements = document.querySelectorAll('[style]');
    styledElements.forEach(element => {
        element.removeAttribute('style'); // Remove the style attribute
    });
}

// Call the function to disable CSS as soon as the script is injected
annulerCSS();