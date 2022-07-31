const ANZEIGE_ID = "anzeige";
const EINGABEFELD_ID = "eingabefeld";
const RECHENWEG_ANZEIGE_ID = "rechenweg_anzeige";
const RECHNEN_BUTTON_ID = "rechnen-button";
const TASTE_KLASSE = "taste";

const anzeige = document.getElementById(ANZEIGE_ID);
const eingabefeld = document.getElementById(EINGABEFELD_ID);
const rechenwegAnzeige = document.getElementById(RECHENWEG_ANZEIGE_ID);
const rechnenButton = document.getElementById(RECHNEN_BUTTON_ID);
const tasten = document.getElementById(TASTE_KLASSE);

let aktuelleEingabe = "";

// Die Liste der Tasten durchgehen
for (const taste of tasten) {
  // Jeder Taste sagen, was passieren soll, wen man auf sie klickt
  taste.addEventListener("click", function (ereignis) {
    // 1. Rechenweg-Anzeige leeren
    rechenwegAnzeige.textContent = "";

    // 2. Herausfinden, welches zteichen auf der angeklickten Taste abgebildet ist
    const angeklicktesZeichen = ereignis.target.textContent;

    // 3. Das Zeichen der angeklickten Taste an die Eingabe anhängen
    eingabefeld.value += angeklicktesZeichen;

    // 4. Wert der aktuelleEingabe-Variablen aktualsieren
    aktuelleEingabe = eingabefeld.value;
  });
}
