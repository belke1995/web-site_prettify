window.addEventListener('DOMContentLoaded', function() {

'use strict';
//Functional Tabs
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
//Functional slider
  let sliderIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dots = document.querySelectorAll('.dot'),
      dotWrap = document.querySelector('.slider-dots');

  showSlides(sliderIndex);

  function showSlides(n) {

    if (n>slides.length) {
      sliderIndex = 1;
    }
    if (n < 1) {
      sliderIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[sliderIndex-1].style.display = 'block';
    dots[sliderIndex-1].classList.add('dot-active');
  }

  function plus(n) {
    showSlides(sliderIndex += n);
  }

  function current(n) {
    showSlides(sliderIndex = n);
  }

  prev.addEventListener('click', function() {
    plus(-1);
  });
  next.addEventListener('click', function() {
    plus(1);
  });

  dotWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length+1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
          current(i);
        }
    }
  });
});
