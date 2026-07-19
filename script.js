console.log("script.js loaded");
function filterProjects(category, button) {
    const buttons = document.querySelectorAll(".filter-buttons button");

buttons.forEach(btn => btn.classList.remove("active"));

button.classList.add("active");
    const cards = document.querySelectorAll(".card");
    const noProjects = document.getElementById("no-projects");
    let visible = 0;

    cards.forEach(card => {
        if (category === "all" || card.classList.contains(category)) {
            card.style.display = "block";
            visible++;
        } else {
            card.style.display = "none";
        }
    });

    if (visible === 0) {
        noProjects.style.display = "block";
    } else {
        noProjects.style.display = "none";
    }
}