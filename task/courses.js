document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        { name: "DBMS", status: "Active" },
        { name: "Java", status: "Active" },
        { name: "OS", status: "Completed" }
    ];

    const container = document.getElementById("courseContainer");
    if (!container) return;

    courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";

        const statusClass = course.status.toLowerCase();

        card.innerHTML = `
            <h3>${course.name}</h3>
            <span class="status ${statusClass}">${course.status}</span>
        `;

        container.appendChild(card);
    });
});