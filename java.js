const container = document.createElement("div");


container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "400px";
container.style.height = "400px";


for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");

    square.style.width = "25px";
    square.style.height = "25px";
    square.style.boxSizing = "border-box";
    square.style.border = "1px solid black";

    container.appendChild(square);
}


document.body.appendChild(container);