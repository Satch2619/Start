//import { toConsole } from "./helperFunctions.js";
//toConsole("Hallo Welt");

document.querySelector("#loadModule").addEventListener('click', function() {
  import("./helperFunctions.js").then(({ toConsole }) => {
    toConsole("dynamisches Hallo Welt");
  });
});