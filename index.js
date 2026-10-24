const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let genBtn = document.getElementById("gen-btn")
let display_1 = document.getElementById("pass-1")
let display_2 = document.getElementById("pass-2")

function handleButtonClick(){
    generatedPassword_1 = ""
    generatedPassword_2 = ""
    for (let i = 0; i < 15; i++){
        let randIndex_1 = Math.floor(Math.random() * characters.length)
        let randIndex_2 = Math.floor(Math.random() * characters.length)
        generatedPassword_1 += characters[randIndex_1]
        generatedPassword_2 += characters[randIndex_2]
    }
    display_1.textContent = generatedPassword_1
    display_2.textContent = generatedPassword_2
}

genBtn.addEventListener('click', handleButtonClick);

