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

// const newSquare = createSquare();
// const otherSquare = createSquare();

// gridContainer.appendChild(newSquare);
// gridContainer.appendChild(otherSquare);

function buildRow(rowNumber = 1) {
    let columns = 10;
    const newRow = document.createElement('div');
    
    newRow.classList.add('eas-row');
    newRow.style.display = 'flex';

    for (let i = 1; i <= columns; i++) {
        const square = createSquare();
        square.id = `c${rowNumber.toString()}-r${i.toString()}`;
        newRow.appendChild(square);
    }

    return newRow;
}

// const newRow = buildRow();
// gridContainer.appendChild(newRow);

function buildGrid() {
    let rows = 10;
    const newGrid = document.createElement('div');

    newGrid.classList.add('eas-grid');
    newGrid.style.display = 'flex';
    newGrid.style.flexDirection = 'column';

    for (let i = 1; i <= rows; i++) {
        const row = buildRow(i);

        newGrid.appendChild(row);        
    }

    return newGrid;
}

const newGrid = buildGrid();
gridContainer.appendChild(newGrid);