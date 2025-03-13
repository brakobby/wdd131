// Dynamically update the copyright year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${currentYear} Nyonator Samuel Kwabena. All Rights Reserved.`;

// Dynamically update the last modified date in the footer
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;
