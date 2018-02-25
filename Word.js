// require letter.js using var word

// * **Word.js**: Contains a constructor, Word that depends on
//  the Letter constructor. This is used to create an object
//   representing the current word the user is attempting to guess.
//    That means the constructor should define:

//   * An array of `new` Letter objects representing the letters
//   *  of the underlying word

//   * A function that returns a string representing the word. 
//   * This should call the function on each letter object 
//   * (the first function defined in `Letter.js`) that displays
//   *  the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and 
//   * calls the guess function on each letter object 
//   * (the second function defined in `Letter.js`)
// //   * 
var require = require("./letter.js");
var guess = process.argv(2)

// An array of `new` Letter objects 
// representing the letters of the 
// underlying word
this.newLetter = [];

var word = "apple"
var wordArray = ['a','c','e'];
for(var i=0; i<word.length; i++){
    console.log(word[i]);
} 
for(var i=0; i<wordArray.length; i++){
    console.log(wordArray[i]);
} 
// A function that returns a string
// representing the word
this.returnString = function(){

};
