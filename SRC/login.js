const btnLogin = document.querySelector('.btnLogin-popup');
const cover_box = document.querySelector('.cover_box');
const login_link = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const form_box = document.querySelector('.form-box');

function activateCoverBox(){
    cover_box.classList.add('active');
    cover_box.classList.remove(form_box);
}

function desactivateCoverBox(){
    cover_box.classList.remove('active');
}

function activatePopup(){
if(cover_box.style.transform != 'scale(0)'){
   cover_box.style.transform = 'scale(0)';
}
else{
  cover_box.style.transform = 'scale(1)';

}}



function desactivatePopup(){
  cover_box.style.transform = 'scale(0)';
}

registerLink.addEventListener('click', activateCoverBox);
login_link.addEventListener('click', desactivateCoverBox);
btnLogin.addEventListener('click', activatePopup);
iconClose.addEventListener('click', desactivatePopup);

