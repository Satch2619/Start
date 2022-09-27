self.addEventListener("message", (event) => {
  let data = event.data;
  //console.log(data);
  self.postMessage(data.sort());
});