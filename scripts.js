
let gridContent = document.getElementById("gridContent");
let inputVal = document.getElementById("gridSizer").value;

gridSizer(inputVal);

function gridSizer(val) {
        for (i=0; i < (val*val); i++) {
                let gridDiv = document.createElement("div");
                gridContent.appendChild(gridDiv);
        };

        
        // gridDivs.forEach((item) => {item.classList.add("gridDivBorder")});


        gridContent.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
        gridContent.style.gridTemplateRows = `repeat(${val}, 1fr)`;



        let mouseIsDown = false;
        let gridDivs = gridContent.querySelectorAll("div");
        gridDivs.forEach((item) => {
                item.addEventListener("mousedown", () => {mouseIsDown = true});
                item.addEventListener("mouseup", ()=> {mouseIsDown = false});
                item.addEventListener("mousemove", (e) => {
                        if(!mouseIsDown) {
                                return
                        } else {
                                e.target.classList.add("gridBlackFill");
                        }
                })
        })

        gridContent.addEventListener("mouseleave", () => {mouseIsDown = false});

}




let rangeInput = document.getElementById("gridSizer");
rangeInput.addEventListener("input", () => {

       gridContent.replaceChildren();
        
       let inputVal = document.getElementById('gridSizer').value;
       gridSizer(inputVal);

})

























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
    