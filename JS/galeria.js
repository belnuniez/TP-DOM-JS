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
