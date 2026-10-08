function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // Escape the game:
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // get the expected to press
    const currentAlphabet = document.getElementById('current-alphabet-aria').innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not: 
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');

        // update score:
        const currentScore = getElementValueById('score-area');
        const updatedScore = currentScore + 1;
        setUpdatedValueById('score-area', updatedScore);

        // start a new round: 
        removeHighlightOnKeys(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed. you lost a life.');
        // update life:
        const currentLife = getElementValueById('life-element');
        const updatedLife = currentLife - 1;
        if (updatedLife === 0) {
            gameOver();
        }
        else {
            setUpdatedValueById('life-element', updatedLife);
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);



function continueGame() {
    // step1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet-aria');
    currentAlphabet.innerText = alphabet;

    // set highlight on keys of keyboard:
    setHighlightOnKeys(alphabet);
}
function play() {
    // step1:  hide the home section.
    hideElementById('home-section-id');
    hideElementById('score-section');

    // step2: show the section section(playground-section)
    showElementById('play-ground-section');
    
    //step3: reset current life and score:
    setUpdatedValueById('life-element', 5);
    setUpdatedValueById('score-area', 0)

    //call continue game alphabet: 
    continueGame();
}

function gameOver() {
    hideElementById('play-ground-section');
    showElementById('score-section');
    const lastScore = getElementValueById('score-area');
    setUpdatedValueById('total-score-area', lastScore);
    //for remove highLight:
    const currAlphabet = getElementText('current-alphabet-aria');
    removeHighlightOnKeys(currAlphabet);


}
