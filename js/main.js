var mine = [];
var mioNumero = parseInt(prompt('Inserisci un numero da 1 a 100'));
var numeriUtilizzati = [];
var counter = 0;

for (var i = 0; i < 16; i++) {
    mine.push(Math.floor(Math.random() * 100 + 1));
}

console.log('Le mine sono: ' + mine);

if (numeriUtilizzati.includes(mioNumero)) {
    mioNumero = parseInt(prompt('Inserisci un numero da 1 a 100, hai già inserito questo numero'));
} else {
    checkList (mioNumero, mine);
}

function checkList (mioNumero, myList) {

    if (myList.includes(mioNumero)) {
        console.log('hai perso, il numero è contenuto nella lista. Sei riuscito però ad indovinare: ' + numeriUtilizzati.length +' numeri non presenti!');
        return; //Se il numero è contenuto fine!
    } else {
        mioNumero = parseInt(prompt('Inserisci un numero da 1 a 100'));
        numeriUtilizzati.push(mioNumero);                        // DA COMPLETARE
        return checkList(mioNumero, mine);
    }
}

console.log('I numeri vincenti utilizzati sono: ' + numeriUtilizzati);

// aggiungere controlli sugli errori
