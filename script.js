
let mainContainer = document.querySelector('.main-container');

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