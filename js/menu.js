const menuButton = document.getElementById('menu-button');
const menuPanel = document.getElementById('menu-panel');

menuButton.addEventListener('click', () => {
  menuPanel.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
  const wrapper = document.getElementById('menu-wrapper');
  // Check if the wrapper exists and if the click was outside of it
  if (wrapper && !wrapper.contains(event.target)) {
    menuPanel.classList.add('hidden');
  }
});