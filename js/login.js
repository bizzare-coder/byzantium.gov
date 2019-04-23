function sendSigninData(){
    login = document.getElementsByName("login")[0].value;
    passw = document.getElementsByName("passw")[0].value
    email = document.getElementsByName("email")[0].value
    message = "login="+encodeURIComponent(login)+"&passw="+encodeURIComponent(passw)+"&email="+encodeURIComponent(email);
    xhr.open("POST", "php/register.php", false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(message);
    if(xhr.responseText != "") alert(xhr.responseText);
}