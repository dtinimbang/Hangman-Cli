var inquirer = require('inquirer');

function Letter (character, guessedLetter, returnLetter){
    this.character = character;
    this.guessedLetter = false;
    this.returnLetter = function() {
     