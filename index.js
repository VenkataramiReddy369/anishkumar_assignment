
const darkToggleBtn = document.getElementById('darkToggleBtn');

darkToggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  darkToggleBtn.textContent = isDark ? '☀️' : '🌙';
});


document.getElementById('downloadCV').addEventListener('click', () => {

  const cvURL = 'assets/anish-cv.pdf'; 
  const link = document.createElement('a');
  link.href = cvURL;
  link.download = 'Anish_Kumar_Sinha_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


document.getElementById('contactBtn').addEventListener('click', () => {
  window.location.href = 'mailto:anish@example.com?subject=Let%27s%20Connect';
});
