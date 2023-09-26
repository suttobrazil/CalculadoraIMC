document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('imc-form');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const alturaM = parseFloat(document.getElementById('altura').value);
        const pesoKG = parseFloat(document.getElementById('peso').value);

        if (isNaN(alturaM) || isNaN(pesoKG)) {
            resultadoDiv.textContent = 'Por favor, insira valores válidos para altura e peso.';
        } else {
            const IMC = pesoKG / (alturaM * alturaM);

            if (IMC < 18.5) {
                resultadoDiv.textContent = `Seu IMC é ${IMC.toFixed(2)}. Você está abaixo do peso.`;
            } else if (IMC >= 18.5 && IMC <= 24.9) {
                resultadoDiv.textContent = `Seu IMC é ${IMC.toFixed(2)}. Você está com o peso normal.`;
            } else if (IMC >= 25 && IMC <= 29.9) {
                resultadoDiv.textContent = `Seu IMC é ${IMC.toFixed(2)}. Você está com sobrepeso.`;
            } else if (IMC >= 30 && IMC <= 34.9) {
                resultadoDiv.textContent = `Seu IMC é ${IMC.toFixed(2)}. Você está obeso.`;
            } else if (IMC >= 35 && IMC <= 39.9) {
                resultadoDiv.textContent = `Seu IMC é ${IMC.toFixed(2)}. Você está com obesidade grau II.`;
            } else {
                resultadoDiv.textContent = `Seu IMC é ${IMC.toFixed(2)}. Você está com obesidade grau III.`;
            }
        }
    });
});
