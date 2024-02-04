function RGBRandomizer() {
    let randomByte;
    let newRGB = "rgb("
    for (let i = 0; i < 3; i++) {
        randomByte = Math.floor(Math.random()*256);
        newRGB = newRGB + randomByte.toString() + ", ";
    }
    newRGB = newRGB.slice(0, -2) + ")";
    return newRGB;
}

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



// ----------------

const paintGrid = function(color = '#0000FF', random = false) {
    let grid = document.querySelector('.eas-grid');
    
    grid.addEventListener('mouseover', function(event) {
        if (random === true) {
            color = RGBRandomizer();
        }
        
        targetElement = event.target;

        if (targetElement.classList[0] === 'eas-square'){
            targetElement.style.backgroundColor = color;
        }

    })
}



const resizeGrid = function() {
    let btn = document.querySelector('.eas-button');
    btn.addEventListener('click', function() {
        newSize = prompt('What is the new size of the grid?');
        while (newSize > 100 || newSize < 1 || isNaN(newSize)) {
            newSize = prompt('Your input has to be a number from 1 to 100');
        }

        gridContainer.innerHTML = "";
        gridContainer.appendChild(buildGrid(newSize))
        const newColor = RGBRandomizer();
        paintGrid(newColor);
    })
}



// --------------- BUILDER
let gridSize = 16;
let brushColor = 'brown';
let randomActive = false;
let transparencyActive = false;

const gridContainer = document.querySelector('.eas-container');
const newGrid = buildGrid(gridSize);
gridContainer.appendChild(newGrid);

paintGrid(brushColor, randomActive);

resizeGrid();
// ---------------- EVENTS

const selectionColorRandomizer = document.querySelector('#colorRandomizer');
selectionColorRandomizer.addEventListener('click', function(e) {
    randomActive = e.target.checked;
    paintGrid(brushColor, randomActive);
})

const squareHovered = document.querySelector('.eas-container');
squareHovered.addEventListener('mouseout', function(event) {        
    targetElement = event.target;

    if (targetElement.classList[0] === 'eas-square'){
        brushColor = targetElement.style.backgroundColor;
        console.log(brushColor)
    }
})
