var a = window.document.querySelector("input#envio");
a.addEventListener("click", imc);

function imc() {


    var tx1 = window.document.getElementsByClassName('inpu')[0];
    var tx2 = window.document.getElementsByClassName('inpu')[1];
    var peso = Number.parseFloat(tx1.value);
    var altura = Number.parseFloat(tx2.value);
    var calc = Number.parseInt(peso / (altura * altura));
    var res = window.document.querySelector('div#resposta');
    res.innerText = `${calc}`
}