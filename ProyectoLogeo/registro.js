const nombre = document.getElementById("usuario")
const contraseña = document.getElementById("password")

const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML=""
    
    if(nombre.value.length <6){
        warnings+= 'El usuario no es valido <br>'
        entrar = true
    }
    
    if(contraseña.value.length <6){
        warnings+= 'La contraseña no es valida <br>'
        entrar = true 
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = "enviado"
    }
    
})
