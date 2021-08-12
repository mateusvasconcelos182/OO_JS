/* Primeira coisa a fazer é a classe */
class Calculator{

    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }
    //Adicionando metodos

    clearValues(){
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
    }

    checkLastDigit(input, upperValue, reg){
        if((!reg.test(input) && !reg.test(upperValue.substr(upperValue.length - 1)))){
            return true;
        } else {
            return false;
        }
        
    }
    // método de some
    sum(n1, n2){
        return parseFloat(n1) + parseFloat(n2)
    }

    // método de subtração
    subtraction(n1, n2){
        return parseFloat(n1) - parseFloat(n2)
    }

    // método de divisão
    division(n1,n2){
        return parseFloat(n1) / parseFloat(n2)
    }

    // método de multiplicação
    multiplication(n1, n2){
        return parseFloat(n1) * parseFloat(n2)
    }

    // atualiza valores
    refreshValues(total){
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
    }

    // resolve a operação
    resolution() {
        // explode uma string em um array
        let upperValueArray = (this.upperValue.textContent).split(" ");
        //resultado da operação
        let result = 0

        for(let i = 0; i <= upperValueArray.length; i++){

            let operation = 0;
            let actualItem = upperValueArray[i];

            // faz a multiplicação
            if(actualItem == "*"){
                result = calc.multiplication(upperValueArray[i - 1], upperValueArray[i + 1]);
                operation = 1;
            // faz a divisão
            } else if(actualItem == "/"){
                result = calc.division(upperValueArray[i - 1], upperValueArray[i + 1]);
                operation = 1;
            // checa se o array ainda tem multiplicação e divisão a ser feita
            } else if(!upperValueArray.includes('*') && !upperValueArray.includes('/')){
                //soma e subtração
                if(actualItem == "+"){
                    result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);
                    operation = 1;
                } else if(actualItem == "-" ){
                    result = calc.subtraction(upperValueArray[i - 1], upperValueArray[i + 1]);
                    operation = 1;
                }
        
            }

            // atualiza valores do array para proxima iteração
            if(operation) {
                // indice anterior no resultado da operação
                upperValueArray[i - 1] = result;
                // remove os itens já utilizados para a operação
                upperValueArray.splice(i,2);
                // atualizar o valor do índice
                i = 0;
            }


        }

        if(result){
            calc.reset = 1;
        }
        // atualizar os totais
         calc.refreshValues(result);
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        // verificar se tem só números
        var reg = new RegExp('^\\d+$');
        
        // se precisar resetar, limpa o display
        if(calc.reset && reg.test(input)){
            upperValue = '0';
        }
        // limpa a prop de reset
        calc.reset = 0;

        // ativa método de limpar o display
        if(input == 'AC') {
            calc.clearValues();
        
        } else if(input == "="){

            calc.resolution();

        } else {
        // Checa se precisa adicionar ou não
            if(calc.checkLastDigit(input, upperValue, reg)){
                return false;
            }
            // Adiciona espaços aos operadores
            if(!reg.test(input)){
                input = ` ${input} `;
            }

            //colocar numero no display
            if (upperValue == "0") {
                if(reg.test(input)){
                calc.upperValue.textContent = input;
                }
            } else {
                calc.upperValue.textContent += input;
            }
        }

    }

}


//start obj
let calc = new Calculator;

// Start buttons
let buttons = document.querySelectorAll('.btn');
// Mapear todos os botões
for(let i = 0; buttons.length > 1; i++){
    buttons[i].addEventListener('click', calc.btnPress);
}
