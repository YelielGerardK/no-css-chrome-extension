function annulerCSS() {
    // Désactiver les feuilles de style externes (balises <link>)
    const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    linkElements.forEach(link => {
        link.disabled = true; // Désactiver la feuille de style
    });

    // Supprimer les styles internes (balises <style>)
    const styleElements = document.querySelectorAll('style');
    styleElements.forEach(style => {
        style.remove(); // Supprimer l'élément de style
    });

    // Supprimer les attributs style en ligne
    const styledElements = document.querySelectorAll('[style]');
    styledElements.forEach(element => {
        element.removeAttribute('style'); // Supprimer l'attribut style
    });
}

// Appeler la fonction pour annuler le CSS dès que le script est injecté
annulerCSS();