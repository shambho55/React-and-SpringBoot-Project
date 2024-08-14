"use strict";
var come = true;
var score = 100;
var songName = "Dhan Te nan";
var songGenre = 'rock';
// break it
/*
come = 12;
score = 'Forget it';
songGenre = false;
*/
console.log(come);
console.log("Your score is : " + score);
// Using Template Strings below
console.log("Play song with name ".concat(songName, " having genre as ").concat(songGenre, "."));
