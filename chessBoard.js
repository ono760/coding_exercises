/*

Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

*/

var sizeOfBoard = 8;
var chessBoard = " ";

for (var y = 0; y < sizeOfBoard; y++) {
    for (var x = 0; x < sizeOfBoard; x++) {
        if ((x + y) % 2 == 0) {
            chessBoard += " ";
        } else {
            chessBoard += "#";
        };
    };

    chessBoard += "\n";
};

console.log(chessBoard);
