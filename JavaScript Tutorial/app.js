let = clickButton = document.querySelector("#click-button");
clickButton.addEventListener("click", eingabe);

function eingabe() {
  let input = document.querySelector("#input");
  let output = document.querySelector("#output");

  let newDiv = document.createElement("div");
  let newcontent = document.createTextNode(input.value);

  newDiv.appendChild(newcontent);
  output.appendChild(newDiv);

  input.value = "";
}
