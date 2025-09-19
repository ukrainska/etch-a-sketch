const container = document.querySelector(".grid");

// function that adds 16 new divs to a grid class
function addNewDivs() {
    if (container) {
        for (let i = 0; i < 16; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-child");
            container.appendChild(newDiv);
        }
    } else {
        console.error("The parent div was not found");
    }
}
addNewDivs();