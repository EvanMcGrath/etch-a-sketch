
document.addEventListener("DOMContentLoaded", () => {
    
    let gridContainer = document.getElementById("gridContainer");

    for (i = 0; i < 16; i++) {
        let gridDiv = document.createElement("div");
        gridContainer.appendChild(gridDiv);
    }
})