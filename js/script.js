const gridContainer = document.querySelector('.eas-container');

let gridSize = 16;

function createSquare() {
    const newSquare = document.createElement('div');
    const dimension = '20px';

    newSquare.classList.add('eas-square');
    newSquare.style.width = dimension;
    newSquare.style.height = dimension;
    newSquare.style.border = 'solid purple 1px';

    return newSquare;
}

const newSquare = createSquare();
const otherSquare = createSquare();

gridContainer.appendChild(newSquare);
gridContainer.appendChild(otherSquare);