const container = document.querySelector(".grid");
const button = document.getElementById("grid-size");
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
    let answer = parseInt(prompt("What size of the grid you prefer?"), 10);

    if (isNaN(answer) && answer <= 0) {
        alert("Please enter a valid number");
        return;
    }

    if (answer >= 100) {
        alert("The number should be less than 100");
        return;
    }

    gridSize = answer * answer; 
    console.log("Grid size set to:", gridSize);

    removeGrid();
    addNewDivs(answer); 
    setEvenSize(answer);
} 


function removeGrid() {
    container.innerHTML = "";
}

function setEvenSize(size)  {
    const children = document.getElementsByClassName("grid-child");
    
    for (let child of children) {
        child.style.width = `calc(100% / ${size})`;
        child.style.height = `calc(100% / ${size})`;
    }
}

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // 0–255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", setGridSize);
addNewDivs();

container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("grid-child")) {
        e.target.style.backgroundColor = getRandomRGB();
    }
})
