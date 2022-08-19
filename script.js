
const container = document.querySelector(".container")

for (let i = 0; i< 256; i++) {

    
    container.appendChild(document.createElement("div"))
   
}



let z = 10
function hover(element) {
    
    element.addEventListener("mouseover", (e) => {
        
        e.target.style.backgroundColor =  `rgb(${Math.random()*100},${Math.random()*100},${Math.random()*100})`

       

    })

    element.addEventListener("", (e) => {
        e.target.style.backgroundColor = `rgb(${Math.random()*100},${Math.random()*100},${Math.random()*100})`

    })

z = z- 10
}




function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let pete = document.querySelectorAll("div")

pete.forEach((elem,ind,arr) =>
{hover(elem)})


const button = document.querySelector(".squares")


button.addEventListener("click", getSquares)

function getSquares() {
   let num =  prompt("how many squares");
   if (parseInt(num) > 100) {
    alert("smaller than 100")
    getSquares()}

   else if (num <= 100) {    

    for (let child of Array.from(container.children)) {
        container.removeChild(child)

        
    }
    for (let i = 0; i< num*num; i++) {

    
        container.appendChild(document.createElement("div"))
      container.children[i].style.width = `${100/num - .8}vw`
      container.children[i].style.height = `${100/num - .8}vh`
    }



} 
{


       
    
    

}



}




