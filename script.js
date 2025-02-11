// Mobile Toggle Menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const barsIcon = menuToggle.querySelector('.fa-bars');
const timesIcon = menuToggle.querySelector('.fa-times');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when a link is clicked (optional)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  themeToggle.innerHTML = body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formMessage = document.getElementById('formMessage');

  if (name && email && message) {
    formMessage.textContent = 'Thank you for contacting Curvy Couture! We will get back to you soon.';
    formMessage.style.color = 'green';
    document.getElementById('contactForm').reset();
  } else {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.style.color = 'red';
  }
});
