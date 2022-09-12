import { addItemToArray, removeItemFromArray } from "./arrayHelper.js";

let persons = [
  {
    id: 0,
    name: "Max",
    hobby: "Pizza essen"
  },
  {
    id: 1,
    name: "Bodo",
    hobby: "Eislaufen"
  },
  {
    id: 2,
    name: "Felix",
    hobby: "Videospiele"
  },
]

addItemToArray(persons, {
  id: 3,
  name: "Robert",
  hobby: "Fussball",
})

console.log(persons);
