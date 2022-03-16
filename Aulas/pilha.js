var elementos = [];
var topo = -1;
const MAX = 10

//Pilha o primeiro que sai é o ulitmo a sair

function push(num){ //Adciona os numeros em pilha
    if (topo < MAX){
        topo = topo + 1;
        elementos[topo] = num;
    }
    else{
        console.log("Pilha esta cheia");
    }
}

function pop(){ // Remove: O ultimo que entrou, sai
    if(topo != -1){
    let num = elementos[topo];
    topo = topo - 1;
    return num;
    }
    else{
        console.log("Pilha esta vazia");
    }

}