// ==========================================
// EXERCÍCIO A: Celsius -> Fahrenheit
// ==========================================
function L01A() {
    let c = Number(prompt("Digite a temperatura em Celsius:"));
    let f = (9 * c + 160) / 5;
    alert(`O resultado é ${f}°F`);
}

// ==========================================
// EXERCÍCIO B: Fahrenheit -> Celsius
// ==========================================
function L01B() {
    let f = Number(prompt("Digite a temperatura em Fahrenheit:"));
    let c = (f - 32) * (5 / 9);
    alert(`O resultado é ${c.toFixed(2)}°C`);
}

// ==========================================
// EXERCÍCIO C: Volume da lata de óleo
// ==========================================
function L01C() {
    let raio = Number(prompt("Digite o raio:"));
    let altura = Number(prompt("Digite a altura:"));
    let volume = Math.PI * (raio ** 2) * altura;
    alert(`O volume da lata é ${volume.toFixed(2)}`);
}

// ==========================================
// EXERCÍCIO D: Viagem (Tempo e Velocidade)
// ==========================================
function L01D() {
    let tempo = Number(prompt("Digite o tempo gasto (horas):"));
    let vel = Number(prompt("Digite a velocidade média:"));
    let dist = tempo * vel;
    let litros = dist / 12;
    alert(`Velocidade: ${vel}km/h \nTempo: ${tempo}h \nDistância: ${dist}km \nCombustível: ${litros.toFixed(2)}L`);
}


// ==========================================
// EXERCÍCIO E: Prestação em atraso
// ==========================================
function L01E() {
    let valor = Number(prompt("Valor da prestação:"));
    let taxa = Number(prompt("Taxa (%):"));
    let tempo = Number(prompt("Tempo (meses):"));
    let prestacao = valor + (valor * taxa / 100) * tempo;
    alert(`O valor atualizado da prestação é R$ ${prestacao.toFixed(2)}`);
}

// ==========================================
// EXERCÍCIO F: Troca de valores
// ==========================================
function L01F() {
    let a = prompt("Digite o valor de A:");
    let b = prompt("Digite o valor de B:");
    let temp = a;
    a = b;
    b = temp;
    alert(`Valores trocados: \nA agora é: ${a} \nB agora é: ${b}`);
}

// ==========================================
// EXERCÍCIO G: Propriedade Distributiva
// ==========================================
function L01G() {
    let a = Number(prompt("Valor A:"));
    let b = Number(prompt("Valor B:"));
    let c = Number(prompt("Valor C:"));
    let d = Number(prompt("Valor D:"));
    
    let resSoma = `Somas:\nA+B=${a+b}, A+C=${a+c}, A+D=${a+d}\nB+C=${b+c}, B+D=${b+d}, C+D=${c+d}`;
    let resMult = `Multiplicações:\nA*B=${a*b}, A*C=${a*c}, A*D=${a*d}\nB*C=${b*c}, B*D=${b*d}, C*D=${c*d}`;
    
    alert(resSoma + "\n\n" + resMult);
}
// ==========================================
// EXERCÍCIO H: Volume da Caixa Retangular
// ==========================================
function L01H() {
    let comp = Number(prompt("Comprimento:"));
    let larg = Number(prompt("Largura:"));
    let alt = Number(prompt("Altura:"));
    alert(`O volume da caixa é ${comp * larg * alt}`);
}

// ==========================================
// EXERCÍCIO I: Quadrado da Diferença (A - B)²
// ==========================================
function L01I() {
    let a = Number(prompt("Valor A:"));
    let b = Number(prompt("Valor B:"));
    alert(`O quadrado da diferença é ${(a - b) ** 2}`);
}

// ==========================================
// EXERCÍCIO J: Dólar para Real (Multiplica)
// ==========================================
function L01J() {
    let cotacao = Number(prompt("Cotação do Dólar:"));
    let dolares = Number(prompt("Quantidade de Dólares:"));
    alert(`Valor em Reais: R$ ${(dolares * cotacao).toFixed(2)}`);
}

// ==========================================
// EXERCÍCIO K: Real para Dólar (Divide)
// ==========================================
function L01K() {
    let cotacao = Number(prompt("Cotação do Dólar:"));
    let reais = Number(prompt("Quantidade de Reais:"));
    alert(`Valor em Dólares: US$ ${(reais / cotacao).toFixed(2)}`);
}

// ==========================================
// EXERCÍCIO L: Soma dos Quadrados (A² + B² + C²)
// ==========================================
function L01L() {
    let a = Number(prompt("Valor 1:"));
    let b = Number(prompt("Valor 2:"));
    let c = Number(prompt("Valor 3:"));
    alert(`A soma dos quadrados é: ${(a**2) + (b**2) + (c**2)}`);
}

// ==========================================
// EXERCÍCIO M: Quadrado da Soma (A + B + C)²
// ==========================================
function L01M() {
    let a = Number(prompt("Valor 1:"));
    let b = Number(prompt("Valor 2:"));
    let c = Number(prompt("Valor 3:"));
    alert(`O quadrado da soma é: ${(a + b + c) ** 2}`);
}