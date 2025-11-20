// Crear las divisiones para las piezas del juego 
const gridtablero = document.querySelector('.tablero');  // Selecciona el contenedor de la cuadrícula
const totalPiezas = 36;  // El número total de celdas (6 * 6 = 36)
// Bucle para crear las celdas
for (let i = 1; i <= totalPiezas; i++) {    
    const cell = document.createElement('div');// Crea un nuevo elemento div  
    cell.classList.add('pieza');// Le añade la clase CSS para que tome los estilos   
    cell.textContent = i;// Un número como contenido de texto   
    gridtablero.appendChild(cell);// Añade el nuevo div al contenedor principal en el HTML
}
//'🍎', '🍌', '🍇', '🍊', '🍓', '🍉', '🍍', '🥝', '🥭', '🍑', '🍒', '🥥', '🍈', '🍐', '🍋', '🍆', '🥑', '🥦'
// Crear arreglo con los iconos
// crear arreglo para tener dos piezas de cada uno.
// mezclar las piezas
// responder al click: girar la pieza y si es la segunda y coincide, dejar volteada.(queda visible)
// si es la segunda y no coincide, volver a voltear (que quede oculta)
// Cuando la cantidad de piezas volveadas en 36, termino el juego.