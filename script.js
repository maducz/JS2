// Função para calcular a soma de dois números
function soma(a, b) {
    return a + b;
}

// Função para ser chamada ao clicar no botão "Somar"
function somando() {
    // Obtém os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    
    // Calcula a soma usando a função 'soma'
    let resultado = soma(num1, num2);

    // Exibe o resultado na página HTML
    document.getElementById('receptor').innerHTML = 'Resultado da soma: ' + resultado;
}

// Função para calcular a soma de dois números
function sub(a, b) {
    return a - b;
}

// Função para ser chamada ao clicar no botão "Somar"
function subtraindo() {
    // Obtém os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    
    // Calcula a sub usando a função 'sub'
    let resultado = sub(num1, num2);

    // Exibe o resultado na página HTML
    document.getElementById('receptor').innerHTML = 'Resultado da subtração: ' + resultado;
}

// Função para calcular a multiplicação de dois números
function mult(a, b) {
    return a * b;
}

// Função para ser chamada ao clicar no botão "Somar"
function multiplicando() {
    // Obtém os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    
    // Calcula a mult usando a função 'mult'
    let resultado = mult(num1, num2);

    // Exibe o resultado na página HTML
    document.getElementById('receptor').innerHTML = 'Resultado da multiplicação: ' + resultado;
}

// Função para calcular a soma de dois números
function div(a, b) {
    return a / b;
}

// Função para ser chamada ao clicar no botão "Somar"
function dividindo() {
    // Obtém os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    
    // Calcula a sub usando a função 'sub'
    let resultado = div(num1, num2);

    // Exibe o resultado na página HTML
    document.getElementById('receptor').innerHTML = 'Resultado da subtração: ' + resultado;
}