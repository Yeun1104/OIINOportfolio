function section(){
    document.getElementById("awardSection").style.display="block";
}
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    var sticky = navbar.offsetTop;
  
    if (window.pageYOffset > sticky) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });