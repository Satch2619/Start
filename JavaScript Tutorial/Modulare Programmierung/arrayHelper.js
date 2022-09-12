function addItemToArray(array, item) {
  let index = array.findIndex((element) => element.id === item.id);

  if(index === -1) array.push(item);
  else array.splice(index, 1, item);
}

export { addItemToArray };