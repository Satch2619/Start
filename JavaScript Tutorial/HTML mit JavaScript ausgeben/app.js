// 1. HTML Objekte erstellen und hinzufügen

const ul = document.querySelector(".liste");

//<li></li>
const newListItem = document.createElement("li");

//<li>Der Rettich ist scharf</li>
newListItem.textContent = "Der Rettich ist scharf";

//<li class="special">Der Rettich ist scharf</li>
newListItem.classList.add("special");

newListItem.addEventListener("click", () => {
  console.log("Hallo ich bin der Rettich");
});

ul.append(newListItem);
