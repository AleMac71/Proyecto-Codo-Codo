
function validarFormulario(event) {
    event.preventDefault();

    const email = document.getElementById('mail').value;
    const password = document.getElementById('contrasena').value;


    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }


    if (!email.includes('@')) {
        alert('Por favor, ingrese un email válido');
        return;
    }


    const caracterPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!caracterPassword.test(password)) {
        alert('La contraseña debe tener al menos 8 caracteres, incluyendo un carácter especial, una letra mayúscula, números y letras minúsculas.');
        return;
    }

    alert('Operación exitosa. Bienvenido.');
}


