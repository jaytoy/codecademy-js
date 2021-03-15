let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Return a random integer between 0 and 9
const generateTarget = () => {
    let secretTargetNumber = Math.floor(Math.random() * 10);
    return secretTargetNumber;
};

// Determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, secretTargetNumber) => {
    const humanResult = Math.abs(secretTargetNumber - humanGuess);
    const computerResult = Math.abs(secretTargetNumber - computerGuess);
    // Return true if human wins ; false if computer wins
    if (humanResult < computerResult){
        return true;
    } else if (humanResult > computerResult){
        return false;
    } else {
        return true;
    }
};

// Increase correctly the winner’s score after each round
const updateScore = (winner) => {
    if (winner === 'human'){
        humanScore += 1;
    } else if (winner === 'computer'){
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
}; 