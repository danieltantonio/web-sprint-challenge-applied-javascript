/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  img1.classList.add('slide');
  img2.classList.add('slide');
  img3.classList.add('slide');
  img4.classList.add('slide');

  leftButton.textContent = '<';
  rightButton.textContent = '>';

  img1.src = "./carousel/mountains.jpeg";
  img2.src = "./carousel/computer.jpeg";
  img3.src = "./carousel/trees.jpeg";
  img4.src = "./carousel/turntable.jpeg";

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  return carousel;
}

document.querySelector('.carousel-container').appendChild(Carousel());

let slideIndex = 0

const displaySlide = (n) => {
  const slides = document.querySelectorAll('.slide');
  slideIndex += n;

  if(slideIndex > slides.length) { slideIndex = 1 }
  if(slideIndex < 0) { slideIndex = slides.length - 1 }

  slides[slideIndex].style.display = 'block';
}

displaySlide(slideIndex);

const btnFunc = () => {
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');
  const slides = document.querySelectorAll('.slide');

  rightButton.onclick = () => {
    let indexCheck = slideIndex;
    if(indexCheck === 3) {
      displaySlide(-slideIndex)
      slides[indexCheck].style.display = 'none';
    } else {
      displaySlide(1)
      slides[indexCheck].style.display = 'none';
    }
  }

  leftButton.onclick = () => {
    let indexCheck = slideIndex;
    displaySlide(-1);
    slides[indexCheck].style.display = 'none';
  }

  console.log(slideIndex)
  
}
btnFunc();