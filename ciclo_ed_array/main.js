const myarray = ['Michele', 'Fabio', 'Roberto'];

for (let i = 0; i < myarray.length; i++) {
    let insegnante = myarray[i];
    console.log(insegnante);

    document.getElementById('prova').innerHTML += insegnante;
}