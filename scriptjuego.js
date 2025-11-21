// Crear las divisiones para las piezas del juego 
document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const movesDisplay = document.getElementById('moves');
    let moves = 0;
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    let matchedPairs = 0;
    const totalPairs = 10; // 20 piezas = 10 pares

    // Los símbolos o imágenes para los pares (pueden ser emojis, letras o referencias a imágenes)
    const cardSymbols = [
        '🍎', '🍌', '🍓', '🍇', '🍉', '🍍', '🥭', '🍑', '🍒','🥝'
    ];
    // Duplicar los símbolos para crear los pares
    let cards = [...cardSymbols, ...cardSymbols];

    // Función para mezclar las cartas (algoritmo Fisher-Yates shuffle)
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Función para crear el tablero
    function createBoard() {
        shuffle(cards);
        cards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.symbol = symbol; // Usar data attribute para el símbolo
            card.dataset.index = index; // Usar data attribute para el índice

            const cardFront = document.createElement('div');
            cardFront.classList.add('card-face', 'card-front');

            const cardBack = document.createElement('div');
            cardBack.classList.add('card-face', 'card-back');
            cardBack.textContent = symbol; // Mostrar el símbolo en la cara trasera

            card.appendChild(cardFront);
            card.appendChild(cardBack);
            card.addEventListener('click', flipCard);
            gameContainer.appendChild(card);
        });
    }

    // Función para voltear una carta
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return; // Evita hacer clic en la misma carta dos veces

        this.classList.add('flip');

        if (!hasFlippedCard) {
            // Primer clic
            hasFlippedCard = true;
            firstCard = this;
            return;
        }

        // Segundo clic
        secondCard = this;
        moves++;
        movesDisplay.textContent = moves;
        checkForMatch();
    }

    // Función para verificar si hay coincidencia
    function checkForMatch() {
        let isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;

        isMatch ? disableCards() : unflipCards();
    }

    // Función para deshabilitar las cartas si coinciden
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        
        // Opcional: añadir clase para estilos de match
        firstCard.classList.add('match');
        secondCard.classList.add('match');

        matchedPairs++;
        if (matchedPairs === totalPairs) {
            setTimeout(() => {
                alert(`¡Ganaste en ${moves} movimientos!`);
                // Aquí podrías añadir una función para reiniciar el juego
            }, 500);
        }

        resetBoard();
    }

    // Función para voltear las cartas de nuevo si no coinciden
    function unflipCards() {
        lockBoard = true; // Bloquear el tablero temporalmente

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 1500); // Esperar 1.5 segundos antes de voltear de nuevo
    }

    // Función para reiniciar las variables de las cartas seleccionadas
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    // Inicializar el juego
    createBoard();
});



// Crear arreglo con los iconos

// crear arreglo para tener dos piezas de cada uno.
// mezclar las piezas
// responder al click: girar la pieza y si es la segunda y coincide, dejar volteada.(queda visible)
// si es la segunda y no coincide, volver a voltear (que quede oculta)
// Cuando la cantidad de piezas volveadas en 36, termino el juego.