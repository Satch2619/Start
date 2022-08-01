const ANZEIGE_ID = "anzeige";
const EINGABEFELD_ID = "eingabefeld";
const RECHENWEG_ANZEIGE_ID = "rechenweg-anzeige";
const RECHNEN_BUTTON_ID = "rechnen-button";
const TASTE_KLASSE = "taste";
const FEHLER_KLASSE = "fehler";

const LEERZEICHEN_ERFORDERLICH_REGEX = /(\d|\))\s*(\+|\-|\*|\/)\s*/g;
const GUELTIGE_EINGABE_REGEX = /^[\d .,\(\)\+\-\*\/]*$/;

const anzeige = document.getElementById(ANZEIGE_ID);
const eingabefeld = document.getElementById(EINGABEFELD_ID);
const rechenwegAnzeige = document.getElementById(RECHENWEG_ANZEIGE_ID);
const rechnenButton = document.getElementById(RECHNEN_BUTTON_ID);
const tasten = document.getElementsByClassName(TASTE_KLASSE);

const formatierer = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 15,
  useGrouping: false,
});

let aktuelleEingabe = "";

// Die Liste der Tasten durchgehen
for (const taste of tasten) {
  // Jeder Taste sagen, was passieren soll, wenn man auf sie klickt
  taste.addEventListener("click", function (ereignis) {
    // 1. Rechenweg-Anzeige leeren
    rechenwegAnzeige.textContent = "";

    // 2. Herausfinden, welches Zeichen auf der angeklickten Taste abgebildet ist
    const angeklicktesZeichen = ereignis.target.textContent;

    // Je nach angeklickter Taste unterschiedliche Dinge tun
    switch (angeklicktesZeichen) {
      case "ENTF":
        // Das letzte Zeichen aus dem Eingabefeld entfernen
        eingabefeld.value = eingabefeld.value.trimEnd().slice(0, -1).trimEnd();

        // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
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

          // Das Ergebnis formatieren und in das Eingabefeld schreiben
          eingabefeld.value = formatierer.format(ergebnis);

          // Die Rechnung, die zum Ergebnis geführt hat, in das Rechenweg-Feld schreiben
          rechenwegAnzeige.textContent = aktuelleEingabe;

          // aktuelleEingabe mit dem Inhalt des Eingabefeldes synchronisieren
          aktuelleEingabe = eingabefeld.value;

          // Fehlerklasse von der Rechenweg-Anzeige nehmen
          rechenwegAnzeige.classList.remove(FEHLER_KLASSE);
        } catch {
          // Fehlermeldung in die Rechenweg-Anzeige schreiben
          rechenwegAnzeige.textContent = "Ungültige Eingabe!";
          rechenwegAnzeige.classList.add(FEHLER_KLASSE);
        }

        break;

      default:
        // Das Zeichen der angeklickten Taste an die Eingabe anhängen
        eingabefeld.value += angeklicktesZeichen;

        // Die Operatoren mit Leerzeichen umschließen
        eingabefeld.value = eingabefeld.value.replaceAll(
          LEERZEICHEN_ERFORDERLICH_REGEX,
          "$1 $2 "
        );

        // Wert der aktuelleEingabe-Variablen aktualisieren
        aktuelleEingabe = eingabefeld.value;
        break;
    }
  });
}

eingabefeld.addEventListener("input", function (ereignis) {
  // 1. Prüfen, ob es sich um eine gültige Eingabe handelt
  if (GUELTIGE_EINGABE_REGEX.test(eingabefeld.value)) {
    // Wert der aktuelleEingabe-Variablen aktualisiern
    aktuelleEingabe = eingabefeld.value;
  } else {
    // Ungültige Eingabe -> Eingabe ablehnen!
    eingabefeld.value = aktuelleEingabe;
  }
});

eingabefeld.addEventListener("keydown", function (ereignis) {
  // Wurde die Enter-Taste gedrückt?
  if (ereignis.key === "Enter") {
    // Das tun, was auch beim Klick auf die = Taste geschieht
    rechnenButton.click();
  }
});
