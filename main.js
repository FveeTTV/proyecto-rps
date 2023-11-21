let puntosUsuario = 0;
let puntosPC = 0;


let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuarios");
let contenedorPuntosPC = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elegiTuArma = document.querySelectorAll("#armas");


let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPC = document.querySelector("#eleccion-computadora");


let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});


function iniciarTurno(e){


    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;


    // piedra => 0
    // papel => 1
    // tijera => 2 


    if (eleccionPC === 0) {
        eleccionPC = "piedra🥌";
    } else if (eleccionPC === 1) {
        eleccionPC = "papel🧻";
    } else if (eleccionPC === 2) {
        eleccionPC = "tijeras✂";
    }


    //piedra vence a tijera
    //tijera vence a papel
    //papel vence a piedra
    // si son iguales es empate 


    if (
        (eleccionUsuario === "piedra🥌" && eleccionPC === "tijeras✂")||
        (eleccionUsuario === "tijeras✂" && eleccionPC === "papel🧻")||
        (eleccionUsuario === "papel🧻" && eleccionPC === "piedra🥌")
    ) {
        ganaUsuario();
    } else if (
        (eleccionPC === "piedra🥌" && eleccionUsuario === "tijeras✂")||
        (eleccionPC === "tijeras✂" && eleccionUsuario === "papel🧻")||
        (eleccionPC === "papel🧻" && eleccionUsuario === "piedra🥌")
    ) {
        ganaPC();
    } else {
        empate();
    }


    mensaje.classList.remove("disable");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPC.innerText = eleccionPC;


    if (puntosUsuario === 5 || puntosPC === 5) {


        if (puntosUsuario === 5 ) {
            instrucciones.innerText = " 🔥 ¡Ganaste el juego! 🔥 "
        }


        if (puntosPC === 5) {
            instrucciones.innerText = "😭 ¡La computadora gano el juego! 😭 "
        }


        arma.classList.add("disable");
        reiniciar.classList.remove("disable");
        reiniciar.addEventListener("click", reiniciarJuego);


    }


}


function ganaUsuario() {
        puntosUsuario++;
        contenedorPuntosUsuario.innerText = puntosUsuario;
        contenedorGanaPunto.innerText = "¡Ganaste un Punto! 🔥 "
} 


function ganaPC() {
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorGanaPunto.innerText = "¡La computadora gana un punto! 😭"
}


function empate () {
    contenedorGanaPunto.innerText = "¡Empate! 😱"


}


function reiniciarJuego () {
    reiniciar.classList.add("disable");
    elegiTuArma.classList.remove("disable");
    mensaje.classList.add("disable");


    puntosUsuario = 0; 
    puntosPC = 0; 


    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPC.innerText = puntosPC;


    instrucciones.innerText = "El primero en llegar a 5 puntos gana."


}
