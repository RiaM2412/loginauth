
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB4t3ulszufSf8XegN2CTgOqGCuB-Rxm1k",
    authDomain: "form-validation-27e33.firebaseapp.com",
    projectId: "form-validation-27e33",
    storageBucket: "form-validation-27e33.appspot.com",
    messagingSenderId: "1072146800797",
    appId: "1:1072146800797:web:7dd3cdea2c4a54c62c7474",
    measurementId: "G-KNGJ73ZLSN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//reference messages collection
//var messagesRef = firebase.database().ref('messages');

//fireebase auth starts
// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in 
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
//firebase auth ends

document.getElementById('form-regi').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
 e.preventDefault();

 var name = getInputValue('username');
 var emailid= getInputValue('email');
 var password = getInputValue('password');

//save message

 saveMessage(username,email,password);
}
//function to get form value

function getInputValue(id){
    return document.getElementById(id).value;
}

//save message to firebase
 function saveMessage(username,email,password){
     //var newMessageRef =messagesRef.push();
     function newMessageRef.set({
         username: username,
         email: email,
         password: password
     });
 }