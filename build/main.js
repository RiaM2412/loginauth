
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optiona
  

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



  document.getElementById('form-regi').addEventListener('submit', submitForm);

  //submit form
  function submitForm(e){
  // e.preventDefault();
  
   var name = getInputValue('username');
   var emailid= getInputValue('email');
   var email=emailid.toString();
   var password = getInputValue('password');
  }
  function getInputValue(id){
    return document.getElementById(id).value;
  }
    
   
  
//reference messages collection
//var messagesRef = firebase.database().ref('messages');

//fireebase auth starts
firebase.auth().createUserWithEmailAndPassword(submitForm.email, submitForm.password)
  .then((submitForm) => {
    // Signed in 
    console.log('successfully created user id');
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('error creating the form');
    // ..
  });



//   firebase.auth().signInWithEmailAndPassword(submitForm.emailid, submitForm.password)
//   .then((submitForm) => {
//     // Signed in 
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });


//   firebase.auth().onAuthStateChanged((submitForm) => {
//     if (submitForm) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var uid = submitForm.name;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// s  
