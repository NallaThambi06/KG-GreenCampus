//////animation on scroll/////////
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});
////////login page///////
const wrapper=document.querySelector('.wrapper');
const btnPop=document.querySelector('.btn-person');
const iconClose=document.querySelector('.icon-close');
const closing = document.getElementById('closed')
let addWrapper = document.getElementById('admin')
const data = document.getElementById('form')
const pass = document.getElementById('pass')

function loadForm(){
  data.reset()
}

btnPop.addEventListener('click',()=>{
  wrapper.classList.add('active-popup');
})
iconClose.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup');
})

addWrapper.addEventListener('click',()=>{
  closing.parentElement.parentElement.style.display = 'block';
})
closing.addEventListener('click',()=>{
  
  data.reset()
  closing.parentElement.parentElement.style.display = 'none';
})

pass.addEventListener('click',() => {
  document.getElementById('change').type = 'text';
})


