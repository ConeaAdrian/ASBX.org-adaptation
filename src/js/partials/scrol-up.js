document.addEventListener('DOMContentLoaded', function() {
  var scrollUp = document.querySelector('.scroll-up');
  scrollUp.style.display = 'none';

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
      scrollUp.style.display = 'block';
    } else {
      scrollUp.style.display = 'none';
    }
  });

  scrollUp.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  });
});
