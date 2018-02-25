var inquirer = require('inquirer');

* **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

  * A string value to store the underlying character for the letter

  * A boolean value that stores whether that letter has been guessed yet

  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

function Letter (character, guessedLetter, returnLetter){
    this.character = character;
    this.guessedLetter = false;
    this.returnLetter = function() {
        if(this.guessedLetter){
            return character;
        }else{
            return "_"
        }
    this.checkBoolean = function(letterGuess, LetterInGame){
        if (letterGuess ===  LetterInGame){
                this.guessedCorrect = true;
        }else{
                this.correct = false;
            }
    }
    }
};

module.exports = letter;