const firebaseConfig = {
    apiKey: "AIzaSyBxbbtqSGietB38PflpuBobiY8p5VR2-zc",
    authDomain: "signup-form-f16ff.firebaseapp.com",
    projectId: "signup-form-f16ff",
    storageBucket: "signup-form-f16ff.appspot.com",
    messagingSenderId: "390664985962",
    appId: "1:390664985962:web:a8c3a4d8b63222ce821913"
};

const app=initializeApp(firebaseConfig);

const auth=firebase.auth()
const database=firebase.database()

function signup(){
    name=document.getElementById('name').value
    email=document.getElementById('email').value
    password=document.getElementById('password').value
    confirmpassword=document.getElementById('confirmpassword').value

    if(validate_email(email)==false){
        alert("email is not valid!")
        return;
    }

    if(validate_password(password)==false){
        alert("password length is less than 6")
        return;

    }

    if(validate_field(name)==false|| validate_field(email)==false||validate_password(password)==false||validate_field(confirmpassword)==false){
        alert("one or more fields are empty!!")
        return;
    }

    if(confirm_password(password,confirmpassword)==false){
        alert("your passwords are not matching!!")
        return;
    }
}

function validate_email(){
    exp=/^[^@]+@\w+(\.\w)+\w$/;
    if(exp.test(email)==true){
        return true
    }
    else{
        return false
    }
}
function validate_password(){
    if(password.length<6){
        return false;
    }
    else{
        return true;
    }
}
function validate_field(field){
    
    if(field.length<=0){
        return false;
    }
    else{
        return true;
    }
}

function confirmpassword(password1, password2){
    if(password1 == password2){
        return true;
    }
    else{
        return false;
    }

}