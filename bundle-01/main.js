/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1

/* 
for (let i = 0; i > 5; i++) {
  console.log(i);
}

1) è un ciclo contatore che cicla la variabile i  maggiore di 5
cosi come è  scritto non entreremo mai nel ciclo perchè  i non è maggioredi 5 essendo uguale a 0

per eseguire il ciclo i sarà minore di 5



*/

for (let i = 0; i < 5; i++) {
  console.log(`
Esercizio 1: ${i}

`);
}

// ESERCIZIO 2

/* 
function addIfEven(num) {
  if (num % 2 = 0) {
    return num + 5;
  }
  return num;
}

2) in questa funzione abbiamo una condizione 
-SE il numero modulo di 2 è 0 
la funzione restituisce il numero sommato  a 5 
-ALtrimenti restituisce il numero stesso 

ma la sintassi è sbagliata  il nostro num deve essere (num % 2 === 0)

*/
function addIfEven(num) {
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}

console.log(`
Esercizio 2: ${addIfEven(4)}

`);

// ESERCIZIO 3

/* 
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

3) in questa funzione un ciclo che conta fino a 5
la sintassi e la logica sono sbagliate
al posto delle virgole vanno i punti e virgola
Se vogliamo contare fino a cinque il nostro contatore sarà impostato a minore uguale (<=) 

*/

function loopToFive() {
  for (let i = 0; i <= 5; i++) {
    console.log(`
Esercizio 3: ${i}
    
    `);
  }
}
loopToFive();

// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
