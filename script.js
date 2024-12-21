const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const logo = document.getElementById('banner');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update button text
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️ Light Mode';
    logo.src = 'assets/batman.png';
  } else {
    toggleButton.textContent = '🌙 Dark Mode';
    logo.src = 'assets/chillguy.jpg';
  }
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

// Disable keyboard shortcuts (e.g., Ctrl+C)
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'f')) {
      e.preventDefault();
      alert("Keyboard shortcuts are disabled on this page.");
  }
});