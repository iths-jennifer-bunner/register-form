let registerButton = document.querySelector('a')


function userName (){
    let p = document.querySelector('p.name')
    let userNameField = document.querySelector('.userName')

    if(userNameField.value == ''){
        userNameField.style.borderColor = 'red'
        p.innerText = 'Must contain atleast 3 characters!'
        p.style.color = 'red'
        return false
    }else if(userNameField.value.length < 3){
        userNameField.style.borderColor = 'red'
        p.innerText = 'Must contain atleast 3 characters!'
        p.style.color = 'red'
        return false
    }else{
        userNameField.style.borderColor = 'black'
        p.innerText = ''
    }
    return true
}

function email(email){
    let p = document.querySelector('p.mail')
    let emailField = document.querySelector('.email').value
    let border = document.querySelector('.email')
    let t = 1

    if(emailField == ''){
        border.style.borderColor = 'red'
        p.style.color = 'red'
        p.innerText = 'Must be a valid email!'
        return false
    }
    let res = emailField.split('@')
    if(emailField.split('@').length != 2){
        border.style.borderColor = 'red'
        p.style.color = 'red'
        p.innerText = 'Must be a valid email!'
        return false
    }
    let part1 = res[0]
    let part2 = res[1]
    if(part1.length == 0){
        border.style.borderColor = 'red'
        p.style.color = 'red'
        p.innerText = 'Must be a valid email!'
        return false
    }
    if(part1.split(' ').length > 2){
        border.style.borderColor = 'red'
        p.style.color = 'red'
        p.innerText = 'Must be a valid email!'
        return false
    }
    let dotsplit =part2.split('.')
    if(part2.split('.').length < 2){
        border.style.borderColor = 'red'
        p.style.color = 'red'
        p.innerText = 'Must be a valid email!'
        return false
    }
    if(dotsplit[0].length == 0){
        border.style.borderColor = 'red'
        p.style.color = 'red'
        p.innerText = 'Must be a valid email!'
        return false
    }
    if(dotsplit[1].length < 2 || dotsplit[1].length > 4){
        border.style.borderColor = 'red'
        p.style.color = 'red'
        p.innerText = 'Must be a valid email!'
        return false
    }
    if(t == 1){
        border.style.borderColor = 'black'
        p.innerText =''
    }
    return true
}  

function passWord(){
    let passWord = document.querySelector('.password')
    let p = document.querySelector('.passw1')
    let  smallCharacterExists = /[a-z]/g
    let bigCharacterExists = /[A-Z]/g
    let numberCharacterExists = /[0-9]/g

    if(passWord.value.match(smallCharacterExists)){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    if(passWord.value.match(bigCharacterExists)){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }
    else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    if(passWord.value.match(numberCharacterExists)){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    if(passWord.value.length >= 8){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    return true
}

function repeatPassword(){
    let passWord = document.querySelector('.repeatPassword')
    let p = document.querySelector('.passw2')
    let  smallCharacterExists = /[a-z]/g
    let bigCharacterExists = /[A-Z]/g
    let numberCharacterExists = /[0-9]/g

    if(passWord.value.match(smallCharacterExists)){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    if(passWord.value.match(bigCharacterExists)){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }
    else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    if(passWord.value.match(numberCharacterExists)){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    if(passWord.value.length >= 8){
        passWord.style.borderColor = 'black'
        p.innerText =''
    }else{
        p.style.color = 'red'
        passWord.style.borderColor = 'red'
        p.innerText ='Must be at least 8 characters long and contain at least one number and one lowercased letter'
    }
    return true
}

function validatePasswords(){
    let passwords = document.querySelector('.password')
    let words = document.querySelector('.repeatPassword')
    let p = document.querySelector('.passw2')
    //här vill vi jmfra om värdet i passwordfunktionerna matchar

    if(passwords.value == words.value){
        // passwords.style.borderColor = 'black'
        // words.style.borderColor = 'black'
        // p.innerText =''
        return true
    }else{
    p.style.color = 'red'
    words.style.borderColor = 'red'
    p.innerText = 'Both passwords do not match'
    return false
    }
}


function validating(){    
    let user = userName()
    let mail = email()
    let password = passWord()
    let repeat = repeatPassword()
    let validate = validatePasswords()
    let popup = document.querySelector('.popup')
    
    if(user == true && mail == true && password == true && repeat == true && validate == true){
        
    popup.style.display = 'block'
    setTimeout(function(){
        document.querySelector('.lds-ring').style.display = 'none'
        document.querySelector('.registered').innerText = 'You are registered'
        },1500)
    }else{
        popup.style.display = 'none'
    }
    
}

registerButton.addEventListener('click', validating)
