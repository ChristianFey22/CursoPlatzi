let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener('click', ataquePlanta)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputSquirtul = document.getElementById("squirtul")
    let inputCharmander = document.getElementById("charmander")
    let inputBulbasor = document.getElementById("bulbasor")
    let spamMascotaJugador = document.getElementById("mascota-jugador")

    if (inputSquirtul.checked) {
       spamMascotaJugador.innerHTML = "Squirtul"
    } else if (inputCharmander.checked) {
        spamMascotaJugador.innerHTML = "Charmander"
    } else if (inputBulbasor.checked) {
        spamMascotaJugador.innerHTML = "Bulbasor"
    } else {
        alert('Debes seleccionar unas mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spamMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio == 1) {
        spamMascotaEnemigo.innerHTML = "Squirtul"
    } else if (mascotaAleatorio == 2) {
        spamMascotaEnemigo.innerHTML = "Charmander"
    } else {
        spamMascotaEnemigo.innerHTML = "Bulbasor"
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataquePlanta() {
    ataqueJugador = 'PLANTA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "PLANTA"
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0) {
        crearMensajeFinal("GANASTE!")
    } else if ( vidasJugador == 0) {
        crearMensajeFinal("PERDISTE")
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' , la mascota del enemigo atacó con ' + ataqueEnemigo + '- ' + resultado
    
    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}    

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load' , iniciarJuego)