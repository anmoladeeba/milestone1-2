function toggleContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    const button = document.querySelector('button');

    if (contactInfo && button) { // Ensure both elements are found
        if (contactInfo.style.display === 'none') {
            contactInfo.style.display = 'block';
            button.textContent = 'Hide Contact Information';
        } else {
            contactInfo.style.display = 'none';
            button.textContent = 'Show Contact Information';
        }
    } else {
        console.error('Element not found');
    }
}
