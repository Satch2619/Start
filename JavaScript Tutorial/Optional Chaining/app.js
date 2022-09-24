const human = {
  name: "Max",
  age: 26,
  cat: {
    name: "Felix",
  },
  billing: {adress: { street: { number: 10 } } },
};

let value  = human.cat?.name;
console.log(value);


let test  = human.billing.adress.street.number;
console.log(test);

