const minName = 6
const minMessage = 8
const minTelefono = 4
const name = document.getElementById("name")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const mensaje = document.getElementById("mensaje")

document.getElementsByClassName("formulario")[0].addEventListener("submit", e=>{
    e.preventDefault ()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(name.value.length < minName)
        alert("El nombre no es válido")   
    if(!regexEmail.test(email.value))
        alert('El email no es válido')
    if(mensaje.value.length < minMessage)
        alert('El mensaje es demasiado corto')
    if(telefono.value.length < minTelefono)
        alert('El telefono es demasiado corto')
})

