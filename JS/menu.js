// Selecciona el menú de navegación
const nav = document.querySelector("#nav");

// Selecciona el botón para abrir el menú
const abrir = document.querySelector ("#abrir");

// Selecciona el botón para cerrar el menú
const cerrar = document.querySelector ("#cerrar");


abrir.addEventListener("click", () => { // Agrega un evento de clic al botón "abrir"
    nav.classList.add("visible"); // Muestra el menú agregando la clase "visible"
})

cerrar.addEventListener("click", () => { // Agrega un evento de clic al botón "cerrar"
    nav.classList.remove("visible"); // Oculta el menú eliminando la clase "visible"
})