var age = prompt ("inserisci età");
var km = prompt ("quanti km vuoi percorrere?");
var x = 0.21;
var prezzo = parseInt(km) * parseInt(x);
var scontoVenti = parseInt(prezzo) * 20 / 100;
var scontoQuaranta = parseInt(prezzo) * 40 / 100;

age = parseInt(age);
km = parseInt(km);
x = parseInt(x);
venti = parseInt(venti);
quaranta = parseInt(quaranta);

if (age < 18){
    document.getElementById("prezzoTotale").innerHTML = "ciao" + prezzo + scontoVenti;
}