// Dynamic Date in Footer
document.getElementById("currentYear").innerText = new Date().getFullYear();

// Content Toggle
function toggleVisibility() {
    var paragraph = document.getElementById("paragraph");
    paragraph.style.display = (paragraph.style.display === "none" || paragraph.style.display === "") ? "block" : "none";
}
