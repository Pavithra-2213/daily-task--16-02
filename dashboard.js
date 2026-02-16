document.addEventListener("DOMContentLoaded", () => {
const stats = [
        { title: "Total Courses", value: 6 },
        { title: "Assignments Due", value: 2 },
        { title: "Attendance", value: "92%" },
        { title: "GPA", value: "3.8" }
    ];

    const container = document.getElementById("statsContainer");
    if (!container) return;

    stats.forEach(stat => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${stat.title}</h3><p>${stat.value}</p>`;
        container.appendChild(card);
    });
});