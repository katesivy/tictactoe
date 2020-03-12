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
    [2, 4, 6]
];

var clicks = 0;
var players = ["", "X", "0"];

// create Title
const header = document.getElementsByClassName("header")[0];
const title = document.createElement("div");
header.appendChild(title);
title.textContent = "Tic-Tac-Toe";
title.className = "text-center display-4";

// create button
var button = document.createElement("div");
    button.setAttribute = ('id', 'footer');
    button.className = "col-sm-2 text-center p-5 color-white bg-secondary border-dark";
    button.innerHTML = "";
    footer.appendChild(button);
    button.addEventListener('click', restart);

var grid = document.getElementById("grid");
// create Grid

function createGrid() {
    var k = 0;
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        row.setAttribute('id', 'row' + i);
        row.className = "row mx-lg-n5 mx-sm-2";
        for (var j = 0; j < 3; j++) {
            var col = document.createElement("div");
            col.setAttribute('id', k);
            // set up click event for squares
            col.addEventListener('click', clickSquare);
            col.className = "col-4  text-center px-lg-5 mx-sm-2 p-5 border border-dark bg-light color-primary";
            row.appendChild(col);
            k++;
        }
        grid.appendChild(row);
    }
}

function clickSquare(e) {
    // set state
    clickData[this.id] = Number(turn) + 1; // 0, 1 -> 1,2
    // update view when clicked 
    document.getElementById(this.id).innerHTML = players[Number(turn) + 1];
    turn = !turn;
    // remove click handler for square 
    this.removeEventListener('click', clickSquare);
    clicks++;
    //check for win
    checkWin();
}

// set restart button (onclick, clear input on cols), (onclick, display player X/O button)
function restart() {
    clickData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    clicks = 0;
    turn = 0;
    grid.innerHTML = "";
    button.textContent = "";
    createGrid();

}

//button functions w/ message and restart button

function showMessage(str) {
    button.textContent = str;
}
// function to remove event listener
function removeListener() {
    for (let i = 0; i < clickData.length; i++) {
        var square = clickData[i];
        if (square === 0) {
            square.removeEventListener('click', restart);
        }
    }
}

function checkWin() {
    var win = 0;
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
    }
    if (win) {
        // message //restart();
        showMessage("Player " + players[win] + " Won!");
        // call function to remove event listener
        removeListener;
    } else {
        if (clicks == 9) {
            // message: ("tie");  //restart();
            showMessage("You tied! Click here to restart.");
            // call function to remove event listener
            removeListener;
        }
    }
}

createGrid();












