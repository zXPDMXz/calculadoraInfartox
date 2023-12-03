const btnProcessar = document.getElementById('btnProcessar');
btnProcessar.addEventListener('click', atualizarDados);

const textEnter = document.getElementById('inputAmostra');
textEnter.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        atualizarDados();
    }
});

function atualizarDados() {
    let amostraInput = document.querySelector('#inputAmostra');
    let amostra = parseFloat(amostraInput.value);

    let amostraDuplicadas = Math.ceil(amostra * 1.7 * 2);
    document.querySelector('.resultado1_1').innerText = amostraDuplicadas + " amostras";
    let substratoButiril = (amostraDuplicadas * 0.02);
    document.querySelector('.resultado2_1').innerText = substratoButiril.toFixed(1) + " ml";
    document.querySelector('.resultado3_1').innerText = calcularResultado((substratoButiril * 0.04112) / 10) + " g";

    let solucaoSistema = amostraDuplicadas * 0.19;
    document.querySelector('.resultado1_2').innerText = solucaoSistema.toFixed(1) + " ml";
    let proporcaoDTNB = solucaoSistema / 5;
    document.querySelector('.resultado2_2').innerText = proporcaoDTNB.toFixed(1) + " ml";
    let pesarDTNB = (proporcaoDTNB * 3.9635) / 1000;
    document.querySelector('.resultado3_2').innerText = calcularResultado(pesarDTNB) + " g";
    let pesarBicarbonato = (proporcaoDTNB * 0.06) / 200;
    document.querySelector('.resultado4_2').innerText = calcularResultado(pesarBicarbonato) + " g";

    let solucaoZylstra = amostraDuplicadas * 0.1;
    document.querySelector('.resultado1_3').innerText = solucaoZylstra.toFixed(1) + " ml";
    document.querySelector('.resultado2_3').innerText = calcularResultado((solucaoZylstra * 0.2)/100) + " g";
    document.querySelector('.resultado3_3').innerText = calcularResultado((solucaoZylstra * 0.05)/100) + " g";
    document.querySelector('.resultado4_3').innerText = calcularResultado((solucaoZylstra * 0.1)/100) + " g";
}

function calcularResultado(conta) {
    if (conta % 1 !== 0) {
        // Se tiver casas decimais, limita para 5 casas decimais
        conta = conta.toFixed(5);
    }

    return conta;
}