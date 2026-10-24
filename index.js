const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",
    "w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let genBtn = document.getElementById("gen-btn")
let display_1 = document.getElementById("pass-1")
let display_2 = document.getElementById("pass-2")
let symbolsToggle = document.getElementById("allow-symbols");
let numbersToggle = document.getElementById("allow-numbers");
let inputField = document.getElementById("user-input");



function copyPasswordToClipboard(event){
    let targetDiv = event.currentTarget;
    let passwordText = targetDiv.getAttribute('data-password');

    if(!passwordText || targetDiv.classList.contains('copied')){
        return;
    }

    navigator.clipboard.writeText(passwordText)
    .then(()=>{
        targetDiv.classList.add('copied')

        setTimeout(() => {
            targetDiv.classList.remove('copied')
        }, 1500);
    }).catch(err => {
        console.error("Could not copy: ", err)
    })
}


function handleButtonClick(){
    let rawValue = inputField.value.trim();
    let passwordLength = Number(rawValue)
    if (rawValue === "" || Number.isNaN(passwordLength) || passwordLength <= 0) {
        alert("Please Enter A Valid Password Length Greater Than 0")
        return;
    } else if (passwordLength > 64) {
        alert("For performance and security reasons please enter a length of 64 or less")
        return;
    } else {
        let allowedCharacters = [...letters]; 
        let includeSymbols = symbolsToggle.checked;
        let includeNumbers = numbersToggle.checked;
        
        if (includeSymbols) {
            allowedCharacters = allowedCharacters.concat(symbols);
        }
        
        if (includeNumbers) {
            allowedCharacters = allowedCharacters.concat(numbers);
        }

        let exactlength = Math.floor(passwordLength)
        let generatedPassword_1 = ""
        let generatedPassword_2 = ""
        
        for (let i = 0; i < exactlength; i++){
            let randIndex_1 = Math.floor(Math.random() * allowedCharacters.length)
            let randIndex_2 = Math.floor(Math.random() * allowedCharacters.length)
            generatedPassword_1 += allowedCharacters[randIndex_1]
            generatedPassword_2 += allowedCharacters[randIndex_2]
        }
        
        display_1.textContent = generatedPassword_1
        display_2.textContent = generatedPassword_2
        display_1.setAttribute('data-password', generatedPassword_1);
        display_2.setAttribute('data-password', generatedPassword_2);
    }
}

genBtn.addEventListener('click', handleButtonClick);
display_1.addEventListener('click', copyPasswordToClipboard);
display_2.addEventListener('click', copyPasswordToClipboard);

