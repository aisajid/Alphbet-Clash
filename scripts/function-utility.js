// for hidden
function hideElementById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

// for show:
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// for get random alphabet:
function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxzy';
    const alphabetArray = alphabetString.split('');


    const randomIndex = Math.round(Math.random() * 25);
    const alphabet = alphabetArray[randomIndex];
    return alphabet;
}

// add highlight on keyboard:
function setHighlightOnKeys(elementid) {
    const element = document.getElementById(elementid);
    element.classList.add('bg-[#FFA500]')
}
// for remove highlight from keyboard:
function removeHighlightOnKeys(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');
}

// get value from any element:
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}
function setUpdatedValueById(elementID, value){
    const element = document.getElementById(elementID);
    element.innerText = value;
}

function getElementText(elementID){
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}