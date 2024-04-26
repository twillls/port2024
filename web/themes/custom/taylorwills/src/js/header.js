const headerButton = document.querySelector('header .header-button');
const headerElement = document.querySelector('header');
const headerContainer = document.querySelector('header .header-container');

headerButton.addEventListener('click', (event) => {
  const button = headerButton;

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

document.addEventListener('click', event => {
  const isClickInside = headerElement.contains(event.target);
  const headerButton = document.querySelector('header .header-button');
  const headerContainer = document.querySelector('header .header-container');

  // If header is open and there's a click outside,
  if (!isClickInside && headerElement.querySelector('.header-container').classList.contains('open')) {
  
    // Toggle Class on header container to open
    headerContainer.classList.toggle('open');
    headerButton.classList.toggle('open')
    headerButton.setAttribute('aria-expanded', 'false');
  }
});