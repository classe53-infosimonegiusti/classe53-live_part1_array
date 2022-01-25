const numeri =  [2, 4, 5, 7, 12, 25];
let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    console.log('i vale: ' + i + ', mentre numeri[i] vale:' + numeri[i]);
    somma += numeri[i];
}

console.log("La somma totale vale: "+ somma);

const media = somma / numeri.length;

console.log("La media vale: " + media.toFixed(3));

