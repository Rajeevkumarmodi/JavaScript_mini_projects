const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById("copyBtn")


function generatePassword(passwordLength , upperLetterChrckbox , numberCheckbox , symbolCheckbox){

    const lowerLetters = "qwertyuiopasdfghjklzxcvbnm"
    const upperLetters = (upperLetterChrckbox)? "QWERTYUIOPASDFGHJKLZXCVBNM":upperLetterChrckbox
    const numbers = (numberCheckbox)?"1234567890":numberCheckbox
    const symbols = (symbolCheckbox)? "!@#$%^&*()-_=+" :symbolCheckbox
    passwordAllCharactes = upperLetters + lowerLetters + numbers + symbols ;
    let password = ''

    for(let i = 0; i < passwordLength; i++){
        password = password + passwordAllCharactes[Math.floor(Math.random()*passwordAllCharactes.length)]
    }

    return password
}

let range = document.getElementById('passwordRange')
let showLength = document.getElementById('passwordLength')

// password length

range.addEventListener('input',()=>{
    showLength.innerText = 'Password Length :- ' + range.value
})

// Generate button 

generateBtn.addEventListener('click',()=>{
    const passwordShow = document.getElementById('Password')

    let upperLetterChrckbox = document.getElementById('upperLetterChrckbox').checked
    let numberCheckbox = document.getElementById('numbersBox').checked
    let symbolCheckbox = document.getElementById('symbolCheckbox').checked
    
    let password = generatePassword(range.value , upperLetterChrckbox , numberCheckbox , symbolCheckbox)
    passwordShow.value = password

    // copy button

    copyBtn.innerText = 'Copy'

})

// Copy btn 

copyBtn.addEventListener('click',()=>{
    copyBtn.innerText = 'Copyed'
})