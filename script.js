const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');
const dialog = document.querySelector('#service-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogText = document.querySelector('#dialog-text');

menuButton.addEventListener('click', () => {
  const expanded = navList.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', expanded);
});

document.querySelectorAll('.nav-list a').forEach((link) => {
  link.addEventListener('click', () => navList.classList.remove('open'));
});

document.querySelectorAll('[data-service]').forEach((button) => {
  button.addEventListener('click', () => {
    const service = button.dataset.service;
    dialogTitle.textContent = service;
    dialogText.textContent = `Pour votre projet de ${service.toLowerCase()}, notre équipe propose une étude et une pose sur mesure.`;
    dialog.showModal();
  });
});

document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#year').textContent = new Date().getFullYear();

const contactForm = document.querySelector('#contact-form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(contactForm);
  const subject = `Demande de devis — ${fields.get('service')}`;
  const body = [
    'Nouvelle demande depuis le site Salek Aluminium',
    '',
    `Nom : ${fields.get('name')}`,
    `Téléphone : ${fields.get('phone')}`,
    `E-mail : ${fields.get('email')}`,
    `Service : ${fields.get('service')}`,
    '',
    'Message :',
    fields.get('message'),
  ].join('\n');

  window.location.href = `mailto:salkealuminuim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
