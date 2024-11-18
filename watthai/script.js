let currentSlide = 0;
let columns = 4; 
let autoplay = false;
let intervalId;

function updateSlidePosition() {
  const temple = document.getElementById('temple');
  const slideWidth = 100 / columns; 
  const totalSlides = document.querySelectorAll('.wat').length;

 
  currentSlide = (currentSlide + totalSlides) % totalSlides;

  temple.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

function setColumns(newColumns) {
  columns = newColumns;
  const watItems = document.querySelectorAll('.wat');
  watItems.forEach(item => {
    item.style.flex = `1 0 calc(${100 / columns}% - 10px)`; 
  });
  currentSlide = 0; 
  updateSlidePosition();
}

function nextSlide() {
  currentSlide++;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide--;
  updateSlidePosition();
}

function toggleAutoplay() {
  autoplay = !autoplay;
  if (autoplay) {
    intervalId = setInterval(nextSlide, 1000);
  } else {
    clearInterval(intervalId);
  }
}


setColumns(4);
