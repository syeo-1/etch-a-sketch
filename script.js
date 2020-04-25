let container = document.querySelector(".container");
let dimensions = 16

for (let i = 0 ; i < dimensions ; i++) {
    for (let j = 0 ; j < dimensions ; j++) {
        let div = document.createElement("div");
        div.classList.add("square");
        div.textContent = (i+1)*(j+1);
        container.appendChild(div);
    }
}

