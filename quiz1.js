"use strict";

let domande = [
    {
        domanda: "Qual è il mio colore preferito?@\nRisposta: 1)Blu 2)Rosso 3)Verde",
        risposta: "1"
    },
    {
        domanda: "Qual è il tuo animale preferito?@\nRisposta: 1)Gatto 2)Cane 3)Gallina",
        risposta: "1"
    }
];

let risposteUtente = [];
let score = 0;

for (let i = 0; i < domande.length; i++) {
    let rispostaUtente = prompt("Domanda" + (i + 1) + " " + domande[i].domanda + "\n inserire un numero tra 1 e 3");
    risposteUtente.push(rispostaUtente);
    if (rispostaUtente === domande[i].risposta) {
        score++;
    }
}

for (let i = 0; i < domande.length; i++) {
    let index = domande[i].domanda.indexOf("@");
    if (risposteUtente[i] === domande[i].risposta) {
        alert("Domanda" + (i + 1) + " " + domande[i].domanda.substring(0, index) + "\n hai risposto: " + risposteUtente[i] + "\n Risposta corretta ");
    } else {
        alert("Domanda " + (i + 1) + " " + domande[i].domanda.substring(0, index) + "\n hai risposto: " + risposteUtente[i] + "\n Risposta errata ");
    }
}

alert("Hai totalizzato " + score + "su " + domande.length + " domande");
