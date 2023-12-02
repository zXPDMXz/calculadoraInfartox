const btnProcessar = document.getElementById('btnProcessar');
btnProcessar.addEventListener('click', atualizarDados);

const textEnter = document.getElementById('inputAmostra');
textEnter.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        atualizarDados();
    }
});

function atualizarDados() {
    let amostraInput = document.querySelector('#inputAmostra');
    let amostra = parseFloat(amostraInput.value);

    let amostraDuplicadas = Math.ceil(amostra * 1.7 * 2);
    document.querySelector('.resultado1_1').innerText = amostraDuplicadas;
    let substratoButiril = (amostraDuplicadas * 0.03);
    document.querySelector('.resultado2_1').innerText = substratoButiril.toFixed(5);
    document.querySelector('.resultado3_1').innerText = ((substratoButiril * 0.063) / 25).toFixed(5);

    let solucaoSistema = amostraDuplicadas * 0.15;
    document.querySelector('.resultado1_2').innerText = solucaoSistema.toFixed(5);
    document.querySelector('.resultado2_2').innerText = (solucaoSistema / 5).toFixed(5);
    let pesarDTNB = (solucaoSistema * 0.396) / 200;
    document.querySelector('.resultado3_2').innerText = pesarDTNB.toFixed(5);
    let pesarBicarbonato = (solucaoSistema * 0.06) / 200;
    document.querySelector('.resultado4_2').innerText = pesarBicarbonato.toFixed(5);
}