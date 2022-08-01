const ANZEIGE_ID = "anzeige";
const EINGABEFELD_ID = "eingabefeld";
const RECHENWEG_ANZEIGE_ID = "rechenweg-anzeige";
const RECHNEN_BUTTON_ID = "rechnen-button";
const TASTE_KLASSE = "taste";
const FEHLER_KLASSE = "fehler";

const LEERZEICHEN_ERFORDERLICH_REGEX = /(\d|\))\s*(\+|\*|\/)\s*/g;

const anzeige = document.getElementById(ANZEIGE_ID);
const eingabefeld = document.getElementById(EINGABEFELD_ID);
const rechenwegAnzeige = document.getElementById(RECHENWEG_ANZEIGE_ID);
const rechnenButton = document.getElementById(RECHNEN_BUTTON_ID);
const tasten = document.getElementById(TASTE_KLASSE);

const formatierer = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 15,
  useGrouping: false,
});

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
      case "ENTF":
        // Da letze Zeichen im  Eingabefeld entfernen
        eingabefeld.value = eingabefeld.value.slice(0, -1);

        // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchroniseren
        aktuelleEingabe = eingabefeld.value;
        break;

      case "AC":
        // Das gesamte Eingabefeld leeren
        eingabefeld.value = "";
        aktuelleEingabe = "";
        break;

      case "=":
        try {
          // Das Ergebnis der eingegeben Rechnung ermitteln
          const ergebnis = new Function(
            "return " + eingabefeld.value.replaceAll(",", ".")
          )();

          // Das Ergebnis in das Eingabefeld schreiben
          eingabefeld.value = formatierer.format(ergebnis);

          // Die rechnung, die zum Ergebnis geführt hat, in das Rechenweg-Feld schreiben
          rechenwegAnzeige.textContent = aktuelleEingabe;

          // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
          aktuelleEingabe = eingabefeld.value;

          // Fehlerklasse von der Rechnenweg-Anzeige nehmen
          rechenwegAnzeige.classList.remove(FEHLER_KLASSE);
        } catch {
          // Fehlermeldung in Rechenweg-Anzeige schreiben
          rechenwegAnzeige.textContent = "Ungültige Eingabe!";
          rechenwegAnzeige.classList.add(FEHLER_KLASSE);
        }

        break;

      default:
        // Das Zeichen der angeklickten Taste an die Eingabe anhängen
        eingabefeld.value += angeklicktesZeichen;

        // Die Operatotren mit Leerzeichen umschließen
        eingabefeld.value.replaceAll();

        // Wert der aktuelleEingabe-Variablen aktualsieren
        aktuelleEingabe = eingabefeld.value;
        break;
    }
  });
}
