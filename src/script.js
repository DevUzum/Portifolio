window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset;
    let parallaxImage = document.querySelector('.parallax-image');
    parallaxImage.style.transform = 'translateY(' + scrollTop * 0.5 + 'px)';
  });