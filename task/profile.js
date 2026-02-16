document.addEventListener("DOMContentLoaded", () => {
    const editBtn = document.getElementById("editBtn");
    const saveBtn = document.getElementById("saveBtn");
    const inputs = document.querySelectorAll(".profile-input");

    editBtn.addEventListener("click", () => {
        inputs.forEach(i => i.disabled = false);
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
    });

    saveBtn.addEventListener("click", () => {
        inputs.forEach(i => i.disabled = true);
        editBtn.style.display = "inline";
        saveBtn.style.display = "none";
        alert("Profile updated!");
    });
});