//Globale Variablen
//Hier werden die Variablen definiert, die während der Projekt verwendet werden.
//Fünf Variablen erstellen, um jedes mögliche Testergebnis zu verfolgen
let FrageZaehlen = 0;
let Ergebnis1Score = 0;
let Ergebnis2Score = 0;
let Ergebnis3Score = 0;
let Ergebnis4Score = 0;
let Ergebnis5Score = 0;


//Variablen für die erste Testfrage zu erstellen.
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
//sechste Frage
let q6a1
let q6a2
//siebte Frage
let q7a1
let q7a2
//achte Frage
let q8a1
let q8a2
//neunte Frage
let q9a1
let q9a2
//zehnte Frage
let q10a1
let q10a2




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
    Ergebnis3Score++; FrageZaehlen++;
    if (FrageZaehlen >= 5) {
        ErgebnisAktualisieren();
    }
}
function Ergebnis5() {
    Ergebnis3Score++; FrageZaehlen++;
    if (FrageZaehlen >= 10) {
        ErgebnisAktualisieren();
    }
}

function ErgebnisAktualisieren() {
    if (Ergebnis1Score >= 5) {
        document.getElementById("Ergebnis").innerHTML = "Dienstleistungen ist das passende Berufsfeld für dich";
    } else if (Ergebnis2Score >5) {
            document.getElementById("Ergebnis").innerHTML = "Gesundheit ist das passende Berufsfeld für dich";
    } else if (Ergebnis3Score >5) {
        document.getElementById("Ergebnis").innerHTML = "Soziales/Pädagogik ist das passende Berufsfeld für dich";
    } else if (Ergebnis4Score >5) {
        document.getElementById("Ergebnis").innerHTML = "Wirtschaft/Verwaltung ist das passende Berufsfeld für dich";
    } else if (Ergebnis5Score >5) {
        document.getElementById("Ergebnis").innerHTML = "IT ist das passende Berufsfeld für dich";
    }
}