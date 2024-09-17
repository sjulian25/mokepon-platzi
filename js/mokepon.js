const sectionSeleccionarAtaques = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonSeleccionarMascota = document.getElementById("boton-mascota")
const botonAtaqueFuego = document.getElementById("boton-fuego")
const botonAtaqueAgua = document.getElementById("boton-agua")
const botonAtaqueTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const seleccionar = selector => document.getElementById(selector)
const hipodoge = seleccionar("hipodoge")
const capipepo = seleccionar("capipepo")
const ratigueya = seleccionar("ratigueya")
const langostelvis = seleccionar("langostelvis")
const tucapalma = seleccionar("tucapalma")
const pydos = seleccionar("pydos")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaOponente = document.getElementById("mascota-oponente")

const mensajeResultado = document.getElementById("resultado")
const mensajeAtaquesDelJugador = document.getElementById("ataques-del-jugador")
const mensajeAtaquesDelOponente = document.getElementById("ataques-del-oponente")

const sectionMensajes = document.getElementById("resultado")

const spanvidasJugador = document.getElementById("vidas-jugador")
const spanvidasOponente = document.getElementById("vidas-oponente") 

let ataqueJugador
let ataqueOponente
let vidasJugador = 3
let vidasOponente = 3

function seleccionarMascotas(){
    sectionSeleccionarAtaques.style.display = "flex"
    let flagSeleccion = true
    
    if (hipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
        botonAtaqueFuego.disabled = true
        botonAtaqueFuego.style.display = "none"
        botonAtaqueTierra.disabled = true
        botonAtaqueTierra.style.display = "none"
    } else if (capipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
        botonAtaqueFuego.disabled = true
        botonAtaqueFuego.style.display = "none"
        botonAtaqueAgua.disabled = true
        botonAtaqueAgua.style.display = "none"
    } else if (ratigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
        botonAtaqueAgua.disabled = true
        botonAtaqueAgua.style.display = "none"
        botonAtaqueTierra.disabled = true
        botonAtaqueTierra.style.display = "none"
    } else if (langostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
        botonAtaqueTierra.disabled = true
        botonAtaqueTierra.style.display = "none"
    } else if (tucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"
        botonAtaqueFuego.disabled = true
        botonAtaqueFuego.style.display = "none"
    } else if (pydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"
        botonAtaqueAgua.disabled = true
        botonAtaqueAgua.style.display = "none"
    } else {
        alert("Debes seleccionar una mascota")
        flagSeleccion = false
        sectionSeleccionarAtaques.style.display = "none"
    }
    
    if (flagSeleccion == true) {
        seleccionarMascotaOponente()
    }
}

function seleccionarMascotaOponente(){
    sectionSeleccionarMascota.style.display = "none"
    let mascotaAleatoria = aleatorio(1,6)
    
    if (mascotaAleatoria == 1) {
        spanMascotaOponente.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2) {
        spanMascotaOponente.innerHTML = "Capipepo"
    } else if (mascotaAleatoria == 3) {
        spanMascotaOponente.innerHTML = "Ratigueya"
    } else if (mascotaAleatoria == 4) {
        spanMascotaOponente.innerHTML = "Langostelvis"
    } else if (mascotaAleatoria == 5) {
        spanMascotaOponente.innerHTML = "Tucapalma"
    } else if (mascotaAleatoria == 6) {
        spanMascotaOponente.innerHTML = "Pydos"
    }
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioOponente()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioOponente()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioOponente()
}

function ataqueAleatorioOponente(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueOponente = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueOponente = "AGUA"
    } else if (ataqueAleatorio == 3) {
        ataqueOponente = "TIERRA"
    }

    combate()
}

function crearMensajes(resultadoCombate){
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelOponente = document.createElement("p")

    mensajeResultado.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelOponente.innerHTML = ataqueOponente

    mensajeAtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    mensajeAtaquesDelOponente.appendChild(nuevoAtaqueDelOponente)
}

function mensajesJuegoTerminado(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = "block"
    botonAtaqueFuego.disabled = true
    botonAtaqueAgua.disabled = true
    botonAtaqueTierra.disabled = true
}

function combate(){
    if (ataqueJugador == ataqueOponente) {
        crearMensajes("Empate")
    } else if ((ataqueJugador == "FUEGO" && ataqueOponente == "TIERRA") || (ataqueJugador == "AGUA" && ataqueOponente == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueOponente == "AGUA")) {
        crearMensajes("Ganaste este combate")
        vidasOponente--
        spanvidasOponente.innerHTML = vidasOponente
    } else {
        crearMensajes("Perdiste este combate")
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasJugador == 0) {
        mensajesJuegoTerminado("Te quedaste sin vidas! Perdiste :(")
    } else if (vidasOponente == 0) {
        mensajesJuegoTerminado("Felicidades!, derrotaste al oponente :)")
    }
}

function reiniciarJuego(){
    location.reload()
}

function iniciarJuego(){
    sectionSeleccionarAtaques.style.display = "none"
    sectionReiniciar.style.display = "none"
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotas)
    botonAtaqueFuego.addEventListener("click", ataqueFuego)
    botonAtaqueAgua.addEventListener("click", ataqueAgua)
    botonAtaqueTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

window.addEventListener("load", iniciarJuego)