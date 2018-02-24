var inquirer = require('inquirer');

function Letter (character, guessedLetter, returnLetter){
    this.character = character;
    this.guessedLetter = false;
    this.returnLetter = function() {
        if(this.guessedLetter){
            return character;
        }else{
            return "_"
        }
    this.checkBoolean = function(){
    if (letterGuess ===  LetterInGame){
        this.guessedCorrect = true;
    }else{
        this.correct = false;
    }
    }
}
};
