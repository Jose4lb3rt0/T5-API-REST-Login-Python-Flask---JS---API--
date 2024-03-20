document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const btnRegistrar = document.getElementById('btn-registrar');

    btnRegistrar.addEventListener('click', function(event) {
        event.preventDefault();
    
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const contraseña = document.getElementById('contraseña').value;
        const contraseñaRepetida = document.getElementById('contraseña-repetida').value;
    
        // Verificar si hay campos vacíos
        if (!nombre || !correo || !contraseña || !contraseñaRepetida) {
            alert('Por favor completa todos los campos.');
            return; // Detener el proceso de envío del formulario
        }

        if (contraseña !== contraseñaRepetida) {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        } else {
            console.log('Formulario enviado');
            console.log('Nombre:', nombre);
            console.log('Correo:', correo);
            console.log('Contraseña:', contraseña);
    
            // Enviar los datos al servidor Flask
            fetch('/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    correo: correo,
                    contraseña: contraseña
                })
            })
            .then(response => {
                if (response.ok) {
                    // Redirigir al usuario a la página home.html
                    window.location.href = '/home';
                }
            });
        }
    });
});
