const pageBox = document.querySelector('.page-box');
const Title = document.querySelector('.Title-text');
const Subtitle = document.querySelector('.Subtitle-text');

    //Modulo Iniciar sesión - Correo Electrónico
    const InputEmail = document.querySelector('.correo-ingresar');
    const btnCrearCuenta = document.querySelector('.btn-crear-cuenta');
    const btnNext = document.querySelector('.btn-next');
    //Modulo Iniciar sesión - Contraseña
    const InputPassword = document.querySelector('.contraseña-ingresar');
    const btnBack = document.querySelector('.btn-back');
    const checkboxPass = document.querySelector('.checkbox-contraseña');
    const btnOlvideContraseña = document.querySelector('.btn-olvide-contraseña');
    const btnIniciarSesion = document.querySelector('.btn-iniciar-sesion');
    
    //Modulo Resgistrarse
    const InputNombreRegistrar = document.querySelector('.nombre-registrar');
    const InputEmailRegistrar = document.querySelector('.email-registrar');
    const InputContraseñaRegistrar = document.querySelector('.contraseña-registrar');
    const InputContraseñaRepetirRegistrar = document.querySelector('.contraseña-repetir-registrar');
    const btnBackRegistrar = document.querySelector('.btn-back-registrar');
    const btnRegistrar = document.querySelector('.btn-registrar');

    //Modulo Recuperar Contraseña ("¿Olvidaste la contraseña?")
    const InputEmailRecuperarContraseña = document.querySelector('.correo-recuperar-contraseña');
    const btnBackRecuperarContraseña = document.querySelector('.btn-back-recuperar-contraseña');
    const btnRecuperarContraseña = document.querySelector('.btn-recuperar-contraseña');
//


/*function desactivarCamposRequeridos() {
    document.querySelectorAll('.input-box input').forEach(input => {
        input.removeAttribute('required');
    });
}
function activarCamposRequeridos() {
    const inputs = document.querySelector('.page.active input');
    inputs.forEach(input => {
        input.setAttribute('required', true);
    });
}*/

    //Modulo Pagina Registro
    btnCrearCuenta.onclick = (e)=>{
        e.preventDefault();
        pageBox.classList.add('active-regi');
        setTimeout(() => InputNombreRegistrar.focus(), 500);
        Title.innerHTML='Registrate';
        Subtitle.innerHTML='¿No tienes una cuenta?';
    };
        //Retroceder
        btnBackRegistrar.onclick = (e) => {
            e.preventDefault();
            pageBox.classList.remove('active-regi')
            Title.innerHTML = 'Inicia sesión';
            Subtitle.innerHTML = 'Por favor inicia sesión para usar la plataforma';
            InputEmail.focus()
        };

    // Modulo Iniciar sesión - contraseña
    btnNext.onclick = (e) => {
        e.preventDefault();
        pageBox.classList.add('active-pass');
        setTimeout(() => InputPassword.focus(), 500);
        Title.innerHTML = 'Bienvenido';
        Subtitle.innerHTML = InputEmail.value;
    };
    //Mostrar contraseña
    checkboxPass.onclick = () => {
        if(checkboxPass.checked) {
            InputPassword.type = 'text';
        }else{
            InputPassword.type = 'password';    
        }
    };
        // Retroceder
        btnBack.onclick = (e) => {
            e.preventDefault();
            pageBox.classList.remove('active-pass')
            Title.innerHTML = 'Inicia sesión';
            Subtitle.innerHTML = 'Por favor inicia sesión para usar la plataforma';
            InputEmail.focus();
        };
    
    //Modulo Recuperar contraseña
    btnOlvideContraseña.onclick = (e) => {
        e.preventDefault();
        pageBox.classList.add('active-recupass');
        setTimeout(() => InputEmailRecuperarContraseña.focus(), 500);
        Title.innerHTML = 'Recuperar Contraseña';
        Subtitle.innerHTML = 'Ingresa el correo del cual deseas recuperar la contraseña';
    };
        //Retroceder
        btnBackRecuperarContraseña.onclick = (e) => {
            e.preventDefault();
            pageBox.classList.remove('active-recupass')
            Title.innerHTML = 'Inicia sesión';
            Subtitle.innerHTML = 'Por favor inicia sesión para usar la plataforma';
            InputEmail.focus()
        };