let Max = {
  groeße: 180,
  alter: 25,
  geburtstag: function () {
    this.alter += 1;
  },
};

Max.geburtstag();
Max.geburtstag();
Max.geburtstag();

console.log(Max.alter);
