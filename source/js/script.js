
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
  }
});

let likebtn = document.querySelector('#likebtn');
let input = document.querySelector('#input');

likebtn.addEventListener('click',()=>{
input.value = parseInt(input.value) + 1;

});

let likebtn1 = document.querySelector('#likebtn1');
let input1 = document.querySelector('#input1');

likebtn1.addEventListener('click',()=>{
input1.value = parseInt(input1.value) + 1;

});

let likebtn2 = document.querySelector('#likebtn2');
let input2 = document.querySelector('#input2');

likebtn2.addEventListener('click',()=>{
input2.value = parseInt(input2.value) + 1;

});

let likebtn3 = document.querySelector('#likebtn3');
let input3 = document.querySelector('#input3');

likebtn3.addEventListener('click',()=>{
input3.value = parseInt(input3.value) + 1;

});
