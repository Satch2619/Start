let obstListe = ["Banane", "Apfel", "Erdbeere"];

// hinmzufügen an das Ende des Arrays
obstListe.push("Heidelbeere");
console.log(obstListe);

// Entfernen des letzten Elements
obstListe.pop();
console.log(obstListe);

// Hinzufügen am Anfang des Arrays
obstListe.unshift("Kiwi");
console.log(obstListe);

// Entfernen des ersten Elements
obstListe.shift();
console.log(obstListe);

obstListe.splice(1, 1);
console.log(obstListe);
