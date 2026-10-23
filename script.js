'use strict';
const phone = '522281082392';
const generalMessage = '¡Hola, Majo! ♡ Vi tu página web y me gustaría agendar una cita. ¿Me puedes compartir tu disponibilidad?';
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const service = link.dataset.whatsapp;
  const message = service === 'general' ? generalMessage : `¡Hola, Majo! ♡ Vi tu página web y me gustaría agendar una cita para ${service}. ¿Me puedes compartir tu disponibilidad?`;
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
});
const toggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() { toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Abrir menú'); mobileNav.hidden = true; }
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  mobileNav.hidden = isOpen;
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event => { if(event.key === 'Escape') closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
