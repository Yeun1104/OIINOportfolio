
var toggleButton = document.getElementById('toggleButton');
var menu = document.querySelector('.menu');

toggleButton.addEventListener('click', function() {
  menu.classList.toggle('active');
});
