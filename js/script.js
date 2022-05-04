// chiedere il numero dei chilometri da percorrere
const Km = prompt ("quanti km devi percorrere?");
console.log(Km);

// chiedere l'età dell'utente
const age = prompt ("quanti anni hai?");
console.log(age);

// calcolo prezzo pieno del biglietto (0,21 €/km)
let prezzoBiglietto = Km * 0.21;

// calcolo sconto 20%
let sconto20 = (prezzoBiglietto * 20) / 100;

// calcolo sconto 40%
let sconto40 = (prezzoBiglietto * 40) / 100;

// calcolare il 20% di sconto se utente minorenne
if (age < 18) {
    document.getElementById("mio-id").innerHTML = (prezzoBiglietto - sconto20);
// calcolare il 40% di sconto se utente over 65
} else if (age > 65) {
    document.getElementById("mio-id").innerHTML = (prezzoBiglietto - sconto40);
// prezzo pieno 
} else {
    document.getElementById("mio-id").innerHTML = prezzoBiglietto;
}

