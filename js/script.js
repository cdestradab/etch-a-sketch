const gridContainer = document.querySelector('.eas-container');

let gridSize = 16;
let brushColor = 'brown';

function createSquare() {
    const newSquare = document.createElement('div');
    // const dimension = '20px';

    newSquare.classList.add('eas-square');
    // newSquare.style.width = dimension;
    // newSquare.style.height = dimension;
    // newSquare.style.border = 'solid purple 1px';

    return newSquare;
}

function buildRow(columns = 10, rowNumber = 1) {
    // let columns = 10;
    const newRow = document.createElement('div');
    
    newRow.classList.add('eas-row');
    // newRow.style.display = 'flex';

    for (let i = 1; i <= columns; i++) {
        const square = createSquare();
        square.id = `c${rowNumber.toString()}-r${i.toString()}`;
        newRow.appendChild(square);
    }

    return newRow;
}

function buildGrid(columns = 10, rows = columns) {
    // let rows = 10;
    const newGrid = document.createElement('div');

    newGrid.classList.add('eas-grid');
    // newGrid.style.display = 'flex';
    // newGrid.style.flexDirection = 'column';

    for (let i = 1; i <= rows; i++) {
        const row = buildRow(columns, i);

        newGrid.appendChild(row);        
    }

    return newGrid;
}

const newGrid = buildGrid(gridSize);
gridContainer.appendChild(newGrid);

// ----------------

paintGrid = function(color = '#0000FF') {
    let grid = document.querySelector('.eas-grid');
    grid.addEventListener('mouseover', function(event) {
        // squareId = event.target.id;
        targetElement = event.target;
        // console.log(targetElement.classList[0])

        if (targetElement.classList[0] === 'eas-square'){
            targetElement.style.backgroundColor = color;
        }
        // console.log(squareId);
    })
}

paintGrid(brushColor);

resizeGrid = function() {
    let btn = document.querySelector('.eas-button');
    btn.addEventListener('click', function() {
        newSize = prompt('What is the new size of the grid?');
        while (newSize > 100 || newSize < 1 || isNaN(newSize)) {
            newSize = prompt('Your input has to be a number from 1 to 100');
        }
        // console.log(newSize);

        gridContainer.innerHTML = "";
        gridContainer.appendChild(buildGrid(newSize))
        paintGrid(brushColor);
    })
}

resizeGrid();