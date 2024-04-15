document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider-inner');
    const slides = document.querySelectorAll('.adv-slide');
    const star = document.querySelector('.slider-img');
    const slideNumber = document.querySelector('#number');
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      const newIndex = (index + totalSlides) % totalSlides;
      console.log(index, newIndex)
      slides.forEach((slide, i) => {
        if (i === newIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
  
      const translateValue = -newIndex * 100 + '%';
      const rotateValue = -newIndex * 45;
      slider.style.transform = 'translateX(' + translateValue + ')';
      star.style.transform = "rotate("+rotateValue+"deg)";
      slideNumber.innerText = newIndex + 1;
      currentIndex = newIndex;
    }
    const leftSelector = document.querySelector('.prev-slide');
    const rightSelector = document.querySelector('.next-slide');

    leftSelector.addEventListener('click', function (e) {
        showSlide(currentIndex - 1);
    });
    rightSelector.addEventListener('click', function (e) {
        showSlide(currentIndex + 1);
    });
  
    showSlide(currentIndex);
  });