// 2. innerHTML verwenden

const ul = document.querySelector(".liste");
const meinLitItem = document.querySelectorAll(".liste > li")[1];

ul.innerHTML = "<span>Es gibt jetzt Kirchen</span>";
