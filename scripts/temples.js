
function Toggle() {
    const nav = document.getElementById("navMenu");
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
}

document.getElementById("last-modified").textContent = document.lastModified;
document.getElementById("copyrighted-year").textContent = new Date().getFullYear();