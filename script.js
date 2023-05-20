
let mainContainer = document.querySelector('.main-container');

function drawDiv(n){
    // Loop for creating column, and row divs
    for (let i = 0; i < n; i++){
        let divColumn = document.createElement('div')
        divColumn.classList.add('column-div');
        mainContainer.appendChild(divColumn);
        for (let j = 0; j < n; j++){
            let divRow = document.createElement('div');
            divRow.classList.add('row-div');
            divColumn.appendChild(divRow);
        }
    }
}




// Creating a array out of all the row divs
const divs = document.querySelectorAll('.row-div');
const divsArr = Array.from(divs);

// Looping over row-diws and changing color upon hovering over them
divsArr.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    })
})