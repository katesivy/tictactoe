// set up Object with container, row, columns, class, id, text

const container = document.createElement("div");
container.className = "container";
const row = document.createElement("div");
row.className = "row";
const col = document.createElement("div");
col.className = "col";

// const x = "X";
// const o = "O";
// State

var clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 =  nothing clicked, 1 = X, 2 = 0
var turn = 0;
var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

var clicks = 0;
var players = ["", "X", "0"];

// create Title
const header = document.getElementsByClassName("header")[0];
const title = document.createElement("div");
header.appendChild(title);
title.textContent = "Tic-Tac-Toe";
title.className = "text-center display-4";

// create Grid

function createGrid() {
    var k = 0;
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

function clickSquare(e) {

    // set state
    clickData[this.id] = Number(turn) + 1; // 0, 1 - 1,2
    // update view when clicked 

    document.getElementById(this.id).innerHTML = players[Number(turn) + 1];

    turn = !turn;
    // remove click handler for square 
    // ((set variable)this.id.removeEventListener('click', clickSquare);
    this.removeEventListener('click', clickSquare);
    clicks++;
    //check for win
    // how do i tell which square has been clicked and with an o or x?
    checkWin();

}


function checkWin() {
    var win = 0;
    // loop thru the winconditions
    for (let i = 0; i < winConditions.length; i++) {
        var total = 0;
        for (let j = 0; j < winConditions[i].length; j++) {
            var pos = winConditions[i][j];
            var val = clickData[pos];
            if (val == 0) {
                break;
            } else {
                total += val;
                if (j == 2 && total == 3) {
                    // x wins
                    win = 1;
                }
                if (j == 2 && total == 6) {
                    // 0 wins
                    win = 2;
                }
            }
        }
        if (win) {
            alert(players[win] + " won");
            break;
        } else {
            if (clicks == 9) {
                alert("tie");
            }
        }
    }
}


// set up function to check if win or draw/display message

// set restart button (onclick, clear input on cols), (onclick, display player X/O button)

// call functions
createGrid();












