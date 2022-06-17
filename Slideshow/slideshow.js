const indikatoren = document.getElementsByClassName('indikator');
indikatoren[0].classList.add('aktiv');

const slides = document.getElementsByClassName('slide');
slides[0].classList.add('aktiv');

var aktuellerIndex = 0;
var letzteAktualisierung = new Date();

function umschalten(anzahl) {
  var neuerIndex = aktuellerIndex + anzahl;

  if (neuerIndex < 0) {
    neuerIndex = slides.length - 1;
  }

  if (neuerIndex > slides.length - 1) {
    neuerIndex = 0;
  }
  springeZuEintrag(neuerIndex);
}

function springeZuEintrag(neuerIndex) {
  indikatoren[aktuellerIndex].classList.remove('aktiv');
  slides[aktuellerIndex].classList.remove('aktiv');

  indikatoren[neuerIndex].classList.add('aktiv');
  slides[neuerIndex].classList.add('aktiv');

  aktuellerIndex = neuerIndex;
  letzteAktualisierung = new Date();
}

function automatischWeiterschalten() {
  const vergangeneZeit = new Date() - letzteAktualisierung;

  if (vergangeneZeit >= 3000) {
    umschalten(1);
  }
}
setInterval(automatischWeiterschalten, 500);
