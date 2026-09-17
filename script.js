// ---------- Toggle menu navigasi (mobile) ----------
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Animasi skill bar saat terlihat di layar ----------
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      fill.style.width = fill.dataset.level + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.4 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ---------- Form kontak (validasi sederhana, tanpa backend) ----------
const kontakForm = document.getElementById('kontakForm');
const formNote = document.getElementById('formNote');

kontakForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Terima kasih, pesan Anda telah dicatat.';
  kontakForm.reset();
});