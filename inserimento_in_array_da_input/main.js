const myarray = [];

//per tre volte richiedo un prompt all utente
for (let i=0; i < 3; i++) {

    let input = prompt('Cosa vuoi aggiungere?');
    myarray.push(input);
   
}

console.log(myarray);