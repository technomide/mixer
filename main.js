const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

// 
const mainNav = document.querySelector('.main__nav');
// Navigation Func
window.addEventListener('scroll', () => {
  if(window.pageYOffset > 30){
      mainNav.classList.add("activees");
  
  }else{
      mainNav.classList.remove("activees");
  }
});

const slides = document.querySelector('.slider').children;
const slidess = document.querySelector('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
const indicators = document.querySelector('.indicator').children;
let index = 0;



prev.addEventListener('click', function(){
  prevSlide();
  // Call updateindicator Func
  updateCircleIndicator();
  // Call Reset Timer Func
  resetTimer();
})

next.addEventListener("click", function(){
  nextSlide();
  // Call updateindicator Func
  updateCircleIndicator();
  // Call Reset Timer Func
  resetTimer();
})

// Now Create Circle Indicators
function circleIndicator(){
  for(let i=0; i<slides.length; i++){
    const div = document.createElement('div');
          div.setAttribute('onclick', 'indicateSlide(this)');
          div.id = i;
          if(i==0){
            div.className='active';
          }
          indicator.appendChild(div);
    // i starting from 0
  }
}
// Call To circleIndicator() Func
circleIndicator();


// Click to Indicators indicatorSlide(this) Func
function indicateSlide(element){
  // Change Index Value to Actual Circle
  index = element.id;

  // Call Change Slide Func
  changeSlides();

  // Call updateincidatorcircle Func
  updateCircleIndicator();

  // Call Reset Timer Func
  resetTimer();
}

// Update Circle Indicator func
function updateCircleIndicator(){
 
  Array.from(indicators).forEach(function(itm){
    itm.classList.remove("active");
  })

  indicator.children[index].classList.add("active");
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
  // Call updateindicator Func
  updateCircleIndicator();
}

let timer=setInterval(autoPlay, 4000);
