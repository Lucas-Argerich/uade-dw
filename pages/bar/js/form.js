function validateForm() {
    email = document.getElementById("email").value
    motivo = document.getElementById("motivo").value
    mensaje = document.getElementById("mensaje").value
    if(email === "" || motivo === "" || mensaje === "") {
        alert("Todas las areas de texto del formulario deben ser llenadas!")
        return false
    }
}