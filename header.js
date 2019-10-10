"use strict";

$(document).ready(function () {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
});

// // window.onscroll = function() {scrollFunction()};

// // function scrollFunction() {
// //   if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
// //     document.querySelector("#top-scroll-container").style.top = "0";
// //   } else {
// //     document.querySelector("#top-scroll-container").style.top = "-100px";
// //   }
// }

function showClickDropdown() {
  document.querySelector(".click-dropdown-content").classList.toggle("show");
  document.querySelector("#dropdown-chevron-icon").classList.toggle("rotate");

}

function showDropdownContent() {
  console.log('da')
  document.querySelector(".dropdown-content").classList.toggle("show");
}

// const dropdownContent = document.querySelector(".dropdown-content");

// document.querySelector("#burger-menu-btn").addEventListener("click", e => {
//   e.dropdownContent.style.display = "block";
// });