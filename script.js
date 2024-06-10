document.getElementById("formFactorial").addEventListener("submit", function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById("numero").value);
    const factorial = calcularFactorial(numero);
    document.getElementById("resultado").innerText = "El factorial de " + numero + " es: " + factorial;
});

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
