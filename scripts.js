function scrollToSection(elementId) {
    console.log('Button clicked!'); // Verifica che la funzione venga chiamata
    console.log('Looking for element:', elementId);
    
    const element = document.getElementById(elementId);
    if (element) {
        console.log('Found element, scrolling...');
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.error('Element not found:', elementId);
    }
}

// Aggiungi questo per verificare che il file sia caricato
console.log('scripts.js loaded successfully!');