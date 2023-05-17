
let mainContainer = document.querySelector('.main-container');

function drawDiv(col = 16,row = 16){
    // Loop for creating column, and row divs
    for (let i = 0; i < 16; i++){
        let divColumn = document.createElement('div')
        divColumn.classList.add('column-div');
        mainContainer.appendChild(divColumn);
        for (let j = 0; j < 16; j++){
            let divRow = document.createElement('div');
            divRow.classList.add('row-div');
            divColumn.appendChild(divRow);
        }
    }
}

drawDiv()
// Creating a array out of all the row divs
const divs = document.querySelectorAll('.row-div');
const divsArr = Array.from(divs);

// Looping over row-diws and changing color upon hovering over them
divsArr.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    })
})