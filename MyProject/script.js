import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdsUDauoZ8zgEEz3eVl716Q5VhX9Q5vXg",
  authDomain: "myproject-a35fe.firebaseapp.com",
  projectId: "myproject-a35fe",
  storageBucket: "myproject-a35fe.appspot.com",
  messagingSenderId: "1026376707329",
  appId: "1:1026376707329:web:e2416985bebc298f783f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//contact form
var contactFormDb=firebase.database().ref('ContactForm');

document.getElementById('contactForm').addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault();
    var name=getElementVal('name')
    var email=getElementVal('email')
    var message=getElementVal('message')

    saveMessage(name,email,message);
    

}
const saveMessage=(name,email,message)=>{
    var newCF=contactFormDb.push()

    newCF.set({
        name:name,
        email:email,
        message:message,
    })

}

const getElementVal=(id)=>{
    return document.getElementById(id).value;
}


//SIGN UP FORM FROM LOGIC
const auth=getAuth();




window.register=function(e){
  e.preventDefault();
  var name= document.getElementById("name");
  var email= document.getElementById("email");
  var password = document.getElementById("password");

  console.log(name,email,password)

  var obj={
    name: name.value,
    email :email.value,
    password:password.value,
  }

  createUserWithEmailAndPassword(auth,obj.email,obj.password)
  .then(function(success){
    alert("signup successfull !")
  })
  .catch(function(error){
    alert("error"+error);
  })
  console.log(obj);
    
};


//LOGIN FORM

  window.login = function(e){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    e.preventDefault();
    var obj = {
        email : email.value,
        password : password.value,
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        alert("Login Successful!");
    })
    .catch(function(error){
        alert("Error" + error);
    })
    console.log(obj);
}
