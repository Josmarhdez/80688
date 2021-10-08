function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 

    if (usuario=="Usuario1" && password=="123456") { 
        alert("Exito");
        return true;
    } else{
        alert("Usuario incorrecto");
    }

} 