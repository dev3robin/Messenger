const selectBtn = document.querySelector('.select-btn');
const options = document.querySelector('.select-options');

selectBtn.addEventListener('click', () => {
  options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    selectBtn.textContent = option.textContent;
    selectBtn.setAttribute('data-value', option.getAttribute('data-value'));
    options.style.display = 'none';
  });
});