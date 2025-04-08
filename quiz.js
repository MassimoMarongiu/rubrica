"use strict";

class domande {
    constructor(domanda, risposta) {
        this.domanda = domanda;
        this.risposta = risposta;
    }
}
let quiz = [];
let risposteUtente = [];
let domande1 = new domande("Qual è il mio colore preferito?\nRisposta: 1)Blu 2)Rosso 3)Verde", "1");
let domande2 = new domande("Qual è il tuo animale preferito?\nRisposta: 1)Gatto 2)Cane 3)Gallina", "1");
quiz.push(domande1, domande2);
console.log(quiz);
for (let i = 0; i < quiz.length; i++) {
        risposteUtente[i] = prompt(quiz[i].domanda +"\n inserire un numero tra 1 e 3")
        parseInt(risposteUtente[i]);
  if(isNaN(risposteUtente[i]) || risposteUtente[i].length < 1 || risposteUtente[i].length > 1
    || risposteUtente[i]  < 1 || risposteUtente[i]  > 3) {
        alert("devi inserire un numero tra 1 e 3");
        i--;
    }
}
let score = 0;
risposteUtente.forEach((rispostaUtente, index) => {
    alert(quiz[index].domanda + "\n hai risposto: "+risposteUtente[rispostaUtente]);
    if (risposteUtente[rispostaUtente] === quiz[index].risposta) {
        score++;
    }
});
alert("Hai totalizzato "+score+"su "+quiz.length+" domande");
