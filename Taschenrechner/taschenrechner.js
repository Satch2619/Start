const ANZEIGE_ID = "anzeige";
const EINGABEFELD_ID = "eingabefeld";
const RECHENWEG_ANZEIGE_ID = "rechenweg-anzeige";
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

    // Je nach angeklickter Taste unterschiedliche Dinge tun
    switch (angeklicktesZeichen) {
      case "=":
        // Das Ergebnis der eingegeben Rechnung ermitteln
        const ergebnis = new function("return " + eingabefeld.value)();

        // Das Ergebnis in das Eingabefeld schreiben
        eingabefeld.value = ergebnis;

        // Die rechnung, die zum Ergebnis geführt hat, in das Rechenweg-Feld schreiben
        rechenwegAnzeige.textContent = aktuelleEingabe;

        // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
        aktuelleEingabe = eingabefeld.value;
        break;

      default:
        // Das Zeichen der angeklickten Taste an die Eingabe anhängen
        eingabefeld.value += angeklicktesZeichen;

        // 4. Wert der aktuelleEingabe-Variablen aktualsieren
        aktuelleEingabe = eingabefeld.value;
        break;
    }
  });
}
