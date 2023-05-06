function checkPassword(inputtxt){
    var passw=  /^[A-Za-z]\w{7,50}$/;
    if(inputtxt.value.match(passw)) 
    { 
    alert('Correct, try another...')
    return true;
    }
    else
    { 
    alert('Wrong...!Enter only letter and numbers only from 7 to 50 characters')
    return false;
    }
}

function checkEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
    alert("Valid email address!");
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    return false;
    }
}
