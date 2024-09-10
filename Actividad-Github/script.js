const estilo1 = document.getElementById('estilo1');
const altoContraste = document.getElementById('altoContraste');

estilo1.addEventListener('click', (event) => {
    event.preventDefault()
    document.body.classList.toggle('estilo1');
    document.body.classList.remove('altoContraste');
});


altoContraste.addEventListener('click', (event) => {
    event.preventDefault()
    document.body.classList.toggle('altoContraste');
    document.body.classList.remove('estilo1');
});


document.getElementById('enviar').addEventListener('click', (event) => {
    event.preventDefault()
    //validar campo nombre
    let entradaNombre = document.getElementById('nombre').value
    let errorNombre = document.getElementById('nombreError')

    if (entradaNombre.trim() === '') {
        errorNombre.textContent = 'Por favor, introduzca su nombre'
        errorNombre.classList.add('error-message')    
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }
    //validar apellido
    let entradaApellido = document.getElementById('apellido').value
    let errorApellido = document.getElementById('apellidoError')

    if (entradaApellido.trim() === '') {
        errorApellido.textContent = 'Por favor, introduzca su apellido'
        errorApellido.classList.add('error-message')    
    } else {
        errorApellido.textContent = ''
        errorApellido.classList.remove('error-message')
    }
    
    //validar correo electrónico
    let emailEntrada = document.getElementById('email').value
    let emailError = document.getElementById('emailError')
    let emailPattern =   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailPattern.test(emailEntrada)) {
        emailError.textContent = 'Por favor, introduzca un email válido'
        emailError.classList.add('error-message')    
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')    
    }

    //validar fecha
    let entradaFecha = document.getElementById('fecha').value
    let errorFecha = document.getElementById('fechaError')

    if (entradaFecha == '' || entradaFecha>"2010-12-31" || entradaFecha<"1910-01-01") {
        errorFecha.textContent = 'Por favor, introduzca una fecha correcta'
        errorFecha.classList.add('error-message')    
    } else {
        errorFecha.textContent = ''
        errorFecha.classList.remove('error-message')
    }

    //Envio del formulario si todos los campos son válidos
    if (!errorNombre.textContent && !emailError.textContent && !errorApellido.textContent && !errorFecha.textContent) {      
        alert('El formulario se ha enviado con exito')
        document.getElementById('formulario').reset();
    }
})
