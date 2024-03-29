"use strict";

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");

const header1 = document.querySelector("#selectheader1");
const header2 = document.querySelector("#selectheader2");
const header3 = document.querySelector("#selectheader3");
const priceR = document.querySelector("#moneychange");
const priceS = document.querySelector("#startPrice");
const priceT = document.querySelector("#totalPrice");

item1.addEventListener("click", clicked);

function clicked() {
  console.log("clicked");
}

localStorage.setItem("iform_issues", "4 nr for 149 kr.");
localStorage.setItem("iform_total", "198.50 kr.");

item3.addEventListener("click", selected3);

function selected3() {
  console.log("clicked");
  item1.classList.remove("active2");
  item2.classList.remove("active2");
  item3.classList.add("active2");

  header1.textContent = "";
  header2.textContent = "Mest Populære";
  header3.textContent = "Dit Valg:";

  priceR.textContent = "921 kr.";
  priceS.textContent = "299 kr.";
  priceT.textContent = "348.50";

  localStorage.setItem("iform_issues", "8 nr for 299 kr.");
  localStorage.setItem("iform_total", "348.50 kr.");
}

item2.addEventListener("click", selected2);

function selected2() {
  console.log("clicked");
  item1.classList.remove("active2");
  item2.classList.add("active2");
  item3.classList.remove("active2");

  header1.textContent = "";
  header2.textContent = "Dit Valg:";
  header3.textContent = "";

  priceR.textContent = "866 kr.";
  priceS.textContent = "199 kr.";
  priceT.textContent = "248.50";

  localStorage.setItem("iform_issues", "6 nr for 199 kr.");
  localStorage.setItem("iform_total", "248.50 kr.");
}

item1.addEventListener("click", selected1);

function selected1() {
  console.log("clicked");
  item1.classList.add("active2");
  item2.classList.remove("active2");
  item3.classList.remove("active2");

  header1.textContent = "Dit valg:";
  header2.textContent = "Mest Populære";
  header3.textContent = "";

  priceR.textContent = "761 kr.";
  priceS.textContent = "149 kr.";
  priceT.textContent = "198.50";

  localStorage.setItem("iform_issues", "4 nr for 149 kr.");
  localStorage.setItem("iform_total", "198.50 kr.");
}

const defSize = document.querySelectorAll('input[name="size"]');

defSize.forEach(el => {
  el.addEventListener("change", setJacketSize);
});

function setJacketSize() {
  localStorage.setItem("jacket_size", document.querySelector('input[name="size"]:checked').value);
}
