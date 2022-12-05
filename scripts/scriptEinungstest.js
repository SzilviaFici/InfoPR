//Globale Variablen
//Hier werden die Variablen definiert, die während der Projekt verwendet werden.
//Vier Variablen erstellen, um jedes mögliche Testergebnis zu verfolgen
let FrageZaehlen = 0;
let Ergebnis1Score = 0;
let Ergebnis2Score = 0;
let Ergebnis3Score = 0;


//das DOM verwenden, um Variablen für die erste Testfrage zu erstellen.
//erste Frage
let q1a1
let q1a2
//zweite Frage
let q2a1
let q2a2
//dritte Frage
let q3a1
let q3a2
//vierte Frage
let q4a1
let q4a2
//fünfte Frage
let q5a1
let q5a2




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

function ErgebnisAktualisieren() {
    if (Ergebnis1Score >= 3) {
        document.getElementById("Ergebnis").innerHTML = "Dienstleistungen ist das passende Berufsfeld für dich";
    } else if (Ergebnis2Score >3) {

            document.getElementById("Ergebnis").innerHTML = "Gesundheit ist das passende Berufsfeld für dich";
    } else if (Ergebnis3Score >3) {
        document.getElementById("Ergebnis").innerHTML = "📱 IT ist das passende Berufsfeld für dich";
    }
}