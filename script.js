let container = document.querySelector(".container");

let containerWidth = 1000;
let containerHeight = 1000;

container.style.width = containerWidth.toString() + "px";
container.style.height = containerHeight.toString() + "px";

let squaresPerSide = prompt("how many squares per side?");

while (true) {
    if(squaresPerSide <= 1000) break;
    alert("please give a number less than or equal to 1000");
    squaresPerSide = prompt("how many squares per side?");
}

let squareDim = Math.floor(containerWidth/squaresPerSide);


for (let i = 0 ; i < squaresPerSide*squaresPerSide ; i++) {
    let singleSquare = document.createElement("div");
    singleSquare.classList.add("square");
    container.appendChild(singleSquare);
    singleSquare.addEventListener("mouseover", 
    e => e.target.classList.add("new-color"));
}

container.style.gridTemplateRows = `repeat(${squaresPerSide}, ${squareDim}px)`;
container.style.gridTemplateColumns = `repeat(${squaresPerSide}, ${squareDim}px)`;


