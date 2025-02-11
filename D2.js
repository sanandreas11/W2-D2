/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 5
let b = 10
if (a > b) {
  console.log("a è maggiore di b")
} else {
  console.log("b è maggiore di a")
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
if (a !== 5) {
  console.log("not equal")
} else {
  console.log("equal")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (a % 5 === 0) {
  console.log("divisibile per 5")
} else {
  console.log("non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

if (a === 8 || b === 8 || a + b === 8 || a - b === 8 || b - a === 8) {
  console.log("uno dei due numeri è 8 oppure la loro somma/sottrazione è 8")
} else {
  console.log("nessuna delle condizioni è verificata")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 30
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita", totalShoppingCart)
} else {
  console.log("spedizione a 10 euro", totalShoppingCart + 10)
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 30 * 0.8
if (totalShoppingCart > 50) {
  console.log("spedizione gratuita", totalShoppingCart)
} else {
  console.log("spedizione a 10 euro", totalShoppingCart + 10)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let c = 30
let d = 20
let e = 10
if (c > d && c > e) {
  if (d > e) {
    console.log(c, d, e)
  } else {
    console.log(c, e, d)
  }
} else if (d > c && d > e) {
  if (c > e) {
    console.log(d, c, e)
  } else {
    console.log(d, e, c)
  }
} else {
  if (c > d) {
    console.log(e, c, d)
  } else {
    console.log(e, d, c)
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let f = "ciao"
if (typeof f === "number") {
  console.log("è un numero")
} else {
  console.log("non è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (a % 2 === 0) {
  console.log("numero pari")
} else {
  console.log("numero dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 15
if (val < 5) {
  console.log("Meno di 5")
} else if (val < 10) {
  console.log("Meno di 10")
} else {
  console.log("Uguale a 10 o maggiore")
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array.splice(9, 1, 100)
console.log(array)
/* SCRIVI QUI LA TUA RISPOSTA */
