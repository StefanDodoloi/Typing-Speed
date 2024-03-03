let timer, interval, randomIndex, wordLength, matchLetters;
let seconds = 60;
let correctWordsCounter = 0;
let index = 0;

const sentences = [
    'car table computer sea game', 'cake water house art building', 
    'tomato piece cup leaf night', 'rocket dream glass thin box', 
    'bed the balloons flour pot', 'brick rain hole world park',
    'cold food run city wheel', 'pen airplane lord bell date', 
    'ball hat tractor river fruit', 'apple ice soup hot tree', 
    'oil chair basket ship sun', 'snow orange map moon pancake',
    'beach witch display road mountain', 'blow shoes battery horse banana',
    'bar paper hair planet flower', 'tower mean loaf runner untold', 
    'towel mosquito meat case bowl', 'dice nose blanket radiator parrot',
    'boulder clock wrist glamorous antenna', 'vehicle hill oriented nail thick'
];

document.getElementById('timer'). innerHTML = seconds + ' s';
document.getElementById('correctWords').innerHTML = 'Correct words: ' + correctWordsCounter;
document.getElementById('newGameButton').addEventListener('click', startGame);
document.getElementById('input').addEventListener('input', checkCharacters);

function checkCharacters() {
    let userInput = document.getElementById('input').value; // Obținem textul introdus de utilizator
    let randomSentence = sentences[randomIndex]; // Obținem propoziția curentă
    let randomSentenceLength = randomSentence.length;
    if (randomSentence[index] != ' ') {
        ++wordLength;
    } else {
        wordLength = 0;
    }
    if (index === randomSentenceLength - 1) {
        wordLength = 0;
    }
    if (randomSentence[index] === userInput[index]) {
        ++matchLetters;
        // sa faci literele verzi
    } else {
        // sa faci literele rosii
    }
}

function displaySentence() {
    randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById('text').innerHTML = sentences[randomIndex];
}

function startGame() {
    seconds = 60;
    index = 0;
    wordLength = 0;
    matchLetters = 0;
    correctWordsCounter = 0;
    interval = setInterval(updateTimer, 1000);
    newGameButton.style.display = 'none';
    document.getElementById('gameOverMessage').innerHTML = '';
    displaySentence();
}

function updateTimer() {
    if (seconds > 0) {
        --seconds;
        displayTimer();
    } else {
        clearInterval(interval);
        document.getElementById('gameOverMessage').innerHTML = 'Game Over!';
        newGameButton.style.display = 'block';
    }
}

function displayTimer() {
    document.getElementById('timer'). innerHTML = seconds + ' s';
}