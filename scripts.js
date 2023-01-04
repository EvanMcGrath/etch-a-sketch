let gridContent = document.getElementById("gridContent");
let inputVal = document.getElementById("gridSizer").value;
let colourVal = document.getElementById("colourPicker").value;

gridSizer(inputVal);
gridColourizer(colourVal);

function gridSizer(val) {
        for (i = 0; i < val * val; i++) {
                let gridDiv = document.createElement("div");
                gridContent.appendChild(gridDiv);
        }

        gridContent.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
        gridContent.style.gridTemplateRows = `repeat(${val}, 1fr)`;

}


let sizeInput = document.getElementById("gridSizer");
sizeInput.addEventListener("input", () => {
        gridContent.replaceChildren();

        let inputVal = document.getElementById("gridSizer").value;
        
        
        gridSizer(inputVal);
});


function gridColourizer(val) {
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
                                e.target.style.backgroundColor = `${val}`;
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

let colourInput = document.getElementById("colourPicker");
colourInput.addEventListener("input", () => {
        let inputVal = document.getElementById("colourPicker").value;
        console.log(inputVal);
        gridColourizer(inputVal);
})

function randomColourizer() {
        return "#" + Math.floor(Math.random() * 16777216).toString(16);
}




// let gridDivs = gridContent.querySelectorAll('div');

// let mouseIsDown = false;
// gridDivs.forEach((item) => {
//         item.addEventListener("mousedown", () => {mouseIsDown = true});
//         item.addEventListener("mouseup", ()=> {mouseIsDown = false});
//         item.addEventListener("mousemove", (e) => {
//                 if(!mouseIsDown) {
//                         return
//                 } else {
//                         e.target.classList.add("gridBlackFill");
//                 }
//         })
// })

//for (i = 0; i < (16*16); i++) {
//        let gridDiv = document.createElement("div");
//        gridContent.appendChild(gridDiv);
//}
