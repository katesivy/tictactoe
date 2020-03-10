// set up Object with container, row, columns, class, id, text

const container = document.createElement("div");
container.className = "container";
const row = document.createElement("div");
row.className = "row";
const col = document.createElement("div");
col.className = "col";

const x = "X";
const o = "O";

// create Title
const header = document.getElementsByClassName("header")[0];
const title = document.createElement("div");
header.appendChild(title);
title.textContent = "Tic-Tac-Toe";
title.className = "text-center display-4";

// create Grid

function createGrid() {
    var k = 1;
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.setAttribute('id', 'row' + i);
        row.className = "row";
        for (var j = 0; j < 3; j++) {
            var col = document.createElement("div");
            col.setAttribute('id', k);
            // set up click event for squares
            col.addEventListener('click', clickSquare);
            col.className = "tics col-sm-2 text-center p-5 border border-dark";
            row.appendChild(col);
            k++;

        }
        var container = document.getElementsByClassName("container")[0];
        container.appendChild(row);
    }
}
// for each col, listen for which square is clicked and add X

function clickSquare(e) {
    var stringText = "";
    var i;
    document.getElementById(this.id).innerHTML = stringText;
        for (i = 0; i < 2; i++) {
            console.log(i);
            // if (i == 1) {
            //     stringText = x;
            // } else if (i != 0) {
            //     stringText = o;
            // }
        }
    
}












        // set up function to check if win or draw/display message

        // set restart button (onclick, clear input on cols), (onclick, display player X/O button)

        // call functions
        createGrid();












