let ataqueJugador
let ataqueOponente
let vidasJugador = 3
let vidasOponente = 3

function seleccionarMascotas(){
    let botonAtaqueFuego = document.getElementById("boton-fuego")
    let botonAtaqueAgua = document.getElementById("boton-agua")
    let botonAtaqueTierra = document.getElementById("boton-tierra")
    let sectionSeleccionarAtaques = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaques.style.display = "flex"
    const seleccionar = selector => document.getElementById(selector)
    let flagSeleccion = true
    let hipodoge = seleccionar("hipodoge")
    let capipepo = seleccionar("capipepo")
    let ratigueya = seleccionar("ratigueya")
    let langostelvis = seleccionar("langostelvis")
    let tucapalma = seleccionar("tucapalma")
    let pydos = seleccionar("pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    
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
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    let spanMascotaOponente = document.getElementById("mascota-oponente")
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
    let mensajeResultado = document.getElementById("resultado")
    let mensajeAtaquesDelJugador = document.getElementById("ataques-del-jugador")
    let mensajeAtaquesDelOponente = document.getElementById("ataques-del-oponente")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelOponente = document.createElement("p")

    mensajeResultado.innerHTML = resultadoCombate
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelOponente.innerHTML = ataqueOponente

    mensajeAtaquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    mensajeAtaquesDelOponente.appendChild(nuevoAtaqueDelOponente)
}

function mensajesJuegoTerminado(resultadoFinal){
    let sectionMensajes = document.getElementById("resultado")
    let botonAtaqueFuego = document.getElementById("boton-fuego")
    let botonAtaqueAgua = document.getElementById("boton-agua")
    let botonAtaqueTierra = document.getElementById("boton-tierra")
    let sectionReiniciar = document.getElementById("reiniciar")


    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = "block"
    botonAtaqueFuego.disabled = true
    botonAtaqueAgua.disabled = true
    botonAtaqueTierra.disabled = true
}

function combate(){
    let spanvidasJugador = document.getElementById("vidas-jugador")
    let spanvidasOponente = document.getElementById("vidas-oponente") 

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
    let sectionSeleccionarAtaques = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaques.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonSeleccionarMascota = document.getElementById("boton-mascota")
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotas)

    let botonAtaqueFuego = document.getElementById("boton-fuego")
    botonAtaqueFuego.addEventListener("click", ataqueFuego)

    let botonAtaqueAgua = document.getElementById("boton-agua")
    botonAtaqueAgua.addEventListener("click", ataqueAgua)

    let botonAtaqueTierra = document.getElementById("boton-tierra")
    botonAtaqueTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

window.addEventListener("load", iniciarJuego)