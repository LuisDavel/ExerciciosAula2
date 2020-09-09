window.alert('Bem-vindo a calculadora em JavaScript!');

var opcao = parseInt(window.prompt('Calculadora! \n\nDigite a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Potencia\nOpção:'));

var numero1 = parseFloat(window.prompt('Digite um numero:'));
var numero2 = parseFloat(window.prompt('Digite um numero:'));

var resultado;

switch(opcao){
    case 1:
        resultado = numero1 + numero2;
        window.alert('Resultado:' + resultado)
        break;

    case 2:
        resultado = numero1 - numero2;
        window.alert('Resultado:' + resultado)
        break;

    case 3:
        resultado = numero1 * numero2;
        window.alert('Resultado:' + resultado)
        break;

    case 4:
        resultado = numero1/ numero2;
        window.alert('Resultado:' + resultado)
        break;

    case 5:
        resultado = Math.pow(numero1, numero2) ;
        window.alert('Resultado:' + resultado)
        break;
        
    default:
        window.alert('Opção inválida!"');
}