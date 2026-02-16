document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const error = document.getElementById("errorMsg");

        if (!username.value || !password.value) {
            error.textContent = "Please fill all fields";
            error.style.display = "block";
        } else {
            alert("Login successful");
            window.location.href = "dashboard.html";
        }
    });
});