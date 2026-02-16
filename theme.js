document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");

    const saved = localStorage.getItem("theme");
    if (saved) document.body.classList.add(saved);

    if (!toggle) return;

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const theme = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
});