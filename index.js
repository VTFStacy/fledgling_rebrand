$(document).ready(function(){

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

$("#outreach1").flowtype();


// var num = 0
// function slideShow() {
// var imageDOM = document.querySelector('#slide');
// var nImageDOM = document.querySelector('#slide2');
// console.log(num);


// if ( num === 1 ) {
//     imageDOM.src = "images/art-therapy-2.jpeg";
// } 
// if ( num === 2 ) {
//     imageDOM.src = "images/art-therapy-3.jpg";
// } 
// if ( num === 3 ) {
//     imageDOM.src = "images/art-therapy-4.jpg";
// } 
// if ( num === 4 ) {
//     imageDOM.src = "images/art-therapy-5.jpeg";
// }

// num ++;
// if (num ==5) {
//     num = 1;
// }
// setTimeout(slideShow,3000);

// }

// slideShow();


});