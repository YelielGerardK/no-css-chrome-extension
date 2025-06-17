document.getElementById('toggleCSS').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: annulerCSS
        });
    });
});

function annulerCSS() {
    // Même code que dans contentScript.js
    const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    linkElements.forEach(link => {
        link.disabled = !link.disabled; // Basculer l'état
    });

    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => {
        style.remove();
    });

    const styledElements = document.querySelectorAll('[style]');
    styledElements.forEach(element => {
        element.removeAttribute('style');
    });
}