// Istruzioni
// Il programma dovrà chiedere all'utente:


//  il numero di chilometri che vuole percorrere

const kmChoise = Number(prompt("Quati km vuoi percorrere?"));

// chiedere l'età del passeggero.

const passengerAge = Number(prompt("Quanti anni hai?"));


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const ticketPriceForKm = 0.21

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


const baseTicketPrice = ticketPriceForKm * kmChoise
console.log(baseTicketPrice);