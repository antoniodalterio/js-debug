/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

//ESERCIZIO 1
/*
function checkAge() {
  const myAge = 32;
  const message = '';

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = 'Hai più di 18 anni!';
  }
}
checkAge();

la funzione stampa un messaggio in base all'età 
-SE minore di 18 anni
- ALTRIMENTI maggiore di 18 anni

!1) Aggiungere un return a fine condizione del messaggio
!2) e la variabile message  dichiararla con let

*/
function checkAge() {
  const myAge = 32;
  let message = '';

  if (myAge < 18) {
    message = `Sei troppo giovane! Hai ${myAge} anni!`;
  } else {
    message = 'Hai più di 18 anni!';
  }
  console.log(message);
  return message;
}
checkAge();

// ESERCIZIO 2
// function printColorsNumber() {
//   const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//   console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

// ESERCIZIO 3
/*
function addNumbers() {
  const userNumber = prompt('Inserisci un numero');
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();

la funzione fa la somma di un numero dato dall'utente con +12

!1) il prompt restituisce un valore in striga per fare la somma aggiungere un parsint prima del prompt
*/

function addNumbers() {
  const userNumber = parseInt(prompt('Inserisci un numero'));
  const total = userNumber + 12;

  console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// ESERCIZIO 4
/*
function checkAccess() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];
  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = 'false';

  if (addresses.includes(userEmail)) {
    grantAccess = 'true';
  }

  if (grantAccess === true) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccess();

!1) La variabile grantAccess è stata assegnata copme stringa e non come valore booleano quindi eliminare le virgolette 

*/
function checkAccess() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];
  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  if (addresses.includes(userEmail)) {
    grantAccess = true;
  }

  if (grantAccess === true) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)

/* 
function checkAccessImproved() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];

  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = 'false';

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5); {
      if (email === userEmail) {
        grantAccess = 'true';
      }
    }

    if (grantAccess) {
      console.log('Accesso consentito!');
    } else {
      console.log('Accesso negato!');
    }
    }

checkAccessImproved();


5) l'esercizio controlla le email salvante nell'array
al utente viene chiesto di inserire un email 
- se l'email è presente nell'array il grantAccess diventa true

!1)togliere il punto e virgola dopo la funzione
!2) chiudere la funzione con la parentesi graffa
!3) spostare la condizone fuori dal for
!4) togliere le virgolette da true e false



*/

function checkAccessImproved() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];

  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = true;
      }
    }
  }
  if (grantAccess) {
    console.log('Accesso consentito!');
  } else {
    console.log('Accesso negato!');
  }
}
checkAccessImproved();
