const container = document.getElementById("container");


function createGrid(size) {
    container.innerHTML = "";
    const gridWidth = 400;
    const gridHeight = 375;

    container.style.width = gridWidth + "px";
    container.style.height = gridHeight + "px";

    const squareWidth = gridWidth / size;
    const squareHeight = gridHeight / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.style.width = squareWidth + "px";
        square.style.height = squareHeight + "px";
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid black";

        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}


createGrid(16);



const button = document.getElementById("NewGridButton");
button.textContent = "Make a new grid";


button.addEventListener("click", function() {
    const input = prompt("How big do you want your grid? Pick from 1 to 100");

    const size = Number(input);

    if (input === null || input.trim() === "" || !Number.isInteger(size) || size < 1 || size > 100) {
        alert("Pick a number from 1 to 100!!");
        return;
    }

    createGrid(size);
});


document.body.appendChild(button);