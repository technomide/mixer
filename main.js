const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

// 

const slides = document.querySelector('.slider').children;
const slidess = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
let index = 0;

prev.addEventListener('click', function(){
  prevSlide();
  // Call Reset Timer Func
  resetTimer();
})

next.addEventListener("click", function(){
  nextSlide();
  // Call Reset Timer Func
  resetTimer();
})


// Click to Indicators indicatorSlide(this) Func
function indicateSlide(element){
  // Change Index Value to Actual Circle
  index = element.id;

  // Call Change Slide Func
  changeSlides();


  // Call Reset Timer Func
  resetTimer();
}




// Prev Slide Func
function prevSlide(){
  if(index==0){
    index=slides.length-1;
  }
  else{
    index--;
  }
   // Call changeSlide
   changeSlides();
}

// Next Slide Func
function nextSlide(){
  if(index==slides.length-1){
    index = 0;
  }
  else{
    index++;
  }
 
  // Call changeSlide
  changeSlides();
}

function changeSlides(){
  slides[index].classList.add('active');

  if(index==0){
     slidess.style.marginLeft= 0 + 'vw';
  }
  if(index==1){
     slidess.style.marginLeft= -100 + 'vw';
  }
  if(index==2){
     slidess.style.marginLeft= -200 + 'vw';
  }
  if(index==3){
     slidess.style.marginLeft= -300 + 'vw';
  }
  if(index<0){
    slidess.style.marginLeft= -400 + 'vw';
  }
  if(index>3){
    slidess.style.marginLeft= 0 + 'vw';
  }
}

// Reset Time Func ( Whem click to indicators or controls button )
function resetTimer(){
  // Stop Timer
  clearInterval(timer);

  // then started again timer
  timer=setInterval(autoPlay, 4000);
}

// Auto Play Func
function autoPlay(){
  // Call NextSlide Func
  nextSlide();
}

let timer=setInterval(autoPlay, 4000);

// Navigation Func
const mainNav = document.querySelector('.main__nav');

// Create Function
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 30){
        mainNav.classList.add("active");
    }else{
        mainNav.classList.remove("active");
    }
});