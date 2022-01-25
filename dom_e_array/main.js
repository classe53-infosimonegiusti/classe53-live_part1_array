//let elementi = document.getElementsByClassName('prova');
let elementi = document.querySelectorAll('.prova');

console.log(elementi);

for (let i = 0; i < elementi.length; i++) {

    //In caso typeof sia != da object, non puoi riassegnare un valor
    let prova = elementi[i].innerHTML;
    console.log(typeof prova);

    // se il typeof è object, dovresti riuscire a riassegnare l'attributo
    console.log(typeof elementi[i]);
    elementi[i].innerHTML = 'World-' + (i + 1);
    elementi[i].style.color = "red";

}