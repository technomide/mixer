// Partner Ship Func
const partnershipLogo = document.querySelector('.partnership__logo');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const partnershipSidebar = document.querySelector('.partnership__sidebar');

partnershipLogo.addEventListener('click', logoChange);

function logoChange(e){
  e.preventDefault();
  if(e.target.parentElement.classList.contains('partnership__logo') || e.target.classList.contains('partnership__logo')){
    a.classList.toggle('hidden');
    b.classList.toggle('visible');
  }

  partnershipSidebar.classList.toggle('partnership__sidebar--visible');
}