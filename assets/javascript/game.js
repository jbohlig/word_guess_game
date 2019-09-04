// a variable to store the array of words
let wordsArray = ["football", "baseball"];
console.log("wordsArray = " + wordsArray);

// an array to store the answer word
let answerArray = []
console.log("Answer array = " + answerArray);

//a variable to store number of wins
let wins = 0




//need an event here that begins the game and ends when no more words exist in wordsArray
document.onkeyup = function (event) {

    //Need a loop here that ends when wordsArray length = 0

    while (wordsArray.length > 0) {

        //a variable to store remaining tries
        let remainingTries = 15;
        //an array to store selected letters not in the currentWord
        var wrongGuesses = [];

        // Need a loop here that ends when the word is solved or remainingTries = 0


        //pick a random word from wordsArray and set selectedWord to that value

        let currentWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        console.log("currentWord = " + currentWord);
        //find the index of the selected word in the wordsArray
        let index = wordsArray.indexOf(currentWord);
        console.log("index = " + index);
        //remove the current word from the wordsArray
        if (index > -1) {
            wordsArray.splice(index, 1);
            console.log("wordsArray is now = " + wordsArray);
        }


        //set the array for the answer that will be used to display the _ for each letter
        for (let i = 0; i < currentWord.length; i++) {
            answerArray[i] = "_";
            console.log("After word selected, answerArray = " + answerArray[i]);
            //display the currentWord in html
            document.getElementById("dispWord").innerHTML = "Current Word: " + answerArray;

        }

        // set the number of remaining letters for the currently selected word
        let remainingLetters = currentWord.length;
        console.log("remainingLetters = " + remainingLetters);
        console.log("remainingTries = " + remainingTries);

        // my loop to guess the word

        while (remainingLetters > 0 && remainingTries > 0) {
            //wait for user input



            console.log("wrongGuesses = " + wrongGuesses);

            document.onkeyup = function (event) {
                let userInput = event.key.toLowerCase();
                console.log("userInput = " + userInput);
                //check to see if userInput was already guessed
                //if already guessed prompt user?? or just do nothing?

                if (wrongGuesses.includes(userInput)) {
                    alert("You've already guessed that letter!");
                }
                //else if in currentWord array update answer array for all indexes that match userInput
                else if (currentWord.includes(userInput)) {
                    let indices = [];
                    //loop through currentWord to find all indices that match userInput
                    for (let i = 0; i < currentWord.length; i++) {
                        if (userInput === currentWord[i])
                            indices.push(i);
                    }

                    //now that I have my array of indices that match, I can update answerArray
                    for (let i = 0; i < indices.length; i++) {
                        answerArray.splice(indicies[i], 0, userInput);
                        //and update my html to show the solved letters
                        document.getElementById("dispWord").innerHTML = "Current Word " + answerArray;
                        //then decrement remainingLetters for each match
                        remainingLetters--;

                    }
                    //and decrement remainingTries (but only once)
                    remainingTries--;
                }
                //else add userInput to wrongGuesses
                else {
                    wrongGuesses.push(userInput);
                    //and update html to show all wrong guesses
                    document.getElementById("wguesses").innerHTML = "Wrong Guesses: " + wrongGuesses;
                    //and decrement remainingTries
                    remainingTries--;
                }


            }


        }
        //check to see if user solved the word or if tries are exhausted
        if (remainingLetters === 0) {
            //word solved
            alert("You solved the word!");
            //increment wins
            wins++;
            //update html to display new wins total
            document.getElementById("wintotal").innerHTML = "Wins: " + wins;
            
        }
        // else you lost message and restart the beginning loop
        else {
            alert("Better luck next time!");

        }
    }
}