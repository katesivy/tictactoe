// create Title
const header = document.getElementsByClassName("header")[0];
const title = document.createElement("div");
header.appendChild(title);
title.textContent = "Tic-Tac-Toe";
title.className = "text-center display-4";

// prompt to start game
const beginButton = document.getElementsByClassName("btn")[0];
const begin = document.createElement("div");
beginButton.appendChild(begin);
begin.textContent = "Start Playing";
begin.className = "col-12 text-center display-5 border border-primary btn-primary btn-lg";
// event listener for start button
// begin.addEventListener('click', function() {
//      document.innerHTML  ;
// }

// create Grid
let x = 3;
function createGrid() {
    for (var rows = 0; rows < x; rows++) {
        var row = document.createElement("div");
        row.className = "row ";
        // row.innerHTML=1 + rows;
// console.log(row);
        for (var columns = 0; columns < x; columns++) {
            var col = document.createElement("div");
            col.innerHTML=1 + columns;   
            
            row.appendChild(col);
            col.className = "col-sm-2 text-center p-5 border border-dark ";
            // console.log(col);
            

            
        }
        var container = document.getElementsByClassName("container")[0];
        container.appendChild(row);
        // col.innerHTML=1 + columns;
    }
}
createGrid();




