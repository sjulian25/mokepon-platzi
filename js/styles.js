function cargarImagenesMokepones() {
    // Selecciona todos los labels con la clase tarjetas-personajes
    const labels = document.querySelectorAll('.tarjeta-de-mokepon');
    
    // Selecciona el div para mostrar la imagen seleccionada
    const imagenSeleccionadaDiv = document.getElementById('imagen-seleccionada');
    
    // Agrega un listener de click a cada label
    labels.forEach(label => {
      label.addEventListener('click', () => {
        // Muestra el div
        imagenSeleccionadaDiv.style.display = "block";
        // Selecciona el input correspondiente al label
        const input = label.querySelector('input');
        // Selecciona el span con el nombre del personaje
        const personajeNombre = label.querySelector('span').textContent;
        // Selecciona la imagen correspondiente al personaje
        const imagenSrc = `./assets/mokepones/${personajeNombre}.png`;
    
        // Deslecciona los otros personajes
        labels.forEach(otherLabel => {
          if (otherLabel !== label) {
            otherLabel.querySelector('input').checked = false;
          }
        });
    
        // Muestra la imagen seleccionada
        imagenSeleccionadaDiv.innerHTML = `<img src="${imagenSrc}" alt="${personajeNombre}">`;
      });
    });

}

window.addEventListener("load", cargarImagenesMokepones)