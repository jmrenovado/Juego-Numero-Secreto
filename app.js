

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';
let numeroSecreto = 0;
let intetos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

function verificarIntento() {
    // verifica los intentos del usuario
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    
    
    
    if (numeroDeUsuario === numeroSecreto){
        // si el usuario acerta
        asignarTextoElemento('p',`Acertaste el número en ${intetos} ${(intetos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto.

        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número secreto es menor');  
        }
        else {
        asignarTextoElemento('p','El número secreto es mayor');

        }
        intetos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja() {
    // limpia la caja
    document.querySelector('#valorDeUsuario').value = '';
    
}

function generarNumeroSecreto() {
    // genera un numero aleatorio
    let numeroGenerado =  Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado)
    console.log(listaNumeroSorteados)
    // si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else {

    }

    // si el numero generado esta en la lista 
    if (listaNumeroSorteados.includes(numeroGenerado)) {
       return generarNumeroSecreto();

    } else {
        listaNumeroSorteados.push(numeroGenerado)
        return numeroGenerado;
    } 
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego Del Número Secreto!');
    asignarTextoElemento('p',`Indique un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intetos = 1;

}


function reiniciarJuego() {
    // reinicia el juego
    limpiarCaja();
    // indicar mensaje de intentos 
    // generar el numero nuevo
    // deshabilitar el boton del juego 
    //iniciar el numero de intentos 
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();