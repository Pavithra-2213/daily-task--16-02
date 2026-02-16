document.addEventListener("DOMContentLoaded", () => {
    const assignments = [
        { title: "DBMS Assignment", status: "Pending" },
        { title: "Java Project", status: "Late" }
    ];

    const container = document.getElementById("assignmentContainer");
    if (!container) return;

    assignments.forEach((a, i) => {
        const card = document.createElement("div");
        card.className = "assignment-card";

        const statusClass = a.status.toLowerCase();

        card.innerHTML = `
            <h3>${a.title}</h3>
            <span class="status ${statusClass}">${a.status}</span>
            <br>
            <button class="submitBtn" data-index="${i}">
                Submit Assignment
            </button>
        `;

        container.appendChild(card);
    });

    container.addEventListener("click", (e) => {
        if (e.target.classList.contains("submitBtn")) {
            e.target.disabled = true;
            e.target.previousElementSibling.textContent = "Submitted";
            e.target.previousElementSibling.className = "status submitted";
            alert("Assignment submitted!");
        }
    });
});