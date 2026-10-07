// for hidden
function hideElementById(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

// for show:
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// for get random alphabet:
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxzy';
    const alphabetArray = alphabetString.split('');


    const randomIndex = Math.round(Math.random()*25);
    const alphabet = alphabetArray[randomIndex];
    return alphabet;
}

// add highlight on keyboard:
function setHighlightOnKeys(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('bg-[#FFA500]')
 
    
}