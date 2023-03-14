let container = document.querySelector(".container");
let gridButton = document.querySelector("button");

function createAndSetGrids(numOfGrids){
    for (let i = 0; i < numOfGrids; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("grid-item");
        container.appendChild(newDiv);
    }

    let grids = container.querySelectorAll('.grid-item');

    let percentWidth = 1/Math.sqrt(numOfGrids) * 100;

    grids.forEach(function(grid) {
      grid.addEventListener("mouseover", gridHover);
      grid.style.width = `${String(percentWidth)}%`;
      grid.style.paddingBottom = `${String(percentWidth)}%`;
    });
}


function gridHover(e) {
    
    this.style.backgroundColor = "black";
}

function generateGrids(e){
    let removedGrids = container.querySelectorAll('.grid-item');

    removedGrids.forEach(function(grid) {
        container.removeChild(grid);
      });
    
    let newNumOfGrids = Math.pow(prompt("How many rows of grids do you want? Maximum is 100"),2);

    while (newNumOfGrids > Math.pow(100,2)){
        newNumOfGrids = Math.pow(prompt("How many rows of grids do you want? Maximum is 100"),2);
    }

    createAndSetGrids(newNumOfGrids);
}

gridButton.addEventListener("click", generateGrids);

createAndSetGrids(16*16);

