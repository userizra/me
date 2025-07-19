const toggleButton = document.getElementById("toggleDarkMode");

function isDarkMode() {
  return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
}

function setTheme(dark) {
  localStorage.theme = dark ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', dark);
  toggleButton.textContent = dark ? '☀️' : '🌙';
}

toggleButton.addEventListener("click", () => {
  setTheme(!isDarkMode());
});

// Set initial icon on load
setTheme(isDarkMode());
