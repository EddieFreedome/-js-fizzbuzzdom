const containerGrid = document.querySelector(".container")
//let square = document.querySelector(".my-col")

for (let i = 1; i <= 100 ; i++) {
    //genero col
    //attacco col
    const square = document.createElement("div")
    square.classList.add ("my-col")
    
    if (i % 3 === 0)  {
        square.classList.add(".x3")
    } else if (i % 5 === 0)  {
        square.classList.add(".x5")
    } else if (i % 3 === 0 && i % 5 === 0)  {
        square.classList.add(".x3-5")
    } else {
        square.classList.add(".std")
    }
containerGrid.append(square) 
}
