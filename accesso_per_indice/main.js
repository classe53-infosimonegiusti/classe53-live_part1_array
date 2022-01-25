const myarray = ['Michele', 'Fabio', 'Roberto'];

const numero = parseInt(prompt('A quale elemento vuoi accedere?'));

const lunghezzaArray = myarray.length;

if (numero < 0 || numero > (lunghezzaArray - 1)) {
    alert("Devi selezionare una posizione compresa tra 0 e " + (lunghezzaArray - 1));
} else {
    alert("L'elemento selezionato è: " + myarray[numero]);
}




