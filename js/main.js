// 1 Il pc crea 16 numeri tra 1 e 100
// 2 Il pc chiede all'utente un numero da 1 a 100
// 3 se il numero è presente la partita termina
// 4 se non è presente, ne chiede un altro fino a che non se ne inserisce uno presente
// 5 al termine la funzione riporta il punteggio ( cioè quante volte è stato inserito un numero accettabile)

var listaNumeri = [];
var mioNumero = parseInt(prompt('Inserisci un numero da 1 a 100'));
var numeriUtilizzati = [];                            // da completare
var counter = 0; //contatore init

for (var i = 0; i < 16; i++) {
    listaNumeri.push(Math.floor(Math.random() * 100 + 1));               // Genera numero random da 1 a 100 potevo utilizzare f. generaRandomMinMax
}
console.log(listaNumeri);

checkList(mioNumero, listaNumeri, counter);                          // su questa chiamata va aggiunto il controllo dei numeri già utilizzati dall'utente
function checkList (mioNumero, myList, counter) {
    counter = counter + 1;                                         // contatore tentativi
    if (myList.includes(mioNumero)) {
        console.log('hai perso, il numero è contenuto nella lista. Sei riuscito però ad indovinare: ' + counter +' numeri non presenti!');
        return; //Se il numero è contenuto fine!
    } else {
        mioNumero = parseInt(prompt('Inserisci un numero da 1 a 100'));
        return checkList(mioNumero, listaNumeri, counter);      // se il numero non è contenuto richiama la funzione aggiornando il contatore dei tentativi
    }
}
