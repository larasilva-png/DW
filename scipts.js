const form = document . getElementById('form')
const username = document . getElementById('username')
const email = document . getElementById('email')
const password = document . getElementById('password')
const passwordconfirmation = getElementById('passwordconfirmation')

form.addEventListener('submit' , (e) => {
    e.preventDefaul();
    checkInput();
})

function checkInputs(){
const usernameValue = username.value;
const emailvalue = email.value;
const passwordvalue = password.value;
const passwordconfirmationvalue = passwordconfirmation.value;
}

if(usernamevalue===''){
    setErrorfor(username, 'o nome do usuario e obrigatorio')
}else{
    setSucessfor(username)
}

function setErrorfor(input , message){
    const formcontrol = input.pranElement;
    const small = formcontrol . queryselctor('small')


small.innertext - message
formcontrol.className = 'form.control error'

}
function setSucessfor(input){
const formcontrol = input.pranElement;
formcontrol.className = 'form.control sucess'

}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
    }
    
