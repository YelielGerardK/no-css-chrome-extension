document.getElementById('toggleCSS').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: annulerCSS
        });
    });
});

function annulerCSS() {
    // Disable external style sheets (<link> tags)
    const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    linkElements.forEach(link => {
        link.disabled = !link.disabled; // Toggle the state
    });

    // Remove internal styles (<style> tags)
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => {
        style.remove();
    });

    // Remove inline style attributes
    const styledElements = document.querySelectorAll('[style]');
    styledElements.forEach(element => {
        element.removeAttribute('style');
    });
}