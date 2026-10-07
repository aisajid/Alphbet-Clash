function continueGame(){
    // step1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet-aria');
    currentAlphabet.innerText = alphabet;
    
    // set highlight on keys of keyboard:
    setHighlightOnKeys(alphabet);
}
function play(){
    // step1:  hide the home section.
    hideElementById('home-section-id');

    // step2: show the section section(playground-section)
    showElementById('play-ground-section');
    
    //call continue game alphabet: 
    continueGame();
}