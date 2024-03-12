let timer, interval, randomIndex, wordLength, matchLetters;
let seconds = 30;
let correctWordsCounter = 0;
let inputIndex = 0;
let sentenceIndex = 0;
let matchChars = 1;
let inputWord = [];
let randomSentence = [];
let randomSentenceIndex = 0;

const sentences = [
    'car table computer sea game', 'cake water house art building', 
    'tomato piece cup leaf night', 'rocket dream glass thin box', 
    'bed there balloons flour pot', 'brick rain hole world park',
    'cold food run city wheel', 'pencil airplane lord bell date', 
    'ball hat tractor river fruit', 'apple ice soup hot tree', 
    'oil chair basket ship sunflower', 'snow orange map moon pancake',
    'beach witch display road mountain', 'blow shoes battery horse banana',
    'bar paper hair planet flower', 'tower mean loaf runner untold', 
    'towel mosquito meat case bowl', 'dice nose blanket radiator parrot',
    'boulder clock wrist glamorous antenna', 'vehicle hill oriented nail thick'
];

document.getElementById('timer'). innerHTML = seconds + ' s';
document.getElementById('correctWords').innerHTML = 'Correct words: ' + correctWordsCounter;
document.getElementById('newGameButton').addEventListener('click', startGame);
document.getElementById('input').addEventListener('input', checkCharacters);
document.addEventListener('keydown', (event) => {
    if (event.key == ' ' && matchChars == 1) {
        ++correctWordsCounter;
        document.getElementById('correctWords').innerHTML = 'Correct words: ' + correctWordsCounter; 
        matchChars = 1;
    }
});

function checkCharacters() {
    inputWord = (document.getElementById('input').value.trim()).split('');
    if (randomSentence[randomSentenceIndex] === inputWord[inputIndex]) {
        ++inputIndex;
        ++randomSentenceIndex;
    } else if (randomSentence[randomSentenceIndex] !== inputWord[inputIndex]) {
        matchChars = 0;
    } else if (randomSentence[randomSentenceIndex] === inputWord[inputIndex] && randomSentence[randomIndex] === ' ') {
        ++randomSentenceIndex;
        inputIndex = randomSentenceIndex;
    }
    console.log(inputIndex, randomSentenceIndex);
    if (randomSentenceIndex === randomSentence.length - 1) {
        displaySentence();
        document.getElementById('input').value = '';
        inputIndex = 0;
        randomSentenceIndex = 0;
    }
}



function displaySentence() {
    randomIndex = Math.floor(Math.random() * sentences.length);
    document.getElementById('text').innerHTML = sentences[randomIndex];
    randomSentence = sentences[randomIndex].split('');
}

function startGame() {
    seconds = 30;
    inputIndex = 0;
    inputWord = [];
    wordLength = 0;
    matchLetters = 1;
    correctWordsCounter = 0;
    randomSentenceIndex = 0;
    interval = setInterval(updateTimer, 1000);
    newGameButton.style.display = 'none';
    document.getElementById('gameOverMessage').innerHTML = '';
    displaySentence();
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
    document.getElementById('correctWords').innerHTML = 'Correct words: ' + correctWordsCounter; 
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