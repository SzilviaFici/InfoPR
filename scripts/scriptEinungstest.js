//Globale Variablen
//Hier werden die Variablen definiert, die während der Projekt verwendet werden.
//Vier Variablen erstellen, um jedes mögliche Testergebnis zu verfolgen
let FrageZaehlen = 0;
let Ergebnis1Score = 0;
let Ergebnis2Score = 0;
let Ergebnis3Score = 0;
let Ergebnis4Score = 0;

//das DOM verwenden, um Variablen für die erste Testfrage zu erstellen.
//erste Frage
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
//zweite Frage
let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
//dritte Frage
let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
//vierte Frage
let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");
//fünfte Frage
let q5a1 = document.getElementById("q5a1");
let q5a2 = document.getElementById("q5a2");
let Ergebnis = document.getElementById("Ergebnis");

//Event-Listener zu dem Antwortauswahlvariablen hinzu.
q1a1.addEventListener("click", Ergebnis1);
q1a2.addEventListener("click", Ergebnis2);

q2a1.addEventListener("click", Ergebnis1);
q2a2.addEventListener("click", Ergebnis2);

q3a1.addEventListener("click", Ergebnis1);
q3a2.addEventListener("click", Ergebnis2);

q4a1.addEventListener("click", Ergebnis1);
q4a2.addEventListener("click", Ergebnis2);

q5a1.addEventListener("click", Ergebnis1);
q5a2.addEventListener("click", Ergebnis2);

//Die Testfunktionen werden hier definiert
function Ergebnis1() {
    Ergebnis1Score++; FrageZaehlen++;
    if (FrageZaehlen >= 5) {
        ErgebnisAktualisieren ();
    }
}
function Ergebnis2() {
    Ergebnis2Score++; FrageZaehlen++;
    if (FrageZaehlen >= 5) {
        ErgebnisAktualisieren();
    }
}
function Ergebnis3() {
    Ergebnis3Score++; FrageZaehlen++;
    if (FrageZaehlen >= 5) {
        ErgebnisAktualisieren();
    }
}
function Ergebnis4() {
    Ergebnis4Score++; FrageZaehlen++;
    if (FrageZaehlen >= 5) {
        ErgebnisAktualisieren();
    }
}
function ErgebnisAktualisieren() {
    if (Ergebnis1Score >= 3) {
        Ergebnis.innerHTML = "Dienstleistungen ist das passende Berufsfeld für dich";
    } else if (Ergebnis2Score >3) {
        Ergebnis.innerHTML =
            "Gesundheit ist das passende Berufsfeld für dich";
    } else if (Ergebnis3Score >3) {
        Ergebnis.innerHTML = "📱 IT ist das passende Berufsfeld für dich";
    }
}