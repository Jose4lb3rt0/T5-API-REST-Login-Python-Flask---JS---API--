document.getElementById('iniciarsesion-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Obtiene los valores de correo electrónico y contraseña ingresados por el usuario
    const correo = document.querySelector('.correo-ingresar').value;
    const contraseña = document.querySelector('.contraseña-ingresar').value;

    // Realiza una solicitud POST al servidor para iniciar sesión
    fetch('/iniciar_sesion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            correo: correo,
            contraseña: contraseña
        })
    })
    .then(response => {
        if (response.redirected) {
            window.location.href = response.url;
        }
    })
    .catch(error => console.error('Error al iniciar sesión:', error));
});