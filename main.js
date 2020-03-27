var lastNameList = [
    "Randazzo",
    "Battaglia",
    "Fiaschi",
    "Capone",
    "Grossano",
    "Andreoli",
    "Fraternali",
    "Valenti",
];
// creo array vuoto che andrò a riempire con gli elementi del primo array
var newList = [];

// ciclo esterno che riempie l'array vuoto in ordine decrescente
for (var j = lastNameList.length - 1; j > -1; j--) {

var max = "";

    // primo ciclo interno: trova l'elemento più grande e lo mette nell'array vuoto
    for (var i = 0; i < lastNameList.length; i++) {
        // trovo il cognome più grande nel primo array e lo stampa nel secondo (quello vuoto)
        if (lastNameList[i] > max) {
            max = lastNameList[i];
            newList[j] = max;
        }

    }

    // secondo ciclo che "svuota" il primo array
    for (var i = 0; i < lastNameList.length; i++) {
        if (lastNameList[i] == max) {
            lastNameList[i] = "";
        }

    }

}

console.log(lastNameList);
console.log(newList);












// "Capone",
// "Grossano",
// "Andreoli",
// "Fraternali",
// "Valenti",
