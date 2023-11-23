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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)

/*
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) >= auto.type == 'benzina');

const dieselCars = cars.filter( (auto) => {
    auto.type === 'diesel';
});

const otherCars = cars.filter( (auto) => {
    return auto.type !== 'benzina' || auto.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
!1) nell assegnazione del oggetto non è presente una virgola

!2) la funzione arrow di gasolineCars è scritta in modo erratro =>

!3) In gasolineCars auto.type non tiene in considerazione che il valore di type pupò essere scritto in formato diverso (Aggiundere '.toLowerCase')

!4) in dieselCars  auto.type non tiene in considerazione che il valore di type pupò essere scritto in formato diverso (Aggiundere '.toLowerCase')

!5) in otherCars l'operatore di condizione è errato perchè tiene conto delle macchine di tipo benzina o tipo diesel (tenere conto di entrrambi i tipi)

!6) in otherCarsauto.type non tiene in considerazione che il valore di type pupò essere scritto in formato diverso (Aggiundere '.toLowerCase')

*/

const cars = [
  {
    manufacturer: 'Ford',
    model: 'Fiesta',
    type: 'diesel',
  },
  {
    manufacturer: 'Audi',
    model: 'A1',
    type: 'benzina',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Golf',
    type: 'Benzina',
  },
  {
    manufacturer: 'Fiat',
    model: 'Panda',
    type: 'metano',
  },
  {
    manufacturer: 'Fiat',
    model: 'Multipla',
    type: 'GPL',
  },
  {
    manufacturer: 'Tesla',
    model: 'Model 3',
    type: 'elettrico',
  },
  {
    manufacturer: 'Volkswagen',
    model: 'Polo',
    type: 'benzina',
  },
  {
    manufacturer: 'Ford',
    model: 'Kuga',
    type: 'Diesel',
  },
  {
    manufacturer: 'Seat',
    model: 'Ibiza',
    type: 'metano',
  },
  {
    manufacturer: 'Audi',
    model: 'R8',
    type: 'Benzina',
  },
];

const gasolineCars = cars.filter(
  (auto) => auto.type.toLowerCase() === 'benzina'
);

const dieselCars = cars.filter((auto) => {
  return auto.type.toLowerCase() === 'diesel';
});

const otherCars = cars.filter((auto) => {
  return (
    auto.type.toLowerCase() !== 'benzina' &&
    auto.type.toLowerCase() !== 'diesel'
  );
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);
