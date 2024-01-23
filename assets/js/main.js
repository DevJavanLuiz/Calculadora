function criaCalculadora() {
    return {
        display: document.querySelector('.result-calc'),
        clearAll: document.querySelector('.clear'),

        inicia() {
            this.cliqueBotoes();
        },

        realizaConta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta){
                    alert('Valores Inválidos!');    
                    return;
                }
                this.display.value = conta;
            }catch(e){
                alert('Valores Inválidos!');
                return;
          }
        },

        clearDisplay(){
            this.display.value = ''
        },

        deleteOneDisplay(){
            this.display.value = this.display.value.slice(0, -1);
        },


        cliqueBotoes() {
            document.addEventListener('click', (event) => {
                const element = event.target;

                if(element.classList.contains('number')){
                    this.enviarResultDisplay(element.innerText);
                }
                if(element.classList.contains('clear')){
                    this.clearDisplay();
                }
                if(element.classList.contains('delete')){
                    this.deleteOneDisplay();
                }
                if(element.classList.contains('envia')){
                    this.realizaConta();
                }
            });
        },

        enviarResultDisplay(valor){
            this.display.value += valor;
        },

    }
}

const calculadora = criaCalculadora();
calculadora.inicia();