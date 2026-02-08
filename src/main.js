/* ============================================
   JUST ONION — Main JavaScript
   WhatsApp flow, mobile nav, scroll effects
   ============================================ */

// --- SINGLE SOURCE OF TRUTH ---
// Update prices here and they propagate to both UI and WhatsApp messages.
const WHATSAPP_NUMBER = '51976235911';
const SAUCE_PRICE = '1.50';

const PRODUCTS = {
  burger: {
    name: 'Hamburguesa de Cebolla',
    price: '11.90',
  },
  combo: {
    name: 'Combo Hamburguesa de Cebolla',
    price: '16.90',
  },
};

// --- SYNC PRICES INTO THE DOM ---
// Keeps HTML in sync with the config above so prices are never mismatched.
Object.entries(PRODUCTS).forEach(([key, prod]) => {
  const card = document.querySelector(`[data-product="${key}"]`);
  if (!card) return;
  const priceEl = card.querySelector('.card__price');
  if (priceEl) priceEl.textContent = `S/ ${prod.price}`;
});

// Sync sauce toggle labels (both cards)
document.querySelectorAll('.toggle__label').forEach((label) => {
  label.textContent = `Agregar salsa extra (+S/ ${SAUCE_PRICE})`;
});

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
  const { name, price } = PRODUCTS[product];

  const saucePart = hasSauce
    ? `Salsa extra: Sí (+S/ ${SAUCE_PRICE}).`
    : 'Salsa extra: No.';

  let message = '';

  if (product === 'burger') {
    message = `Hola, quiero 1 ${name} (S/ ${price}). ${saucePart} Gracias.`;
  }

  if (product === 'combo') {
    const sodaInput = card.querySelector('input[name="soda"]:checked');
    const soda = sodaInput ? sodaInput.value : 'Pepsi';
    message = `Hola, quiero 1 ${name} (S/ ${price}). Gaseosa: ${soda}. ${saucePart} Gracias.`;
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
