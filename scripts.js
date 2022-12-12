
document.addEventListener("DOMContentLoaded", () => {
    
    let gridContent = document.getElementById("gridContent");

    for (i = 0; i < 16; i++) {
        let gridDiv = document.createElement("div");
        gridContent.appendChild(gridDiv);
    }
})