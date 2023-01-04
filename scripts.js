let gridContent = document.getElementById("gridContent");
let inputVal = document.getElementById("gridSizer").value;
let colourVal = document.getElementById("colourPicker").value;

gridSizer(inputVal);
  
function gridSizer(val) {
        for (i = 0; i < val * val; i++) {
                let gridDiv = document.createElement("div");
                gridContent.appendChild(gridDiv);
        }

        gridContent.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
        gridContent.style.gridTemplateRows = `repeat(${val}, 1fr)`;

        let mouseIsDown = false;
        let gridDivs = gridContent.querySelectorAll("div");
        gridDivs.forEach((item) => {
                item.addEventListener("mousedown", () => {
                        mouseIsDown = true;
                });
                item.addEventListener("mouseup", () => {
                        mouseIsDown = false;
                });
                item.addEventListener("mousemove", (e) => {
                        if (!mouseIsDown) {
                                return;
                        } else {
                                e.target.style.backgroundColor =  colourVal;
                        }
                });
        });

        gridContent.addEventListener("mouseenter", () => {
                mouseIsDown = false;
        });
        gridContent.addEventListener("mouseleave", () => {
                mouseIsDown = false;
        });

}


//Event listeners to change gridsize and gridcolour
document.getElementById("gridSizer").addEventListener("input", () => {
        gridContent.replaceChildren();
        inputVal = document.getElementById("gridSizer").value;      
        gridSizer(inputVal);
});


document.getElementById("colourPicker").addEventListener("input", () => {
        colourVal = document.getElementById("colourPicker").value;
});


function randomColourizer() {
        return "#" + Math.floor(Math.random() * 16777216).toString(16);
}





