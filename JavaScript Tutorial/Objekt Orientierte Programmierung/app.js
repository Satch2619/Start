class Mensch {
  constructor (vorname, nachname ) {
    this.vorname = vorname;
    this.nachname = nachname;
  }
  sagHallo() {
    console.log("Hallo, mein Name ist "  + this.vorname +" "+ this.nachname);
  }
}

let mensch1 = new Mensch("Sascha", "Holzheimer");
mensch1.sagHallo();