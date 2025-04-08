"use strict";

class User {
    constructor(nome, cognome, numero, email) {
        this.nome = nome;
        this.cognome = cognome;
        this.numero = numero;
        this.email = email;
    }
}

let user1 = new User("Massi", "MAr", "1234567890", "asd@gmail.com");
let user2 = new User("M", "Gan", "0123456789", "mar@gmail.com");
let rubrica = [];

function aggiungiUtente(utente) {
    let id = rubrica.length + 1;
    utente.id = id;
    rubrica.push(utente);
}

function validaUtente(utente) {
    if (utente.nome.length < 3) {
        alert(`Utente ${utente.nome} non valido. Non aggiunto alla rubrica.` + "\nIl nome deve essere lungo almeno 2 caratteri.");
        return false;
    }
    if (utente.cognome.length < 3) {
        alert(`Utente ${utente.nome} non valido. Non aggiunto alla rubrica.` + "\nIl cognome deve essere lungo almeno 2 caratteri.");
        return false;
    }
    aggiungiUtente(utente);
   
}

validaUtente(user1);
validaUtente(user2);
rubrica.forEach(utente => console.log(utente));