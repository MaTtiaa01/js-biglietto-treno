// Istruzioni
// Il programma dovrà chiedere all'utente:


//  il numero di chilometri che vuole percorrere

const kmChoise = Number(prompt("Quati km vuoi percorrere?"));

// chiedere l'età del passeggero.

const passengerAge = Number(prompt("Quanti anni hai?"));


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const ticketPriceForKm = 0.21;

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


const baseTicketPrice = ticketPriceForKm * kmChoise
console.log(baseTicketPrice);

const oldDiscount = Number((100 - 40) / 100);

const youngDiscount = Number((100 - 20) / 100);

const oldTicketPrice = Number( oldDiscount * (ticketPriceForKm * kmChoise))

const youngTicketPrice = Number( youngDiscount * (ticketPriceForKm * kmChoise))

if (passengerAge < 19 ){
    document.getElementById("discount").innerHTML = "Hai diritto a uno sconto del 20%!" 
    document.getElementById("final_tickets_price").innerHTML = `Il prezzo del tuo biglietto è: ${youngTicketPrice} €`
} else if (passengerAge > 65){
    document.getElementById("discount").innerHTML = "Hai diritto a uno sconto del 40%!" 
    document.getElementById("final_tickets_price").innerHTML = `Il prezzo del tuo biglietto è: ${oldTicketPrice} €`
} else {
    document.getElementById("discount").innerHTML = "Ci dispiace ma non hai diritto a nessuno sconto" 
    document.getElementById("final_tickets_price").innerHTML = `Il prezzo del tuo biglietto è: ${baseTicketPrice} €`
    
}