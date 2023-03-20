const firebaseConfig = {
    apiKey: "AIzaSyBt4xZRztfnCQIKZnozpayf31fl3NjFDJ0",
    authDomain: "contactform-6b252.firebaseapp.com",
    databaseURL: "https://contactform-6b252-default-rtdb.firebaseio.com",
    projectId: "contactform-6b252",
    storageBucket: "contactform-6b252.appspot.com",
    messagingSenderId: "776533989657",
    appId: "1:776533989657:web:e8927bc122cabf5ba00d88",
    measurementId: "G-CL8TKW0R91"
  };

//   initializing firebase
firebaseConfig.initializeApp(firebaseConfig);

// reference the database
var contactFormDb= firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();
    var name=getelementVal('name')
    var email=getelementVal('email')
    var message=getelementVal('message')

}
const getelementVal=(id)=>{
    return document.getElementById(id).value;
    
}
