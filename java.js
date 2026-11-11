const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");

    square.style.width = "25px";
    square.style.height = "25px";
    square.style.boxSizing = "border-box";
    square.style.border = "1px solid black";

    square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "blue";
    });

    container.appendChild(square);
}