var age = prompt ("inserisci età");
var km = prompt ("quanti km vuoi percorrere?");
var prezzo = parseInt(km) * 0.21;
var totaleVenti = prezzo * 20 / 100;
var totaleQuaranta = prezzo * 40 / 100;
var totaleUno = prezzo - totaleVenti;
var totaleDue = prezzo - totaleQuaranta;

age = parseInt(age);
km = parseInt(km);


if (age < 18){
    document.getElementById("prezzoTotale").innerHTML = "Ciao il prezzo totale è: " + totaleUno;
}else if (age >= 18 && age < 65){
    document.getElementById("prezzoTotale").innerHTML = "Ciao il prezzo totale è: " + prezzo;
}else{
    document.getElementById("prezzoTotale").innerHTML = "Ciao il prezzo totale è: " + totaleDue;
}