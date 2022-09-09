document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") == "invert") {
    document.querySelector("body").classList.add("invert");
  }

  let currenTime = new Date();
  let year = currenTime.getFullYear();
  document.querySelector("#currentYear").innerHTML = year;

  if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js", { scope: "/"}) 
      .then(() => console.log("service worker registered")) 
      .catch((error) => console.warn(error))
    }
});

document.querySelector("#invertButton").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("invert");

  if (localStorage.getItem("theme") == "invert") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "invert");
  }
});
