const firebaseConfig = {
    apiKey: "AIzaSyDGMNuhpl6XyIxPZIogEW4XA-GCbOkxdog",
    authDomain: "contactform-93a8c.firebaseapp.com",
    databaseURL: "https://contactform-93a8c-default-rtdb.firebaseio.com",
    projectId: "contactform-93a8c",
    storageBucket: "contactform-93a8c.appspot.com",
    messagingSenderId: "479513521711",
    appId: "1:479513521711:web:0abac56c39a12b107360da"
  };

// initialize the app
firebase.initializeApp(firebaseConfig);

// Reference to the database
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