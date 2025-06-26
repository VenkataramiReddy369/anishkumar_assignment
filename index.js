// Dark mode toggle
const darkToggleBtn = document.getElementById('darkToggleBtn');

darkToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  darkToggleBtn.textContent = isDark ? '☀️' : '🌙';
});

// Download CV functionality
document.getElementById('downloadCV').addEventListener('click', () => {
  // Replace this with your actual downloadable PDF file URL
  const cvURL = 'assets/anish-cv.pdf'; // Example: adjust to your path
  const link = document.createElement('a');
  link.href = cvURL;
  link.download = 'Anish_Kumar_Sinha_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Get in Touch button (opens default email client)
document.getElementById('contactBtn').addEventListener('click', () => {
  window.location.href = 'mailto:anish@example.com?subject=Let%27s%20Connect';
});
