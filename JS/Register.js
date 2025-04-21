    //  Geting IDs  //

const Username=document.getElementsByClassName('username-part')[0];
const Password=document.getElementsByClassName('password-part')[0];
const email=document.getElementsByClassName('email-part')[0];
const signUp=document.getElementsByClassName('sign-up-button')[0];
const checkbox=document.getElementsByClassName('form-check-input')[0];

signUp.addEventListener('click',function(){
    //  UserName Validations  //
    if (Username.value.trim() === '' || Username.value.length < 8) {
        Username.classList.add('error');
        Username.placeholder = 'Please enter atleast 8 characters';
        Username.value='';
        return
    } else {
        Username.classList.remove('error');
        Username.placeholder = 'Username';
    }
    //  Password Validations  //
    if (Password.value.trim() === '' || Password.value.length < 10) {
        Password.classList.add('error');
        Password.placeholder = 'Please enter atleast 10 characters';
        Password.value='';
        return
    } else {
        Password.classList.remove('error');
        Password.placeholder = 'Password';
    }
    //  Email Validations  //
    if (email.value.trim() === '' || email.value.length < 14) {
        email.classList.add('error');
        email.placeholder = 'Please enter a valid email address';
        email.value='';
        return
    } else {
        email.classList.remove('error');
        email.placeholder = 'Email';
    }
})
    //  CheckBox Validations  //

checkbox.addEventListener('change', function() {
    signUp.disabled = !this.checked;
});
    //  EMail Part  //

function redirectToLogin() {
    window.location.href = `login.html`;}