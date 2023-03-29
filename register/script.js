




//setting up the firebase
const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyBTLFk-VyGkXisPdrJA5A034vcKdE-rJ-Y",
  authDomain: "register-4d1c4.firebaseapp.com",
  projectId: "register-4d1c4",
  storageBucket: "register-4d1c4.appspot.com",
  messagingSenderId: "446422373220",
  appId: "1:446422373220:web:c3ba6373f2dd2d73d7e071"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


//register function

const register= ()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("you are signed up!")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    cosole.log(error.message);
    
  });

}