
let gridContent = document.getElementById("gridContent");
let inputVal = document.getElementById("gridSizer").value;

gridSizer(inputVal);

function gridSizer(val) {
        for (i=0; i < (val*val); i++) {
                let gridDiv = document.createElement("div");
                gridContent.appendChild(gridDiv);
        }
}



let gridInput = document.getElementById("gridSizer");
gridInput.addEventListener("input", () => {
       let inputVal = document.getElementById('gridSizer').value;

       gridSizer(inputVal);

})




let gridDivs = gridContent.querySelectorAll("div");
gridDivs.forEach((item) => {item.classList.add("gridDivBorder")});



















//for (i = 0; i < (16*16); i++) {
//        let gridDiv = document.createElement("div");
//        gridContent.appendChild(gridDiv);
//}
    