
const container = document.querySelector(".container")

for (let i = 0; i< 256; i++) {

    
    container.appendChild(document.createElement("div"))
   
}




function hover(element) {
    
    element.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "pink"
       

    })

    element.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "white"
       

    })


}

let pete = document.querySelectorAll("div")

pete.forEach((elem,ind,arr) =>
{hover(elem)})


const button = document.querySelector(".squares")

function getSquares() {
    let squares = prompt("how many squares would you like?", "enter a number")
    
}

button.addEventListener("click", getSquares)