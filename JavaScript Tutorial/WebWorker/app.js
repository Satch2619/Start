let worker = new Worker("worker.js");

worker.addEventListener("message", (event) => {
  let data = event.data;
  console.log(data);
});

function startMyWork() {
  worker.postMessage([1, 6, 4, 8, 1, 11, 68, 43, 22, 8, 9, 12,]);
}

document.querySelector("#startWorker").addEventListener("click", startMyWork);
