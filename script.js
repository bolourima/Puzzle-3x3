var rows = 3;
var colums = 3;

var currtile;
var otherTile; // hooson tile

var turns = 0;

// var imgOrder = ["1","2","3","4","5","6","7","8","9"]
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function () {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colums; j++) {
      //<img id="0-0" src="1.jpg">
      let tile = document.createElement("img");
      tile.id = i.toString() + "-" + j.toString();
      tile.src = imgOrder.shift() + ".jpg";
      document.getElementById("board").append(tile);

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dralleave", dragLeave);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);
    }
  }
};

function dragStart() {
  currtile = this; // img iig chirch bn
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}
function dragDrop() {
  otherTile = this; // img unasan
}
function dragEnd() {
  if (!otherTile.src.includes("3.jpg")) {
    return;
  }
  let currCoords = currtile.id.split("-"); // "0-0" iig ["0","0"] bolgono
  let i = parseInt(currCoords[0]);
  let j = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let i2 = parseInt(otherCoords[0]);
  let j2 = parseInt(otherCoords[1]);

  let moveLeft = i == i2 && j2 == j - 1;
  let moveRight = i == i2 && j2 == j + 1;

  let moveUp = j == j2 && i2 == i - 1;
  let moveDown = j == j2 && i2 == i + 1;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

  if (isAdjacent) {
    let currImg = currtile.src;
    let otherImg = otherTile.src;

    currtile.src = otherImg;
    otherTile.src = currImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
}
