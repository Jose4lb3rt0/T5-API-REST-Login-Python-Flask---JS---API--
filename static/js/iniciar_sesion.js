document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("iniciarsesion-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita la recarga de la página al enviar el formulario

        // Obtén los valores del formulario
        var correo = document.getElementById("correo-ingresar").value;
        var contraseña = document.getElementById("contraseña-ingresar").value;

        // Envía la solicitud POST al servidor
        fetch("/iniciar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ correo: correo, contraseña: contraseña })
        })
        .then(response => {
            if (response.ok) {
                return response.json(); // Si la respuesta es OK, devuelve el JSON
            } else {
                throw new Error("Error al iniciar sesión");
            }
        })
        .then(data => {
            // Maneja los datos de la respuesta aquí
            console.log(data); // Muestra la respuesta en la consola por ahora
        })
        .catch(error => {
            console.error(error); // Maneja el error si ocurre
        });
    });
});