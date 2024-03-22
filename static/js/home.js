const pageBox = document.querySelector('.page-box');
const Title = document.querySelector('.Title-text');
const Subtitle = document.querySelector('.Subtitle-text');
const SubtituloUsuario = document.querySelector('.Subtitle-text').innerHTML;

const btnNext = document.querySelector('.btn-next');
const btnSalir = document.querySelector('.btn-salir');

const InputCorreo = document.querySelector('.correo');
const InputPassword = document.querySelector('.contraseña');
const checkboxPass = document.querySelector('.checkbox-contraseña');
const btnBack = document.querySelector('.btn-back');

////////////////////////////// EVENTOS //////////////////////////////

btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-actu');
    setTimeout(() => InputCorreo.focus(), 500);
    Title.innerHTML = 'Actualizar Contraseña';
};
checkboxPass.onclick = () => {
    if(checkboxPass.checked) {
        InputPassword.type = 'text';
    }else{
        InputPassword.type = 'password';    
    }
};
btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-actu')
    Title.innerHTML = 'Bienvenido';
    Subtitle.innerHTML = SubtituloUsuario;
};