var a = window.document.querySelector("input#envio");
a.addEventListener("click", imc);

var calc;
var detal = window.document.querySelector("p#detalhes");


function imc() {
    var tx1 = window.document.getElementsByClassName("inpu")[0];
    var tx2 = window.document.getElementsByClassName("inpu")[1];
    var peso = Number.parseFloat(tx1.value);
    var altura = Number.parseFloat(tx2.value);
    calc = Number.parseFloat(peso / (altura * altura));
    calc_arre = parseFloat(calc.toFixed(2));
    var res = window.document.querySelector("div#resposta");
    res.innerText = `${calc_arre} Kg/m2`;
    detalhe();
}

function detalhe() {
    if (calc > 25 && calc < 29.9) {
        detal.innerHTML = "<h4>sobrepeso</h4><p>excesso de peso, melhore sua alimentação!</p>";
    }
    if (calc > 30 && calc < 34.1) {
        detal.innerHTML = "<h4>obesidade grau I</h4><p>muito peso, é necessário praticar exercicios!</p>";

    }
    if (calc > 35 && calc < 39.9) {
        detal.innerHTML = "<h4>obesidade grau II</h4><p>muito peso, procure um nutricionista</p>";

    }
    if (calc > 40) {
        detal.innerHTML = "<h4>obesidade grau III<h4> <p>obesidade morbida, busque tratamento</p>";

    }

    if (calc < 25 && calc > 18) {
        detal.innerHTML = "<h4>saudável</h4> <p> você está com o peso perfeito, agora é necessário manter, busque uma alimentação saudável.</p>";
    }
    if (calc < 18 && calc > 16) {
        detal.innerHTML = "Magreza";
    }

    if (calc < 16) {
        detal.innerHTML = "Magreza extrema";
    }
}

function como() {
    alert("digite a seu peso em kg e seu tamanho em metros para calcular seu IMC")
}