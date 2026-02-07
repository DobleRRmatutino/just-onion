/* ============================================
   JUST ONION — Main JavaScript
   WhatsApp flow, mobile nav, scroll effects
   ============================================ */

const WHATSAPP_NUMBER = '51976235911';

// --- HEADER SCROLL EFFECT ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 10);
});

// --- MOBILE NAV ---
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Close nav on link click
nav.querySelectorAll('.header__link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
  });
});

// --- WHATSAPP MESSAGE BUILDER ---
function buildWhatsAppURL(product) {
  const card = document.querySelector(`[data-product="${product}"]`);
  const hasSauce = card.querySelector('[data-addon="sauce"]').checked;

  let message = '';

  if (product === 'burger') {
    const saucePart = hasSauce
      ? 'Salsa extra: Sí (+S/ 1.50).'
      : 'Salsa extra: No.';
    message = `Hola, quiero 1 Hamburguesa de Cebolla (S/ 12.50). ${saucePart} Gracias.`;
  }

  if (product === 'combo') {
    const sodaInput = card.querySelector('input[name="soda"]:checked');
    const soda = sodaInput ? sodaInput.value : 'Pepsi';
    const saucePart = hasSauce
      ? 'Salsa extra: Sí (+S/ 1.50).'
      : 'Salsa extra: No.';
    message = `Hola, quiero 1 Combo Hamburguesa de Cebolla (S/ 17.50). Gaseosa: ${soda}. ${saucePart} Gracias.`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// --- BUY BUTTON HANDLERS ---
document.querySelectorAll('[data-buy]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const product = btn.getAttribute('data-buy');
    const url = buildWhatsAppURL(product);
    window.open(url, '_blank');
  });
});

// --- SMOOTH SCROLL FOR HERO CTA ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
