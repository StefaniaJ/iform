const iformIsuues = document.querySelector("#iform_issues");
const jacketsize = document.querySelector("#jacketsize");
const totalPrice = document.querySelector("#totalPrice");

iformIsuues.textContent = localStorage.getItem("iform_issues");
jacketsize.textContent = "størrelse: " + localStorage.getItem("jacket_size");
totalPrice.textContent = localStorage.getItem("iform_total");
