// Selecciona el botón del modo y el cuerpo de la página
const botonModo = document.getElementById("boton-modo");
const cuerpoPagina = document.body;

// Selecciona el logo en el header
const logoHeader = document.getElementById("logo-header");

// Función para alternar entre modos
function alternarModoOscuroClaro() {
  
  // Cambia la clase del cuerpo para aplicar estilos del modo oscuro
  cuerpoPagina.classList.toggle("modo-oscuro");

  // Actualiza el texto del botón según el modo actual
  if (cuerpoPagina.classList.contains("modo-oscuro")) {
    botonModo.textContent = "☀️"; // Sol para modo claro
    botonModo.classList.add("modo-oscuro");

    // Cambiar logo a modo oscuro
    logoHeader.src = "imagenes/footer-logo.png"; // Logo para modo oscuro

  } else {
    botonModo.textContent = "🌙"; // Luna para modo oscuro
    botonModo.classList.remove("modo-oscuro");

    // Cambiar logo a modo claro
    logoHeader.src = "imagenes/imagen-logo.png"; // Logo para modo claro
  }
}

// Agrega un evento al botón para que llame a la función al hacer click
botonModo.addEventListener("click", alternarModoOscuroClaro);
