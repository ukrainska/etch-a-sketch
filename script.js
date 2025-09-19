const container = document.querySelector(".grid");
const button = document.getElementById("grid_size");
const containerSize = 16;
let gridSize = containerSize * containerSize;

// function that adds 16 new divs to a grid class
function addNewDivs() {
    if (container) {
        for (let i = 0; i < gridSize; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-child");
            container.appendChild(newDiv);
        }
    } else {
        console.error("The parent div was not found");
    }
}

function setGridSize () {
    let answer = prompt("What size of the grid you prefer?");
    console.log("Grid size set to:", gridSize);
    if (isNaN(answer)) {
        alert("Please enter a valid number");
        return;
    }

    if (answer < 100) {
        gridSize = answer * answer; 
        console.log("Grid size set to:", gridSize);
        addNewDivs();
    } else {
        alert("The number should be less than 100");
    }
} 

button.addEventListener("click", setGridSize);

addNewDivs();
