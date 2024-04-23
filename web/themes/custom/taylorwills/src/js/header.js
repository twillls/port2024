const headerButton = document.querySelector('header .header-button');

headerButton.addEventListener('click', (event) => {
  const headerContainer = document.querySelector('header .header-container');
  const button = event.target.closest('.header-button');

  // Toggle Class on header container to open
  headerContainer.classList.toggle('open');
  button.classList.toggle('open');

  // Toggle Aria-expanded on button
  if (button.getAttribute('aria-expanded') == 'false') {
    button.setAttribute('aria-expanded', 'true');
  } else if (button.getAttribute('aria-expanded') == 'true') {
    button.setAttribute('aria-expanded', 'false');
  }
});