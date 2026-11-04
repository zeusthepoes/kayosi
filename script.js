(() => {
  "use strict";
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.main-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      nav.classList.toggle('open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-category]').forEach(tile => {
    tile.addEventListener('click', () => {
      const select = document.getElementById('service');
      const details = document.getElementById('details');
      if (select) select.value = 'PPE & safety equipment';
      if (details && !details.value) details.value = 'PPE category: ' + tile.dataset.category + '\nPlease provide product options and pricing.';
    });
  });

  const form = document.getElementById('quote-form');
  const feedback = document.getElementById('form-feedback');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent('Website quotation enquiry — KAYOSI Trading CC');
    const body = encodeURIComponent(
      'Full name: ' + data.get('fullName') + '\n' +
      'Company / organisation: ' + (data.get('company') || 'Not supplied') + '\n' +
      'Email: ' + data.get('email') + '\n' +
      'Contact number: ' + data.get('phone') + '\n' +
      'Service / product: ' + data.get('service') + '\n\n' +
      'Project / order details:\n' + data.get('details')
    );
    if (feedback) feedback.textContent = 'Opening your email application with the enquiry details…';
    window.location.href = 'mailto:kayositrading@telkomsa.net?subject=' + subject + '&body=' + body;
  });
})();
