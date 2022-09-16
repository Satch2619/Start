class Mensch {
  constructor (vorname, nachname ) {
    this.vorname = vorname;
    this.nachname = nachname;
  }
  sagHallo() {
    console.log("Hallo, mein Name ist "  + this.vorname +" "+ this.nachname);
  }
  get vollerName() {
    return "Hallo, mein Name ist "  + this.vorname +" "+ this.nachname
  }
}

let mensch1 = new Mensch("Sascha", "Holzheimer");
mensch1.sagHallo();

let mensch2 = new Mensch("Pum", "Holzheimer");
console.log(mensch2.vollerName);

class Held extends Mensch {
  constructor(vorname, nachname, heroname) {
    super(vorname, nachname);
    this.heroname = heroname;
  }
  sagHallo() {
    console.log("Hallo, mein Name ist "  + this.vorname +" "+ this.nachname + "mein Spitzname ist "+this.heroname);
  }
}

let held1 = new Held("Sascha", "Holzheimer", "Satch");
held1.sagHallo();
console.log(held1.vollerName);