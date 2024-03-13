let intervalIdTime;
let countSeconds = 60;
let correctWordsCounter = 0;
let inputIndex = 0;
let randomIndex = 0;
let randomSentence = [];
let textElement = document.getElementById('text');
let inputElement = document.getElementById('input');

const sentences = [
    'cartoons table computer sea games', 'cake water house artist building', 
    'tomato piece cups leaf night', 'rocket dream glass thin boxes', 
    'butterfly flutters gently in garden', 'ocean waves crash loudly nearby',
    'bed there balloons flour pot', 'bricks rain hole world park',
    'moonlight whispers softly through trees', 'penguin dances gracefully on ice',
    'cold food run city wheel', 'pencil airplane lord bell date', 
    'ball hat tractor river fruit', 'apple ice soup monkey tree', 
    'oil chair basket baggage sunflower', 'snow orange map moon pancake',
    'beach witch display road mountain', 'blow shoes battery horse banana',
    'bar paper hair planet flower', 'tower mean loaf runner untold', 
    'towel mosquito meat case bowls', 'dice nose blanket radiator parrot',
    'boulder clock wrist glamorous antenna', 'vehicle hill oriented nails thick',
    'cats umbrella runs quickly outside', 'coffee book laughs quietly sometimes'
];

document.getElementById('timer').innerHTML = countSeconds + ' s';
document.getElementById('correctWords').innerHTML = 'Correct words: ' + correctWordsCounter;
document.getElementById('newGameButton').addEventListener('click', startGame);
inputElement.addEventListener('input', checkCharacters);

function checkCharacters() {
    let inputChar = inputElement.value[inputIndex];
    let randomChar = randomSentence[randomIndex];
    if (inputChar === randomChar) {
        if (textElement.children[inputIndex].classList.contains('fail')) {
            textElement.children[inputIndex].classList.remove('fail');
        }
        textElement.children[inputIndex].classList.add('success');
        ++inputIndex;
        ++randomIndex;
        if (inputChar === ' ' || randomIndex === randomSentence.length) {
            let hasMistakes = false;
            for (let i = 0; i < randomSentence.length; ++i) {
                if (textElement.children[i].classList.contains('fail')) {
                    hasMistakes = true;
                } else {
                    hasMistakes = false;
                }
            }
            if (!hasMistakes) {
                ++correctWordsCounter;
                document.getElementById('correctWords').innerHTML = 'Correct words: ' + correctWordsCounter;
            }
        }
    } else {
        textElement.children[inputIndex].classList.add('fail');
    }
    if (inputIndex === randomSentence.length) {
        displaySentence();
    }
}

function displaySentence() {
    randomSentence = sentences[Math.floor(Math.random() * sentences.length)].split('');
    textElement.innerHTML = randomSentence.map(char => '<span>' + char + '</span>').join('');
    inputIndex = 0;
    randomIndex = 0;
    inputElement.value = '';
}

function startGame() {
    countSeconds = 60;
    correctWordsCounter = 0;
    intervalIdTime = setInterval(updateTimer, 1000);
    newGameButton.style.display = 'none';
    inputElement.disabled = false; 
    inputElement.focus();
    document.getElementById('gameOverMessage').innerHTML = '';
    document.getElementById('correctWords').innerHTML = 'Correct words: ' + correctWordsCounter;
    displaySentence();
}

function updateTimer() {
    if (countSeconds > 0) {
        --countSeconds;
        document.getElementById('timer').innerHTML = countSeconds + ' s';
    } else {
        clearInterval(intervalIdTime);
        document.getElementById('gameOverMessage').innerHTML = 'Game Over!';
        newGameButton.style.display = 'block';
        inputElement.disabled = true;
    }
}
