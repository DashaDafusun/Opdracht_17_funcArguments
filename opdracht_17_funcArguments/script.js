'use strict'

let paintWalls = function(color) {
    console.log('The wall has been painted ' + color);
}

paintWalls('blue');
paintWalls('white');
paintWalls();

let paintPieceOfWall = function(side, color) {
    console.log('The ' + side + ' wall has been painted ' + color);
};

paintPieceOfWall('south', 'yellow');
paintPieceOfWall('yellow', 'south');