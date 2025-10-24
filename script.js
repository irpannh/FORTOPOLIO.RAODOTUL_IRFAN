// Tombol untuk ubah tema gelap/terang
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleButton.textContent = body.classList.contains("dark")
    ? "☀️ Mode Terang"
    : "🌙 Mode Gelap";
});
