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

var grid = document.getElementById("grid");
// create Grid


// var containerNew = document.createElement('div');
// containerNew.setAttribute('id', 'containerNew');
// containerNew.className = 'container';
// var moreRows = document.createElement("div");
// moreRows.className = 'row';
// var moreCols = document.createElement("div");
// moreCols.setAttribute('class', 'col');
// moreCols.className = "col-3 bg-success";
// moreRows.appendChild(moreCols);
// containerNew.appendChild(moreRows);
// containerNew.appendChild(grid);

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
            col.className = "col-4 text-center p-1 h-75 border border-dark bg-light color-primary";
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
    createGrid();
    
}

//button function w/ message and restart button
// set up button
    // var button = document.createElement("div");
    // button.className = "button col-sm-2 text-center p-5 border border-dark";
    // div.appendChild(button);

function showRemediation(str){

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
        // message
        showRemediation("Player " + players[win] + " Won!");
        //restart();
        break;
    } else {
        if (clicks == 9) {
            // message: ("tie");
            showRemediation("The game ended in a tie.  Restart?");
            //restart();
        }
    }
}





createGrid();












