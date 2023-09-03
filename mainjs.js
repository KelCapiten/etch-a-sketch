function grid(width = "5px", numberOfIterations = 4686) {
    let grid = drawGrid();
    
    grid.addEventListener('mouseover', e => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
    if (e.target.classList.contains('grid')) {

    } else {
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
})
}

function drawGrid(width = 10, gridWidth = 500, numberOfIterations = 50*50) {
    let grid = document.createElement("div");
    grid.classList.add('grid');
    let container = document.querySelector(".gridContainer");

    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";
    grid.style.width = `${gridWidth}px`;

    for (let i = 1; i <= numberOfIterations; i++) {
        let box = document.createElement("div");
        box.style.width = `${width}px`;
        box.style.height = `${width}px`;
        grid.appendChild(box);
    }
    container.appendChild(grid);
    return grid;
}

function changeGrid() {
    let userInputField = document.querySelector(".setGrid");
    let userInput = userInputField.value;
    let boxWidth = 500/userInput;
    let numberOfIterations = userInput*userInput;
    let gridWidth = (boxWidth*userInput)
    let container = document.querySelector(".gridContainer");
    let gridElement = document.querySelector(".grid");

    container.removeChild(gridElement);
    let grid = drawGrid(boxWidth, gridWidth, numberOfIterations);
    
    grid.addEventListener('mouseover', e => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
    if (e.target.classList.contains('grid')) {

    } else {
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
})

}

grid();