window.addEventListener("load", function () {
    document.querySelector(".sticky-product").classList.add("hide");
});

window.addEventListener("scroll", showAdd);

function showAdd() {
    const bodyHeight = Math.floor(window.scrollY);

    if (bodyHeight > 500) {
        document.querySelector(".sticky-product").classList.remove("hide");
    } else {
        document.querySelector(".sticky-product").classList.add("hide");
    }
}

const previousBtn = document.querySelector(".section5 .testimonials-section .prev");
const nextBtn = document.querySelector(".section5 .testimonials-section .next");

previousBtn.addEventListener("click", function () {
    plusDivs(-1);
});
nextBtn.addEventListener("click", function () {
    plusDivs(1);
});

//https://www.w3schools.com/w3css/w3css_slideshow.asp
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.querySelectorAll(".section5 .testimonials-section .testimonials .customer");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

const allCards = document.querySelectorAll(".section2 .all-cards article");

allCards.forEach(card => {
    card.addEventListener("mouseover", function () {
        card.querySelector("img").classList.add("hover-effect");
    });
});

allCards.forEach(card => {
    card.addEventListener("mouseout", function () {
        card.querySelector("img").classList.remove("hover-effect");
    });
});