// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// Service & Project Card Hover Effect
const cards = document.querySelectorAll('.card, .project-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 15px 25px rgba(0,0,0,0.2)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
  });
});

// Optional: Mobile menu toggle (if you add a burger menu later)
/*
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
*/
