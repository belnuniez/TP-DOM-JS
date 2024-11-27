# Proyecto de Interactividad en el DOM 🌐💻

Este proyecto fue desarrollado como parte de un trabajo práctico de la UTN para poner en práctica habilidades de manipulación del DOM y la interactividad con JavaScript. Se hace uso de eventos de clic, manipulación de clases y temporizadores para lograr una experiencia dinámica para el usuario.

---

## Funcionalidades ✨

### 1. **Botón Claro/Oscuro 🌙☀️**
Este botón permite alternar entre el modo claro y el modo oscuro en la página. Al hacer clic en el botón, la página cambia su estilo, modificando la apariencia del fondo, el texto y el logo de la cabecera.

```javascript
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


// Agrega un evento al botón para que llame a la función al hacer click
botonModo.addEventListener("click", alternarModoOscuroClaro);
```

### 2. **Galería Automática de Imágenes 🖼️**
Una galería de imágenes que cambia automáticamente cada 3 segundos, mostrando una serie de imágenes de fondo en el encabezado (hero).

```javascript
// Arreglo de URLs de las imágenes
const imagenes = [
    '../IMAGENES/imagen-hero.jpg',
    '../IMAGENES/imagen-hero2.png',
    '../IMAGENES/imagen-hero3.png',
    '../IMAGENES/imagen-hero4.png',
    '../IMAGENES/imagen-hero5.png'
];

// Selecciona el elemento del hero
const hero = document.getElementById('hero');

// Índice para rastrear la imagen actual
let indiceActual = 0;

// Función para cambiar la imagen
function cambiarImagen() {
    hero.style.backgroundImage = `url(${imagenes[indiceActual]})`;
    indiceActual = (indiceActual + 1) % imagenes.length; // Ciclo infinito
}

// Cambiar la imagen cada 3 segundos
setInterval(cambiarImagen, 3000);

// Inicializa la primera imagen
cambiarImagen();
```

### 3. **Menú Hamburguesa 🍔**
Este script habilita un menú de navegación que se muestra o se oculta al hacer clic en los botones de abrir y cerrar, brindando una experiencia de navegación móvil fluida.

```javascript
// Selecciona el menú de navegación
const nav = document.querySelector("#nav");

// Selecciona el botón para abrir el menú
const abrir = document.querySelector("#abrir");

// Selecciona el botón para cerrar el menú
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => { // Agrega un evento de clic al botón "abrir"
    nav.classList.add("visible"); // Muestra el menú agregando la clase "visible"
})

cerrar.addEventListener("click", () => { // Agrega un evento de clic al botón "cerrar"
    nav.classList.remove("visible"); // Oculta el menú eliminando la clase "visible"
})
```



